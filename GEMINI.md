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
- After `npm run build`, run `npm run check:links`. The generated-site checker fails on broken links not already recorded in `scripts/internal-link-baseline.txt`.
- Fix legacy baseline issues incrementally. Use `npm run check:links:update` only after reviewing the baseline diff; do not use it to suppress new failures.
- **Changelog rule:** Every `CHANGELOG.md` entry must include WikiLinks to every page added or changed. Use `[[People/Full Name|Display Name]]`, `[[Topics/Page|Display Name]]`, etc. Mention specific sections by name in prose when only a section changed.

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

## Active Research Hypotheses — Watch For Evidence

**The Crypto-Catholic Hypothesis (April 2026 — Tom Copley)**

Tom proposes that Protestant Copleys (Bredon, Woolbedding) may have practiced Catholicism privately while conforming to Protestantism publicly. See `[[Topics/Copley Family Catholicism|Copley Family Catholicism]]`.

**Evidence markers to actively flag:**

✅ **Supports:** Recusancy records, Catholic wills/bequests, priest-harboring, Catholic sympathies in correspondence, children sent abroad for education, donations to Catholic causes, marriages to Catholics, Catholic network interaction

🚫 **Contradicts:** Genuine Protestant practice/theology, anti-Catholic activities, disinheritance of Catholics, outside-origin Lewis County Catholicism, Protestant church offices, Protestant theological writing

❓ **Needs clarification:** Woolbedding-Southwell relationship, conforming Catholics in England, 1700s religious practice, William Copely of Fairymount origins

**Michael Copley Sr. Parentage Hypothesis (May 2026 — Tom email lead)**

Tom Copley's May 2026 email archive raises the unresolved possibility that **John Copley** and **Sarah Dolan** of Kilgefin / Roscommon were Michael Copley Sr.'s parents. Treat this as a live proof target, not an established relationship.

**Highest-value proof path:** Lewis County probate, chancery, estate, heirship, and oil-title files after Michael's January 1897 death, especially any filings citing a family Bible. Also build [[People/Bridget Copley Reynolds|Bridget Copley Reynolds]] forward to test whether a Copley family Bible, transcript, or inherited correspondence survives in that line.

Current probate boundary: Michael's Appraisement Book 11 p. 59 is found at Film 825091 / DGS 7618832 image 60 and names John Copley Executor but no parents. Order Book 1-A p. 45, Settlement Book 34 p. 176, and Probate Record P 4/155 are not online / FamilySearch-cataloged in checked paths. Use the Lewis County Clerk first: Rebecca Carder, 110 Center Avenue, Weston, WV 26452, direct phone 304-269-8215, email `lewiscountyclerk@lewiscountywv.org`; estate matters are by appointment only.

**Partlow Revolutionary Line**

The Frank / Nollie Franklin Partlow and Alice / Mary Alice Rude identity problem is now resolved for project purposes by `References/Partlow Rude Online Identity Chain.md`. The web chain uses 1900-1950 census records, Ray Partlow's 1934 Indiana marriage record naming parents Frank Partlow and Alice Rude, Find a Grave / obituary evidence, and FamilySearch-linked records to prove Marion Elizabeth Partlow's parentage. The original 1880 census image is found at `References/1880 Marion McDonald Partlow Household.md`, confirming Nollie Frank as son of Marion Partlow. The original 1850 / 1860 census images are found at `References/1850 and 1860 John Halleck Partlow Household.md`, confirming Marion / Marion M. as child of John H. / Lydia Partlow. `References/1883 Perrin Marion Partlow Biography.md` corrects the old 1888-history lead: Perrin 1883 supports John H. -> Jacob but does not mention Benjamin. `References/Jacob Partlow Clark County Probate Will Lead.md` preserves a derivative lead to Jacob's 1867 will / 1868 probate, but the original will and probate packet are still needed. `References/Rappahannock Partlow Chancery Case 1842-002.md` is the controlling corrective source for the Benjamin question: the complete 69-image file names Benjamin Partlow's eight child / heir lines, distributes the estate in eight shares, and omits Jacob / Jacob Newton / Nute Partlow throughout. Do not state Benjamin as Marion's proven ancestor. The original / reconstructed Clark County marriage return remains unlocated online, but it is now an optional ceremony-detail target rather than the identity-control target. Do not repeat generic FamilySearch indexed searches, generic 1850 / 1860 / 1880 / 1900 census searches, broad Ancestry searches, broad Marshall-newspaper searches, Clerk / Marshall Library lookup prompts for Partlow/Rude, Rappahannock images 5-69, broad Jacob / Benjamin web searches, or the old 1888 history task. The active path is to obtain Jacob Partlow's original Clark County will / probate packet, then corroborate Mary Halleck / Isaac Partlow and retrieve the original Jacob Partlow / Polly Abrams Indiana marriage register.

