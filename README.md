# Copley Family Research

A genealogical research wiki documenting the Copley family from their origins in **County Roscommon, Ireland** (~1813) through six generations of American life. Maintained by Zach Copley (G26).

**Live site:** https://zcopley.github.io/copley-family-research/

---

## What's Here

This repository is both the content vault and the build system for the site. All `.md` files in the root and subdirectories are published pages. Key content areas:

| Directory | Contents |
|-----------|----------|
| `People/` | Individual profiles — 70+ people across G23–G28 |
| `Places/` | Location pages (Lewis County WV, Kilgefin Ireland, etc.) |
| `Topics/` | Thematic research pages (Irish immigration, oil strike, Irish origins) |
| `References/` | Source documents and social media profiles |
| `static/images/` | Portraits, census records, land deeds, ship manifests |

Notable top-level pages: `How to Read This Research.md` (reader orientation), `Family Tree.md` (branch-by-branch relationship hub), `The Copley Family Narrative.md` (prose history), `Sources and Evidence Index.md`, `Search Index.md`, `CHANGELOG.md`.

---

## Tech Stack

- **[Quartz v4](https://quartz.jzhao.xyz/)** — static site generator for Obsidian-flavored Markdown
- **GitHub Actions** — builds and deploys on every push to `main`
- **GitHub Pages** — serves the `gh-pages` branch

---

## Local Development

Requires **Node 22** (the GitHub Actions runner uses `ubuntu-latest` with Node 22).

```bash
npm ci
npm run build        # builds to ./public
```

> The local system may have an older Node version. If `npm run build` fails, push to `main` and let CI handle it — the site deploys automatically within ~2 minutes.

---

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which:
1. Installs dependencies (`npm ci`)
2. Builds the site (`npm run build`)
3. Pushes `./public` to the `gh-pages` branch via `peaceiris/actions-gh-pages@v4`

---

## Contributing / Editing

Content lives in plain Markdown with YAML frontmatter. See `CLAUDE.md` for full conventions (generation labels, tag taxonomy, WikiLink syntax, person page structure, etc.).

If you're an AI agent working on this repository, read `CLAUDE.md` first, then the most recent `AGENT_HANDOFF_PHASE_*.md` file.
