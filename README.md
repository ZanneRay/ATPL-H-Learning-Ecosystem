# ATPL(H) Learning Ecosystem

A design and development repository for a modern, competency-oriented ATPL(H) learning ecosystem.

## Current focus

The first complete implementation is **082 — Principles of Flight (Helicopters)**. The intention is to use this subject as the blueprint for future ATPL(H) subjects after the Principles of Flight architecture has been validated.

## Learning model

The core learning cycle is:

**ORIENT → PREDICT → BUILD → EXPLORE → EXPLAIN → APPLY → CHECK & REFLECT**

The design keeps rigorous theoretical knowledge at the centre while adding structured application, interactive exploration, formative assessment and KSA-oriented observable behaviours.

## Platform architecture

- **GitHub** — source of truth, version control, curriculum design, technical documentation and development workflow.
- **HeliLab** — interactive concept laboratory for helicopter aerodynamics and future learning modules.
- **Link & Learn (Moodle)** — student-facing learning path, preparation, resources, activities and formative learning.
- **LPlus** — formal assessment environment and assessment evidence where required.
- **Overleaf / LaTeX** — controlled long-form course publications and formal documentation.
- **PowerPoint** — instructor-led classroom presentation layer using the institutional master template.

## Repository structure

```text
docs/
  curriculum-handbook/
  architecture/
  standards/
  references/
subjects/
  082-principles-of-flight/
    curriculum/
    lessons/
    helilab-missions/
    assessment/
    source-material/
    slides/
helilab/
templates/
assessment/
  lplus/
  link-and-learn/
project-management/
```

## Design principle

Tools do not determine the pedagogy. First define what the student should understand, predict, explain and apply; then select the appropriate medium.

## Status

Early curriculum-architecture phase. Principles of Flight is the first full subject implementation.
