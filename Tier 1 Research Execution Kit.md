---
title: Tier 1 Research Execution Kit
aliases:
  - Research Execution Kit
  - Tier 1 Execution Kit
  - Source Request Templates
description: Ready-to-use request templates, transcription fields, and evidence-capture checklists for the highest-value Copley family research tasks.
date: 2026-04-28
tags:
  - "#copley-family"
  - "#research-in-progress"
  - "#sources"
  - "#genealogy"
  - "#index"
---

# Tier 1 Research Execution Kit

This page turns [[Research Priorities and Action Items]] into executable work. It is for source requests, transcription, and evidence capture, not for stating new conclusions.

Use [[Sources and Evidence Index]] to check current claim status before changing narrative pages.

## How to Record Findings

When a search produces a record, a negative result, or a corrected claim:

1. Save the full citation path: repository, collection, book/film, page/image, date searched, and URL if available.
2. Record a short transcript or abstract, plus any exact names, dates, places, witnesses, neighbors, sponsors, and variant spellings.
3. Update [[Sources and Evidence Index]] if the finding changes a claim status or proof target.
4. Update the relevant person, topic, place, and research-note pages.
5. Update affected Mermaid diagrams when relationships, chronology, evidence status, or research priorities change.
6. Add a [[CHANGELOG]] entry for any public-facing evidence or roadmap change.

---

## 1. Early John Murray Deed Path (Now Closed)

**Goal:** Preserve the direct John Murray deed results cleanly and shift active browser work to the Lewis County FAN sweep now that the direct deed path has closed.

**Primary pages:** [[RQ-M1-JOHN-MURRAY-DEED-FINDINGS|RQ-M1 John Murray Deed Findings]], [[Topics/Murray Settlement]], [[People/Ann Copley]], [[Sources and Evidence Index]]

**Current FamilySearch targets from the April 28 and April 30, 2026 Claude for Chrome handoffs:**

- Grantee Index G-M, 1817-1934: Film 819925, DGS 8293314
- Deed Book C-D, 1824-1834: Film 818742, DGS 8219256
- Former 1826 Murray / Fish lead retired: actual record is a **1899** oil and gas lease in DGS 008293302
- Built-in Deed Book C-D M-index path retired for Murray-specific work: physical pages 334 and 404 are mismatches, and the former "Marwee Sawig" line no longer reads as Murray
- Variant spellings to check: Murray, Murry, Murrey, Murroe, Murrow, Marree
- Negative check already recorded: compiled Grantor Index M-S, DGS 8293317, image 60, did not show clear Murray between Munson and Musgrave
- Exact-surname Murray grantee search already recorded: DGS 8293314 exact Murray entries appear only on images 553-554 and are dated 1865-1934
- Former 1833 John Murray lead retired: actual record is a **1899** oil and gas lease to **Fred S. Rich** in DGS 008293302

### Current Highest-Value Claude for Chrome Task

For a single bounded Claude-for-Chrome session, the highest-value next task is **district mapping for the Lewis County census clusters**. The broad 1870 sweep and image-review correction are complete: Battelle image 8 is now Bush / Leely / Mulooly / McDonald, and the supposed extra Willey image 265 Ireland-born household was a false read of the Virginia-born Butcher household.

- This addresses the main remaining interpretive gap: whether 1850 District 30, the 1860 blank rural pages, and the 1870 Battelle / Willey township pages point toward Weston / courthouse hinterland, Cove Lick, Camden, Loveberry, or another locality.
- It keeps the task geographic and bounded instead of starting a new broad surname sweep.
- It should capture raw source links, maps, and image-header evidence when possible.

Use this exact prompt:

