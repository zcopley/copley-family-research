---
title: Copley Family Tree
date: 2026-04-13
tags:
  - "#family-tree"
  - "#genealogy"
  - "#copley-family"
---

# Copley Family Tree

This page is now a relationship hub rather than a single all-family chart. Use it to orient yourself quickly, then jump to the relevant branch pages and person profiles.

For chronology, pair this page with [[Who Was Alive When]]. For story and evidence strength, keep [[Visual Story Atlas]] and [[Sources and Evidence Index]] nearby. For the older speculative English ancestry question, go to [[Topics/Bredon Descent]] and [[Topics/Captain John Copley Research]].

> [!tip] Best Way To Use This Page
> Start with the founding family overview, then open the branch chart that matches the person you care about. Use [[People Directory]] when you want the full list of profiles by generation.

## Branch Jump List

- [[#Founding Family Overview|Founding Family Overview]]
- [[#John And Mary Ellens Children|John and Mary Ellen's Children]]
- [[#Nelle--Sardo-Branch|Nelle / Sardo Branch]]
- [[#Michael Joseph To Stephen Line|Michael Joseph to Stephen Line]]
- [[#Michael Joseph To Tom Line|Michael Joseph to Tom Line]]
- [[#Older And Speculative Ancestry|Older and Speculative Ancestry]]

## How To Read These Family Charts

- **Solid family boxes** show direct family members in the documented line.
- **Dashed boxes** show spouses or in-laws.
- **Gold diamond connectors** mark marriages.
- **Muted branch-summary boxes** compress a larger descendant cluster when naming everyone would make the chart unreadable.
- **Light blue / green / peach / rose fills** distinguish the main trunk and branch groupings; they are only navigation aids, not evidence rankings.

## Founding Family Overview

This chart shows the immigrant couple, their best-documented child line, and the two branch-parent children whose descendants dominate the current vault.

```mermaid
flowchart TB
    classDef root fill:#e8f1fb,stroke:#2f5d8a,stroke-width:2px,color:#102235,font-weight:bold
    classDef family fill:#eef7ec,stroke:#397a43,stroke-width:2px,color:#132417
    classDef branch fill:#fff1df,stroke:#b86c1f,stroke-width:2px,color:#2b1604
    classDef spouse fill:#f4efff,stroke:#7a63b8,stroke-width:1.5px,color:#20163d,stroke-dasharray:5,5
    classDef muted fill:#f6f3ea,stroke:#8b7f67,stroke-width:1.5px,color:#2f2b22
    classDef marriage fill:#f0c75e,stroke:#b88912,stroke-width:2px,color:#2f2200

    MICHAEL["Michael Copley<br/>1813-1897"]:::root
    ANN["Ann Copley<br/>1823-1909"]:::root
    M1{"◇"}:::marriage
    JOHN["John Copley<br/>1843-1925"]:::family
    MARY["Mary Ellen Dolan Copley<br/>1855-1901"]:::spouse
    M2{"◇"}:::marriage
    THOMAS_E["Thomas E. Copley<br/>1892-1968"]:::muted
    MARY_F["Mary Copley Flesch<br/>1893-1971"]:::muted
    ANNE["Anne Copley<br/>1895-1970"]:::muted
    NELLE["Nelle Copley Sardo<br/>1897-1977"]:::branch
    MICHAEL_J["Michael Joseph Copley<br/>1898-1988"]:::branch

    MICHAEL --- M1
    ANN --- M1
    M1 --> JOHN
    JOHN --- M2
    MARY --- M2
    M2 --> THOMAS_E
    M2 --> MARY_F
    M2 --> ANNE
    M2 --> NELLE
    M2 --> MICHAEL_J
```

Best next pages for this section: [[Michael Copley Sr]], [[Ann Copley]], [[John Copley]], [[Mary Ellen Dolan Copley]], [[People Directory]].

## John And Mary Ellen's Children

This chart zooms in on the five children of John and Mary Ellen so readers can understand which lines did and did not become the main modern branches.

```mermaid
flowchart TB
    classDef parents fill:#e8f1fb,stroke:#2f5d8a,stroke-width:2px,color:#102235,font-weight:bold
    classDef core fill:#eef7ec,stroke:#397a43,stroke-width:2px,color:#132417
    classDef branch fill:#fff1df,stroke:#b86c1f,stroke-width:2px,color:#2b1604
    classDef muted fill:#f6f3ea,stroke:#8b7f67,stroke-width:1.5px,color:#2f2b22
    classDef summary fill:#f8e8e8,stroke:#b96a6a,stroke-width:1.5px,color:#331616
    classDef marriage fill:#f0c75e,stroke:#b88912,stroke-width:2px,color:#2f2200

    JOHN["John Copley"]:::parents
    MARY["Mary Ellen Dolan Copley"]:::parents
    M2{"◇"}:::marriage
    THOMAS_E["Thomas E. Copley<br/>no issue documented"]:::muted
    MARY_F["Mary Copley Flesch<br/>line not expanded here"]:::muted
    ANNE["Anne Copley<br/>never married"]:::muted
    NELLE["Nelle Copley Sardo<br/>Sardo branch parent"]:::branch
    MICHAEL_J["Michael Joseph Copley<br/>Stephen/Tom branch parent"]:::branch

    JOHN --- M2
    MARY --- M2
    M2 --> THOMAS_E
    M2 --> MARY_F
    M2 --> ANNE
    M2 --> NELLE
    M2 --> MICHAEL_J
```

Best next pages for this section: [[Ellen Bernadine Nelle Copley Sardo]], [[Michael Joseph Copley]], [[Who Was Alive When]].

## Nelle / Sardo Branch

This branch carries the Baltimore, Clarksville, Sherwood Forest, Arena, and Ruland lines. The chart keeps the main relationships visible while compressing the larger G27 and G28 clusters.

```mermaid
flowchart TB
    classDef parent fill:#e7f6ef,stroke:#2f7a5a,stroke-width:2px,color:#10281c,font-weight:bold
    classDef child fill:#eaf7fb,stroke:#3b7394,stroke-width:2px,color:#10232d
    classDef spouse fill:#f4efff,stroke:#7a63b8,stroke-width:1.5px,color:#20163d,stroke-dasharray:5,5
    classDef summary fill:#f6f3ea,stroke:#8b7f67,stroke-width:1.5px,color:#2f2b22
    classDef marriage fill:#f0c75e,stroke:#b88912,stroke-width:2px,color:#2f2200

    NELLE["Nelle Copley Sardo"]:::parent
    ROBERT["Robert Samuel Sardo"]:::spouse
    M1{"◇"}:::marriage
    SARAH["Sarah Ellen Sardo Arena"]:::child
    CARMELLA["Mary Carmella Sardo Ruland"]:::child
    MATT["Matthew Paul Arena"]:::spouse
    LOUIS["Louis Ruland"]:::spouse
    M2{"◇"}:::marriage
    M3{"◇"}:::marriage
    ARENA_G27["Arena descendants<br/>G27 and G28 summary"]:::summary
    RULAND_G27["Ruland descendants<br/>G27 and G28 summary"]:::summary

    NELLE --- M1
    ROBERT --- M1
    M1 --> SARAH
    M1 --> CARMELLA
    SARAH --- M2
    MATT --- M2
    CARMELLA --- M3
    LOUIS --- M3
    M2 --> ARENA_G27
    M3 --> RULAND_G27
```

Best next pages for this section: [[Ellen Bernadine Nelle Copley Sardo]], [[Sarah Ellen Sardo Arena]], [[Mary Carmella Sardo Ruland]], [[Places/Baltimore Maryland]], [[Places/Clarksville Maryland]].

## Michael Joseph To Stephen Line

This chart follows the line that leads into the Connecticut, Southern California, Hinsdale, and State College branches.

```mermaid
flowchart TB
    classDef parent fill:#fff1df,stroke:#b86c1f,stroke-width:2px,color:#2b1604,font-weight:bold
    classDef child fill:#eef7ec,stroke:#397a43,stroke-width:2px,color:#132417
    classDef spouse fill:#f4efff,stroke:#7a63b8,stroke-width:1.5px,color:#20163d,stroke-dasharray:5,5
    classDef summary fill:#f6f3ea,stroke:#8b7f67,stroke-width:1.5px,color:#2f2b22
    classDef marriage fill:#f0c75e,stroke:#b88912,stroke-width:2px,color:#2f2200

    MICHAEL_J["Michael Joseph Copley"]:::parent
    MARION["Marion Elizabeth Partlow"]:::spouse
    M1{"◇"}:::marriage
    STEPHEN["Stephen Michael Copley"]:::child
    MARCIA["Marcia Thornton"]:::spouse
    JUDY["Judith Ann Todd"]:::spouse
    M2{"◇"}:::marriage
    M3{"◇"}:::marriage
    FIRST_SET["Michael, Sara, Philip, Paul,<br/>Peter, Susan, Stephen Jr."]:::summary
    AMY["Amy E. Copley Geist"]:::child

    MICHAEL_J --- M1
    MARION --- M1
    M1 --> STEPHEN
    STEPHEN --- M2
    MARCIA --- M2
    M2 --> FIRST_SET
    STEPHEN --- M3
    JUDY --- M3
    M3 --> AMY
```

Best next pages for this section: [[Stephen Michael Copley]], [[Amy E. Copley Geist]], [[Michael Copley (b. 1959)]], [[Philip Copley]], [[People Directory]].

## Michael Joseph To Tom Line

This branch is smaller on the page and easier to read whole. It leads directly into the Zach / Erin / Charles lines and the living descendants represented elsewhere in the vault.

```mermaid
flowchart TB
    classDef parent fill:#fdecef,stroke:#b85b78,stroke-width:2px,color:#31101b,font-weight:bold
    classDef child fill:#eef7ec,stroke:#397a43,stroke-width:2px,color:#132417
    classDef spouse fill:#f4efff,stroke:#7a63b8,stroke-width:1.5px,color:#20163d,stroke-dasharray:5,5
    classDef summary fill:#f6f3ea,stroke:#8b7f67,stroke-width:1.5px,color:#2f2b22
    classDef marriage fill:#f0c75e,stroke:#b88912,stroke-width:2px,color:#2f2200

    MICHAEL_J["Michael Joseph Copley"]:::child
    MARION["Marion Elizabeth Partlow"]:::spouse
    M1{"◇"}:::marriage
    TOM["Thomas Partlow Copley"]:::parent
    DEE["Barbara Dee LaForce"]:::spouse
    M2{"◇"}:::marriage
    ZACH["Zachary R. Copley"]:::child
    ERIN["Erin E. Copley Bird"]:::child
    CHARLES["Charles H. Copley"]:::child
    G27["Wyatt, Augie, Evy, Sam<br/>and other direct descendants"]:::summary

    MICHAEL_J --- M1
    MARION --- M1
    M1 --> TOM
    TOM --- M2
    DEE --- M2
    M2 --> ZACH
    M2 --> ERIN
    M2 --> CHARLES
    ZACH --> G27
    ERIN --> G27
```

Best next pages for this section: [[Thomas Partlow Copley]], [[Zachary R. Copley]], [[Erin E. Copley Bird]], [[Charles H. Copley]].

## Older And Speculative Ancestry

The pre-immigrant English / Captain John line is still important, but it is a different kind of visualization problem because it mixes documented and speculative links.

- For that question, use [[Topics/Bredon Descent]].
- For the Captain John evidence and uncertainty discussion, use [[Topics/Captain John Copley Research]].
- For the Irish immigrant-forward family structure, stay on this page and the linked person profiles.

## Legacy Full Chart

The earlier all-in-one chart is kept only as a legacy reference. It is no longer the primary way to navigate the family relationships.

<details>
<summary>Open the old full-chart image</summary>

![Legacy Copley Family Tree Diagram](../static/images/copley-family-tree-diagram.jpg)

</details>

## Use With

- [[People Directory]] for the full generation-by-generation profile list
- [[Who Was Alive When]] for overlapping lifespans and era snapshots
- [[Visual Story Atlas]] for the research/story view
- [[Sources and Evidence Index]] for claim strength and open questions
