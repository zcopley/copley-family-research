---
title: GEMINI.md — AI Agent Instructions
draft: true
---

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
- **Build Command:** `npm run build` — this includes the required `-d .` flag. Do NOT use `npx quartz build` alone; it produces empty output (no content pages).
- **Deployment:** `peaceiris/actions-gh-pages@v4` in `.github/workflows/deploy.yml` — deploys on every push to `main`.
- **Site Config:** Ensure `baseUrl` in `quartz.config.ts` does NOT include the `https://` protocol prefix, as Quartz handles this automatically.
- **SSH:** GitHub pushes use `~/.ssh/id_rsa`. Run `ssh-add ~/.ssh/id_rsa` if the key drops from agent. If "Host key verification failed", run `ssh-keygen -R <offending-ip>` to clear stale IP entries from `~/.ssh/known_hosts`.

## Historical Research Context
- **Immigration:** Michael and Patrick Copley arrived in NY on the *Kutusoff* in 1837, and on the *Powhatan* in 1838.
- **West Virginia:** The family settled in Lewis County (Cove Lick) in 1843 via the Hoffman land deed.
- **Oil Strike:** The "Copley No. 1" strike occurred in 1900 on the family farm.

## Irish Origins Research (Phase 2G — Active)

Tom and Steve Copley (G25) conducted research into the English/Irish origins of Michael Copley Sr. (G23). Full details in `Topics/Captain John Copley Research.md`.

**Tom's hypothesis (preferred):** Descent from Captain John Copley, **younger son of Thomas Copley Jr.** of Bredon's Norton, Worcestershire — documented moving to Ireland in 1657. (Corrected April 2026: son of Thomas Jr., not grandson of Thomas Sr.) Four primary sources: 1634 Visitation (names him, "in Italy"), 1642 Parliament petition, 1651 Youghal council book, 1665 *Mettallum Martis*.

**Steve's hypothesis (disputed by Tom):** Descent from a son of Christopher Copley of Wadsworth, West Yorkshire. Tom corrected April 2026: Christopher and Mary Jones were actually married (his 2nd marriage); they had only one documented child — daughter Francis, who married Thomas Coote. No son documented. If a son existed, he was by another woman.

**Critical AI hallucination — do not repeat:** AI claimed Captain John had Arigna ironworks destroyed in 1641. Impossible — he was in England until 1657. The 1641 Depositions contain no Copley entry.

**Primary source searches completed (April 18, 2026):**
- Tithe Applotment Books (Roscommon): no Copley found — AI's Kilmacough/Kilgefin/1824 claim is 🚫 fabricated
- Griffith's Valuation (Roscommon): 4 Copleys in Termonbeg, Kilkeevin Parish (Protestant), 1857: Bridget (tenant of Sandford), John (sub-tenant of Bridget), Richard (Sandford), Thomas (Sandford). No Catholic Copley in any Roscommon land record.

**PRIMARY BREAKTHROUGH (April 18, 2026):** Catholic Copely family confirmed in Fairymount, Kilgefin parish:
- William Copely (b.~1794, d. Q4 1864, age 70), farmer — Catholic
- Son Michael Copely (b.~1834) married Bridget Gibbons (Ballincurry, Kilgefin), Catholic ceremony, May 16 1864
- William ~19 years older than Michael Copley Sr. (b.~1813, Lewis County WV) — likely older brother or father
- Spelling: Catholic branch = "Copely"; Protestant Kilkeevin branch = "Copley"
- Q6 re-opened: "William went to Australia" tradition may be wrong — this William stayed in Roscommon

**New top priority:** Establish relationship between William Copely of Fairymount and Michael Copley Sr. of Lewis County WV.

## Changelog
A human-readable `CHANGELOG.md` now exists at the vault root. Update it at the start of each new session.

## Last Known Handoff
Refer to `AGENT_HANDOFF_PHASE_2G.md` for the latest session summary.