```text
Do one narrow research task only. Do not browse broadly and do not do any repo work.

Goal:
Map the Lewis County census district geography for the Murray Settlement FAN-sweep evidence.

Known context:
- The old “1826 John Murray / Fred L. Fish” lead is already closed: it is actually an 1899 oil-and-gas lease.
- The old “1833 John Murray” lead is also closed: it is actually an 1899 oil-and-gas lease to Fred S. Rich.
- The built-in Deed Book C-D “Marwee” path is retired from Murray-specific work.
- The 1850 Lewis County pass is complete: it found the Micheal / Patrick Coopley household in District 30, but no broader Irish surname cluster.
- The 1860 Lewis County pass is complete: it found a dense rural Dolan-centered Irish cluster, Ireland-born Luke and Patrick Murry, and a Weston Irish boarding-house cluster, but no indexed Copley / Coopley household.
- The 1870 Lewis County pass is complete: it found Battelle and Willey Irish farming clusters, no Ireland-born Murray / Murry household, and no Copley farming household.
- The corrected 1870 image review identifies Battelle image 8 as a dense Irish farming page with Bush, Leely, Mulooly, and McDonald. It also corrects the supposed extra Willey image 265 Ireland-born household as the Virginia-born Butcher household.
- This session is only about geography and district mapping.
- Do not run a new broad surname sweep. Do not work on deeds, Marwee, page 334, page 404, 1880, or later records.

Your task:
1. Determine what 1850 “District 30” in Lewis County, Virginia corresponds to geographically, if possible.
   - Use the FamilySearch 1850 census image headers around the Micheal / Patrick Coopley household.
   - Capture the image number, page number, post office if written, assistant marshal name, and any district wording.
2. Determine what the 1860 blank rural district pages around these households correspond to geographically, if possible:
   - Luke / Patrick Murry: image 120 / page 114.
   - Thomas / John Dolan cluster: images 122-123 / pages 116-117.
   - Capture headers, post office, assistant marshal, page sequence, and any district wording.
3. Compare those findings to 1870 township geography:
   - Battelle Township, including image 8 / page 4 and image 45 / page 41.
   - Willey district, including image 261 / page 53 and image 265 / page 57.
4. Find one or two reliable historical maps or county references that show Lewis County townships / districts around 1870, especially Battelle, Willey, Weston, Cove Lick, Camden, and Loveberry.
5. Do not do genealogy expansion. Stop after district geography and map evidence.

Capture this exact output format:

DISTRICT MAPPING SCOPE
- Collection / website:
- Census years / films checked:
- Map or locality sources checked:
- Images / pages reviewed:
- Any image-header or map-access problems:

IMAGE HEADER RESULTS
- 1850 District 30 / Coopley page:
  - Image / page:
  - Exact header wording:
  - Post office:
  - Assistant marshal:
  - Inference:
- 1860 Murry page:
  - Image / page:
  - Exact header wording:
  - Post office:
  - Assistant marshal:
  - Inference:
- 1860 Dolan cluster pages:
  - Image / page:
  - Exact header wording:
  - Post office:
  - Assistant marshal:
  - Inference:
- 1870 Battelle pages:
  - Images / pages:
  - Exact header wording:
  - Post office:
  - Assistant marshal:
  - Inference:
- 1870 Willey pages:
  - Images / pages:
  - Exact header wording:
  - Post office:
  - Assistant marshal:
  - Inference:

MAP / LOCALITY RESULTS
- Battelle Township location:
- Willey district location:
- Weston relation:
- Cove Lick / Camden / Loveberry relation:
- Any map URLs or citations:

RQ-M1 INTERPRETATION
- Does 1850 District 30 appear to correspond to the later Battelle / Willey / Weston area, or not?
- Do the 1860 Murry and Dolan pages appear to correspond to Battelle, Willey, Weston, Cove Lick, Camden, Loveberry, or another locality?
- Does the geography strengthen or weaken the Murray Settlement framework?
- What remains unresolved?

FAILURE MODE
- If you cannot fully resolve it, state exactly why:
  - header unreadable
  - map unavailable
  - township boundaries unclear
  - post office not equivalent to residence
  - other exact issue

Rules:
- Be conservative.
- Separate evidence from inference.
- Record exact header wording where readable.
- Preserve uncertainty and unreadable entries.
- Do not do any repo editing.
- Stop after district geography and map evidence only.
```

