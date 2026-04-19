---
title: Phase 2G Handoff Summary
date: 2026-04-18
tags:
  - handoff
  - phase-2g
  - captain-john-copley
  - irish-origins
  - research
draft: true
---

# Phase 2G Handoff Summary (for next agent)

## 1) User Request

Tom Copley (G25) shared 30 emails and 2 PDFs from his research correspondence with Steve Copley (G25), conducted February–March 2026, investigating the English and Irish origins of Michael Copley Sr. (G23, b. ~1813). The user requested:

1. Read and decode the emails (they are base64-encoded HTML `.eml` files — requires a Python decode script, see Section 5 below)
2. Summarize all material, marking speculative claims clearly with source quality tiers
3. Add to the vault as a new Topics page
4. Create a generation-by-generation descent narrative and Mermaid diagram per Tom's specific request
5. Present both Tom's hypothesis (Captain John of Worcestershire) and Steve's hypothesis (Christopher Copley of Yorkshire) with assessment


## 2) New Files Created

### `Topics/Captain John Copley Research.md`
A comprehensive 17-section Topics page (~700 lines). Key content:

**Verified primary sources (3):**
- *Journal of the House of Commons, Vol. 2* (1642) — John Copley petitioned Parliament about "Exploits in Ireland"
- *Council Book of the Corporation of Youghal* (1651) — "Captain Copley" as Clerk of the Market
- Dud Dudley, *Mettallum Martis* (1665) — Captain John Copley at Kingswood ironworks 1656–57; moved to Ireland 1657

**Critical finding — AI hallucination identified:**
AI claimed Captain John had Arigna ironworks destroyed in 1641. But *Mettallum Martis* confirms he didn't arrive in Ireland until 1657 — a 16-year contradiction. The 1641 Depositions specialist confirmed no Copley deposition exists. Marked 🚫 LIKELY INCORRECT throughout.

**Sections:**
1. Background and Motivation
2. English Origins: Bredon's Norton, Worcestershire
3. Captain John Copley in Ireland: Verified Evidence
4. AI-Generated Narrative (with warnings)
5. Proposed Descent to Michael Copley Sr. (speculative chain)
6. The Castlerea Copleys: Primary Source Research
7. The Limerick Branch and John Singleton Copley
8. Tom's Synthesis Theory
9. Three Possible Routes to Roscommon
10. The "Murray's Settlement" Question
11. Research Vetting Strategy (8 prioritized actions)
12. Open Research Questions (20 questions, 4 tiers)
13. The Two Competing Hypotheses: Tom vs. Steve
14. Descent Narrative: Thomas Copley Sr. → Michael Copley Sr. (8 generations)
15. Descent Diagram (Mermaid, color-coded by source quality)
16. Related Pages
17. Sources

### `CHANGELOG.md`
New human-readable changelog at the vault root. Covers all phases in reverse chronological order (2G back to 1A–1D). Should be updated at the start of each new session.


## 3) Tom vs. Steve Hypothesis Summary

| Hypothesis | Proponent | Core Claim | Status |
|---|---|---|---|
| Captain John Copley of Bredon's Norton, Worcestershire | Tom | Grandson of Thomas Copley Sr. (d. 1593); moved to Ireland 1657; Protestant descendants converted Catholic via Dolan marriage | ⚠️ Plausible; best-evidenced |
| Christopher Copley of Wadsworth, West Yorkshire (bastard son) | Steve | Christopher had a bastard son by Mary Jones whose descendants settled in Roscommon | ❓ Speculative; no primary sources cited |
| Lord Baltimore / Thomas Copley (Jesuit) | Steve | Maryland Colony Jesuit, separate route | ❓ Speculative |

**Tom's position (his words):** *"The Ones from Worcestershire were good Catholics all along, and had no bastard children."*


## 4) The 8-Generation Descent Chain (Tom's Theory)

