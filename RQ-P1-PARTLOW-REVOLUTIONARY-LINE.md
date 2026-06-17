---
title: RQ-P1 Partlow Revolutionary Line
aliases:
  - Partlow Revolutionary Line
  - Partlow American Revolution Research
  - Benjamin Partlow Proof Chain
date: 2026-04-28
tags:
  - "#copley-family"
  - "#partlow-line"
  - "#revolutionary-war"
  - "#research-in-progress"
---

# RQ-P1 Partlow Revolutionary Line

This page tracks the proof chain from [[People/Marion Elizabeth Partlow|Marion Elizabeth Partlow]] back to [[People/Benjamin Partlow|Benjamin Partlow]], the Revolutionary War pensioner in Culpeper County, Virginia.

**Current status:** A plausible line is now strongly supported through multiple web-accessible sources. Marion Elizabeth -> Frank / Nollie Franklin Partlow + Alice / Mary Alice Rude is proved for project purposes by census, marriage, obituary, cemetery, and FamilySearch-linked records; Frank / Nollie -> Marion M. and Marion M. -> John H. are supported by original census images. The upstream John H. -> Jacob -> Benjamin chain is now supported by concordant derivative sources, including a Google-indexed 1888 Clark County history passage, FamilySearch-hosted compiled genealogy text, Find a Grave, Geni, DAR ancestor leads, and a WikiTree transcript of John Partlow II's will. The remaining weak joint is primary-record proof that Jacob Newton Partlow was a child or heir of Benjamin Partlow.

## Dashboard Snapshot

| Question | Current answer |
|---|---|
| Is Benjamin Partlow's Revolutionary service supported? | Yes. Pension S5871 / pension-roll snippets, the local pension-cover image, and DAR ancestor lead `A088405` support Benjamin Partlow of Culpeper / Rappahannock County, Virginia as the Revolutionary War pensioner. The full pension file is still useful for service details. |
| Is the Marion Elizabeth Partlow -> Benjamin Partlow chain proved? | Substantially supported, but not yet primary-record complete. Marion -> Frank / Nollie + Alice and Frank / Nollie -> Marion M. -> John H. are supported by original or near-original records. John H. -> Jacob and Jacob -> Benjamin are now supported by concordant derivative online sources, but Jacob -> Benjamin still needs primary proof. |
| Best immediate web proof target | Search Library of Virginia / FamilySearch-accessible primary records for Benjamin's estate and children: Culpeper chancery case #53, Culpeper Deed Book FF pp. 394-395 and nearby Partlow deeds, Rappahannock Will Book A p. 223, and the original Spotsylvania will-book image. |
| Critical middle gap | Primary-record proof for Jacob Newton Partlow as Benjamin Partlow's child or heir. |
| Master queue | See [[Open Record Targets]] for the retired Partlow identity targets and the active primary-record targets. |

## Research Question

Can Marion Elizabeth Partlow's paternal line be documented back to Benjamin Partlow, Revolutionary War veteran of the Virginia militia?

Working line:

**Marion Elizabeth Partlow** -> **Nollie Franklin / Frank Partlow** -> **Marion McDonald / M. Partlow** -> **John H. / John Halleck / Hallick Partlow** -> **Jacob Partlow / Jacob Newton Partlow** -> **Benjamin Partlow**.

```mermaid
graph TD
    ME["Marion Elizabeth Partlow Copley<br/>1905-1977"]
    NF["Nollie Franklin / Frank Partlow<br/>1874-1956"]
    MM["Marion McDonald / M. Partlow<br/>1844/1847-1922"]
    JH["John H. / John Halleck Partlow<br/>1811/1812-1870?"]
    JP["Jacob Partlow / Jacob Newton Partlow<br/>1790-1868"]
    BP["Benjamin Partlow<br/>1762-1837?<br/>Virginia militia pensioner"]

    ME -->|"1920/1930 census + web identity chain; proved"| NF
    NF -->|"1880 original census image + later identity chain; proved"| MM
    MM -->|"1850/1860 original census images; proved"| JH
    JH -->|"1888 county history + compiled genealogy; derivative support"| JP
    JP -->|"Find a Grave / Geni / FS compiled leads; primary gap"| BP

    class ME,NF,MM,JH censusLead
    class JP,BP proofGap

    classDef familySource fill:#fff3bf,stroke:#8a6d00,color:#1f1f1f;
    classDef censusLead fill:#d0ebff,stroke:#1864ab,color:#102a43;
    classDef proofGap fill:#ffe3e3,stroke:#c92a2a,color:#1f1f1f;
```

## Online Findings So Far