### Request Template: Lewis County Clerk / FamilySearch Helper

Subject: Lewis County WV deed lookup request - John Murray variants and early settlement context

Hello,

I am researching early Lewis County land records connected to the Irish Catholic settlement near Cove Lick / Camden / Loveberry. The direct FamilySearch John Murray deed leads formerly indexed as 1826 and 1833 have now both proved to be 1899 oil-and-gas lease misindexes, so I am now looking for any independent pre-1843 Murray land entries or variant-surname deed records in Lewis County.

Could you please help identify or provide copies/transcriptions for any deed-book entries matching:

- Name: John Murray, with possible variants Murry / Murrey / Murroe / Murrow / Marree
- County: Lewis County, Virginia / West Virginia
- Date range: 1820-1840, with priority on 1833
- Record type: deed, land purchase, land sale, lease, or related land instrument
- Specific FamilySearch targets: compiled grantee index image 553 partially blocked 1865 Murray rows, and any independent pre-1843 Murray-variant index path outside the retired built-in M-index line

For each matching record, I am hoping to capture the book/page, date, grantor, grantee, acreage, price, watercourse or land description, neighbors, witnesses, and any index references.

Thank you for any guidance on the correct deed book, index, image, or copy-request process.

### Transcription Template

| Field | Entry |
|---|---|
| Repository / website |  |
| Collection / book / film |  |
| Book and page |  |
| Image number / URL |  |
| Date of instrument |  |
| Date recorded |  |
| Grantor(s) |  |
| Grantee(s) |  |
| Surname variants |  |
| Acreage |  |
| Price / consideration |  |
| Watercourse / road / landmark |  |
| Neighboring landowners |  |
| Witnesses |  |
| Clerk / official |  |
| Legal description abstract |  |
| Full or partial transcript |  |
| Relationship implications |  |
| Follow-up searches |  |

### Evidence Questions

- Does the land fall near Cove Lick, Camden, Loveberry, St. Michael's, or the later Copley parcel?
- Does the exact-surname grantee-index evidence stay late (1865+) while earlier pre-1843 Murray evidence survives only under some independent Murray-variant index path?
- Does the deed show Murray settlement before the Copley 1843 Hoffman deed?
- Do witnesses or neighbors include Copley, Dolan, Hanley, Gillooly, Hannon, Reynolds, Mullooly, Mulroney, or Mahon?
- Does any record connect Murray land to Ann Copley / Ann Munday / likely Murray?

---

## 2. PRONI Kinawley TAB/5 Request

**Goal:** Find whether unindexed Kinawley Tithe Applotment material can identify Murray, Munday/Monday, or settlement-family households before Griffith's Valuation.

**Primary pages:** [[RQ-M5-PHASE-2-FINDINGS]], [[RQ-M5-TITHE-APPLOTMENT-SEARCH]], [[Topics/Murray Settlement]]

### Request Template: PRONI

Subject: Kinawley parish Tithe Applotment query - Murray / Munday / settlement surnames

Hello,

I am researching Kinawley parish, County Fermanagh, for an Irish-American family history project. Indexed Tithe Applotment searches through the National Archives of Ireland and Ancestry appear not to include Kinawley parish coverage, so I am trying to determine whether PRONI holds relevant TAB/5 material or another unindexed source path.

Could you please advise whether PRONI has Tithe Applotment material for Kinawley parish, County Fermanagh, and whether any index, scan, microfilm, or staff lookup path is available?

Priority surnames:

- Murray / Murry / Murrey
- Munday / Monday / Mundy
- Dolan
- Hanley
- Gillooly / Gilhooly
- Mullooly
- Hannon
- Reynolds
- Mulroney
- Mahon

The key research question is whether a Murray household in Kinawley could be connected to Ann Copley, recorded in American family tradition as Ann Munday but now treated as likely Ann Murray for working genealogy.

