import { promises as fs } from "node:fs"
import path from "node:path"
import process from "node:process"

const root = process.cwd()
const publicDir = path.join(root, "public")
const basePath = "/copley-family-research"
const baselinePath = path.join(root, "scripts", "internal-link-baseline.txt")
const knownFileExtension = /\.[a-z\d]{1,8}$/i
const attributePattern =
  /<(?:a|audio|iframe|img|link|script|source|video)\b[^>]*?\b(?:href|src)=["']([^"']+)["'][^>]*>/gi
const idPattern = /\bid=["']([^"']+)["']/gi

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name)
      return entry.isDirectory() ? walk(fullPath) : [fullPath]
    }),
  )
  return files.flat()
}

function shouldSkip(rawUrl) {
  return (
    rawUrl === "" ||
    rawUrl.startsWith("#") ||
    rawUrl.startsWith("//") ||
    /^[a-z][a-z\d+.-]*:/i.test(rawUrl)
  )
}

function candidatePaths(urlPath) {
  const decoded = decodeURIComponent(urlPath)
  const withoutBase = decoded === basePath ? "/" : decoded.replace(`${basePath}/`, "/")
  const relative = withoutBase.replace(/^\/+/, "")
  const base = path.join(publicDir, relative)

  if (relative === "" || relative.endsWith("/")) {
    return [path.join(base, "index.html")]
  }

  if (knownFileExtension.test(relative)) {
    return [base]
  }

  return [base, `${base}.html`, path.join(base, "index.html")]
}

async function firstExisting(paths) {
  for (const candidate of paths) {
    try {
      const stat = await fs.stat(candidate)
      if (stat.isFile()) return candidate
    } catch {
      // Try the next Quartz output form.
    }
  }
  return null
}

async function idsFor(filePath, cache) {
  if (!cache.has(filePath)) {
    const html = await fs.readFile(filePath, "utf8")
    const ids = new Set()
    for (const match of html.matchAll(idPattern)) {
      ids.add(match[1])
    }
    cache.set(filePath, ids)
  }
  return cache.get(filePath)
}

async function main() {
  try {
    const stat = await fs.stat(publicDir)
    if (!stat.isDirectory()) throw new Error()
  } catch {
    console.error("Missing public/. Run `npm run build` before `npm run check:links`.")
    process.exit(1)
  }

  const htmlFiles = (await walk(publicDir)).filter((file) => file.endsWith(".html"))
  const failures = new Set()
  const idCache = new Map()
  let checked = 0

  for (const sourceFile of htmlFiles) {
    const html = await fs.readFile(sourceFile, "utf8")
    const article = html.match(/<article\b[^>]*>([\s\S]*?)<\/article>/i)?.[1]
    if (!article) continue
    const sourceRelative = path.relative(publicDir, sourceFile)
    const sourceUrl = new URL(
      `${basePath}/${sourceRelative.replaceAll(path.sep, "/")}`,
      "https://local.invalid/",
    )

    for (const match of article.matchAll(attributePattern)) {
      const rawUrl = match[1].trim()
      if (shouldSkip(rawUrl)) continue

      let resolved
      try {
        resolved = new URL(rawUrl, sourceUrl)
      } catch {
        failures.add(`${sourceRelative}: invalid URL ${rawUrl}`)
        continue
      }

      const targetFile = await firstExisting(candidatePaths(resolved.pathname))
      checked += 1

      if (!targetFile) {
        failures.add(`${sourceRelative}: missing target ${rawUrl}`)
        continue
      }

      if (resolved.hash && targetFile.endsWith(".html")) {
        const anchor = decodeURIComponent(resolved.hash.slice(1))
        const ids = await idsFor(targetFile, idCache)
        if (!ids.has(anchor)) {
          failures.add(`${sourceRelative}: missing anchor ${rawUrl}`)
        }
      }
    }
  }

  const current = [...failures].sort()
  if (process.argv.includes("--update-baseline")) {
    await fs.writeFile(baselinePath, current.length > 0 ? `${current.join("\n")}\n` : "", "utf8")
    console.log(`Updated internal-link baseline with ${current.length} known issue(s).`)
    return
  }

  let baseline = new Set()
  try {
    const stored = await fs.readFile(baselinePath, "utf8")
    baseline = new Set(stored.split("\n").filter(Boolean))
  } catch {
    // Without a baseline, every current issue is new and must fail.
  }

  const newFailures = current.filter((failure) => !baseline.has(failure))
  const resolvedFailures = [...baseline].filter((failure) => !failures.has(failure))

  if (newFailures.length > 0) {
    console.error(`Internal link check failed with ${newFailures.length} new issue(s):`)
    for (const failure of newFailures) console.error(`- ${failure}`)
    console.error(`Known baseline issues still present: ${current.length - newFailures.length}`)
    process.exit(1)
  }

  console.log(
    `Internal link check passed: ${checked} authored local links/assets across ${htmlFiles.length} pages.`,
  )
  if (current.length > 0) console.log(`Known baseline issues still present: ${current.length}`)
  if (resolvedFailures.length > 0) {
    console.log(`Baseline issues now resolved: ${resolvedFailures.length}; refresh with --update-baseline.`)
  }
}

await main()
