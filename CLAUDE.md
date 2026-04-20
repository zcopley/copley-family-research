---
title: CLAUDE.md — AI Agent Instructions
draft: true
---

# CLAUDE.md — Copley Family Research Vault

This file gives AI agents instant orientation for working on this project. Read it before doing anything else.

## Project Overview

A genealogical research wiki for the Copley family, spanning Irish immigrant ancestors (c.1813) through G28 great-great-grandchildren. Maintained by **Zach Copley** (zcopley@gmail.com), who is a G26 descendant in the Tom Copley line.

- **Live site:** https://zcopley.github.io/copley-family-research/
- **Repo:** https://github.com/zcopley/copley-family-research
- **Local clone:** `/mnt/c/Users/zach/Projects/copley-family-research`
- **Stack:** Quartz v4 (static site generator), Obsidian-flavored Markdown, GitHub Actions CI/CD
- **Deployment:** Every push to `main` auto-builds (Node 22) and deploys to `gh-pages` via `.github/workflows/deploy.yml`

---

## Repository Structure

```
/                          ← vault root (all .md files here are published)
├── People/                ← individual person profiles
├── Places/                ← place pages (Lewis County, Baltimore, Ireland, etc.)
├── Topics/                ← thematic event/research pages
├── References/            ← source documents and social media profiles
├── quartz/                ← Quartz framework (do not edit)
├── Family Tree.md         ← Mermaid diagram, all generations
├── Home.md                ← narrative landing page
├── index.md               ← site homepage / navigation
├── Search Index.md        ← comprehensive name/date/place/keyword index
├── People Directory.md    ← person index
├── Phase 1 Questions and Answers.md  ← open research gaps
├── The Copley Family Narrative.md    ← family history prose
├── Topics and Themes.md   ← thematic overview
├── quartz.config.ts       ← Quartz site config (fonts, colors, plugins)
├── quartz.layout.ts       ← Quartz layout config
├── AGENT_HANDOFF_PHASE_1E.md  ← prior phase context
├── AGENT_HANDOFF_PHASE_2A.md  ← prior phase context
├── AGENT_HANDOFF_PHASE_2G.md  ← prior phase context
├── AGENT_HANDOFF_PHASE_2H.md  ← prior phase context
├── AGENT_HANDOFF_PHASE_2I.md  ← current phase context
├── CHANGELOG.md               ← human-readable changelog (all phases)
└── CLAUDE.md              ← this file
```

---

## Generation Labels

The family uses a consistent generation numbering system — always use these labels in tags and prose:

| Label | Who | Key Figures |
|-------|-----|-------------|
| G23 | Irish immigrant generation | Michael Copley Sr. (b.1813), Ann Munday (b.1823) |
| G23/G24 | Lewis County core line | John Copley (1843–1925), Mary Ellen Dolan (1855–1901) |
| G24 | John & Mary Ellen's children | Nelle, Michael Joseph, Thomas E., Mary Flesch, Anne |
| G25 | Their children | Stephen Michael Copley, Thomas Partlow Copley ("Tom"), Sarah Sardo Arena, Mary Sardo Ruland |
| G26 | Their children | Zach, Erin, Charlie (Tom line); Mike, Sara, Phil, Paul, Peter, Susan, Stephen J., Amy (Stephen line) |
| G27 | Grandchildren | Wyatt, Augie, Evy, Sam, Lauren, Bobby Cox, Georgia, William Geist, etc. |
| G28 | Great-grandchildren | Rowan Meier, Elizabeth Meier, Arena/Ruland G28 group |

---

## Content Conventions

### Frontmatter (required on every page)
```yaml
---
title: Full Name or Page Title
aliases:           # add for nicknames, maiden names, alternate spellings
  - Nickname
  - Alternate Name
date: YYYY-MM-DD
tags:
  - "#copley-family"
  - "#generation-G26"    # use correct generation label
  - "#tom-line"          # or "#stephen-line", "#sardo-branch", etc.
---
```

### Tags in use
- `#copley-family` — on every page
- `#generation-G23` through `#generation-G28`
- `#tom-line` — Thomas Partlow Copley descendants
- `#stephen-line` — Stephen Michael Copley descendants
- `#sardo-branch` — Nelle Copley Sardo descendants
- `#spouse` — non-Copley spouses with their own pages
- `#irish-ancestors`, `#immigration`, `#west-virginia`, `#lewis-county`
- `#chemist`, `#physicist`, `#academia`, `#marketing`, `#nursing`
- `#handoff`, `#index`, `#genealogy`

### Linking
- Always use `[[WikiLink]]` syntax for internal links
- Use `[[Full Page Title|Display Text]]` when display text should differ
- Person pages live in `People/` — link as `[[People/Full Name|Display Name]]` from outside that folder
- Place pages live in `Places/` — link as `[[Places/Place Name|Display Name]]`
- Topic pages live in `Topics/` — link as `[[Topics/Topic Name|Display Name]]`