| Link | Current Evidence | Status | Next Action |
|---|---|---|---|
| Marion Elizabeth Partlow -> Nollie Franklin / Frank Partlow + Alice / Mary Alice Rude | The 1920 census lists `Marian E Parttow` in the Nollie / Mary A Partlow household; the 1930 census lists `Marion Partlow` as daughter of Frank and Allee / Alice Partlow. The 1934 Indiana marriage record for Ray Partlow names parents Frank Partlow and Alice Rude. See [[References/Partlow Rude Online Identity Chain]]. | **Proven by near-original records and convergent web evidence.** | Keep the Clark County marriage return as an optional ceremony-detail target, not the identity-control target. |
| Nollie Franklin / Frank Partlow -> Marion McDonald / M. Partlow | The original 1880 Johnson Township census image, FamilySearch image `33S7-9YB4-VPC`, lists **Nollie Frank**, age 6, as son in the Marion Partlow / Marth household. New England Ball Project also cites 1900 Johnson Township census with widower Marion and sons **Frank and Henry**. The 1977 handwritten lineage places Frank under Marion M. Partlow, and the online identity-chain pass ties Frank N / Frank to Nollie Franklin and Alice / Mary Alice across 1900-1956. | **Proven by original-image census evidence plus later identity chain.** | Use the 1850 / 1860 result as the next anchor, then move upstream to John H. -> Jacob and Jacob -> Benjamin. |
| Marion McDonald / M. Partlow -> John H. / Halleck / Hallick Partlow | The original 1850 census image, FamilySearch image `S3HY-DTN7-NYR`, shows John H. / `Jhn Hc.` Partlow with Lydia / Sydia and a child indexed as `Momore` / read as `Momon`, age 2, identified as Marion by continuity. The original 1860 image, `33SQ-GBF7-DF4`, clearly lists **Marion M**, age 16, in the John / Sydia Partlow household. See [[References/1850 and 1860 John Halleck Partlow Household]]. | **Proven by original-image census evidence.** | Move upstream to John H. -> Jacob and Jacob -> Benjamin. |
| John H. / Halleck / Hallick Partlow -> Jacob Partlow | 1977 handwritten lineage names Jacob Partlow as father of John H.; New England Ball Project states John was son of Jacob Partlow and Mary, citing a RootsWeb-era database. The June 2026 upstream web pass found a Google-indexed 1888 *History of Clark County, Illinois* snippet stating John H. Partlow was a son of Jacob Partlow, plus a FamilySearch-hosted compiled genealogy excerpt naming **John Halleck Partlow** as a child of Jacob Newton Partlow and Mary Halleck. | Strong derivative support; primary image or full county-history page still needed for best citation. | Capture the full 1888 Clark County history page / OCR text and continue primary-record work for Jacob. |
| Jacob Partlow / Jacob Newton Partlow -> Benjamin Partlow | 1977 handwritten lineage and Ancestry screenshot place Jacob as son of Benjamin Partlow. The June 2026 upstream web pass found Find a Grave memorial `139145744` listing **Jacob Newton "Nute" Partlow** as Benjamin's child, Geni listing Jacob among Benjamin's children, and FamilySearch / compiled-text snippets placing Jacob Newton in the same Culpeper-to-Clark County line. | Strong concordant derivative support; **critical primary proof gap remains**. | Search LVA / FamilySearch-accessible Culpeper chancery case #53, Culpeper deeds, and Rappahannock estate records for a child / heir statement naming Jacob. |
| Benjamin Partlow -> Revolutionary War service | Pension cover sheet image confirms Benjamin Partlow of Culpeper County, Virginia, age 70, private, disabled by bodily infirmity, with more than six months service under Capt. Coxen and Capt. Rogers. The upstream web pass identifies pension **S5871**, derivative transcript snippets, and DAR ancestor lead `A088405`. | Service evidence strong; full pension file and directly viewable DAR GRS page still useful. | Obtain full NARA/Fold3 pension file and directly capture the DAR ancestor page if accessible. |
| Benjamin Partlow -> John Partlow II | A Graves Family Association page and WikiTree transcript cite Spotsylvania County Will Book E / p. 975-976 for John Partlow, died 11 Dec 1789, and report that the will named son **Benjamin Partlow** and 250 acres in Culpeper County. | Strong derivative transcript / abstract support pointing to an original will record; original image still needed. | Obtain the original Spotsylvania will-book image or a reliable archive scan and compare it to Benjamin's Culpeper pension identity. |

## Upstream Web Search Pass: Jacob, Benjamin, and John Partlow II

The June 2026 web-only upstream pass is preserved at [[References/Partlow Upstream Revolutionary Line Web Search]]. It changed the status of the upper Partlow line from "family-source chain with derivative leads" to "strongly supported by concordant online derivative sources, with a primary-record gap at Jacob -> Benjamin."

Key results:

- *The Partlow Family and Connections* was confirmed as a real two-part Thomas E. Partlow compiled genealogy held by FamilySearch Library, but no open-access scan was found through Google Books, HathiTrust, Internet Archive, or the checked catalog routes.
- DAR ancestor leads identify **Benjamin Partlow** as `A088405` and **John Partlow** as `A088406`, though the DAR pages themselves were not directly read in full.
- Benjamin's Revolutionary pension is identified as **S5871**. RevWarApps was blocked by a bot challenge, but WikiTree and snippets preserve derivative pension transcript details tying Benjamin to Culpeper / Rappahannock County, Virginia.
- WikiTree's transcript of John Partlow's Spotsylvania County will cites Will Book E, pages 975-976, and includes the relationship language naming **Benjamin Partlow** as John's son and giving him 250 acres in Culpeper County.
- Find a Grave memorial `139145744` for Benjamin Partlow lists **Jacob Newton "Nute" Partlow (1790-1868)** as Benjamin's child.
- Geni's Lucy Menefee / Partlow page and FamilySearch / compiled snippets also place Jacob Newton Partlow among Benjamin's children.
- A FamilySearch-hosted compiled genealogy snippet identifies **Jacob Newton Partlow**, born 1790 in Culpeper County and died 1868 in Clark County, Illinois, and names **John Halleck Partlow** as his child by Mary Halleck.
- A Google-indexed 1888 *History of Clark County, Illinois* snippet directly states that **John H. Partlow** was a son of **Jacob Partlow** and that Jacob's descent runs back through Benjamin to John Partlow II.

Interpretation: these sources are strong enough to use as a working upstream chain in research planning, but not enough to call the chain primary-proof complete. The next useful work is no longer broad web searching for the names; it is targeted primary-record retrieval.

## Local Family Manuscript Found

A local PDF at `/mnt/c/Users/zach/Dropbox (Old)/Tom/Tom/partlow_family.pdf` contains a 1960 letter from **Harry C. Partlow** and a handwritten 1977 lineage titled **"Partlow Line of Descent in America for Eight Generations."** See [[References/Harry C Partlow 1960 Letter and Handwritten Lineage]].

The handwritten lineage directly proposes:

**John Partlow I** -> **John Partlow II** -> **Benjamin Partlow** -> **Jacob Partlow** -> **John H. Partlow** -> **Marion M. Partlow** -> **Frank Partlow** and **Alice Rude Partlow** -> **Marion E. Partlow Copley** and siblings.

This is not original proof, but it materially improves the research position because it independently names the exact chain and gives useful details: Jacob was born in Culpeper County, Virginia and died in Clark County, Illinois; John H. came to Illinois in 1839 and died in Arkansas in 1870; Marion M. had three wives, with Martha L. Bowles listed first; and Frank married Alice Rude on 10 Jun 1900.

## Key Online Source: John Halleck Partlow

The New England Ball Project page for **John Halleck Partlow** provides the best online evidence found so far for the middle generation. It reports:

- John Halleck Partlow, born about 1812 in Ohio.
- Married **Lydia Bennett**, daughter of John Bennett and Elizabeth McCullen, on 1 Nov 1832.
- 1850 census: Johnson Township, Clark County, Illinois; "John H.", age 38, born Ohio, chair maker, with wife Lydia and children including Marion and Columbus; cited target **p. 550, back of stamped p. 275**.
- 1860 census: Johnson Township, Clark County, Illinois; "John", age 49, born Ohio, chair maker, with wife Lydia and children including Marion, Columbus, Jacob, and Phebe; cited target **p. 65**.
- Children listed include **Marion McDonald Partlow**, born Feb 1847, died 27 Mar 1922.

The original 1850 and 1860 images are now found and directly improve the working chain because Marion McDonald Partlow appears as a child in John Halleck Partlow's household in both census years. See [[References/1850 and 1860 John Halleck Partlow Household]].

## Key Online Source: Marion McDonald Partlow

The New England Ball Project page for **Marion McDonald Partlow** materially improves the Frank/Nollie-to-Marion section of the chain. It reports:

- Marion McDonald Partlow, born Feb 1847 in Illinois; died 27 Mar 1922 at Casey, Clark County, Illinois.
- Son of **John Halleck Partlow** and **Lydia Bennett**.
- Married **Martha L. Bowles** on 15 Apr 1872 in Clark County, Illinois.
- 1880 census: Johnson Township, Clark County, Illinois; Marion with wife Martha, children **Frank, Henry, and Ora**, brother Columbus, and half-brothers John and Richard; cited target **ED 37, p. 22, back of stamped p. 87**.
- 1900 census: Johnson Township, Clark County, Illinois; Marion as a widower with sons **Frank and Henry**, living with brother Columbus; cited target **ED 8, Sheet 7A, stamped p. 85**.
- 1910 census: Johnson Township, Clark County, Illinois; Marion with second wife Julia and son Henry; cited target **ED 10, Sheet 8A, stamped p. 100**.
- 1920 census: Casey, Clark County, Illinois; Marion as a widower with son Henry and family; cited target **ED 3, Sheet 7A, stamped p. 36**.

The original 1880 image is now found. It reads **Nollie Frank** as a son in the Marion / Marth Partlow household, upgrading **Frank / Nollie Partlow -> Marion M. Partlow** to original-image census evidence. See [[References/1880 Marion McDonald Partlow Household]].

See [[References/New England Ball Project Partlow Census Citation Extract]] for the consolidated census-target table.

## FamilySearch Book Lead

FamilySearch Digital Library has public entries for Thomas E. Partlow's two-volume *The Partlow family and connections*:

