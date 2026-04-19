---
title: Changelog
date: 2026-04-18
tags:
  - "#copley-family"
  - "#index"
---

# Copley Family Research — Changelog

A running record of significant additions, corrections, and improvements to this wiki. Most recent changes are listed first. For technical details, see the corresponding `AGENT_HANDOFF_PHASE_*.md` files.

---

## Phase 2G — Captain John Copley Research
**Date:** April 18, 2026

### New Pages
- **`Topics/Captain John Copley Research.md`** — comprehensive new research page documenting Tom and Steve Copley's February–March 2026 investigation into the English and Irish origins of [[People/Michael Copley Sr.|Michael Copley Sr.]] (G23). Based on 30 decoded emails and 2 PDFs from the research correspondence. Includes:
  - Three verified primary sources (1642 Parliament petition, 1651 Youghal council book, 1665 *Mettallum Martis*)
  - AI-generated claims explicitly flagged and source-quality labeled throughout (✅/⚠️/❓/🚫)
  - Chronological contradiction identified: AI claim that Captain John had 1641 ironworks is impossible; verified sources place him in England until 1657
  - Full speculative 8-generation descent chain: Thomas Copley Sr. (Worcestershire) → Captain John Copley → [4 speculative generations] → Michael Copley Sr. (Lewis County WV)
  - Tom vs. Steve hypothesis comparison: Tom favors Bredon's Norton / Captain John line; Steve favors Christopher Copley (Yorkshire) bastard-son theory
  - Mermaid descent diagram with color-coded source quality
  - 8-priority research vetting strategy
  - 20 open research questions organized in 4 tiers

---

## Phase 2F — GEDCOM Data, Family Tree Fix, Benjamin Partlow
**Date:** April 18, 2026

