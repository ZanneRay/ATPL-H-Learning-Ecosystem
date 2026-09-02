# AI Collaboration Hub

This repository is the **curriculum/design source of truth** for the ATPL(H) Learning Ecosystem. Multiple AI systems may support the project, but they have different roles. Do not independently redesign the whole ecosystem.

## Operating model

**Human owner:** Zanne Ray  
**Lead curriculum/integration role:** ChatGPT  
**Independent curriculum red-team:** Claude  
**Evidence/regulatory research + HeliLab lead developer:** Perplexity  
**Source-grounded media experiments:** Gemini / NotebookLM  
**Coding assistant:** GitHub Copilot, used for bounded implementation/refactoring tasks

## Rules for every AI collaborator

1. Read the relevant task file under `ai-tasks/` before doing work.
2. Read the referenced project documents before proposing changes.
3. Preserve the core learning architecture unless your task explicitly asks you to challenge it.
4. Distinguish clearly between:
   - source-supported technical content;
   - regulatory requirement;
   - research evidence;
   - instructional-design decision;
   - implementation suggestion.
5. Do not silently rewrite authoritative technical content.
6. Do not treat competency-oriented learning as a replacement for EASA theoretical-knowledge requirements/examinations.
7. Do not add sensitive/internal assessment banks or licensed source material to this public repository.
8. Prefer a review/implementation plan before broad code or curriculum changes.
9. Keep outputs reviewable: state what you inspected, what you found, what you changed/propose, and remaining risks.
10. The human owner decides what is accepted. ChatGPT currently performs cross-stream integration into the curriculum architecture.

## Current project priority

The priority is **proof through Module 1**, not expansion of abstract framework.

Module 1 should become a pilot-ready complete learning experience:

**prepare → predict → build → explore → explain → apply → retrieve**

Its reusable aerodynamic reasoning model is:

**local velocities → relative airflow → INFLOW/AOA → local forces → resolved components → rotor output**

## Current workstreams

- Claude: follow `ai-tasks/CLAUDE.md`
- Perplexity: follow `ai-tasks/PERPLEXITY.md`
- Gemini / NotebookLM: follow `ai-tasks/GEMINI.md`
- Copilot: follow `ai-tasks/COPILOT.md` when explicitly assigned a coding task

## Repository relationship

Curriculum/design repository:
`ZanneRay/ATPL-H-Learning-Ecosystem`

Interactive application repository:
`ZanneRay/helilab`

The curriculum repository defines **why, what and when** HeliLab should teach. The HeliLab repository defines **how the interactive experience is implemented**. HeliLab implementation should use the same visual language and terminology as the curriculum rather than inventing a parallel instructional model.
