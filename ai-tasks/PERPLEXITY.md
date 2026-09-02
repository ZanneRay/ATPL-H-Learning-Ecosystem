# Task Brief — Perplexity

## Role

You have two related roles in this project:

1. **Evidence & regulatory researcher** for the ATPL(H) curriculum.
2. **Lead HeliLab developer**, because you have substantial prior context from developing the existing HeliLab application with the project owner.

Your immediate priority is the HeliLab workstream below. Regulatory/evidence review can run in parallel, but do not let broad research delay the Module 1 implementation analysis.

---

# Workstream A — HeliLab Module 1

## Goal

Translate the now-defined Module 1 learning design into a technically coherent HeliLab implementation without destroying useful existing HeliLab functionality.

## Read first — curriculum repository

Read these files in this order:

1. `docs/curriculum/MODULE-1-BLUEPRINT.md`
2. `docs/curriculum/MODULE-1-LEARNING-EXPERIENCE.md`
3. `docs/curriculum/MODULE-1-INSTRUCTOR-LESSON-PLAN.md`
4. `docs/curriculum/MODULE-1-VISUAL-SYSTEM.md`
5. `docs/curriculum/32-HOUR-CURRICULUM-MAP.md`

Then inspect the current `ZanneRay/helilab` repository, especially the current application architecture and `HeliLab.html` before proposing changes.

## Immediate development target

**M1-04 — Build a Blade Element**

This is the core Module 1 mission.

The instructional chain is:

**vr + vi → vrel → φ → α → FL/FD → TAF → FV/FH → rotor tendency**

The visual source of truth is **Master B — BET blade element / velocity triangle** in `MODULE-1-VISUAL-SYSTEM.md`.

## Required learner sequence

The mission should make the learner:

1. identify the local velocity inputs;
2. construct or predict local `vrel`;
3. predict inflow angle `φ`;
4. infer effective AOA `α` using `α = θ − φ`;
5. predict the qualitative `FL` / `FD` tendency;
6. understand TAF and its resolution into `FV` / `FH`;
7. infer the qualitative rotor thrust/torque tendency.

Prediction gates are required before revealing important consequences. In particular, the learner should commit around steps 3, 5 and 7.

**Moving sliders until the desired answer appears is not completion.**

## UX requirement

HeliLab should feel as though the instructor's technical figure has become interactive.

Do not create a separate diagram language. Preserve the visual hierarchy:

**Inputs → Constructed quantities → Local outputs → Whole-rotor outputs**

Keep local blade quantities visually distinct from whole-rotor quantities.

## Before coding

First produce an **implementation analysis**, containing:

- current HeliLab architecture relevant to this mission;
- functionality that can be reused;
- functionality that should not be disturbed;
- technical debt that directly blocks M1-04;
- proposed state/data model for M1-04;
- proposed UI states and prediction gates;
- exact files/functions/components likely to change;
- risks/regressions;
- staged implementation plan;
- what can be implemented now versus what needs curriculum-owner clarification.

Do **not** start with a broad rewrite of HeliLab.

After the implementation analysis, present the smallest coherent implementation increment for approval/PR.

## Future Module 1 missions

Keep the architecture compatible with:

- M1-01 Force Dependency — MODEL
- M1-02 AOA ≠ Pitch — EXPLORE
- M1-03 Stall Boundary — EXPLORE
- M1-04 Build a Blade Element — MISSION
- M1-05 Rotor-speed/radial bridge — optional CHALLENGE

And with the longer-term scaffolding progression:

**MODEL → EXPLORE → MISSION → CHALLENGE**

---

# Workstream B — Evidence & regulatory review

Independently verify the Module 1 design against current high-quality sources.

## Regulatory

Use current primary EASA sources wherever possible. Verify relevant Subject 082 learning objectives and any applicable course-design requirements. Do not infer that CBTA/competency-oriented teaching replaces formal theoretical-knowledge examinations.

## Educational evidence

Research evidence relevant to:

- prediction before instruction;
- retrieval practice;
- spaced/delayed retrieval;
- misconception repair;
- worked examples and scaffolding;
- interactive simulation;
- diagram/visual learning in technical/STEM education;
- peer explanation;
- cognitive load and progressive disclosure.

For recommendations distinguish:

**REGULATORY REQUIREMENT / STRONG EVIDENCE / REASONABLE DESIGN INFERENCE**

Flag unsupported claims and conflicts rather than trying to make the existing design look correct.

## Deliverable

Produce a concise evidence report with direct source links and enough bibliographic information for later verification. Prioritise primary/authoritative sources and systematic reviews/meta-analyses where suitable.

---

# Important boundary

You are encouraged to challenge technical implementation choices. Do not silently change the curriculum's learning intent. If implementation constraints suggest a curriculum change, state the conflict explicitly and propose options for the owner/integrator to decide.
