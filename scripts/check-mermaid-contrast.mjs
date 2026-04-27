import fs from "node:fs";
import path from "node:path";

const ignoredDirs = new Set([
  ".git",
  "node_modules",
  "public",
  ".quartz-cache",
]);

function walk(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ignoredDirs.has(entry.name)) continue;

    const filePath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(filePath));
    } else if (entry.isFile() && filePath.endsWith(".md")) {
      files.push(filePath);
    }
  }
  return files;
}

function lineNumberAt(source, index) {
  return source.slice(0, index).split("\n").length;
}

const violations = [];
const mermaidBlock = /```mermaid\n([\s\S]*?)```/g;

for (const file of walk(".")) {
  const source = fs.readFileSync(file, "utf8");
  let match;
  let blockNumber = 0;

  while ((match = mermaidBlock.exec(source)) !== null) {
    blockNumber += 1;
    const block = match[1];
    const blockStartLine = lineNumberAt(source, match.index);

    block.split("\n").forEach((line, index) => {
      const trimmed = line.trim();
      const stylesNode = /^style\s+\S+\s+/.test(trimmed);
      const definesClass = /^classDef\s+\S+\s+/.test(trimmed);

      if (
        (stylesNode || definesClass) &&
        trimmed.includes("fill:") &&
        !trimmed.includes("color:")
      ) {
        violations.push({
          file,
          block: blockNumber,
          line: blockStartLine + index + 1,
          rule: trimmed,
        });
      }
    });
  }
}

if (violations.length > 0) {
  console.error("Mermaid contrast check failed.");
  console.error(
    "Every Mermaid style/classDef that sets fill must also set explicit text color.",
  );
  console.error("");

  for (const violation of violations) {
    console.error(
      `${violation.file}:${violation.line} (Mermaid block ${violation.block}) ${violation.rule}`,
    );
  }

  process.exit(1);
}

console.log("Mermaid contrast check passed.");