- Volume 1: identifier `5481_01`, 143 pages, public / view inside.
- Volume 2: identifier `5481_02`, 194 pages, public / view inside.

The FamilySearch catalog description says the Partlow family originated in Wales; the first Partlow came to America around 1700; and the unknown immigrant was survived by three sons who settled in Caroline County, Fauquier County, and Spotsylvania County, Virginia.

This is a high-priority source because it may discuss the Virginia Partlow lines and the Jacob-to-Benjamin connection. Direct command-line access was blocked by FamilySearch's Incapsula protection, so the volume likely needs to be opened manually in a browser or accessed at FamilySearch directly.

Geneanet also has catalog pages for both volumes, which may be a second route to opening the same scans if FamilySearch access is awkward.

## DAR Lead

The Old Spanish Trail Chapter NSDAR page lists **Benjamin Partlow VA** among chapter members' patriot ancestors. That does not identify Zach's line, but it suggests at least one DAR application has been accepted through Benjamin Partlow and should be checked in the official DAR Genealogical Research System.

## Online Identity Chain: Frank / Nollie Partlow and Alice Rude

The earlier identity problem **Frank Partlow = Nollie Franklin Partlow** and **Alice Rude = Mary Alice Rude/Partlow** is now resolved for project purposes. See [[References/Partlow Rude Online Identity Chain]] and the raw report at [Partlow-Rude online identity-chain output](/static/sources/claude-partlow/partlow-rude-online-identity-chain-claude-output.txt).

What the web chain establishes:

- **Frank / Nollie identity:** the chain runs through `Frank N Partlow` in 1900; `Frank Partlow` in 1910, 1930, 1940, and 1950; FamilySearch PID `K23C-KWG`; and Find a Grave memorial `45403346` for **Nollie Franklin "Frank" Partlow**, whose obituary calls him Frank and names wife Alice.
- **Alice / Mary Alice identity:** the chain runs through `Mary A Rude` in the 1900 census, `Alice Rude` in the 8 Jun 1900 license notice, `Alice Partlow` in 1910 / 1940 / 1950, `Mary A Parttow` in 1920, `Allee` / Alice Partlow in 1930, and the 1934 Indiana marriage record for Ray Partlow naming his mother **Alice Rude**.
- **Marion parentage:** 1920 and 1930 census records place Marion / Marian E in the Frank / Nollie and Alice / Mary A household as their daughter.
- The 1934 Indiana marriage record for Ray Partlow, FamilySearch ARK `27KF-ZB6`, is the strongest direct government-record bridge for the maiden name because it names Ray's parents as **Frank Partlow** and **Alice Rude**.
- The official Illinois Statewide Marriage Index was checked and is gap-limited for this event because Clark County coverage ends in June 1899.
- FamilySearch collection 1803970 was checked and is also gap-limited because the last Clark County marriage film ends with 1899 records.
- Illinois Department of Public Health says certified marriage copies are available only from the county clerk in the county where the marriage occurred; for a 1900 Clark County marriage, the practical target remains the Clark County Clerk/Recorder in Marshall, Illinois if exact ceremony details are needed.
- Clark County's current clerk page says certified marriage-license copies may be ordered online or from the office. For that optional ceremony-return search, request/search wording should include: **Frank Partlow**, **Nollie Franklin Partlow**, **N. F. Partlow**, **Alice Rude**, **Mary Alice Rude**, the newspaper license date **8 Jun 1900**, and the reported family marriage date **10 Jun 1900**.
- A later county-record access-path pass found no online original, reconstructed, or derivative county record. It identified active offline contacts: Clark County Clerk / Recorder Laura H. Lee for any surviving county license / return / register / genealogy certificate; Marshall Public Library for the Clark County Genealogical Society `Extract of marriages from Clark County, 1819-1900`, especially v. 3, 1881-1900; and FamilySearch Library as a fallback because it holds v. 3 at call no. `977.371 V25c` plus microfilm 1036682 / DGS 7955859.
- A ready-to-send request note has been created at [[References/Clark County Illinois Partlow Rude Marriage Request]].
- The Clark County Genealogy Trails death index page for N/O/P/Q/R/S surnames includes several Partlow deaths from 1916-1947, but it does not solve Frank/Alice because the family-source dates put Frank's death in **1956** and Alice's in **1962**, outside that transcribed index window.
- The 14 Jun 1900 *Clark County Herald* now supplies the key local notice: a license issued under **8 Jun 1900** to **Frank Partlow**, age 25, Moonshine, and **Alice Rude**, age 19.

The marriage return remains useful for exact ceremony details, but it is no longer the controlling identity proof. The web-accessible record chain now supports moving the main Partlow proof work upstream to **John H. -> Jacob** and **Jacob -> Benjamin**.

## FamilySearch Clark County Marriage Gap

A logged-in FamilySearch search and browse pass on 15 Jun 2026 did **not** find the reported Partlow / Rude marriage in **FamilySearch collection 1803970, "Illinois, County Marriages, 1810-1940."** See [[References/Clark County Illinois Partlow Rude Marriage Request]] and the raw source note at [Clark County Partlow-Rude FamilySearch negative search output](/static/sources/claude-partlow/clark-county-partlow-rude-marriage-familysearch-negative-claude-output.txt).

