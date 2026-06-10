import { promises as fs } from "node:fs"
import path from "node:path"
import process from "node:process"

const root = process.cwd()

const staticPages = [
  {
    emitted: path.join(root, "public", "family-timeline", "index"),
    pretty: path.join(root, "public", "family-timeline", "index.html"),
  },
]

for (const page of staticPages) {
  try {
    await fs.copyFile(page.emitted, page.pretty)
  } catch (error) {
    if (error?.code === "ENOENT") {
      console.warn(`Skipped static page finalization; missing ${path.relative(root, page.emitted)}`)
      continue
    }

    throw error
  }
}
