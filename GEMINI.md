# Gemini Agent Protocol — Copley Family Research Vault

This document provides foundational mandates for AI agents working on the Copley Family Research Vault. These instructions take absolute precedence over general defaults.

## Project Vision & Integrity
- **Objective:** Maintain a high-quality genealogical research wiki built with Quartz v4, documenting the Copley family from 1813 (G23) to the present (G28+).
- **Core Principle:** Prioritize primary sources (PDF appendices, historical deeds) over social media "likely matches." Verify all facts about living people with the user (Zach Copley).

## Content Conventions
### 1. Generation Labels
Always use the following tags and prose labels:
- `#generation-G23` (immigrants, Michael Sr. & Ann)
- `#generation-G24` (John Copley & siblings)
- `#generation-G25` (John's children)
- `#generation-G26` (Grandchildren: Zach, Stephen line cousins)
- `#generation-G27` (Great-grandchildren: Wyatt, Augie, Evy, Sam, etc.)
- `#generation-G28` (Great-great-grandchildren)

### 2. Linking & Structure
- Use `[[WikiLink]]` syntax for all internal links.
- Person pages reside in `People/`, Places in `Places/`, Topics in `Topics/`.
- Maintain the `Search Index.md` with every new profile or key fact added.

### 3. Frontmatter (Required)
```yaml
---
title: Full Name or Page Title
aliases:
  - Nickname
  - Maiden Name
date: YYYY-MM-DD
tags:
  - "#copley-family"
  - "#generation-GXX"
  - "#branch-line"
---
```

## Known Pitfalls & "Same-Name" Mismatches
Do NOT link the following individuals to these incorrect social media profiles:
- **Charles H. Copley (b. 1985):** Avoid `@Charles_Copley` on Twitter/X; it is a mismatch.
- **Peter Copley (b. 1966):** Avoid `@petergcopley` on Twitter/X; he is a British composer, not the family member.
- **William Stephen Geist (b. 2023):** Do not link to journalist "Willie Geist" (mismatch).
- **Thomas Partlow Copley (b. 1944):** Do not conflate with his grandfather Thomas E. Copley (1892–1968).

## Development & Deployment
- **Node Version:** Requires Node v22+.
- **Build Command:** `npm run build`
- **Deployment:** Handled by GitHub Actions (`.github/workflows/deploy.yml`) on push to `main`.
- **Manual Recovery:** If the `gh-pages` branch falls out of sync or the site breaks, use this command to force-push the `public` folder:
  ```bash
  git subtree split --prefix public -b tmp-gh-pages && git push origin tmp-gh-pages:gh-pages --force && git branch -D tmp-gh-pages
  ```
- **Site Config:** Ensure `baseUrl` in `quartz.config.ts` does NOT include the `https://` protocol prefix, as Quartz handles this automatically.

## Historical Research Context
- **Immigration:** Michael and Patrick Copley arrived in NY on the *Kutusoff* in 1837.
- **West Virginia:** The family settled in Lewis County (Cove Lick) in 1843.
- **Oil Strike:** The "Copley No. 1" strike occurred in 1900 on the family farm.

## Last Known Handoff
Refer to `AGENT_HANDOFF_PHASE_2C.md` for the latest session summary.