I would appreciate any catalogue references, access instructions, copy options, or advice about related Kinawley parish land/tithe material.

### Capture Template

| Field | Entry |
|---|---|
| PRONI reference |  |
| Parish / townland |  |
| Year / date range |  |
| Surname |  |
| Forename |  |
| Occupier / lessor / role |  |
| Acreage / valuation / tithe details |  |
| Nearby surnames |  |
| Variant spelling |  |
| Image / copy status |  |
| Citation |  |
| Implication for Ann Murray household work |  |

### Evidence Questions

- Is Kinawley actually present in PRONI tithe material?
- Are Murray households present before Griffith's Valuation?
- Are Munday, Monday, or Mundy absent in Kinawley in this source as well?
- Do townlands or neighbors suggest candidate families for Ann?

---

## 3. Lewis County Settlement FAN Sweep

**Goal:** Reconstruct the friends / associates / neighbors network around the Copley, Murray, Dolan, Hanley, Hannon, Gillooly, and related families.

**Primary pages:** [[RQ-M1-LEWIS-COUNTY-FAN-SWEEP|RQ-M1 Lewis County FAN Sweep]], [[Topics/Murray Settlement]], [[Topics/Irish Immigration to West Virginia]], [[People/Michael Copley Sr]]

### Scope

Search 1840, 1850, 1860, and 1870 Lewis County census records and early deed indexes for:

Murray, Murry, Murrey, Copley, Copely, Dolan, Hanley, Gillooly, Gilhooly, Mullooly, Hannon, Reynolds, Mulroney, Mahon, Giblin, Munday, Monday, and Mundy.

### Census Capture Table

Enter final findings in [[RQ-M1-LEWIS-COUNTY-FAN-SWEEP|RQ-M1 Lewis County FAN Sweep]].

| Year | Household | Age(s) | Birthplace(s) | Occupation(s) | District / locality | Adjacent households | Irish surnames nearby | Source citation | Notes |
|---|---|---|---|---|---|---|---|---|---|
| 1840 |  |  |  |  |  |  |  |  |  |
| 1850 |  |  |  |  |  |  |  |  |  |
| 1860 |  |  |  |  |  |  |  |  |  |
| 1870 |  |  |  |  |  |  |  |  |  |

### Deed / Tax Capture Table

| Date | Name | Record type | Book/page | Acreage | Watercourse / place | Neighbors | Witnesses | Citation | Notes |
|---|---|---|---|---|---|---|---|---|---|
|  |  |  |  |  |  |  |  |  |  |

### Evidence Questions

- Which Irish Catholic families appear before or near the 1843 Copley land purchase?
- Do Murray households appear close enough to explain Ann's destination or marriage network?
- Do Dolan, Hanley, Gillooly, Hannon, or Reynolds households cluster around the same roads, waterways, or church context?
- Does the FAN sweep support or weaken the Murray Settlement framework?

---

## 4. Mary Copely Giblin / Iowa Proof Trail

**Goal:** Determine whether Mary Copely Giblin was a sibling or close relative of Michael Copley Sr. and reconstruct the Iowa Copely branch.

**Primary pages:** [[People/Mary Copely Giblin]], [[People/Stephen Donald Copley]], [[People/Fern Loretta Copley MayBee]]

### Priority Checklist

- Identify Stephen Donald Copley's parents through baptism, birth, marriage, census, obituary, probate, or cemetery records.
- Work through Mary's reported children: John, Thomas, Martin, Michael, Mary, and Catharine.
- Contact or research Mitchellville Cemetery for all Copley stones and inscriptions.
- Search Crawford County, Iowa probate, church, land, cemetery, and newspaper records.
- Look for parent, sibling, birthplace, sponsor, witness, or obituary clues that connect Mary to Roscommon, Kilcorkey, Tully, Kilgefin, or Michael Copley Sr.

### Cemetery / Probate Request Template

Subject: Copley / Copely family record request - Crawford County Iowa / Mitchellville Cemetery

Hello,