What was checked:

- Groom variants searched included **Nollie Partlow**, **Frank Partlow**, **Partlow**, and N. F. / Franklin-style searches for Clark County and Illinois.
- Bride variants included **Alice Rude** and Rude surname searches.
- The only Clark County vital-record catalog entry is FamilySearch catalog `koha:259330`, "Births, marriages, deaths, 1819-1913."
- The final Clark County marriage reel is **Film 1306062 / DGS 4539347**, covering **Vol. G 1881-1890** and **Vol. H 1890-1899**.
- Direct browse showed image 660 as the last substantive marriage-register page, **Vol. H p. 558**, with 1899 marriages only; image 664 is end of roll.
- No Clark County **Vol. I** or post-1899 marriage film exists in the FamilySearch digital folder.

Interpretation: the reported **10 Jun 1900** marriage falls in the post-1899 gap, plausibly tied to the 30 Dec 1902 Clark County courthouse fire. The online FamilySearch path should not be reassigned unless a new film, collection, or indexed record appears.

Current evidence path:

1. Treat the Clark County marriage return as optional ceremony-detail work, not the identity-control target.
2. If pursuing it anyway, ask the Clark County Clerk / Recorder for the original or reconstructed license / return / register entry corresponding to the **8 Jun 1900** license notice.
3. If pursuing a local compiled extract, ask Marshall Public Library to check the Clark County Genealogical Society `Extract of marriages from Clark County, 1819-1900` and local county-record volumes for Frank Partlow / Alice Rude.

## 1900 Census Neighborhood Check

A later FamilySearch 1900 census pass found both target people in **Johnson Township, Clark County, Illinois, ED 8**, but not as a married couple. See [[References/Clark County Illinois 1900 Partlow Rude Census Check]] and the raw source note at [Partlow-Rude 1900 Johnson Township census output](/static/sources/claude-partlow/partlow-rude-1900-census-johnson-township-claude-output.txt).

Found records:

- **Frank N Partlow**, age 25, born Apr 1875 in Illinois, single, nephew in or adjacent to the Columbus Partlow household; ED 8, sheet 7A, line 5, dwelling/family 122; FamilySearch ARK `MSS6-B4P`; digital film `004113698`, image 174 of 514.
- **Mary A Rude**, age 20, born Oct 1880 in Illinois, single, daughter in the John A. Rude household; ED 8, sheet 7B, line 85, dwelling/family 138; FamilySearch ARK `MSSD-C2Q`; digital film `004113698`, image 175 of 514.

Interpretation: the 1900 census does **not** prove the marriage. It is consistent with the reported **10 Jun 1900** marriage because the federal census reference date was **1 Jun 1900**. If the couple married nine days later, both should still be recorded as single on census day. The result strengthens the circumstantial case by placing both proposed spouses in the same township and enumeration district immediately before the reported marriage.

## Clark County Herald Marriage-License Notice

A later newspaper search found the key local notice in the **Clark County Herald** of Marshall, Illinois. See [[References/Clark County Herald 1900 Partlow Rude Marriage License Notice]] and the raw source note at [Partlow-Rude 1900 Clark County Herald marriage-license output](/static/sources/claude-partlow/partlow-rude-1900-clark-county-herald-marriage-license-claude-output.txt).

Citation and result:

- Newspaper: *Clark County Herald*, Marshall, Clark County, Illinois.
- Date: Thursday, **14 Jun 1900**.
- Page / column: page 4, `Marriage Licenses` column.
- Repository: Digital Archives of the Marshall Public Library, Advantage Archives.
- Notice heading: `Marriage Licenses - Have been issued to the following couples since our last report:`
- Under date heading **June 8**: `Frank Partlow, 25, Moonshine.` and `Alice Rude, 19.`

Interpretation: this notice proves a Clark County marriage license was issued to **Frank Partlow** and **Alice Rude** on **8 Jun 1900**. It strongly supports the family-source marriage date of about **10 Jun 1900**, but it is not a ceremony return and does not give the exact ceremony date, officiant, witnesses, parents, or license number.

## County Record Access Path Follow-Up

A later online access-path pass did not locate any original, reconstructed, or derivative county record for the license or marriage in FamilySearch, the Illinois Statewide Marriage Index, Ancestry, the FamilySearch catalog, IRAD online pages, or Clark County's online order portal. See [[References/Clark County Illinois Partlow Rude County Record Access Path]] and the raw source note at [Partlow-Rude 1900 county-record access-path output](/static/sources/claude-partlow/partlow-rude-1900-county-record-access-path-claude-output.txt).

The key practical finding is that record survival after the **30 Dec 1902** Clark County courthouse fire cannot be determined online. The fire is documented as causing **some** record loss or damage, not total loss. Therefore the next ceremony-record action is not another web search; it is direct contact with:

