---
title: Copley Family Tree
date: 2026-04-13
tags:
  - "#family-tree"
  - "#genealogy"
  - "#copley-family"
---

# Copley Family Tree

This page provides a visual, multi-generation map of the Copley family line from the Irish immigrant ancestors through G28 descendants. The diagram is organized top-to-bottom by generation and uses branch color-coding to make lineage groups easier to follow.

> [!tip] Navigation
> In Quartz and Obsidian, use this diagram as a visual reference alongside individual profile pages. Where clickable labels are enabled, you can click names to navigate to related person pages.

## Mermaid Diagram

```mermaid
graph TD

%% ============================================================
%% STYLE DEFINITIONS
%% ============================================================
%% Green  — Irish Ancestors (Immigrants)
%% Blue   — G23 John & Mary Ellen Copley
%% Purple — G24 siblings of Michael Joseph Copley
%% Teal   — Nelle Copley Sardo branch
%% Orange — Michael Joseph Copley line (Stephen's children)
%% Rose   — Thomas Copley line (Tom's children)
%% Gold   — G27 Grandchildren
%% Pink   — G28 Great-grandchildren
%% Amber  — Spouses / married-in

classDef irish fill:#1a3d2e,stroke:#4caf7c,stroke-width:2px,color:#f0f0f0
classDef g23 fill:#1b3a50,stroke:#5ca8d4,stroke-width:2px,color:#f0f0f0
classDef g24sibling fill:#2a2050,stroke:#8b7fd4,stroke-width:2px,color:#f0f0f0
classDef sardoBranch fill:#1b4a3a,stroke:#2ec4b6,stroke-width:2px,color:#f0f0f0
classDef stephenLine fill:#4a2800,stroke:#e89a3c,stroke-width:2px,color:#f0f0f0
classDef tomLine fill:#5a1a2a,stroke:#e06080,stroke-width:2px,color:#f0f0f0
classDef grandchild fill:#4a3a10,stroke:#d4b850,stroke-width:2px,color:#f0f0f0
classDef greatgrand fill:#5a2050,stroke:#e070a0,stroke-width:2px,color:#f0f0f0
classDef spouse fill:#2d1a4a,stroke:#a77bda,stroke-width:1px,color:#f0f0f0,stroke-dasharray:5 5
classDef marriage fill:none,stroke:#d4a843,stroke-width:2px,color:#d4a843

%% ============================================================
%% GENERATION 1 — IRISH IMMIGRANTS
%% ============================================================
MICHAEL_SR["🍀 Michael Copley<br/>b. 1813, Kilgefin, Ireland<br/>d. 1897"]:::irish
ANN_MUNDAY["🍀 Ann Elizabeth Munday<br/>b. 1823, Kinawley, Ireland<br/>d. 1909"]:::irish

MICHAEL_SR --- M1{ }:::marriage
M1 --- JOHN

%% ============================================================
%% GENERATION 2 (G23) — JOHN COPLEY
%% ============================================================
JOHN["John Copley<br/>b. Nov 3, 1843<br/>d. Sep 6, 1925"]:::g23
MARY_DOLAN["Mary Ellen Dolan<br/>b. Nov 28, 1855<br/>d. Dec 5, 1901"]:::g23

JOHN --- M2{ }:::marriage
M2 --- THOMAS_E
M2 --- MARY_FLESCH
M2 --- ANNE_C
M2 --- NELLE
M2 --- MICHAEL_JR

%% ============================================================
%% GENERATION 3 (G24) — CHILDREN OF JOHN
%% ============================================================
THOMAS_E["Thomas E. Copley<br/>b. 1892 · d. 1968<br/><i>m. Drusilla · no issue</i>"]:::g24sibling
MARY_FLESCH["Mary Copley Flesch<br/>b. 1893 · d. 1971<br/><i>m. Edward Flesch</i>"]:::g24sibling
ANNE_C["Anne Copley<br/>b. 1895 · d. 1970<br/><i>never married</i>"]:::g24sibling

%% --- Nelle Copley Sardo branch ---
NELLE["Ellen B. 'Nelle' Copley<br/>b. Dec 23, 1897<br/>d. Feb 11, 1977"]:::sardoBranch
ROBERT_SARDO["Robert Samuel Sardo<br/>physician<br/><i>m. Aug 16, 1931</i>"]:::spouse

NELLE --- M3{ }:::marriage
M3 --- SARAH_SARDO
M3 --- MARY_SARDO

%% --- Michael Joseph Copley branch ---
MICHAEL_JR["Michael Joseph Copley<br/>b. Sep 16, 1898<br/>d. Sep 17, 1988<br/><i>chemist, USDA Director</i>"]:::g24sibling
MARION["Marion Elizabeth Partlow<br/><i>m. 1933</i> · d. 1977"]:::spouse

MICHAEL_JR --- M4{ }:::marriage
M4 --- STEPHEN
M4 --- TOM

%% ============================================================
%% GENERATION 4 (G25) — SARDO CHILDREN
%% ============================================================
SARAH_SARDO["Sarah Ellen Sardo<br/>b. Dec 19, 1933"]:::sardoBranch
MATT_ARENA["Matthew Paul Arena<br/><i>m. Nov 1956</i>"]:::spouse

SARAH_SARDO --- M5{ }:::marriage
M5 --- CATHY_A
M5 --- ANNMARIE_A
M5 --- JIM_A
M5 --- MATT_JR_A
M5 --- JOHN_A

MARY_SARDO["Mary Carmella Sardo<br/>b. May 3, 1936"]:::sardoBranch
LOUIS_RULAND["Louis Ruland"]:::spouse

MARY_SARDO --- M6{ }:::marriage
M6 --- LOUIS_III
M6 --- ROBERT_R
M6 --- CHARLES_R
M6 --- JOHN_R
M6 --- MICHAEL_R

%% ============================================================
%% GENERATION 4 (G25) — MICHAEL COPLEY'S SONS
%% ============================================================
STEPHEN["Stephen Michael Copley<br/>b. Apr 29, 1936<br/><i>physicist, professor</i>"]:::stephenLine
MARCIA["Marcia Thornton<br/><i>1st wife · div. 1983</i>"]:::spouse
JUDY["Judith 'Judy' Todd<br/><i>2nd wife · m. 1984</i>"]:::spouse

STEPHEN --- M7{ }:::marriage
M7 --- MC
M7 --- SARA_C
M7 --- PHILIP
M7 --- PAUL
M7 --- PETER
M7 --- SUSAN_C
M7 --- STEPHEN_J

STEPHEN --- M7B{ }:::marriage
M7B --- AMY

TOM["Thomas Partlow Copley<br/>b. Oct 29, 1944<br/><i>marketing, PhD</i>"]:::tomLine
BARBARA["Barbara Dee LaForce<br/><i>m. Mar 19, 1967</i>"]:::spouse

TOM --- M8{ }:::marriage
M8 --- ZACH
M8 --- ERIN
M8 --- CHARLES_C

%% ============================================================
%% GENERATION 5 (G26) — ARENA CHILDREN
%% ============================================================
CATHY_A["Cathy Arena"]:::sardoBranch
ANNMARIE_A["Ann Marie Arena"]:::sardoBranch
JIM_A["Jim Arena"]:::sardoBranch
MATT_JR_A["Matt Jr. Arena"]:::sardoBranch
JOHN_A["John Arena"]:::sardoBranch

%% ============================================================
%% GENERATION 5 (G26) — RULAND CHILDREN
%% ============================================================
LOUIS_III["Louis III Ruland"]:::sardoBranch
ROBERT_R["Robert Ruland"]:::sardoBranch
CHARLES_R["Charles Ruland"]:::sardoBranch
JOHN_R["John Ruland"]:::sardoBranch
MICHAEL_R["Michael Ruland"]:::sardoBranch

%% ============================================================
%% GENERATION 5 (G26) — STEPHEN'S CHILDREN (with Marcia)
%% ============================================================
MC["Michael Copley<br/>b. 1959<br/><i>m. Patti Inman</i>"]:::stephenLine
SARA_C["Sara Copley<br/>b. 1961<br/><i>m. R. Cox '86</i>"]:::stephenLine
PHILIP["Philip Copley<br/>b. 1962"]:::stephenLine
PAUL["Paul Copley<br/>b. 1964"]:::stephenLine
PETER["Peter Copley<br/>b. 1966<br/><i>m. K. VanderMolen</i>"]:::stephenLine
SUSAN_C["Susan Copley<br/>b. 1967<br/><i>m. A. Leonhardt</i>"]:::stephenLine
STEPHEN_J["Stephen J. Copley ✝<br/>b. 1970 · d. 2023"]:::stephenLine

%% Stephen's child with Judy
AMY["Amy E. Copley Geist<br/>b. Jul 11, 1990<br/><i>m. Nathan Geist 2021</i>"]:::stephenLine

%% ============================================================
%% GENERATION 5 (G26) — TOM'S CHILDREN
%% ============================================================
ZACH["Zachary R. Copley<br/>b. May 1969<br/><i>m. Wendy Thorpe</i>"]:::tomLine
ERIN["Erin E. Copley Bird<br/>b. Apr 1973<br/><i>m. Brian Bird</i>"]:::tomLine
CHARLES_C["Charles H. Copley<br/>b. Oct 1985"]:::tomLine

%% ============================================================
%% GENERATION 6 (G27) — GRANDCHILDREN
%% ============================================================
MC --- LAUREN
MC --- STEPHEN_GC

LAUREN["Lauren Copley Meier<br/><i>m. Lane Meier</i>"]:::grandchild
STEPHEN_GC["Stephen Copley"]:::grandchild

SARA_C --- BOBBY_COX
BOBBY_COX["Robert 'Bobby' Cox<br/>b. Oct 3, 1988"]:::grandchild

SUSAN_C --- GEORGIA
GEORGIA["Georgia Leonhardt"]:::grandchild

AMY --- WILLIAM_G
WILLIAM_G["William S. Geist<br/>b. Dec 9, 2023"]:::grandchild

ZACH --- WYATT
ZACH --- AUGUST
WYATT["Wyatt Copley"]:::grandchild
AUGUST["August Copley"]:::grandchild

ERIN --- EVELYN
ERIN --- SAMUEL
EVELYN["Evelyn Bird"]:::grandchild
SAMUEL["Samuel Bird"]:::grandchild

%% ============================================================
%% GENERATION 7 (G28) — GREAT-GRANDCHILDREN
%% ============================================================
LAUREN --- ROWAN
LAUREN --- ELIZABETH_M
ROWAN["Rowan Meier"]:::greatgrand
ELIZABETH_M["Elizabeth Meier"]:::greatgrand

%% ============================================================
%% SUMMARY NODES — Compact references for large sub-branches
%% ============================================================
ARENA_G27["<b>Arena G27</b><br/>Sarah, Martin Jr., James,<br/>Matthew, Danielle, Siena, Luca"]:::sardoBranch
RULAND_G27["<b>Ruland G27</b><br/>18+ grandchildren incl.<br/>Louis IV, Chris, Taylor, Kelly,<br/>Jeffrey, Jamie, Katie…"]:::sardoBranch
ARENA_RULAND_G28["<b>Arena/Ruland G28</b><br/>William 'Calvin' Haker, Louis V,<br/>Olivia, Luke, Cooper, Paige,<br/>Peyton, John…"]:::greatgrand

CATHY_A --- ARENA_G27
ANNMARIE_A --- ARENA_G27
JIM_A --- ARENA_G27
MATT_JR_A --- ARENA_G27
JOHN_A --- ARENA_G27

LOUIS_III --- RULAND_G27
ROBERT_R --- RULAND_G27
CHARLES_R --- RULAND_G27
JOHN_R --- RULAND_G27
MICHAEL_R --- RULAND_G27

ARENA_G27 --- ARENA_RULAND_G28
RULAND_G27 --- ARENA_RULAND_G28

%% ============================================================
%% INVISIBLE MARRIAGE CONNECTOR STYLING — tiny diamond nodes
%% ============================================================
style M1 fill:#d4a843,stroke:#d4a843,width:8px,height:8px
style M2 fill:#d4a843,stroke:#d4a843,width:8px,height:8px
style M3 fill:#d4a843,stroke:#d4a843,width:8px,height:8px
style M4 fill:#d4a843,stroke:#d4a843,width:8px,height:8px
style M5 fill:#d4a843,stroke:#d4a843,width:8px,height:8px
style M6 fill:#d4a843,stroke:#d4a843,width:8px,height:8px
style M7 fill:#d4a843,stroke:#d4a843,width:8px,height:8px
style M7B fill:#d4a843,stroke:#d4a843,width:8px,height:8px
style M8 fill:#d4a843,stroke:#d4a843,width:8px,height:8px
```

## Legend

- **Green**: Irish ancestors (immigrant generation)
- **Blue**: G23 core John + Mary Ellen branch markers
- **Purple**: G24 siblings
- **Teal**: Nelle Copley Sardo branch
- **Orange**: Michael Joseph Copley / Stephen line
- **Rose**: Thomas (Tom) line
- **Gold**: G27 grandchildren
- **Pink**: G28 great-grandchildren
- **Amber dashed/outlined nodes**: spouses and marriage connectors

## Usage Note

Use this family tree together with [[People Directory]] and [[People/_People Directory|People Directory (Individual Profiles)]] for full biographical and source context.