---

## Known Pitfalls & "Same-Name" Mismatches
Do NOT link the following individuals to these incorrect social media profiles:
- **Charles H. Copley (b. 1985):** Avoid `@Charles_Copley` on Twitter/X; it is a mismatch.
- **Peter Copley (b. 1966):** Avoid `@petergcopley` on Twitter/X; he is a British composer, not the family member.
- **William Stephen Geist (b. 2023):** Do not link to journalist "Willie Geist" (mismatch).
- **Thomas Partlow Copley (b. 1944):** Do not conflate with his grandfather Thomas E. Copley (1892–1968).
- **John Copley + Sarah Dolan parentage:** Do not state that they were Michael Copley Sr.'s parents as fact. Tom Copley's May 2026 emails preserve this as an unresolved research lead, not proof.

## AI-Forwarded Family Emails & Source Leads
- Treat family emails that forward AI research sessions as research leads, not proof, unless they include an original record image, archive citation, transcript, or firsthand family testimony.
- Preserve new lead sets in `References/` with explicit evidence cautions before spreading them into narrative pages.
- Current example: `References/Thomas Copley May 2026 Email Leads.md` preserves Tom Copley's May 7-8, 2026 emails about the unresolved John Copley + Sarah Dolan parentage hypothesis and the possible Bridget-line family Bible / Lewis County probate lead; browser-readable transcripts are in `References/`, and the original zip and `.eml` files are published under `static/sources/tom-emails/`.
- When a source-lead note changes research priorities, update the affected person/place/topic pages, `Sources and Evidence Index.md`, `Research Priorities and Action Items.md`, `Search Index.md`, `CHANGELOG.md`, and `.agents/AGENT_RESUME.md` together.

## Raw Source Material Preservation
- When a task uses raw materials such as `.eml`, `.txt`, `.pdf`, `.zip`, images, spreadsheets, record exports, or downloaded source packets, incorporate the publishable raw files into the git repo when privacy, copyright, and file size allow.
- Prefer `static/sources/<short-source-slug>/` for downloadable raw artifacts; keep filenames descriptive and URL-safe.
- When practical, also create browser-readable pages in `References/`: email/text transcripts, PDF/image OCR or abstracts, and source notes that explain provenance, evidence value, and cautions.
- Link wiki citations and source notes to both the readable page(s) and the raw file(s). Do not leave useful source paths pointing only to `~/Downloads`, `/tmp`, cloud-sync folders, or other machine-local locations if the material can be published in the repo.
- Add or update `.gitattributes` for raw binary/source formats when needed so Git preserves them correctly.
- Keep privacy cautions explicit, especially for living people, personal correspondence, AI-generated material, or derivative research notes.

## Record Requests, Letters, and Phone Inquiries
- When an agent concludes that the next useful step is a letter, phone call, archive inquiry, courthouse request, church request, cemetery request, library lookup, email, fax, or web-form message, the agent must add or update a reusable template in the repo.
- Use `[[Volunteer Record Request Tasks]]` for relative-friendly request tasks. Include task ID, purpose, recipient, sample letter or call script, fee caution, and reporting instructions to Zach Copley at `zach@copley.name` and Tom Copley at `tcopley@protonmail.com`.
- Use `[[Tier 1 Research Execution Kit]]` for more technical agent-facing request packets, transcription fields, and evidence-capture forms.
- If contact details may change, instruct helpers to verify the current official address, phone, fax, email, or web form before sending. Include the best known contact path only when a source or date is available.
- Link new request templates from the relevant roadmap and evidence pages. At minimum consider `Research Priorities and Action Items.md`, `Sources and Evidence Index.md`, `Search Index.md`, and `CHANGELOG.md`.
- Treat negative replies as useful evidence. Capture exactly which books, indexes, years, spellings, and repositories were checked.