- **Clark County Clerk / Recorder**, Laura H. Lee, for any surviving original, reconstructed, index, register, license return, or genealogy-certificate record.
- **Marshall Public Library**, which holds former Clark County Genealogical Society materials and 300+ county-record volumes, especially the undigitized `Extract of marriages from Clark County, 1819-1900`.

A follow-up lookup pass confirmed that the extract is a real FamilySearch-cataloged three-volume publication at `koha:279795`. Volume 3 covers **1881-1900** and is the exact target for this case. FamilySearch Library holds the book at call no. `977.371 V25c` v. 3 and also holds microfilm **1036682**, Items 6-8 / DGS **7955859**, but there is no online camera access. Marshall Public Library's public ILS did not list the volume, so the genealogy-room collection must be asked directly.

Status: the Marshall Public Library email lookup has been drafted, but it has **not been sent** from this repo workflow. This is now an optional ceremony-detail follow-up because the online identity chain has resolved the Frank / Nollie and Alice / Mary Alice proof problem.

## Pre-Revolution Partlow Lead

The Graves Family Association's online genealogy for John Graves/Greaves includes an abstract of **John Partlow** of Spotsylvania County, Virginia, citing **Spotsylvania County Will Book A, p. 975**. The June 2026 upstream pass also found a WikiTree transcript citing **Spotsylvania County Will Book E, pages 975-976**. The transcript / abstracts report that John Partlow died **11 Dec 1789**, that executor bond was dated **6 Apr 1790**, and that the will named wife Sarah and children including **Benjamin Partlow**. It also associates Benjamin with **250 acres in Culpeper County**.

This is significant because it independently supports the local handwritten lineage's pre-Revolution step, **John Partlow II -> Benjamin Partlow**, and the Culpeper land reference fits the county where Benjamin later filed his pension. It still needs original-record verification. It does not by itself solve the direct-line proof gap **Jacob Partlow -> Benjamin Partlow**, because Jacob is one generation later and does not appear in John Partlow II's will.

## Earlier Jacob-to-Benjamin Search Pass

A public-web search pass on 28 Apr 2026 for **"Jacob Partlow" "Benjamin Partlow"**, **"Jacob Newton Partlow" "Benjamin Partlow"**, and related phrases did not find a clean online proof that Jacob Partlow was a son of Benjamin Partlow.

What it did find:

- A MyTrees search-result preview for **Benjamin Partlow** and **Clarissa Barnes**, married 1793 in Virginia, with Benjamin born 1762 in Virginia and died 1837 in Virginia. The preview names children including **Henry H. Partlow** and **Sarah R. Partlow**, but the visible search-result text did **not** expose Jacob Partlow. Treat this only as a derivative lead to Benjamin's family group, not as proof.
- The same search results surfaced other Partlow branches in Vermilion County, Illinois; Ross County, Ohio; Meigs County, Ohio; and Arkansas. These are probably collateral unless they can be tied to Jacob/Benjamin with records.

Interpretation after the later June 2026 pass: broad public search did eventually surface several derivative sources that name Jacob as Benjamin's son, but it still did not surface a primary document. The live target is therefore not another broad search; it is the targeted LVA / county-record path for Benjamin's estate, chancery, and deeds.

## Evidence Issues

- The Ancestry screenshot appears to show **Mary Halleck** as John Halleck / Hallick Partlow's wife, but the New England Ball Project identifies his wife as **Lydia Bennett**. Treat Mary Halleck as either a tree error, misread, or different person until supported by records.
- The spelling varies: **Halleck** appears in the New England Ball Project; **Hallick** appears in the Ancestry screenshot.
- The online John -> Jacob relationship is not census-proved, because John was already an adult by the 1850 census.
- The Jacob -> Benjamin relationship remains the critical **primary-record** proof problem, even though it is now strongly supported by derivative online sources.
- The local handwritten lineage and New England Ball Project use **Frank Partlow**, while other leads use **Nollie Franklin Partlow**. The June 2026 online identity-chain pass now proves these name forms refer to the same man for project purposes.
- The local handwritten lineage identifies Frank's wife as **Alice Rude Partlow**. The 1900 census, 1900 license notice, 1910-1950 census chain, 1934 Ray Partlow Indiana marriage record, and Find a Grave / obituary cluster now prove **Alice Rude = Mary Alice Rude Partlow** by convergent evidence.
- The John Partlow II -> Benjamin Partlow link now has online will-transcript / abstract support, but the original Spotsylvania County will-book image must be checked before treating it as primary-record proof.

## Next Actions

