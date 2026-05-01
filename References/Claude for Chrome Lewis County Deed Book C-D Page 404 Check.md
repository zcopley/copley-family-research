---
title: Claude for Chrome Lewis County Deed Book C-D Page 404 Check
aliases:
  - Lewis County Page 404 Check
  - Claude Chrome Page 404 Check
  - Marwee Levi Wife Page 404 Check
date: 2026-04-30
tags:
  - "#copley-family"
  - "#murray-settlement"
  - "#deed-records"
  - "#lewis-county"
  - "#research-reference"
  - "#research-in-progress"
---

# Claude for Chrome Lewis County Deed Book C-D Page 404 Check

This note captures the April 30, 2026 Claude for Chrome follow-up that tested the Deed Book C-D target previously summarized as **"Marwee Levi wife" -> G.D. Camden -> page 404**. It should be read with [[RQ-M1-JOHN-MURRAY-DEED-FINDINGS|RQ-M1 John Murray Deed Findings]], [[References/Claude for Chrome Lewis County Deed Research Brief|Claude for Chrome Lewis County Deed Research Brief]], and [[References/Claude for Chrome Lewis County Murray Grantee Search|Claude for Chrome Lewis County Murray Grantee Search]].

## Summary

Claude for Chrome checked the physical **page 404** in Lewis County Deed Book C-D, DGS **8219256**, and found that the earlier target does **not** match the actual page content.

**Main result:** physical page **404** is on **image 436**, not image 421, and it contains only out-of-state wife-acknowledgment certificates for **Caroline F. Green** and **Emma S. Fleming**. No **Camden**, **Murray**, **Marwee**, or **Levi** appears on page 404 or the immediately adjacent pages checked.

This is an important negative result for RQ-M1:

- the prior **page 404** target is now a **confirmed mismatch**
- the built-in M-index reading may still preserve a real early lead
- but the page reference, page-counting assumption, or surname reading is at least partly wrong

## Deed Target Checked

| Field | Value |
|---|---|
| DGS | 8219256 |
| Film | 818742 |
| Collection | Deeds, v. C-D, 1824-1834 |
| Confirmed page | Book page 404 |
| Confirmed image | 436 |
| Adjacent images checked | 432-435 |

Direct links:

- Image 436: `https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSGX-ZSDF-P?cat=koha%3A82073&i=435&lang=en`
- Image 435: `https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSGX-ZSDJ-B?cat=koha%3A82073&i=434&lang=en`
- Image 432: `https://www.familysearch.org/ark:/61903/3:1:3Q9M-CSGX-ZSDK-Z?cat=koha%3A82073&i=431&lang=en`

## Index-to-Deed Match Result

| Question | Result |
|---|---|
| Indexed target checked | "Marwee Levi wife" -> G.D. Camden -> page 404 |
| Actual content on page 404 | Wife-acknowledgment certificates only |
| Camden present? | No |
| Murray / Marwee present? | No |
| Levi present? | No |
| Match status | Confirmed mismatch |

## What Page 404 Actually Contains

Physical page 404 contains no deed body. It is made up of acknowledgment and attestation material tied to a different January 1830 deed:

- **Caroline F. Green**, wife of **Henry F. Green**
- **Emma S. Fleming**, wife of **Alexander Fleming**
- Windham County, Vermont certificate dated **4 January 1830**
- Windham County Clerk attestation signed by **James Elliot**
- Related Massachusetts certification continuing onto page 405

Claude also checked pages **396-403** on images **432-435** and reported that those pages likewise contain only New York, Vermont, and Massachusetts certificate material for what appears to be a large multi-party deed. No **Camden**, **Murray**, **Marwee**, or **Levi** appeared anywhere on pages **396-405**.

## Interpretation

This check does **not** support the earlier assumption that the page-404 built-in index target leads directly to a Murray-variant or Camden-linked deed on the physical page 404 now visible in DGS 8219256.

The most likely possibilities are:

1. the built-in index page number was copied or interpreted incorrectly
2. the target refers to a different counting convention
3. the surname reading itself is wrong
4. the relevant deed body sits earlier in the same large transaction block and the index was attached to a different internal page reference

## Failure Mode

**Primary failure:** the index target does not match the confirmed physical page 404.

Specific problems documented by Claude:

- prior image estimate for page 404 was wrong; confirmed location is **image 436**
- earlier offset logic appears to have assumed **1 image = 1 page**, but the actual relationship here is **2 deed-book pages per image**
- adjacent pages **396-403** also fail to show the expected parties
- the deed body for the large recorded transaction was not examined in this one-target session

## Recommended Next Step

Do **not** keep using physical page 404 as a live transcription target.

Instead:

1. preserve page 404 as a **negative result**
2. keep page **334** and the obscured **3xx** target as live built-in-index leads
3. re-check the built-in M index against the actual page-counting convention
4. if pursuing the Camden lead, inspect the deed body earlier in the large transaction block around pages **380-395**