## Current June 2026 Operating State
- Start every session with `.agents/AGENT_RESUME.md`; it is the current checkpoint and overrides historical `_AGENT_HANDOFF_PHASE_*` files.
- Use `Open Record Targets.md` as the master queue for open record work, `Source to Claim Matrix.md` for source-to-claim boundaries, and the `RQ-C*` dashboard pages for current research-question status.
- `Volunteer Record Request Tasks.md` is now the public helper page for relatives who want to request records. Keep it current whenever a new courthouse, archive, church, cemetery, library, or phone-inquiry task becomes the next practical action.
- The 1897 Lewis County death register supports **John Copley** and **Sarah Copley** as recorded parent names for Michael Copley Sr., but no located record gives Sarah's maiden surname as Dolan.
- Michael Copley Sr.'s 1893 will / 1897 probate has been located in Lewis County Will Book C. It confirms son John as executor and the known children, but it does not name Michael's parents.
- The County Court Order Book v. 6 image 285 / page 496 path is now a bounded negative: Film 825098 / DGS 8614118 image 285 contains Conrad and Woofter entries, not Copley. Do not repeat that image/page check unless verifying the negative.
- The wills/fiduciaries index check is complete: Film 819938 / DGS 7618825 image 32 found Michael as `Copley (Copeley)`, Will Book C p. 351, Adm, date 4 March 1897, Order Book **1-A p. 45**, Appraisement Book **11 p. 59**, Settlement Book **34 p. 176**, and continuation `P 4/155`.
- Order Book 1-A, Probate Record P, and Settlement Book 34 are not cataloged online in FamilySearch; `koha:268417` is checked negative for bound probate / fiduciary volumes. Appraisement Book 11 p. 59 is found at Inventory Book 11, Film 825091 / DGS 7618832, image 60; it names `John Copley Executor` but no parents, spouse, children, Bible, notes, or debts. The old images 50-53 target is retired. Courthouse / archive targets remain Order Book 1-A p. 45, `P 4/155`, and Settlement Book 34 p. 176.
- `References/Michael Copley Sr Parentage Evidence Audit and Request Packet.md` is the control sheet for Michael's parentage problem: use it for evidence status, do-not-repeat searches, courthouse / archive request wording, and result-capture fields.
- `References/Partlow Rude Online Identity Chain.md` is the control sheet for Frank / Nollie, Alice / Mary Alice, and Marion parentage identity proof. `References/1880 Marion McDonald Partlow Household.md` is the original-image proof for Nollie Frank as son of Marion Partlow. `References/1850 and 1860 John Halleck Partlow Household.md` is the original-image proof for Marion / Marion M. as child of John H. / Lydia Partlow. Treat the Clark County marriage return as optional ceremony-detail work, not the next web proof target.
- The June 2026 LaForce Christmas-party photo identification now names Dee LaForce's grandmother as `Marian Agnes Hewetson`, known as "Grammy"; preserve the spelling distinction between Marian Hewetson and Marion Partlow Copley.
- The Luke Murray / Anne Loghan 1854 register entry is confirmed, the online bond / consent search and Smith compiled-index search are negative, and the next bond-specific task is a direct Lewis County Circuit Clerk request.

## Development & Deployment
- **Node Version:** Requires Node v22+.
- **Build Command:** `npm run build` — this includes the required `-d .` flag. Do NOT use `npx quartz build` alone; it produces empty output (no content pages).
- **Generated output:** Local builds modify `public/`; restore `public/` before committing unless the user explicitly asks to commit built output.
- **Deployment:** `peaceiris/actions-gh-pages@v4` in `.github/workflows/deploy.yml` — deploys on every push to `main`.
- **Site Config:** Ensure `baseUrl` in `quartz.config.ts` does NOT include the `https://` protocol prefix, as Quartz handles this automatically.
- **Page dates:** Quartz is configured to use git dates before frontmatter dates with `CreatedModifiedDate({ priority: ["git", "frontmatter", "filesystem"] })`.
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
- Griffith's Valuation (Roscommon): 4 Copleys in Termon Beg, Kilkeevin Parish (Protestant), 1857: Bridget (tenant of Sandford), John (sub-tenant of Bridget), Richard (Sandford), Thomas (Sandford). No Catholic Copley in any Roscommon land record.

**PRIMARY BREAKTHROUGH (April 18, 2026):** Catholic Copely family confirmed in Fairymount, Kilgefin parish:
- William Copely (b.~1794, d. Q4 1864, age 70), farmer — Catholic
- Son Michael Copely (b.~1834) married Bridget Gibbons (Ballincurry, Kilgefin), Catholic ceremony, May 16 1864
- William ~19 years older than Michael Copley Sr. (b.~1813, Lewis County WV) — likely older brother or father
- Spelling: Catholic branch = "Copely"; Protestant Kilkeevin branch = "Copley"
- Q6 re-opened: "William went to Australia" tradition may be wrong — this William stayed in Roscommon

**New top priority:** Establish relationship between William Copely of Fairymount and Michael Copley Sr. of Lewis County WV.

## Iowa Copley Family Connection (Phase 2L — April 2026)

