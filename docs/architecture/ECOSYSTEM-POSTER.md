# The HeliLab Learning Ecosystem

## One-page architecture poster

The ecosystem is deliberately organised around **learning functions**, not around the software that happens to be available.

```mermaid
flowchart TB
    subgraph V[1 · EDUCATIONAL VISION]
        V1[Operationally meaningful theory]
        V2[Competency-oriented learning]
        V3[Area 100 KSA]
        V4[Exam readiness]
    end

    subgraph C[2 · CURRICULUM ARCHITECTURE]
        C1[EASA Subject 082 LOs]
        C2[32-hour learning sequence]
        C3[Seven module blueprints]
        C4[Assessment & evidence]
        C5[Misconception map]
    end

    subgraph L[3 · STUDENT LEARNING CYCLE]
        L1[ORIENT]
        L2[PREDICT]
        L3[BUILD]
        L4[EXPLORE]
        L5[EXPLAIN]
        L6[APPLY]
        L7[CHECK & REFLECT]
        L1 --> L2 --> L3 --> L4 --> L5 --> L6 --> L7
        L7 -. next cycle .-> L1
    end

    subgraph D[4 · DELIVERY ECOSYSTEM]
        D1[Theory handbook\nDepth + reference]
        D2[PowerPoint\nInstructor visual layer]
        D3[HeliLab\nInteractive concept laboratory]
        D4[Link & Learn / Moodle\nStudent journey + formative learning]
        D5[LPlus\nFormal assessment]
    end

    subgraph P[5 · PRODUCTION & GOVERNANCE]
        P1[GitHub\nSource of truth + version control]
        P2[Markdown + YAML]
        P3[Mermaid + SVG]
        P4[AI / Copilot support]
        P5[SME review + QA]
    end

    V --> C --> L --> D
    P --> C
    P --> D
    C1 --> C2
    C2 --> C3
    C3 --> C4

    L3 --> D1
    L3 --> D2
    L4 --> D3
    L1 --> D4
    L7 --> D4
    C4 --> D5
```

## What each tool is *for*

| Tool / medium | Primary role | Should not become |
|---|---|---|
| **GitHub** | source of truth, version control, change history, development workflow | a student LMS |
| **Handbook / theory resource** | coherent explanation, technical depth, reference | the classroom presentation |
| **PowerPoint** | instructor visual narrative, questions, staged explanation | a 200-page textbook on slides |
| **HeliLab** | prediction, manipulation, causal understanding, transfer | unstructured slider play |
| **Link & Learn** | student route, pre-work, resources, formative checks | the authoritative source of every duplicated asset |
| **LPlus** | controlled/formal assessment | the only place where learning is checked |

## Architectural decision

**Pedagogy determines tool choice; tools do not determine pedagogy.**

A new feature should therefore be justified by a learning need. For example, a HeliLab animation is useful only if it lets the learner see, manipulate or test something that is hard to understand from a static diagram.

## Information flow

```mermaid
flowchart LR
    SME[Subject-matter owner] --> GH[(GitHub)]
    REG[EASA / approved sources] --> GH
    GH --> BOOK[Theory publication]
    GH --> PPT[PowerPoint]
    GH --> HL[HeliLab missions]
    GH --> LMS[Link & Learn]
    GH --> ASSESS[Assessment specifications]
    ASSESS --> LP[LPlus]

    STUDENT[Student evidence & misconceptions] --> REVIEW[Course review]
    INSTR[Instructor feedback] --> REVIEW
    HL --> REVIEW
    LMS --> REVIEW
    LP --> REVIEW
    REVIEW --> GH
```

This closes the loop: curriculum design produces learning experiences; evidence from those experiences feeds the next controlled revision.