| Gen | Person | Status | Evidence |
|-----|--------|--------|----------|
| 1 | Thomas Copley Sr., Bredon's Norton (d. 1593) | ✅ Verified | Visitations of Worcestershire 1569; Bredon Church inscription |
| 2 | Thomas Copley Jr., Bredon's Norton (d. 1647; manor sold 1649) | ✅ Verified | bredonsnorton.co.uk |
| 3 | Captain John Copley (c.1610–post 1657) | ✅ Verified | 3 primary sources (see above) |
| 4 | [Elder son → Limerick branch] / [Younger son → Roscommon] | ❓ Speculative | No source |
| 5 | Roscommon Copley (c.1670–c.1740) | ❓ Speculative | No source |
| 6 | Thomas Copley, Cloonshee/Castlerea (c.1769–c.1842) | ❓ Speculative | Griffith's Valuation (unverified claim) |
| 7 | John Copley × Catherine Dolan, Kilmacough, Kilgefin (c.1785–c.1845) | ❓ Speculative | Tithe Applotment Books 1824 (unverified claim) |
| 8 | **Michael Copley Sr.** (b.~1813, d.~1897) | ✅ Verified | All prior research |

**The single most important unverified claim:** John Copley in the 1824 Tithe Applotment Books for Kilmacough, Kilgefin Parish. Verify at askaboutireland.ie.


## 5) Technical Note: Decoding the .eml Files

The 30 emails at `/mnt/c/Users/zach/Desktop/captnjohn/` are Gmail HTML exports with base64-encoded bodies. The `Read` tool returns raw base64, not readable text. To decode them:

```python
import base64, re, os, html

def decode_eml(filename):
    with open(filename, 'rb') as f:
        content = f.read().decode('utf-8', errors='replace')
    parts = re.split(r'Content-Transfer-Encoding: base64\s*\n', content)
    texts = []
    for part in parts[1:]:
        b64 = re.split(r'\n-{5,}', part)[0].strip()
        try:
            decoded = base64.b64decode(b64).decode('utf-8', errors='replace')
            text = re.sub(r'<[^>]+>', ' ', decoded)
            text = html.unescape(text)
            text = re.sub(r'\s+', ' ', text).strip()
            if len(text) > 50:
                texts.append(text)
        except:
            pass
    return texts

directory = '/mnt/c/Users/zach/Desktop/captnjohn/'
for i in range(1, 31):
    fname = os.path.join(directory, f'email{i}.eml')
    if os.path.exists(fname):
        texts = decode_eml(fname)
        print(f"\n=== email{i}.eml ===")
        for t in texts:
            print(t[:2000])
```

Note: `email3.eml` is very large (~79K tokens). The script handles it fine; the `Read` tool alone cannot.


## 6) PRIMARY BREAKTHROUGH — Catholic Copely Family Found in Kilgefin (April 18, 2026)

**This is the most significant finding of the entire research project.**

Civil registration searches on irishgenealogy.ie confirmed a Catholic Copely family in **Fairymount, Kilgefin parish** — the exact parish the AI identified as our family's origin:

- **William Copely** (b. ~1794, d. Q4 1864, age 70) — farmer, Fairymount, Kilgefin — Catholic
- **Michael Copely** (b. ~1834) — his son, farmer, Fairymount — married **Bridget Gibbons** (from Ballincurry, also Kilgefin) in a **Roman Catholic ceremony**, May 16, 1864
- Father named on marriage certificate: **William Copely, Farmer**

William Copely (b.~1794) is approximately 19 years older than Michael Copley Sr. (b.~1813, Lewis County WV) — close enough to be his older brother or possibly his father. Both Catholic, both farming class, both in Kilgefin parish.

**Q6 implication:** Family tradition says Michael Sr. had a brother William who "went to Australia." This William stayed in Roscommon until 1864. The tradition may be wrong, or there may be two Williamses.

**Spelling distinction:** The Catholic branch consistently spells the name **"Copely"** (no second 'l'). The Protestant Kilkeevin branch uses **"Copley"**. This may reliably distinguish the two branches in records.