### Changelog entries
- **Always include WikiLinks** to every page that was added or changed in a CHANGELOG.md entry
- Mention section names in prose when a specific section changed (e.g., "Section 13 of [[Topics/Captain John Copley Research|Captain John Copley Research]]")
- Prefer `[[People/Full Name|Display Name]]` over bare names so readers can navigate directly from the changelog

### Person page structure
```markdown
# Full Name (birth–death or b. YYYY)

📊 View [[Family Tree]] for visual context.

## Biographical Profile
[bullet-point facts with **bold** field labels]

## Family Relationships
[parents, grandparents, siblings, spouse, children with wikilinks]

## Notable Life Events (if applicable)

## Related Topic Pages (if applicable)

## Social Media & Online Presence (if applicable)

## Research Gaps
[numbered list of unconfirmed or missing facts]

## Acquisition Strategy (if applicable)
[where to look for missing records]

## Sources
[numbered list]
```

---

## Family Tree (`Family Tree.md`)

- Mermaid `graph TD` diagram with ~70+ nodes
- Marriage connectors use diamond nodes: `PERSON --- M1{"◇"}:::marriage` then `SPOUSE --- M1` then `M1 --- CHILD`
- **Critical:** Both spouses must be connected to the marriage diamond or they render as floating orphan nodes (this was fixed in Phase 2A — don't reintroduce the bug)
- Color classes: `irish`, `g23`, `g24sibling`, `sardoBranch`, `stephenLine`, `tomLine`, `grandchild`, `greatgrand`, `spouse`, `marriage`

---

## Key Facts About the User (Zach Copley)

- Zach is a G26 descendant — Tom Copley's son
- He is the primary source for living family (G26–G28) biographical details
- He may not know much about the Stephen line cousins
- He may have family documents to upload for the Stephen line
- Always ask Zach to verify facts about living family before publishing

---

## The Two Main Family Branches

**Tom Line** (Thomas Partlow Copley, b.1944):
- Children: Zach (b.1969, Cedar Rapids IA), Erin (Berkeley CA), Charlie (Napa CA)
- Zach's wife: Wendolyn "Wendy" Thorpe Copley — published bento book author (Tuttle Publishing)
- Erin's husband: Bryan Bird (note: Bryan not Brian)
- Charlie's wife: Audrey

**Stephen Line** (Stephen Michael Copley, b.1936):
- 8 children: Michael (b.1959), Sara, Philip, Paul, Peter, Susan, Stephen J. (d.2023), Amy (b.1990)
- G26 Stephen line profiles are now built out (Phases 2B–2E); some remain thin on detail

---

## Irish Origins Research (Phase 2G — Active)

Tom Copley (G25) and Steve Copley (G25) conducted extensive research (Feb–March 2026) into the English/Irish origins of Michael Copley Sr. (G23). The full analysis is in `Topics/Captain John Copley Research.md`.

**Tom's hypothesis:** Michael Sr. descends from Captain John Copley, **younger son of Thomas Copley Jr. of Bredon's Norton, Worcestershire** — a 17th-century ironworks entrepreneur who moved to Ireland in 1657. (Corrected April 2026: Captain John was son of Thomas Jr., not grandson of Thomas Sr.)

**Steve's hypothesis (disputed by Tom):** Descent from a son of Christopher Copley (Wadsworth, West Yorkshire) and Mary Jones — but Tom corrected this April 2026: Christopher and Mary Jones were actually married (Christopher's 2nd marriage); they had only one documented child, a daughter Francis who married Thomas Coote. No son documented. If a son existed, he was by another woman.

**Four verified primary sources for Captain John:**
1. Visitations of Worcestershire (1634) — names "Captain John Copley," records him "in Italy" (both 1569 and 1634 Visitations available online as PDFs)
2. *Journal of the House of Commons* (1642) — John Copley petitioned Parliament re: Ireland
3. *Council Book of Youghal* (1651) — "Captain Copley" as Clerk of the Market
4. Dud Dudley, *Mettallum Martis* (1665) — Kingswood ironworks 1656–57; moved to Ireland 1657

**Alternate name spellings (with Irish brogue):** "Coplet" and "Coplay" — watch for these variants in records. Catholic branch uses "Copely"; Protestant branch uses "Copley". **The "Copley Name from Castlerea" report was compiled by Mary Skelly** (not "Shelly").

**Key AI hallucination to remember:** AI claimed Captain John had Arigna ironworks destroyed in 1641. This is chronologically impossible — *Mettallum Martis* confirms he was in England until 1657. A 1641 Depositions specialist confirmed no Copley deposition exists. Do not repeat this claim.

**Primary source searches completed (April 18, 2026):**
- Tithe Applotment Books (all Roscommon): **no Copley found** — AI's Kilmacough/Kilgefin/1824 claim is 🚫 fabricated
- Griffith's Valuation (all Roscommon): **4 Copleys found** — Bridget, John, Richard, Thomas — all in Termonbeg townland, Kilkeevin Parish (Protestant), tenants of Sandford estate, 1857. John is sub-tenant of Bridget (family relationship). No Catholic Copley found anywhere in Roscommon.