### Data Added
- Incorporated Ancestry.com GEDCOM export from contact "sp_edward_iv" — all facts flagged as `(Ancestry.com tree, unverified)`. Key facts added to: Ann Copley (death date/burial), Nelle Copley (third conflicting birth date), Mary Copley Flesch (exact dates), Thomas E. Copley (birthplace; death date conflict flagged), Marion Partlow (death date, parents added), Mary Ellen Dolan (mother's maiden name Mullooly), Thomas Tom Copley (b. 25 Feb 1857, d. 8 Jan 1932), Margaret Copley, Sarah Copley.
- Confirmed Marion Partlow burial at Sunset View Cemetery, El Cerrito CA (correcting Ancestry tree which said Oak Point IL).

### New Pages
- **`People/Benjamin Partlow.md`** — Revolutionary War veteran (c.1762), Culpeper County, Virginia. Ancestor of Marion Elizabeth Partlow. Documented from 1832 pension statement and Rappahannock County pension roll.

### Fixes
- **Family Tree bug:** Georgia Leonhardt had been connected to Susan Copley in the Mermaid diagram. Corrected to Paul Copley (her actual parent). Susan Copley's node label corrected accordingly.
- **Search Index & People Directory** updated with all GEDCOM-sourced facts and new pages.

---

## Phase 2E — Stubs Cleared, Deployment Fixed
**Date:** April 18, 2026

### Critical Infrastructure Fix
- **Site was serving zero content pages** — root cause: GitHub Actions deploy script was running `npx quartz build` without the required `-d .` flag. Fixed by switching to `npm run build` (which includes the flag). Also switched deploy action to `peaceiris/actions-gh-pages@v4` which reliably commits on every push.
- **SSH known_hosts issue** documented and resolved: stale GitHub IP entries conflicted with the hostname key. Fix: `ssh-keygen -R <ip>`.
- Site now correctly builds 245 HTML pages from 357 source files.

### New & Updated Profiles
17 pages upgraded from stubs to real profiles, including: Lauren Copley Meier (G27), Stephen Copley (G27), Weeden Hoffman (historical), Mary Copley Flesch (G24), Patrick Copley (G23 — co-emigrant on *Powhatan*), William Copley (G23 — Australia tradition), Bridget Copley Reynolds (G23), and all Arena/Ruland G26 children (Cathy, Ann Marie, Jim, Matt Jr., John Arena; Louis III, Robert, Charles, John, Michael Ruland).
- **Wyatt Copley**: birth date confirmed — October 2, 2004, Berkeley CA
- **Augie Copley**: birth date confirmed — August 31, 2008, Oakland CA

---

## Phase 2D — Image Catalog Complete, Stephen Line Profiles
**Date:** April 18, 2026

### Images
All 11 previously unnamed images in `static/images/` have been identified, renamed descriptively, and embedded in appropriate pages. Completed catalog now covers 31 named images including census records, land deeds, grave markers, ship manifests, portraits, and historical photos.

### Profile Fixes & Updates
- **Philip Copley**: full profile rebuilt (b. 1962; spouse Tracy Siler; children Philip Michael b.1990, John William b.1992)
- **Michael Copley (b. 1959)**: full profile rebuilt (spouse Patti Inman; children Michael Stephen b.1986, Sara Marie b.1988)
- **Paul Copley**: spouse Anne Marie Leonhardt added; children James Stephen, John William, Georgia Marie confirmed
- **Georgia Leonhardt**: parent attribution corrected from Susan → Paul Copley throughout
- **William S. Geist**: removed "Willie Geist" alias (NBC journalist mismatch)
- **Peter Copley**: removed mismatched British composer social media links

---

## Phase 2C — Site Config Fixes, Social Media Corrections
**Date:** April 18, 2026

### Infrastructure
- Fixed `double-https://` bug in RSS and internal links by correcting `baseUrl` in `quartz.config.ts`
- Disabled `CustomOgImages` plugin for stable CI builds
- Added `.gitignore` (was missing) — prevents `public/`, `node_modules/`, and build artifacts from being tracked
- Resolved corrupted `node_modules` state via `npm ci`

### Profile Updates
- **Zachary R. Copley**: full birth date added — May 22, 1969

### Social Media Corrections
Removed incorrect links where AI had found people with the same name but different identity:
- Charles H. Copley: removed mismatched Twitter/Facebook
- Peter Copley: removed mismatched LinkedIn/Twitter (British composer)
- William S. Geist: removed Willie Geist Instagram (NBC journalist, not our G27 infant)

---

## Phase 2B — Biographical Sketches, 35 Images, G26 Profiles
**Date:** April 17, 2026

### Source Documents Processed
- Family history appendix PDFs containing biographical sketches written by family members (primary sources for G24–G27)

### Profiles Rebuilt or Created
Major rewrites with primary-source biographical detail: Thomas Partlow Copley ("Tom", G25), Stephen Michael Copley (G25), Zachary R. Copley (G26), Erin E. Copley Bird (G26), Charles H. Copley (G26), Amy E. Copley Geist (G26), Stephen Joseph Copley (G26, d. 2023), Sara Copley Cox (G26), Paul Copley (G26), Peter Copley (G26), Mary Ellen Dolan Copley (G23/G24), Thomas E. Copley (G24), Anne Copley (G24), Ellen "Nelle" Copley Sardo (G24 — birth year reverted to 1897 per family bio).

### Images
35 JPEG images extracted from PDFs and added to `static/images/`, including portraits, census records, land deeds, ship manifests, and historical photos.

### Key Facts Established
- Tom Copley's full education: UC Berkeley BS 1966 (Managerial Economics), MBA, Penn State PhD 1977
- Stephen Copley's career: Pratt & Whitney → USC (Assoc Prof/Full Prof/Chair) → IIT Dean Armour College → Packer Group CEO → Penn State ARL Senior Scientist
- Children's full middle names: Zachary **Robertson**, Erin **Elizabeth**, Charles **Hewetson**
- Amy Copley Geist: LSE MA, Brookings, World Bank Africa Gender Innovation Lab; married Nathan Geist Jun 19, 2021; son William Stephen Geist b. Dec 9, 2023

---

## Phase 2A — Mermaid Fix, Aliases, Search Index
**Date:** April 17, 2026

### Family Tree Fix
9 spouse nodes in the Mermaid family tree diagram (`Family Tree.md`) had been declared but never wired into their marriage diamond nodes — they rendered as floating orphan nodes. All 9 connections added: Ann Munday, Mary Dolan, Robert Sardo, Marion Partlow, Matt Arena, Louis Ruland, Marcia Thornton, Judy Todd, Barbara Copley.

### Search Improvements
- Added `aliases` frontmatter (nicknames, maiden names) to key person pages so they appear in Quartz search
- Created **`Search Index.md`** — comprehensive keyword/name/date index covering all people by generation, all places, all topics, and a chronological events table (1813–2023)

---

## Phase 1E — Topics Section Created
**Date:** April 13, 2026

### New Section: `Topics/`
Seven thematic research pages created:
- `Topics/1900 Copley Oil Strike.md`
- `Topics/Irish Famine and Emigration.md`
- `Topics/B&O Railroad Labor History.md`
- `Topics/Irish Immigration to West Virginia.md`
- `Topics/Academic and Scientific Achievement.md`
- `Topics/Genealogical Research Methods.md`
- `Topics/_Topics Index.md`

Each page includes: Historical Context, Copley Family Connection, Timeline, Primary Sources, Research Gaps, and YAML frontmatter. Cross-linked from `Home.md`, relevant person pages, and place pages.

---

## Phases 1A–1D — Foundation Work
**Dates:** Prior to April 13, 2026

The initial build of this wiki, covering:
- **People directory** established: 40+ person profiles from G23 (Michael Copley Sr.) through G28 (great-grandchildren), across the Tom line, Stephen line, and Sardo branch
- **Places directory**: Lewis County WV, County Roscommon Ireland, Kilgefin Ireland, Baltimore MD, and other key locations
- **Family Tree** (`Family Tree.md`): Mermaid diagram covering all documented generations
- **Home.md** and **index.md**: narrative landing page and site navigation
- **The Copley Family Narrative.md**: prose family history
- **Phase 1 Questions and Answers.md**: structured list of open research questions (Q1–Q45+)
- **Topics and Themes.md**: thematic overview
- Deployment to GitHub Pages via Quartz v4 and GitHub Actions CI/CD

---

*This changelog is maintained manually. For full technical detail on any phase, see the corresponding `AGENT_HANDOFF_PHASE_*.md` file in the vault root.*
