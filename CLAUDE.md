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
├── .agents/               ← agent-only working notes, hidden from site
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
├── .agents/AGENT_RESUME.md     ← current operational checkpoint
├── .agents/_AGENT_HANDOFF_PHASE_1E.md  ← prior phase context
├── .agents/_AGENT_HANDOFF_PHASE_2A.md  ← prior phase context
├── .agents/_AGENT_HANDOFF_PHASE_2G.md  ← prior phase context
├── .agents/_AGENT_HANDOFF_PHASE_2H.md  ← prior phase context
├── .agents/_AGENT_HANDOFF_PHASE_2I.md  ← current phase context
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

### Mermaid Diagrams — Visual Storytelling (Best Practice)

**When to add diagrams:** Liberally and frequently. Mermaid diagrams dramatically improve readability for genealogical, timeline, research methodology, and evidence evaluation content. Add them whenever:

- **Timelines:** Birth → death → migration → settlement (see `Topics/Murray Settlement.md` for example)
- **Family relationships:** Marriage networks, intermarriage patterns, estate-mate clustering (see family relationship network diagram in `Topics/Murray Settlement.md`)
- **Research workflows:** Investigation phases, evidence types, verdict pathways (see `.agents/_AGENT_HANDOFF_PHASE_2M.md`)
- **Evidence evaluation:** What's verified vs. plausible vs. unresolved (see `.agents/_AGENT_HANDOFF_PHASE_2M.md` evidence dashboard)
- **Question hierarchies:** Research questions and their relationships (see RQ-M1 through RQ-M8 priority map in `Topics/Murray Settlement.md`)
- **Decision trees:** Multiple hypotheses with evidence branches (see RQ-M5 evidence flowchart in `People/Ann Copley.md`)
- **Records availability:** Gaps, timelines, coverage (see Kinawley records timeline in `RQ-M5-PHASE-2-FINDINGS.md`)
- **Geographic relationships:** Townland clustering, parish relationships, settlement areas

**Diagram maintenance rule:** When new information changes family relationships, chronology, evidence status, source coverage, or research priorities, update every affected Mermaid diagram in the same edit. Do not update prose only. Check at minimum:
- `Family Tree.md`
- `Topics/Bredon Descent.md`
- `Topics/Murray Settlement.md`
- `Topics/Murray Settlement Research Roadmap.md`
- `People/Ann Copley.md`
- `RQ-M5-PHASE-2-FINDINGS.md`
- Any source note or topic page touched by the new evidence

If a diagram cannot be updated because the relationship is still uncertain, add a clearly labeled placeholder/gap node or a note explaining what remains unresolved.

**Diagram contrast rule:** Mermaid node text must remain readable against the node fill in both light and dark site themes. Every Mermaid `classDef` or `style` rule that sets `fill` must also set explicit `color`; include `stroke` whenever practical. Use high-contrast pairs such as dark fills with white text or pale fills with near-black text. If using `subgraph`, explicitly set subgraph `style` with both `fill` and `color`; otherwise Quartz/Mermaid theme defaults can make labels unreadable. Run `npm run check:mermaid` after Mermaid edits; CI enforces this rule.

**Diagram types most useful for this project:**
- `timeline` — emigration waves, settlement formation, research phases
- `graph TB/LR` — family networks, evidence chains, research methodologies, hierarchies
- `flowchart` — decision paths, verdict evaluation, evidence branches

**Best practices:**
- Keep labels concise (2–4 words max)
- Use color fills to group related items: 
  - Green (`fill:#c8e6c9,stroke:#2e7d32,color:#102411`) = verified/confirmed
  - Red (`fill:#ffcdd2,stroke:#c62828,color:#2b0707`) = not found/contradiction
  - Yellow (`fill:#fff9c4,stroke:#f9a825,color:#2a2100`) = pending/in progress
  - Blue (`fill:#bbdefb,stroke:#1565c0,color:#0d1b2a`) = conclusion/verdict
  - Orange (`fill:#fff3e0,stroke:#ef6c00,color:#1f1300`) = plausible/contextual
