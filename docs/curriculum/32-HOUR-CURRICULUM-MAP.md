# 32-hour Principles of Flight Curriculum Map

> **Status:** working architecture. The exact allocation remains provisional until the full EASA Subject 082 LO mapping and current approved course constraints are reconciled.

The current course material already separates aerodynamic foundations from helicopter aerodynamics and uses a seven-lesson helicopter-aerodynamics sequence. The new architecture keeps that technical breadth but reorganises the learning experience around increasing aerodynamic reasoning rather than slide/chapter completion.

## Proposed course flow

```mermaid
flowchart LR
    M1[1 · Aerodynamic foundations\n& building rotor lift\n4.0 h]
    M2[2 · Hover, climb\n& descent\n4.5 h]
    M3[3 · Transition &\nforward-flight asymmetry\n5.0 h]
    M4[4 · Forward-flight performance\n& aerodynamic limits\n4.5 h]
    M5[5 · Stability, control\n& tail rotor\n4.5 h]
    M6[6 · Autorotation\n& rotor energy\n5.0 h]
    M7[7 · Integration\n& mastery\n4.5 h]

    M1 --> M2 --> M3 --> M4 --> M5 --> M6 --> M7
```

**Total planned classroom time: 32.0 hours**

## Driving questions

| Module | Driving question | Main reasoning move |
|---|---|---|
| **1. Aerodynamic foundations & rotor lift** | How can a rotating blade create and control rotor thrust? | Build the core causal model |
| **2. Hover, climb & descent** | How does vertical airflow change the rotor state and power requirement? | Compare equilibrium states |
| **3. Transition & forward-flight asymmetry** | Why does the rotor remain controllable when advancing and retreating blades see different airflow? | Reason around the rotor disc |
| **4. Forward-flight performance & limits** | Which aerodynamic mechanism becomes limiting as speed and loading increase? | Integrate competing limits |
| **5. Stability, control & tail rotor** | How are helicopter forces and moments balanced and disturbed? | Diagnose coupled behaviour |
| **6. Autorotation & rotor energy** | Where does rotor energy come from without engine torque? | Track energy and torque flow |
| **7. Integration & mastery** | Can you infer the aerodynamic mechanism from symptoms and changed conditions? | Diagnose and transfer |

## Spiral concept map

```mermaid
flowchart TB
    A[Relative airflow] --> B[Inflow angle]
    B --> C[Effective AoA]
    C --> D[Local lift & drag]
    D --> E[Rotor thrust & torque]
    E --> F[Aircraft response]

    A -. revisited in .-> H[Hover / climb / descent]
    A -. revisited in .-> FF[Forward flight]
    A -. revisited in .-> AR[Autorotation]

    C -. boundary .-> ST[Stall / retreating-side margin]
    E -. power relation .-> PW[Power required]
    E -. moments .-> CTRL[Control / stability / tail rotor]
```

The repeated reasoning chain is not a slogan; it is the conceptual backbone of the course. Each module adds a new airflow state, coupling or boundary condition while reusing the same fundamental language.

## Standard module rhythm

```mermaid
flowchart LR
    O[ORIENT\nOperational question] --> P[PREDICT\nCommit to an answer]
    P --> T[BUILD\nExplicit theory]
    T --> H[EXPLORE\nHeliLab / diagram / calculation]
    H --> X[EXPLAIN\nCausal chain]
    X --> A[APPLY\nChanged condition]
    A --> C[CHECK & REFLECT\nRetrieval + exam bridge]
```

Not every 20-minute segment must contain all seven stages. The rule applies at lesson/module scale: students should repeatedly move from prior model to explicit theory to testable application rather than remain passive for long blocks.

## Reasoning complexity across 32 hours

```mermaid
flowchart LR
    R1[IDENTIFY] --> R2[DESCRIBE] --> R3[EXPLAIN] --> R4[PREDICT] --> R5[DIAGNOSE] --> R6[TRANSFER]

    M1A[Modules 1–2] -. emphasis .-> R1
    M1A -.-> R2
    M1A -.-> R3
    M3A[Modules 3–4] -. emphasis .-> R3
    M3A -.-> R4
    M5A[Modules 5–6] -. emphasis .-> R4
    M5A -.-> R5
    M7A[Module 7] -. emphasis .-> R5
    M7A -.-> R6
```

## Platform pattern by module

| Phase | Primary medium | Example evidence |
|---|---|---|
| Orientation / preparation | Link & Learn | short retrieval or operational prompt |
| Explicit theory | instructor + PowerPoint + handbook | annotated diagram / worked reasoning |
| Exploration | HeliLab | committed prediction vs observed state |
| Explanation | classroom / mission card | causal chain, sketch, teach-back |
| Application | scenario / HeliLab challenge | changed-condition decision or diagnosis |
| Formative check | Link & Learn / classroom | retrieval, diagram, application item |
| Formal assessment | LPlus where required | controlled item / progress evidence |

## Design constraint

The formal EASA theoretical-knowledge scope remains a non-negotiable coverage requirement. This map becomes final only after each Subject 082 LO has a primary teaching location, retrieval location and assessment/evidence route.