Also found: **Richard Copely** in Tully, Kilcorkey parish (GV 1857, Pakenham estate) — "Copely" spelling suggests possible connection to Catholic branch.

## 6a) Primary Source Search Results (April 18, 2026)

These searches were completed during this session — results are now in the research page.

### Tithe Applotment Books — COMPLETED
**Result: No Copley found anywhere in County Roscommon.**
Source: National Archives of Ireland, titheapplotmentbooks.nationalarchives.ie
The AI's claim of "John Copley in Kilmacough, Kilgefin Parish, 1824" is fabricated. Marked 🚫 in the research page.

### Griffith's Valuation — COMPLETED
**Result: 4 Copleys confirmed in Termonbeg, Kilkeevin Parish, 1857.**

| Position | Occupier | Landlord |
|----------|----------|----------|
| 26 | Bridget Copley | William R.W. Sandford |
| 28 | John Copley | **Bridget Copley** (sub-tenant) |
| 31 | Richard Copley | William R.W. Sandford |
| 41 | Thomas Copley | William R.W. Sandford |

All Protestant Church of Ireland (Kilkeevin parish). No Catholic Copley found anywhere in Roscommon. John is a sub-tenant of Bridget — almost certainly a family relationship (son or brother-in-law). Bridget is likely the widow of Patrick Copley (d.~1848), holding the Sandford tenancy in her own name.

**New top priority:** Establish whether Termonbeg townland (Kilkeevin) borders Kilgefin Catholic parish geographically.


## 6a) Top Priority Research Actions (Updated)

(From the Research Vetting Strategy in the Topics page)

| Priority | Action | Where |
|----------|--------|-------|
| 1 | Search 1824 Tithe Applotment Books for "Copley" in Kilgefin/Kilmacough | askaboutireland.ie |
| 2 | Search Griffith's Valuation for Copley in Kilgefin/Kilkeevin | askaboutireland.ie |
| 3 | Verify Calendar of State Papers Ireland 1633–1647, p.301 (AI-cited Arigna reference) | british-history.ac.uk |
| 4 | Search 1641 Depositions for "Copley" (may appear in others' accounts) | 1641.tcd.ie |
| 5 | Read full *Mettallum Martis* text for any further Ireland details | Internet Archive |
| 6 | Search Kilgefin Catholic registers | irishgenealogy.ie / NLI microfilms |
| 7 | Read 1634 Visitation of Worcestershire to identify Captain John's parentage | Harleian Society; FamilySearch |
| 8 | Check WikiTree Copley-1601 (Limerick branch) for backward connections | wikitree.com |


## 7) Outstanding Gaps (Carried Forward from Phase 2F)

| Item | Detail |
|------|--------|
| Thomas E. Copley death date | Appendix: Jan 28, 1968; GEDCOM: Jan 30, 1967 — conflict unresolved |
| Nelle birth year (Q45) | Three conflicting sources: Dec 23 1897, 1896 (census), 25 Dec 1896 (Ancestry) |
| Lauren Copley Meier identity | May be same as "Sara Marie Copley b.1988" — unresolved |
| Erin Bird birth city / marriage date | Research gap |
| Susan Copley full bio | No source data beyond birth year 1967 |
| Q6 William Copley Australia | No documentary confirmation |
| Q19 Michael Sr. naturalization | No record located |
| Q28 John Copley Civil War | No conclusive proof |
| Captain John → Michael Sr. chain | No primary source for Generations 4–7 |


## 8) Deployment Notes (Unchanged from Phase 2F)

- **Build:** `npm run build` — do NOT use `npx quartz build` alone (missing `-d .`)
- **Deploy:** `peaceiris/actions-gh-pages@v4` — auto-deploys on push to `main`
- **SSH:** `~/.ssh/id_rsa` — run `ssh-add ~/.ssh/id_rsa` if key drops from agent
- **Known hosts:** If push fails with "Host key verification failed", run `ssh-keygen -R <ip>`
