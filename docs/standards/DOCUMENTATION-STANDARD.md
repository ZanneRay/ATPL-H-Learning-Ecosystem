# Documentation & Visual Standard

## Purpose

This standard keeps the live handbook, printable handbook, instructor material and HeliLab learning content visually and conceptually consistent.

## 1. Visual-first rule

Every major section should begin with a diagram, map, matrix or annotated figure that communicates the structure before prose adds nuance.

Use prose for:

- decisions and rationale;
- assumptions and limitations;
- regulatory nuance;
- instructor guidance;
- technical detail that does not fit safely in a diagram.

Do not repeat the diagram as paragraphs of text.

## 2. Diagram types

| Need | Preferred source format |
|---|---|
| Process / workflow | Mermaid flowchart |
| Learning journey | Mermaid journey or flowchart |
| Dependency / architecture | Mermaid flowchart |
| Matrices / LO coverage | YAML/CSV-generated table or SVG |
| Aerodynamic vector diagram | Editable SVG |
| Rotor-disc / blade-element technical figure | Editable SVG |
| Data plot | generated vector chart |
| Poster / complex visual composition | SVG source with documented components |

Technical aerodynamic figures must remain editable and must not be generated as flattened AI images.

## 3. Page pattern

Each handbook chapter should follow this rhythm:

1. **Visual summary** — one page or dominant diagram.
2. **Why it matters** — operational and educational relevance.
3. **Design decisions** — what we have chosen and why.
4. **Implementation** — how it appears in lessons/tools.
5. **Evidence / traceability** — LO, assessment or QA linkage where relevant.
6. **Open issues** — only where a decision is genuinely unresolved.

## 4. Learning terminology

Use the course learning cycle consistently:

**ORIENT → PREDICT → BUILD → EXPLORE → EXPLAIN → APPLY → CHECK & REFLECT**

Use these terms for student evidence:

**IDENTIFY → DESCRIBE → EXPLAIN → PREDICT → DIAGNOSE → TRANSFER**

## 5. Media responsibilities

Avoid copying the same full content into every platform.

- The **theory handbook** owns coherent technical explanation.
- **PowerPoint** owns the instructor-led visual narrative.
- **HeliLab** owns interactive manipulation and model testing.
- **Link & Learn** owns the student route, access and formative learning sequence.
- **LPlus** owns controlled/formal assessment where required.
- **GitHub** owns source files, metadata, revision history and design decisions.

## 6. Source and safety boundary

Aerodynamic course material may explain generic mechanisms. Aircraft-specific limits, procedures, speeds and recovery techniques require current approved source material (AFM/OM/SOP or other authorised documentation). Generic teaching material must not silently convert illustrative numbers or one-aircraft procedures into universal rules.

## 7. Single-source metadata

Where practical, structured curriculum facts should live in machine-readable data rather than only in prose. Candidate fields include:

```yaml
module_id: POF-02
title: Hover, Climb and Descent
planned_hours: 4.5
driving_question: How does vertical airflow change the rotor state?
easa_los: []
prerequisites: []
helilab_missions: []
formative_assessment: []
formal_assessment: []
ksa_focus: []
```

The aim is to generate coverage matrices and cross-platform mappings from one controlled dataset instead of maintaining several inconsistent spreadsheets manually.

## 8. Definition of a useful visual

A visual earns its place if it does at least one of the following:

- reveals a relationship that is hard to see in prose;
- reduces cognitive load;
- makes a sequence or dependency obvious;
- compares states or conditions;
- exposes a causal chain;
- lets a reviewer verify coverage or architecture quickly.

Decoration alone is not a reason to add a visual.
