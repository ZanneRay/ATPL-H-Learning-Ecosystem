# ATPL(H) Learning Ecosystem

## A visual-first learning system for helicopter ground school

This site is the live design handbook for a modern ATPL(H) learning ecosystem. **082 Principles of Flight — Helicopters** is the first complete implementation and will be used as the blueprint before the architecture is extended to other subjects.

> **Design rule:** diagram first, explanation second.

---

## The idea in one view

```mermaid
flowchart LR
    A[EASA Subject 082\nKnowledge spine] --> B[Learning architecture]
    K[Area 100 KSA\nBehaviour layer] --> B
    B --> C[ORIENT]
    C --> D[PREDICT]
    D --> E[BUILD]
    E --> F[EXPLORE]
    F --> G[EXPLAIN]
    G --> H[APPLY]
    H --> I[CHECK & REFLECT]
    I -. spiral learning .-> C

    F --> HL[HeliLab]
    C --> M[Link & Learn]
    I --> LP[LPlus / assessment]
    E --> P[Instructor + PowerPoint]
    E --> T[Theory handbook]
```

The redesign does **not** replace rigorous theory with scenarios. It changes what students repeatedly *do with the theory*: retrieve it, predict with it, test it, explain it and transfer it to changed conditions.

## Three architecture layers

| Layer | Question | Output |
|---|---|---|
| **1. Educational vision** | How should a future helicopter pilot learn to reason aerodynamically? | Principles, KSA integration, learning cycle |
| **2. Curriculum architecture** | What must be learned, in what sequence, and how is mastery evidenced? | 32-hour map, LO traceability, module designs |
| **3. Delivery ecosystem** | Which tool is best for each learning function? | HeliLab, Link & Learn, LPlus, PowerPoint, handbook, GitHub |

## Current build priorities

1. Build the visual ecosystem poster.
2. Freeze the 32-hour Principles of Flight architecture.
3. Map every EASA Subject 082 Learning Objective.
4. Prototype Modules 1–3 in full detail.
5. Define the HeliLab learning modes and mission standard.
6. Define formative assessment, LPlus boundaries and Link & Learn student journey.
7. Publish the complete visual handbook and printable PDF.

## Output model

The repository is the source of truth. From it we aim to generate two primary human-facing products:

```mermaid
flowchart TB
    GH[(GitHub source of truth)]
    MD[Markdown narrative]
    YA[YAML curriculum data]
    MM[Mermaid process diagrams]
    SVG[SVG technical figures]

    GH --> MD
    GH --> YA
    GH --> MM
    GH --> SVG

    MD --> WEB[Live handbook website]
    YA --> WEB
    MM --> WEB
    SVG --> WEB

    MD --> PDF[Controlled handbook PDF]
    YA --> PDF
    MM --> PDF
    SVG --> PDF

    YA --> FUTURE[Future automation\nLO matrices · Moodle · assessment mappings]
```

The web handbook is the living version. The PDF is the controlled, printable release. Word is treated as an optional export rather than the master source.
