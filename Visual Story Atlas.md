---
title: Visual Story Atlas
aliases:
  - Story Atlas
  - Visual Atlas
  - Diagram Atlas
description: Diagram-first guide to the Copley family story, evidence status, settlement network, and active research quests.
date: 2026-04-27
tags:
  - "#copley-family"
  - "#genealogy"
  - "#index"
  - "#visual-guide"
  - "#mermaid"
---

# Visual Story Atlas

This atlas is the diagram-first guide to the Copley family project. Use it when you want the whole story before diving into detailed profiles, source notes, and research tasks.

For relationship details, keep [[Family Tree]] nearby. For claim strength, use [[Sources and Evidence Index]].

## 1. Family Journey Map

```mermaid
graph LR
    DEEP["Deep-origin hypothesis<br/>Bredon / Captain John<br/>1375-1813"]:::plausible
    KIL["Kilgefin + Fairymount<br/>Copely roots<br/>1813-1837"]:::strong
    KIN["Kinawley<br/>Ann Munday / likely Murray<br/>1823+"]:::strong
    SEA["Atlantic migration<br/>Kutusoff + Powhatan<br/>1837-1838"]:::verified
    LAB["Infrastructure labor<br/>roads / turnpike / rail<br/>1838-1843"]:::plausible
    SET["Murray Settlement<br/>Lewis County<br/>1838-1849"]:::plausible
    LAND["Copley land purchase<br/>Michael + Patrick<br/>1843"]:::verified
    OIL["Copley No. 1<br/>oil strike<br/>1900"]:::verified
    PRO["Professional era<br/>science / nursing / academia<br/>1900+"]:::verified
    IOWA["Iowa Copely branch<br/>Mary Copely Giblin<br/>1814-1884"]:::plausible
    
    DEEP -. unproven bridge .-> KIL
    KIL --> SEA
    KIN --> SET
    SEA --> LAB
    LAB --> SET
    SET --> LAND
    LAND --> OIL
    OIL --> PRO
    KIL -. diaspora clue .-> IOWA
    IOWA -. kinship target .-> KIL
    
    classDef verified fill:#c8e6c9,stroke:#2e7d32,color:#102411
    classDef strong fill:#bbdefb,stroke:#1565c0,color:#0d1b2a
    classDef plausible fill:#fff3e0,stroke:#ef6c00,color:#1f1300
```

## 2. Kinship and Settlement Network

```mermaid
graph TB
    subgraph IRE["Ireland source communities"]
        KIL["Kilgefin / Fairymount<br/>Copley / Copely"]:::place
        KIN["Kinawley<br/>Murray candidates"]:::place
        ROS["Roscommon estate network<br/>Dolan / Hanley / Hannon"]:::place
    end
    
    subgraph MIG["Migration and labor path"]
        NY["New York arrivals<br/>1837-1838"]:::event
        LAB["Labor frontier<br/>turnpike / road / rail"]:::context
    end
    
    subgraph SETTLE["Lewis County settlement"]
        MIC["Michael Copley Sr."]:::person
        ANN["Ann Copley<br/>Munday / likely Murray"]:::person
        PAT["Patrick Copley"]:::person
        MUR["Murray anchor family"]:::unknown
        DOL["Dolan family"]:::family
        HAN["Hanley / Hannon / Gillooly"]:::family
        STM["St. Michael's Church"]:::institution
        LAND["1843 Copley land"]:::verified
    end
    
    subgraph SIDE["Wider diaspora"]
        MARY["Mary Copely Giblin<br/>Iowa branch lead"]:::plausible
    end
    
    KIL --> MIC
    KIL --> PAT
    KIL -. likely close kin .-> MARY
    KIN --> ANN
    ROS --> DOL
    ROS --> HAN
    MIC --> NY
    PAT --> NY
    NY --> LAB
    LAB --> MIC
    LAB --> MUR
    MIC --- ANN
    MIC --- PAT
    ANN -. possible Murray kin .-> MUR
    MUR --> STM
    DOL --> STM
    HAN --> STM
    MIC --> LAND
    PAT --> LAND
    LAND --> STM
    
    style IRE fill:#eef7ff,stroke:#1565c0,color:#0d1b2a
    style MIG fill:#fff8e1,stroke:#f9a825,color:#2a2100
    style SETTLE fill:#f3e5f5,stroke:#6a1b9a,color:#1a1024
    style SIDE fill:#f1f8e9,stroke:#2e7d32,color:#102411
    classDef person fill:#e3f2fd,stroke:#1565c0,color:#0d1b2a
    classDef family fill:#fce4ec,stroke:#ad1457,color:#2a0714
    classDef place fill:#e8f5e9,stroke:#2e7d32,color:#102411
    classDef event fill:#fff3e0,stroke:#ef6c00,color:#1f1300
    classDef context fill:#fff9c4,stroke:#f9a825,color:#2a2100
    classDef institution fill:#ede7f6,stroke:#5e35b1,color:#170b2e
    classDef verified fill:#c8e6c9,stroke:#2e7d32,color:#102411
    classDef plausible fill:#fff3e0,stroke:#ef6c00,color:#1f1300
    classDef unknown fill:#ffcdd2,stroke:#c62828,color:#2b0707
```