**Mary Copely Giblin** (1814–1884), born Tully, Kilcorkey, County Roscommon; died Crawford County, Iowa. Very likely Michael Copley Sr.'s sister. Zach Copley (G26) relocated to Iowa in 2025; an ancestral line is now documented there.

## Kilgefin Parish Details (Phase 2L — April 2026)

- **Formal name:** "Ballagh (aka Kilgefin)"
- **Church:** Ballagh townland, SE border of Ballincurry
- **Graveyard:** Cartron (Old Glebe) townland, ~1 mile NW of Ballincurry
- **LDS microfilm 989747:** Catholic parochial records, Cloontuskert/Kilgefin/Curraghroe, 1865–1881 (high-priority research target at FamilySearch)

## The Murray Settlement (Phase 2L — Active)

**Tom Copley's thesis:** The Irish Settlement in Lewis County, WV was a **coordinated community transplant** from Kilgefin, County Roscommon — not random individual migration.

**Key facts:**
- St. Michael's Church ("Little Cathedral of the Wilderness"), Cove Lick area, southwestern Lewis County
- 1849: 100 acres donated to Diocese of Richmond; Bishop Richard Vincent Whelan
- Labor driver: Staunton-Parkersburg Turnpike construction
- **Documented families (Griffith's Valuation 1857):**
  - **Copleys** — Michael Sr. + Patrick (likely among earliest arrivals)
  - **Dolans** — Elizabeth Mullooly Dolan (Roscommon origin); Edward Dolan documented on Sandford estate
  - **Murrays** — Anchor family confirmed in Kilgefin and Kilkeevin parishes; multiple on Sandford estate
  - **Hanleys** — **BREAKTHROUGH (April 22, 2026):** Peter Hanley documented in Ballindrumlea on Sandford estate — **same townland and landlord as Murrays, Dolans, Copleys**. **Also:** Hanleys in Fairymount under Anne Lyster (same townland as William Copely of Fairymount, the remaining Catholic Copely) — Hanleys were direct neighbors of the Catholic Copely branch. Bridget Copley married Hanley (estate-mate marriage reproduced)
  - **Hannons** — **BREAKTHROUGH (April 22, 2026):** Thomas Hannon documented on Sandford estate (Longford, same landlord). Catherine "Kitty" Copley married Hannon (estate-mate marriage)
  - **Giloolys** — Connected family; no Griffith's Valuation entries found (possibly different parish origin or marriage connection)
- **Critical question:** What direct record names Ann Munday's maiden surname? The earlier Ann-as-Murray hypothesis is downgraded as probably mistaken unless direct evidence appears (RQ-M5)
- **Sandford estate as settlement nucleus:** Five documented families (Copleys, Dolans, Murrays, Hanleys, Hannons) all tenants of same landlord in Roscommon — this is the physical anchor of the coordinated transplant hypothesis
- **Research strategy:** 5 tiers, 16 actions; see `[[Topics/Murray Settlement]]`

## Iowa Copley Line Extended to 20th Century (April 22, 2026)

**Mary Copely Giblin's descendants** documented through five+ generations:
- **[[People/Stephen Donald Copley|Stephen Donald Copley]]** (b. ~1880–1895; son/grandson of one of Mary's six children)
- **[[People/Merton Dale Copley|Merton Dale Copley]]** (b. 1911, Crawford County, Iowa; d. 1978)
- **[[People/Fern Loretta Copley MayBee|Fern Loretta Copley MayBee]]** (b. 1913, Manila/Crawford County, Iowa; d. 1997, Council Bluffs, Iowa)
  - Spouse: Edward Francis MayBee (1900–1982)
  - Children: Richard Charles MayBee (1934–2004), Gerald E MayBee (1935–1996)

**Key finding:** Both Merton (1911) and Fern (1913) born in Crawford County, Iowa — same county where Mary died (1884). Confirms 70+ year geographic continuity of Iowa Copley settlement across five generations (1814–1914+).

## Changelog
A human-readable `CHANGELOG.md` exists at the vault root. Update it at the end of each session. Every entry must include WikiLinks to every page added or changed (see Linking & Structure above).

## README
A `README.md` exists at the repo root for GitHub visitors. It covers the live site URL, directory structure, tech stack, local dev instructions, and deployment. Update it if the tech stack or repo structure changes significantly.

## Last Known Handoff
Start with `.agents/AGENT_RESUME.md`; it is the current operational checkpoint. Treat `_AGENT_HANDOFF_PHASE_*` files as historical context unless `AGENT_RESUME.md` explicitly points back to one.
