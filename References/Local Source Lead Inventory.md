---
title: Local Source Lead Inventory
aliases:
  - Local Source Mining Inventory
  - Source Mining Leads
date: 2026-06-12
tags:
  - "#copley-family"
  - "#research-reference"
  - "#sources"
---

# Local Source Lead Inventory

This note records what can be advanced with local repo sources and command-line tools, without live FamilySearch browsing.

## Method

Local searches used `rg` across:

- `References/`
- `People/`
- `Topics/`
- `Places/`
- `RQ-*`
- `static/sources/`
- central pages such as [[Research Priorities and Action Items]], [[Sources and Evidence Index]], [[Volunteer Record Request Tasks]], and [[Tier 1 Research Execution Kit]]

The scan focused on record-target terms: `Bible`, `heir`, `bond`, `consent`, `surety`, `appraisement`, `settlement`, `Order Book`, `Deed Book 42`, `South Penn`, `Frank Partlow`, `Alice Rude`, `Mary Copely`, `Giblin`, `Kinawley`, `Munday`, `Murray`, `Bredon`, `Captain John`, `DAR`, `pension`, `naturalization`, `PRONI`, and `Catholic`.

## Source Packets With The Most Remaining Leverage

| Source packet | Local location | Best use now |
|---|---|---|
| Michael Copley probate reports | `static/sources/claude-michael-parents/` plus [[References/Claude for Chrome Michael Copley Sr Probate Estate Search]] | Keep the Order Book 1-A / Appraisement / Settlement path straight and avoid repeating dead ends. |
| Michael parentage control sheet | [[References/Michael Copley Sr Parentage Evidence Audit and Request Packet]] | Use for all Michael parentage requests and evidence capture. |
| Oil-title Claude reports | `static/sources/claude-oil-title/` plus oil-title reference pages | Request Book 42 p. 267, interpret Book 39 companion lease, and build royalty / title queue. |
| Murray / Murry FAN, tax, and marriage reports | `static/sources/claude-1870-fan-sweep/`, `static/sources/claude-tax-list/`, `static/sources/claude-marriage/` | Drive courthouse request for Luke / Anne bond and non-indexed county/church follow-up. |
| Tom Copley May 2026 correction | `static/sources/tom-corrections/2026-05-25-murray-pronunciation-munday-correction.txt` | Keep Munday as preferred recorded surname and Murray as downgraded variant. |
| Tom / Steve May 2026 parentage thread | `static/sources/tom-steve-emails/` and [[References/Tom and Steve Copley May 2026 Michael Parents Thread]] | Preserve family-memory leads without treating AI-derived Dolan claims as proof. |
| Partlow manuscript note | [[References/Harry C Partlow 1960 Letter and Handwritten Lineage]] | Guide original-record proof chain from Marion Partlow to Benjamin Partlow. |
| Clark County Partlow request | [[References/Clark County Illinois Partlow Rude Marriage Request]] | Send the 1900 Frank / Nollie Partlow and Alice Rude request. |
| Copley History source audit | [[References/Copley History Part 1 and Appendix Source Audit]] | Prioritize underused appendix and place-rich narrative details. |

## PDF / OCR Note

Most root-level PDFs in the repo are generated exports of existing Markdown pages. They are useful for distribution but are not the best source-mining targets. Prioritize non-generated source PDFs and raw source packets under `static/sources/`, plus extracted notes in `References/`.

If a future task names a specific image-only PDF, use OCR or `pdftotext` for that file and preserve the extracted text or a source note under `static/sources/<slug>/` and `References/`.

## New Leads From This Mining Pass

| Lead | Action |
|---|---|
| Several major open targets existed in different pages but not one queue. | Created [[Open Record Targets]]. |
| Evidence status language needed one traceability view across sources. | Created [[Source to Claim Matrix]]. |
| The Michael parentage packet was useful but not yet integrated into a broader queue. | Linked it from [[Open Record Targets]] and dashboards. |
| Partlow has an existing detailed page; it needed to be represented in the master queue. | Added Frank/Rude, census image, Partlow book, pension, and will targets to [[Open Record Targets]]. |
| Mary Copely Giblin has a plausible branch question but lacked a compact dashboard. | Added [[RQ-C5-MARY-COPELY-GIBLIN-IOWA]]. |