**PRIMARY BREAKTHROUGH (April 18, 2026):** A Catholic Copely family confirmed in **Fairymount, Kilgefin parish**:
- **William Copely** (b.~1794, d. Q4 1864, age 70) — farmer, Fairymount — Catholic
- **Michael Copely** (b.~1834) — his son, married Bridget Gibbons (Ballincurry, Kilgefin) May 16, 1864, Roman Catholic ceremony
- William Copely is ~19 years older than Michael Copley Sr. (b.~1813, Lewis County WV) — likely older brother or possibly father
- **Spelling note:** Catholic branch uses "Copely"; Protestant Kilkeevin branch uses "Copley"
- Q6 re-opened: family tradition says Michael Sr.'s brother William "went to Australia" — but this William stayed in Roscommon until 1864

**New top research priority:** Determine relationship between William Copely of Fairymount (b.~1794) and Michael Copley Sr. (b.~1813). Look for William's baptism record or earlier family documentation in Kilgefin/Roscommon.

---

## Build & Deploy

```bash
# CI/CD handles this automatically on every push to main
# To build locally (requires Node 22):
npm ci
npx quartz build

# Manual deploy (if needed):
npx quartz sync
```

The GitHub Actions workflow (`.github/workflows/deploy.yml`) runs on every push to `main`, builds with Node 22, and pushes `public/` to `gh-pages`. The local system has Node 10 — do not attempt local builds.

---

## Open Research Gaps

See `Phase 1 Questions and Answers.md` for the full list. Key unresolved questions:

| # | Topic | Status |
|---|-------|--------|
| Q6 | William Copley's Australian fate | No documentary confirmation |
| Q19 | Michael Copley Sr. naturalization record | Not found |
| Q20 | John & Mary Ellen marriage date/place | Inferred only |
| Q22 | Dolan family reconstruction | Sparse |
| Q23 | "Tom" at Chancellorsville identity | No documentary chain |
| Q28 | John Copley's Civil War service | No conclusive proof |
| Q33–35 | Living family biographical sketches | Incomplete (Stephen line) |
| Q45 | Nelle's birth year (1896 vs 1897) | Working conclusion: 1897 |

---

## What Not To Do

- Do not edit files in `quartz/` — that's the framework
- Do not commit `.abacus.donotdelete` — it's environment metadata
- Do not attempt `npm run build` locally — Node version is too old (system has v10, need v22)
- Do not add unsourced biographical facts about living people without flagging them as unverified
- Do not use "Brian Bird" — it's Bryan Bird
- Do not conflate Thomas E. Copley (1892–1968, G24) with Thomas Partlow Copley (b.1944, G25)
- Do not conflate Michael Copley Sr. (1813–1897) with Michael Joseph Copley (1898–1988) with Michael Copley (b.1959)

---

## Build & Deployment (Critical)

- **Build command:** `npm run build` — do NOT use `npx quartz build` alone (missing `-d .` flag produces empty output)
- **Deploy:** `peaceiris/actions-gh-pages@v4` in `.github/workflows/deploy.yml`
- **SSH for push:** uses `~/.ssh/id_rsa`; run `ssh-add ~/.ssh/id_rsa` if key drops from agent
- **Known hosts issue:** if push fails with "Host key verification failed", run `ssh-keygen -R <ip>` to remove stale IP-based entries

---

## Handoff Documents

For prior session context, read in order:
1. `AGENT_HANDOFF_PHASE_1E.md` — Topics section creation
2. `AGENT_HANDOFF_PHASE_2A.md` — Site improvements, Mermaid fix, search index, Tom line profiles
3. `AGENT_HANDOFF_PHASE_2B.md` — Appendices bio-sketches, images extracted, G26 Stephen line profiles rebuilt
4. `AGENT_HANDOFF_PHASE_2C.md` — Site config fixes, social media corrections
5. `AGENT_HANDOFF_PHASE_2D.md` — Image catalog complete, Stephen line profiles rebuilt
6. `AGENT_HANDOFF_PHASE_2E.md` — Stubs cleared, deploy fixed, SSH documented
7. `AGENT_HANDOFF_PHASE_2F.md` — GEDCOM data incorporated, Family Tree Georgia/Susan bug fixed, Benjamin Partlow page created
8. `AGENT_HANDOFF_PHASE_2G.md` — Captain John Copley research page, descent narrative, Tom vs. Steve hypothesis, CHANGELOG created
9. `AGENT_HANDOFF_PHASE_2H.md` — Wendy middle name fix (Lorelei); Tom's corrections: Mary Skelly, Captain John as son of Thomas Jr., 1634 Visitation as 4th source (Italy), William/Challoner from Sussex, Raleigh-Hoo connection, Southwell cousinage, Christopher/Mary Jones married (one daughter Francis), alternate spellings Coplet/Coplay
10. `AGENT_HANDOFF_PHASE_2I.md` — 1634 Visitation of Worcestershire analyzed; Captain John's wife confirmed as Margaret Newport; heraldic arms documented; Thomas Copley Sr./Jr. family structure fully extracted; three new person pages created (Captain John, Thomas Sr., Thomas Jr.)