- Add diagrams early in sections, before detailed prose — let visuals set up the narrative
- Label verification status (✅ Verified, ⚠️ Plausible, ❌ Not found, ❓ Unresolved)
- One diagram per major concept (not too many, but don't leave important relationships undescribed)

**Comprehensive guide:** See [[MERMAID_DIAGRAM_GUIDE|MERMAID_DIAGRAM_GUIDE.md]] for detailed templates, color conventions, best practices, and examples.

**Examples from this vault:**
- `Topics/Murray Settlement.md` — timeline, family network, RQ priority map, evidence flowchart
- `People/Ann Copley.md` — evidence balance chart for RQ-M5
- `RQ-M5-PHASE-2-FINDINGS.md` — records searched visualization, records gap timeline
- `.agents/_AGENT_HANDOFF_PHASE_2M.md` — research workflow, evidence dashboard

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
- Griffith's Valuation (all Roscommon): **4 Copleys found** — Bridget, John, Richard, Thomas — all in Termon Beg townland, Kilkeevin Parish (Protestant), tenants of Sandford estate, 1857. John is sub-tenant of Bridget (family relationship). No Catholic Copley found anywhere in Roscommon.

**PRIMARY BREAKTHROUGH (April 18, 2026):** A Catholic Copely family confirmed in **Fairymount, Kilgefin parish**:
- **William Copely** (b.~1794, d. Q4 1864, age 70) — farmer, Fairymount — Catholic
- **Michael Copely** (b.~1834) — his son, married Bridget Gibbons (Ballincurry, Kilgefin) May 16, 1864, Roman Catholic ceremony
- William Copely is ~19 years older than Michael Copley Sr. (b.~1813, Lewis County WV) — likely older brother or possibly father
- **Spelling note:** Catholic branch uses "Copely"; Protestant Kilkeevin branch uses "Copley"
- Q6 re-opened: family tradition says Michael Sr.'s brother William "went to Australia" — but this William stayed in Roscommon until 1864

**New top research priority:** Determine relationship between William Copely of Fairymount (b.~1794) and Michael Copley Sr. (b.~1813). Look for William's baptism record or earlier family documentation in Kilgefin/Roscommon.

---

## Iowa Copley Family Connection (Phase 2L — April 2026)

**New person page:** `[[People/Mary Copely Giblin|Mary Copely Giblin]]`

- **Born:** 1814, Tully townland, Kilcorkey Civil Parish, County Roscommon
- **Death:** 27 October 1884 (age 69–70), Westside, Crawford County, Iowa
- **Burial:** Saint Ann's Cemetery, Vail, Crawford County, Iowa
- **Assessment:** Very likely **Michael Copley Sr.'s sister** — born one year after him (c.1813), same "Copely" spelling, same Roscommon parish cluster, same emigration era (1830s–1840s)
- **Personal significance:** Zach Copley (G26) relocated to Iowa in 2025 with his family; his wife's family is from Iowa. An ancestral line is now documented in the same state.
- **Implication:** The Roscommon Copely cluster dispersed to **multiple American destinations** (WV and Iowa), not just Lewis County — suggests organized chain migration network with branches in different regions

---

## Kilgefin Parish Details (Phase 2L — April 2026)

Research into Kilgefin parish (the home parish of the Murray Settlement emigrants) has yielded:

| Fact | Detail | Source |
|---|---|---|
| **Parish formal name** | "Ballagh (aka Kilgefin)" | Ancestry forum, "Hanley," 2004 |
| **Church location** | Ballagh townland, adjoining SE border of Ballincurry | Ancestry forum, "Hanley," 2004 |
| **Graveyard** | Cartron (Old Glebe) townland, ~1 mile NW of Ballincurry, ~2 miles N of Kilroosky | Ancestry forum, "Hanley," 2004 |
| **LDS microfilm 989747** | Catholic parochial records: Cloontuskert/Kilgefin/Curraghroe, **1865–1881** | FamilySearch / Family History Library |

**Note on LDS microfilm 989747:** High-priority research target. Although the 1865 start date postdates the Copley emigration (~1837–38) by ~28 years, it covers the same community and may document surviving family members (siblings, cousins) who can be traced back to the emigrant generation. Search for Copley/Copely, Murray, Dolan, Gillooly, Hanley entries.

## Iowa Copley Line Extended: 20th Century Descendants (April 22, 2026)

**New pages:** `[[People/Merton Dale Copley|Merton Dale Copley]]`, `[[People/Stephen Donald Copley|Stephen Donald Copley]]`

**Updated page:** `[[People/Mary Copely Giblin|Mary Copely Giblin]]`

Mary Copely Giblin's family line has been documented through five+ generations:
- **Mary Copely Giblin** (b. 1814, Ireland; d. 1884, Crawford County, Iowa)
- **One of her six children** (John, Thomas, Martin, Michael, Mary, or Catharine Giblin; 1832–1925)
- **[[People/Stephen Donald Copley|Stephen Donald Copley]]** (b. ~1880–1895; married Effie Grace Coe; carries Copley surname, suggesting mother's maiden name connection)
- **Two documented children:**
  - **[[People/Merton Dale Copley|Merton Dale Copley]]** (b. 30 May 1911, Crawford County, Iowa; d. 1978)
  - **[[People/Fern Loretta Copley MayBee|Fern Loretta Copley MayBee]]** (b. 26 Dec 1913, Manila, Crawford County, Iowa; d. 27 Aug 1997, Council Bluffs, Iowa)
- **Fern's children:** Richard Charles MayBee (b. 1934, d. 2004), Gerald E MayBee (b. 1935, d. 1996)

**Geographic continuity:** Both Merton and Fern born in Crawford County, Iowa — the **same county where Mary settled (1845+) and died (1884)**. This confirms the Iowa Copley branch persisted in the same region for 70+ years (1814–1914+) with documented family continuity across five generations.

**Mitchellville Cemetery:** Cemetery records indicate Copley family stones (names: A.B., George B., Lavonne, Nellie V. Copley) — potential additional descendants needing verification and genealogical linkage to Mary's line.

---

## The Murray Settlement (Phase 2L — Active Research)

Tom Copley's hypothesis: the Murray/Irish Settlement in Lewis County, WV was not a random cluster of individual immigrants but a **coordinated community transplant** — a Roscommon neighborhood (centered on Kilgefin parish) that organized itself to relocate collectively and reconstitute its social world in America.

### Physical and Organizational Context

| Fact | Detail | Verification Target |
|---|---|---|
| **Church name** | St. Michael's Church ("Little Cathedral of the Wilderness"), Cove Lick area | Diocese of Wheeling-Charleston archive |
| **1849 land donation** | 100 acres donated to Roman Catholic Diocese of Richmond | Diocesan land records |
| **Bishop** | Richard Vincent Whelan, Diocese of Richmond (later Wheeling, est. 1850) | Published diocesan history |
| **Labor driver** | Staunton-Parkersburg Turnpike construction (not B&O Railroad) | WV State Archives; road contractor records |
| **Settlement cluster** | Southwestern Lewis County: Camden, Cove Lick, Loveberry | Matches Copley Hoffman deed location |

### Documented Settlement Families

✅ **VERIFIED via Griffith's Valuation (1857):**
- **Copleys** — Michael Sr. + Patrick; **likely among the earliest Roscommon arrivals** (arrived ~1837–38); brig *Kutusoff* 1837, ship *Powhatan* Aug 20 1838
- **Dolans** — Elizabeth Mullooly Dolan (b. May 1829, County Roscommon); married Michael Patrick Dolan (b. 1824, Cork); 10 Dolan records in Roscommon; **Edward Dolan documented on Sandford estate in Ballindrumlea**
- **Murrays** — Eponymous settlement family; **confirmed residents of Kilgefin and Kilkeevin parishes**; **Patrick Murray (Kilgefin), John Murray (Kilgefin), and multiple Murrays on Sandford estate (Kilkeevin)** — primary source documentation of Roscommon origins
- **Hanleys** — **BREAKTHROUGH (April 22, 2026):** Verified in both Kilgefin and Kilkeevin parishes; **Peter Hanley documented in Ballindrumlea under Sandford estate** — **exact same townland and landlord as Murrays, Dolans, and Copleys**. **Additional finding:** Hanleys in Fairymount under Anne Lyster (same townland and landlord as William Copely of Fairymount, the remaining Catholic Copely in Roscommon) — the Hanleys were direct neighbors of the Catholic Copely branch. Bridget Copley (Michael Sr.'s sister) married a Hanley — this was not a random match but a marriage between families who were already neighbors and estate-mates in Roscommon
- **Hannons** — **BREAKTHROUGH (April 22, 2026):** Verified in Kilkeevin parish; **Thomas Hannon documented on Sandford estate in Longford** — same estate as settlement nucleus. Catherine "Kitty" Copley married a Hannon — estate-mate marriage reproduced in Lewis County
- **Giloolys** — Connected settlement family; **Bridget "Bitty" Copley Gillooly** (Ann's daughter) married into this family; documented in Lewis County records; **no Griffith's Valuation entries found in Kilgefin/Kilkeevin, suggesting either different Roscommon parish origin or marriage-connection outside settlement cluster**
- **Mulrooneys, Mahons, Reynolds** — Other suspected settlement families, not yet individually profiled or searched in Griffith's Valuation

### Ann Munday / Murray Question (RQ-M5)

Tom Copley notes "Munday" and "Murray" are phonetically similar. If Ann's surname is a transcription of "Murray," it would place Michael Copley Sr. **inside the Murray family network through marriage** — not merely as a neighbor. This is the single most leveraged open question in the Murray Settlement investigation and directly tests whether Michael Sr. arrived as part of the Murray anchor-family chain or independently.

### Research Focus

Full research page with 8 formal research questions (RQ-M1 through RQ-M8), 5-tier strategy, and 16 specific actions: see `[[Topics/Murray Settlement|Murray Settlement]]`.

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
| RQ-M5 | Which Kinawley Murray household was Ann "Munday" Copley's family? | Critical — RQ-M5 now treats Murray as Ann's likely original Irish surname |
| RQ-M1–M8 | Murray Settlement research questions | 8 formal questions; see `[[Topics/Murray Settlement]]` |
| Murray ID | Who were the Murray anchor family? | Central to settlement hypothesis; LDS microfilm 989747 promising |

---

## Active Research Hypotheses to Watch For

**The Crypto-Catholic Hypothesis (April 2026 — Tom Copley)**

Tom proposes that some or all Protestant Copleys (Bredon, Woolbedding lines) may have been "crypto-Catholics" — practicing Catholicism in private while conforming to Protestantism publicly. See `[[Topics/Copley Family Catholicism|Copley Family Catholicism]]` for full details.

**As you research, actively flag evidence that:**

✅ **Supports the hypothesis:**
- Recusancy records (England, 1550–1700) listing Copley surname
- Wills containing Catholic language, bequests, or mass requests
- Priest-harboring records; hidden chapel evidence
- Correspondence expressing Catholic sympathies
- Evidence of children sent abroad for education (possibly Catholic schools)
- Donations to Catholic causes
- Marriages to Catholics or Catholic families
- Contemporary accusations of Copley Catholic leanings
- Estate records showing interaction with known Catholic networks (Southwells, Bedingfields, etc.)

🚫 **Contradicts the hypothesis:**
- Evidence of genuine Protestant religious practice or theological writing by Woolbedding Copleys
- Anti-Catholic activities (not mere passive conformity)
- Disinheritance of Catholic family members (suggesting real religious conflict)
- Evidence that Lewis County Catholicism was adopted from outside, not inherited
- Records of Woolbedding Copleys holding Protestant church offices
- Theological writing defending Protestantism

❓ **Requires clarification:**
- Exact relationship between Woolbedding Copleys and Southwell family
- Whether Copleys appear on lists of English Catholics who conformed
- Religious practice of intermediate generations (1700s–early 1800s)
- Connection of William Copely of Fairymount (b. ~1794, Catholic) to Woolbedding line

---

## Murray Deed Search — Phase 2N (April 24, 2026)

**Objective:** Locate Lewis County (WV) deed records showing Murray family land purchases 1825–1855 to establish whether Murrays arrived in the settlement area *before* the 1843 Copley/Hoffman deed (which would confirm the "anchor family" hypothesis).

**Progress to Date:**

✅ **Index Entries Located via FamilySearch:**
- **1826 Murray/Fish** — Index page 39, early Lewis County deed book (FamilySearch DGS 008293302, Image 17, ARK `/ark:/61903/1:1:6X4N-WJ51`)
- **1833 John Murray** — Index entry confirmed (FamilySearch DGS 008293302, Image 24)

⏳ **Deed Text Pending:**
- Actual deed pages for both entries still being located in FamilySearch collection DGS 008293301 (Lewis. Deed Books 1808–1902, 680 images)
- Collection is organized reverse-chronologically; earliest deed books likely in images 500–680
- Page-to-image offset varies by section and must be determined empirically

**Next Steps:**
1. Navigate DGS 008293301 to locate page 39 (1826 deed)
2. Extract grantor/grantee, property description, location (Cove Lick area?), consideration
3. Locate and extract 1833 John Murray deed
4. Compare transaction dates and property locations to 1843 Copley/Hoffman deed

**Key Finding Threshold:**
- If both Murray deeds predate 1843 AND are in Cove Lick/Camden/Loveberry area → **Strong evidence Murrays arrived first and anchored the settlement**
- If deeds post-1843 or different area → Complicates anchor family hypothesis

**Detailed Research Brief:** See [[RQ-M1-LEWIS-COUNTY-DEED-SEARCH|RQ-M1 Lewis County Deed Search]] for FamilySearch technical details, navigation strategy, and required data format for deed records.

---

## Tithe Applotment Books Search & RQ-M5 Refinement — Phase 2N (April 25, 2026)

**Objective:** Test whether Ann Munday's surname is a transcription of "Murray" by searching indexed Tithe Applotment Books (1805-1837) for evidence of either surname in Kinawley parish, Fermanagh.

**Result:** **CLOSED - INCONCLUSIVE** — Database coverage gap, not null evidence

**Critical Finding:**
- NAI Tithe Applotment Books and Ancestry.com Collection #1270 were both searched
- **Kinawley parish is NOT indexed in either database** — all "No Results" are coverage gaps
- Ancestry exact-surname results: Munday has 11 all-Ireland entries, 0 in Kinawley, 0 in Fermanagh; Murray has 3 Fermanagh entries, 0 in Kinawley
- Munday is confirmed as a real Irish surname, not an inherent transcription artifact

**Implications for RQ-M5:**
- Munday could be Ann's genuine surname *or* a transcription of "Murray" — both remain plausible
- The hypothesis is **still open** pending unindexed Kinawley records and Lewis County evidence
- Indexed Tithe databases are exhausted for this question

**Highest-Priority Next Action:**
Contact **PRONI** for Kinawley parish material in the Fermanagh Tithe Applotment Books, TAB/5 series; then run a Lewis County WV census/deed/church FAN sweep for independent Munday/Monday households.

**Detailed Findings:** See [[RQ-M5-TITHE-APPLOTMENT-SEARCH|RQ-M5 Tithe Applotment Books Search]] for full search results, database coverage map, and revised priority actions.

## RQ-M5 Resolution — Ann Munday / Murray (April 25, 2026)

**Result:** **RESOLVED FOR WORKING GENEALOGY** — Ann "Munday" was almost certainly Ann Murray.

**Critical Evidence:**
- Ask About Ireland / Griffith's Valuation found **14 Murray occupiers** in Kinawley parish, County Fermanagh, and **0 Munday entries** in Kinawley or all Fermanagh
- Variant names do not place a Munday family in Kinawley: Mundy appears in Cleenish/Killesher; Monday appears once in Cleenish
- FamilySearch U.S. Census searches found **0 independent Munday households** in Lewis County WV, 1840-1860
- NAI and Ancestry Tithe searches are inconclusive only because Kinawley is not indexed

**Working Conclusion:**
Treat "Murray" as Ann's likely original Irish surname and "Munday" as the received American-family spelling caused by phonetic transcription, clerical error, or oral-family transmission.

**Next Research Focus:**
Identify Ann's Murray father. Start with the Kinawley Griffith male heads: Patrick, Peter, Edward, James, Michael, and John Murray. Then transcribe the Lewis County John Murray deeds from 1826 and 1833 and search direct church/passenger/marriage records.

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

These files are repo-only working notes. Quartz ignores them, so they do not appear on the published site.

For prior session context, read in order:
0. `.agents/AGENT_RESUME.md` — current operational checkpoint
1. `.agents/_AGENT_HANDOFF_PHASE_1E.md` — Topics section creation
2. `.agents/_AGENT_HANDOFF_PHASE_2A.md` — Site improvements, Mermaid fix, search index, Tom line profiles
3. `.agents/_AGENT_HANDOFF_PHASE_2B.md` — Appendices bio-sketches, images extracted, G26 Stephen line profiles rebuilt
4. `.agents/_AGENT_HANDOFF_PHASE_2C.md` — Site config fixes, social media corrections
5. `.agents/_AGENT_HANDOFF_PHASE_2D.md` — Image catalog complete, Stephen line profiles rebuilt
6. `.agents/_AGENT_HANDOFF_PHASE_2E.md` — Stubs cleared, deploy fixed, SSH documented
7. `.agents/_AGENT_HANDOFF_PHASE_2F.md` — GEDCOM data incorporated, Family Tree Georgia/Susan bug fixed, Benjamin Partlow page created
8. `.agents/_AGENT_HANDOFF_PHASE_2G.md` — Captain John Copley research page, descent narrative, Tom vs. Steve hypothesis, CHANGELOG created
9. `.agents/_AGENT_HANDOFF_PHASE_2H.md` — Wendy middle name fix (Lorelei); Tom's corrections: Mary Skelly, Captain John as son of Thomas Jr., 1634 Visitation as 4th source (Italy), William/Challoner from Sussex, Raleigh-Hoo connection, Southwell cousinage, Christopher/Mary Jones married (one daughter Francis), alternate spellings Coplet/Coplay
10. `.agents/_AGENT_HANDOFF_PHASE_2I.md` — 1634 Visitation of Worcestershire analyzed; Captain John's wife confirmed as Margaret Newport; heraldic arms documented; Thomas Copley Sr./Jr. family structure fully extracted; three new person pages created (Captain John, Thomas Sr., Thomas Jr.)
11. `.agents/_AGENT_HANDOFF_PHASE_2J.md` — Tom's corrections (Termon Beg spelling, William/Bennett verified, Thomas recusant relationship, Mary Skelly attribution); Iowa discovery: Mary Copely Giblin (1814–1884)
12. `.agents/_AGENT_HANDOFF_PHASE_2L.md` — Murray Settlement research page, Ancestry forum integration, Kilgefin parish details, LDS microfilm 989747, St. Michael's Church, Staunton-Parkersburg Turnpike
13. `.agents/_AGENT_HANDOFF_PHASE_2M.md` — RQ-M5 "Munday vs. Murray" investigation: current Griffith's Valuation analysis shows 0 Munday entries in Kinawley/all Fermanagh and 14 Murray occupiers in Kinawley; research workflow and verdict pathways documented
14. **Phase 2N (April 24, 2026):** Murray deed search — Index entries located for 1826 Murray/Fish and 1833 John Murray in Lewis County; FamilySearch navigation mapped; detailed deed search strategy documented in `[[RQ-M1-LEWIS-COUNTY-DEED-SEARCH|RQ-M1 deed research page]]`

## Session Closeout

Before ending a work session, update `.agents/AGENT_RESUME.md` so it reflects:
- what was completed
- the current goal
- the next step
- any files touched
- any unresolved questions