I am researching Mary Copely Giblin, born in County Roscommon, Ireland, and later associated with Crawford County, Iowa. I am trying to document the Copley / Copely descendants and determine whether Mary was close kin to Michael Copley Sr. of Lewis County, West Virginia.

Could you please advise whether your records include cemetery, burial, probate, obituary, church, or local-history entries for Copley / Copely family members, especially:

- Mary Copely Giblin
- Stephen Donald Copley
- Fern Loretta Copley MayBee
- Merton Dale Copley
- A.B. Copley
- George B. Copley
- Lavonne Copley
- Nellie V. Copley

I am especially interested in full inscriptions, dates, family relationships, parents, birthplaces, spouses, and source citations.

### Capture Template

| Field | Entry |
|---|---|
| Person |  |
| Record type |  |
| Date |  |
| Place |  |
| Parents named? |  |
| Spouse named? |  |
| Birthplace named? |  |
| Cemetery / church / court |  |
| Citation |  |
| Link to Mary Copely Giblin |  |
| Follow-up record |  |

---

## 5. Copley No. 1 Oil Records

**Goal:** Determine whether the 1900 oil strike on Copley land produced lease, royalty, probate, or estate evidence that affected family finances and education.

**Primary pages:** [[Topics/1900 Copley Oil Strike]], [[People/John Copley]], [[The Copley Family Narrative]]

### Courthouse Request Template

Subject: Lewis County WV oil lease / royalty / probate lookup - Copley No. 1, 1899-1925

Hello,

I am researching the Copley No. 1 oil strike on Copley family land in Lewis County around 1900. I am looking for land, lease, royalty, mineral-rights, title-chain, probate, or estate records that may document John Copley's property and any oil-related income or transfers.

Could you please advise how to search or request copies for:

- Oil and gas leases involving John Copley or Copley family land, roughly 1899-1925
- Royalty assignments or mineral-rights records
- Title-chain records for the farm containing Copley No. 1
- Probate or estate records for John Copley, died 1925
- Any index entries under Copley / Copely surname variants

For each record, I am hoping to capture book/page, date, parties, land description, lease terms, royalty terms, witnesses, and related filings.

### Capture Template

| Field | Entry |
|---|---|
| Record type |  |
| Repository / book / page |  |
| Date |  |
| Parties |  |
| Land description |  |
| Oil company / operator |  |
| Lease or royalty terms |  |
| Mineral rights language |  |
| Witnesses / officials |  |
| Related probate / estate reference |  |
| Citation |  |
| Implication for education / mobility hypothesis |  |

### Evidence Questions

- Was John Copley paid lease, royalty, or mineral income?
- Did oil rights remain with the family, transfer, or get partitioned?
- Do estate or probate records show assets connected to oil income?
- Does any financial evidence support or limit the claim that oil income helped fund education or professional mobility?

---

## Update Targets by Finding Type

| Finding type | Pages to update |
|---|---|
| Murray deed confirms early settlement anchor | [[RQ-M1-JOHN-MURRAY-DEED-FINDINGS|RQ-M1 John Murray Deed Findings]], [[Sources and Evidence Index]], [[Topics/Murray Settlement]], [[People/Ann Copley]], [[Research Priorities and Action Items]] |
| Direct Ann surname record appears | [[Sources and Evidence Index]], [[People/Ann Copley]], [[RQ-M5-PHASE-2-FINDINGS]], [[Family Tree]], [[The Copley Family Narrative]] |
| FAN sweep changes settlement membership | [[Topics/Murray Settlement]], [[Topics/Irish Immigration to West Virginia]], [[People Directory]], affected person pages |
| Iowa record identifies Mary Copely Giblin kinship | [[Sources and Evidence Index]], [[People/Mary Copely Giblin]], [[Family Tree]], [[The Copley Family Narrative]] |
| Oil lease / royalty proof appears | [[Sources and Evidence Index]], [[Topics/1900 Copley Oil Strike]], [[People/John Copley]], [[The Copley Family Narrative]] |