```mermaid
flowchart TD
    A["Start from known family manuscript chain"]
    B["Frank/Nollie and Alice/Mary Alice identity<br/>chain now proved online"]
    C["1880 original census image<br/>confirms Nollie Frank under Marion M."]
    D["1850/1860 original census images<br/>document Marion M. as child of John H."]
    E["Derivative web sources support<br/>John H. -> Jacob"]
    F["Derivative web sources support<br/>Jacob -> Benjamin"]
    G["Primary-record target:<br/>Culpeper chancery/deeds + Rappahannock estate"]
    I["Obtain Benjamin's full Revolutionary War pension file"]
    H["Line can be evaluated for DAR-style proof"]

    A --> B --> C --> D --> E --> F --> G --> I --> H
    F -. "current web priority" .-> P["Best next web targets:<br/>LVA chancery #53;<br/>Culpeper Deed Book FF;<br/>Rappahannock Will Book A p. 223;<br/>Spotsylvania will image"]

    class A,H goal
    class B,P priority
    class C,D,E,F,G,I action

    classDef goal fill:#d3f9d8,stroke:#2b8a3e,color:#102a12;
    classDef priority fill:#fff3bf,stroke:#8a6d00,color:#1f1f1f;
    classDef action fill:#e7f5ff,stroke:#1971c2,color:#102a43;
```

1. Search the Library of Virginia Chancery Records Index for **Culpeper County Chancery Papers #53 (1840-1841)** and all Partlow variants. This is now the highest-value web target because WikiTree cites it as the best source for Benjamin's children.
2. Search Culpeper County deed books and indexes, especially **Deed Book FF pp. 394-395** and nearby Partlow deeds around 1813, for Benjamin / Clary deeds to children or heirs, including any deed to Jacob.
3. Search **Rappahannock County Will Book A p. 223** for Benjamin Partlow's February 1838 estate inventory and any related estate, appraisement, sale, or settlement pages.
4. Obtain or browse the original Spotsylvania County, Virginia **Will Book E / p. 975-976** image for John Partlow to verify the Benjamin/Culpeper transcript.
5. Capture a stable full-text or page image for the Google-indexed **1888 History of Clark County, Illinois** passage that states John H. Partlow was a son of Jacob Partlow and traces Jacob back through Benjamin to John Partlow II.
6. Directly capture the DAR GRS pages for Benjamin Partlow `A088405` and John Partlow `A088406`, if accessible, including any listed spouses, service, residence, children, and descendant-line warnings.
7. Obtain the full Benjamin Partlow Revolutionary War pension file if available through a web-accessible NARA / Fold3 / library route.
8. Search Clark County, Illinois probate for Marion McDonald Partlow, died 27 Mar 1922, as a lower-priority downstream corroboration path.
9. Optional offline / non-web follow-up: send the Clark County Clerk / Recorder and Marshall Public Library requests for the original or reconstructed **8 Jun 1900** marriage license / return / register entry and `Extract of marriages from Clark County, 1819-1900`, v. 3, for ceremony details.

## Sources