## 3. Evidence Status Dashboard

```mermaid
graph TB
    ROOT["What do we know?"]:::root
    
    ROOT --> VER["Verified"]:::verified
    ROOT --> STR["Strong working conclusions"]:::strong
    ROOT --> PLA["Plausible frameworks"]:::plausible
    ROOT --> UNR["Unresolved"]:::unresolved
    ROOT --> REJ["Rejected"]:::rejected
    
    VER --> V1["1843 Michael + Patrick<br/>land purchase"]:::verified
    VER --> V2["Fairymount Catholic<br/>Copely presence"]:::verified
    VER --> V3["Copley No. 1<br/>oil strike"]:::verified
    VER --> V4["Captain John<br/>documented records"]:::verified
    
    STR --> S1["Ann Munday<br/>likely Murray"]:::strong
    STR --> S2["Ann from<br/>Kinawley"]:::strong
    STR --> S3["Michael from<br/>Kilgefin"]:::strong
    
    PLA --> P1["Murray Settlement<br/>community framework"]:::plausible
    PLA --> P2["Turnpike / labor<br/>pathway"]:::plausible
    PLA --> P3["Mary Copely Giblin<br/>close kin"]:::plausible
    PLA --> P4["Oil helped<br/>education mobility"]:::plausible
    
    UNR --> U1["Michael's parents"]:::unresolved
    UNR --> U2["Ann's exact<br/>Murray household"]:::unresolved
    UNR --> U3["Captain John to<br/>Roscommon bridge"]:::unresolved
    UNR --> U4["Oil lease / royalty<br/>records"]:::unresolved
    
    REJ --> R1["Arigna 1641<br/>Captain John claim"]:::rejected
    REJ --> R2["1824 Kilmacough<br/>Tithe claim"]:::rejected
    REJ --> R3["Munday impossible<br/>as surname"]:::rejected
    
    classDef root fill:#263238,stroke:#90a4ae,color:#ffffff
    classDef verified fill:#c8e6c9,stroke:#2e7d32,color:#102411
    classDef strong fill:#bbdefb,stroke:#1565c0,color:#0d1b2a
    classDef plausible fill:#fff3e0,stroke:#ef6c00,color:#1f1300
    classDef unresolved fill:#fff9c4,stroke:#f9a825,color:#2a2100
    classDef rejected fill:#ffcdd2,stroke:#c62828,color:#2b0707
```

## 4. Research Quest Map

```mermaid
flowchart TB
    START["Highest-value open questions"]:::root
    
    START --> Q1["Who were<br/>Michael's parents?"]:::quest
    START --> Q2["Which Kinawley Murray<br/>household was Ann's?"]:::quest
    START --> Q3["Did Murrays anchor<br/>Lewis County first?"]:::quest
    START --> Q4["Was Mary Copely Giblin<br/>Michael's close kin?"]:::quest
    START --> Q5["Did oil income fund<br/>education mobility?"]:::quest
    START --> Q6["Can Captain John connect<br/>to Roscommon Copelys?"]:::quest
    
    Q1 --> A1["Kilgefin / Fairymount<br/>parish + civil records"]:::source
    Q2 --> A2["PRONI Kinawley TAB/5<br/>and church records"]:::source
    Q3 --> A3["Grantee index +<br/>Marwee/Murray<br/>deed targets"]:::source
    Q4 --> A4["Iowa probate / cemetery<br/>church records"]:::source
    Q5 --> A5["Lewis County lease<br/>royalty / probate"]:::source
    Q6 --> A6["Irish land / probate<br/>1657-1813"]:::source
    
    A1 --> KIT["Use Tier 1<br/>Execution Kit"]:::action
    A2 --> KIT
    A3 --> KIT
    A4 --> KIT
    A5 --> KIT
    A6 --> EVID["Update Evidence Index"]:::action
    KIT --> EVID
    EVID --> NARR["Update narrative<br/>and diagrams"]:::action
    
    classDef root fill:#263238,stroke:#90a4ae,color:#ffffff
    classDef quest fill:#fff9c4,stroke:#f9a825,color:#2a2100
    classDef source fill:#e3f2fd,stroke:#1565c0,color:#0d1b2a
    classDef action fill:#c8e6c9,stroke:#2e7d32,color:#102411
```

## Reading Paths

- Start with [[The Copley Family Narrative]] for prose.
- Use [[Family Tree]] for generation-by-generation relationships.
- Use [[Sources and Evidence Index]] to check what is verified, plausible, unresolved, or rejected.
- Use [[Research Priorities and Action Items]] and [[Tier 1 Research Execution Kit]] when you want to advance the research.