1. New England Ball Project, "John Halleck Partlow," person page 2754, citing 1850 and 1860 U.S. census entries for Johnson Township, Clark County, Illinois: https://newenglandballproject.com/g2/p2754.htm
2. New England Ball Project, "Lydia Bennett," person page 2753, with discussion of John Halleck Partlow's household and later census interpretation: https://www.newenglandballproject.com/g2/p2753.htm
3. New England Ball Project, "Marion McDonald Partlow," person page 3461, citing 1850, 1860, 1880, 1900, 1910, and 1920 U.S. census entries for the Clark County, Illinois Partlow family: https://www.newenglandballproject.com/g3/p3461.htm
4. FamilySearch Digital Library search results for *The Partlow family and connections*, volumes 1 and 2, identifiers `5481_01` and `5481_02`: https://www.familysearch.org/library/books/records/?navigation=default&page=1&perpage=10&search=PARTLOW
5. FamilySearch catalog entry for Thomas E. Partlow, *The Partlow family and connections*: https://www.familysearch.org/en/search/catalog/5481
6. DAR, "DAR Lineage Resources," describing the Ancestor Database, Descendants Database, and record-copy workflow: https://www.dar.org/library/collections/dar-lineage-resources
7. Old Spanish Trail Chapter NSDAR, "Patriot Ancestors," listing Benjamin Partlow VA: https://www.daroldspanishtrail.com/about.html
8. Geneanet library catalog page for *The Partlow family and connections*, volume 1: https://en.geneanet.org/library/doc/10923302/the-partlow-family-and-connections-v-01
9. Geneanet library catalog page for *The Partlow family and connections*, volume 2: https://en.geneanet.org/library/doc/10923303/the-partlow-family-and-connections-v-02
10. Graves Family Association, "John Graves/Greaves of Northamptonshire, England," section citing Spotsylvania County, Virginia Will Book A, p. 975 for John Partlow and naming son Benjamin Partlow: https://graves-fa.org/gen-histories/gens/gen270.html
11. Illinois Secretary of State / Illinois State Archives, "Illinois Statewide Marriage Index 1763-1900," describing index coverage, source basis, and copy pathways: https://www.ilsos.gov/departments/archives/databases/marriage.html
12. Illinois Department of Public Health, "Marriage Records," noting that certified marriage copies are available only from the county clerk in the county where the marriage occurred: https://dph.illinois.gov/topics-services/birth-death-other-records/marriage-records.html
13. Clark County, Illinois Clerk/Recorder, "Marriage License," including current clerk contact and certified-copy ordering note: https://www.clarkcountyil.org/departments/CountyClerk/marriage-license
14. Clark County Illinois Genealogy Trails, "Death Records - N/O/P/Q/R/S Surnames," transcribed death-index page including Partlow entries from 1916-1947: https://genealogytrails.com/ill/clark/deathindex-n.html
15. [[References/Clark County Illinois Partlow Rude Marriage Request]] - ready-to-send request note for the original or reconstructed Clark County license / return / register entry behind the 8 Jun 1900 newspaper notice.
16. [[References/New England Ball Project Partlow Census Citation Extract]] - consolidated census citation targets for John Halleck, Lydia Bennett, and Marion McDonald Partlow.
17. MyTrees search-result preview for Isaac/Benjamin Partlow family group; derivative and not sufficient as proof: https://www.mytrees.com/names/Event/Year/1/ISAAC%2BPARTLOW
18. [[References/Harry C Partlow 1960 Letter and Handwritten Lineage]] - local family-source summary of `/mnt/c/Users/zach/Dropbox (Old)/Tom/Tom/partlow_family.pdf`.
19. `/mnt/c/Users/zach/Desktop/Partlow/IMG_2437.jpg` - pension-file cover sheet image for Benjamin Partlow, Culpeper County, Virginia.
20. `/mnt/c/Users/zach/Desktop/Partlow/IMG_2433.png` - Ancestry tree screenshot showing the proposed Partlow line; derivative tree evidence only.
21. FamilySearch, "Illinois, County Marriages, 1810-1940," collection 1803970; Clark County Clerk, "Births, marriages, deaths, 1819-1913," catalog `koha:259330`; final Clark County marriage reel Film 1306062 / DGS 4539347.
22. [[References/Clark County Illinois 1900 Partlow Rude Census Check]] - 1900 census check placing Frank N Partlow and Mary A Rude in Johnson Township, Clark County, Illinois, both single at the 1 Jun 1900 census reference date.
23. [[References/Clark County Herald 1900 Partlow Rude Marriage License Notice]] - 14 Jun 1900 newspaper notice reporting the 8 Jun 1900 marriage license issued to Frank Partlow, 25, Moonshine, and Alice Rude, 19.
24. [[References/Clark County Illinois Partlow Rude County Record Access Path]] - online access-path report finding no original / reconstructed county record online and identifying the Clark County Clerk plus Marshall Public Library as the active contacts.
25. [Partlow-Rude 1900 Marshall library extract lookup output](/static/sources/claude-partlow/partlow-rude-1900-marshall-library-extract-lookup-claude-output.txt) - confirms the FamilySearch catalog record for `Extract of marriages from Clark County, 1819-1900`, v. 3, Film 1036682 / DGS 7955859, and no online copy.
26. [[References/Partlow Rude Online Identity Chain]] - web-only identity-chain report proving Frank / Nollie Franklin Partlow, Alice / Mary Alice Rude Partlow, and Marion Elizabeth Partlow's parentage through census, Indiana marriage, obituary, Find a Grave, and FamilySearch-linked records.
27. [[References/1880 Marion McDonald Partlow Household]] - original 1880 census image result for Marion Partlow, wife Marth / Martha, and son Nollie Frank, FamilySearch ARKs `MXNZ-S2M`, `MXNZ-32S`, and image `33S7-9YB4-VPC`.
28. [[References/1850 and 1860 John Halleck Partlow Household]] - original 1850 and 1860 census image results for John H. / John Halleck Partlow and Lydia / Sydia Bennett Partlow, confirming Marion / Marion M. as their child and noting FamilySearch ARKs `M85V-23D`, `M85V-232`, `MXCM-3FC`, and `MXCM-3FX`.
29. [[References/Partlow Upstream Revolutionary Line Web Search]] - web-only upstream search pass finding strong derivative support for John Partlow II -> Benjamin Partlow -> Jacob Newton Partlow -> John H. / John Halleck Partlow, while preserving Jacob -> Benjamin as the remaining primary-record proof gap.
30. WikiTree, "Benjamin Partlow (Partlow-163)," including DAR ancestor lead `A088405` and derivative Revolutionary War pension S5871 details: https://www.wikitree.com/wiki/Partlow-163
31. WikiTree, "John Partlow (Partlow-164)," including a transcript citing Spotsylvania County, Virginia Will Book E, pp. 975-976: https://www.wikitree.com/wiki/Partlow-164
32. Find a Grave memorial `139145744`, Benjamin Partlow, listing Jacob Newton "Nute" Partlow as child: https://www.findagrave.com/memorial/139145744/benjamin-partlow
33. Geni, "Lucy Menefee," collaborative profile listing Jacob Newton Partlow among Benjamin Partlow's children: https://www.geni.com/people/Lucy-Menefee/6000000016000855001
34. FamilySearch Ancestors, "Mary Abrams," `LBFC-WWK`, naming Jacob Newton Partlow and Clark County context: https://ancestors.familysearch.org/en/LBFC-WWK/mary-abrams-1791-1882
