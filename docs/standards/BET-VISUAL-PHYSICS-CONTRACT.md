# BET Visual & Physics Contract

> Shared source of truth for Blade Element Theory visuals across the ATPL(H) learning ecosystem.
>
> Applies to: **Book/TikZ · Curriculum/MkDocs · SVG/media assets · HeliLab/Canvas · NotebookLM/Gemini media**.

## Purpose

The same Blade Element Theory must not be redrawn independently in every medium. This contract separates **technical meaning** from **renderer implementation**.

The technical reference is the combination of:

1. the established BET relationships and notation in the course book;
2. the book's mature `\BETdiagram` TikZ construction;
3. the existing HeliLab physics engine and `PHYSICS_VISUAL_CONTRACT.md`;
4. the curriculum's Module 1 progressive-reveal design.

No renderer is allowed to invent its own geometry, sign convention, nomenclature or force meaning merely because it is visually convenient.

---

# 1 · Canonical reasoning chain

Every BET representation must preserve this causal structure:

**LOCAL INPUTS → VELOCITIES → FLOW GEOMETRY → SECTION FORCES → RESOLVED COMPONENTS → ROTOR OUTPUT**

For the Module 1 hover reference case:

**Ω, r, vᵢ, θ, ρ → vᵣ = Ωr + axial/perpendicular velocity → vrel → φ → α = θ − φ → FL/FD → TAF → FV/FH → ΣFV → T; Σ(FH·r) → Mbrake**

The point of the visual system is not merely to display these variables. It is to let the learner propagate a change through this chain.

---

# 2 · Authority and precedence

When sources differ, use this order:

1. **Physics correctness:** HeliLab verified physics + approved course-book aerodynamics.
2. **BET geometry/convention:** established book `\BETdiagram` construction and this contract.
3. **Instructional reveal order:** Module 1 Visual System / Learning Experience.
4. **Styling:** renderer-specific implementation, provided it does not change meaning.

The SVG is therefore a **controlled derived asset**, not the sole source of aerodynamic truth.

If a renderer exposes a conflict between the book macro, HeliLab and this contract, stop and document the conflict before changing any of them.

---

# 3 · Canonical conceptual layers

All BET renderers should map their elements to these layer names, even when the underlying technology cannot literally use SVG group IDs.

| Canonical layer | Meaning |
|---|---|
| `reference-frame` | local TPP / rotor-plane reference and construction axes |
| `blade-element` | aerofoil section / local blade element |
| `chord-line` | structural chord reference |
| `velocity-vr` | local rotational/tangential velocity |
| `velocity-vt` | forward-flight tangential contribution when applicable |
| `velocity-axial` | induced/climb/descent/perpendicular contribution as applicable |
| `velocity-vrel` | local resultant relative-airflow vector |
| `angle-theta` | blade pitch / AOI relative to reference plane |
| `angle-phi` | inflow angle between TPP/tangential reference and vrel |
| `angle-alpha` | effective AOA between chord and vrel |
| `forces-local` | FL, FD and TAF |
| `forces-resolved` | FV and FH relative to rotor plane |
| `rotor-output` | summed thrust and braking torque consequence |
| `construction-helpers` | right-angle boxes, parallelogram guides, ghost vectors |
| `annotations` | labels, equations and didactic callouts |

For Module 1, renderers may hide later layers, but they must not change their meaning.

---

# 4 · Coordinate and vector conventions

## 4.1 Reference plane

The **local TPP / rotational reference stays horizontal where practical** in blade-element teaching diagrams.

The blade chord is visually distinct from the TPP.

## 4.2 Relative airflow

`vrel` is the local resultant of the active velocity components. Its direction must be derived from those components; it must never be manually rotated just to make the figure aesthetically pleasing.

For the simple Module 1 hover reference state, the construction uses rotational velocity plus induced/perpendicular velocity only. Forward-flight, flapping, climb/descent and autorotation terms remain hidden until the curriculum introduces them.

## 4.3 Angles

- **θ / AOI / pitch** = angle between chord and local rotor-plane reference.
- **φ / INFLOW** = angle between local tangential/reference direction and `vrel`.
- **α / AOA** = angle between chord and `vrel`.
- Normal inflow reference: **α = θ − φ**.

Do not use visual placement that suggests `α = θ`.

## 4.4 Forces

- **FL** is normal to `vrel`.
- **FD** is parallel to and opposing the adopted relative-flow direction.
- **TAF** is the resultant of FL and FD.
- **FV** is the component of TAF normal to the local TPP.
- **FH** is the in-plane component of TAF.
- A local `FV` is **not** whole-rotor thrust.
- A local `FH` contributes to torque/braking behaviour according to sign and radial position.

Whole-rotor quantities appear only after the local-to-rotor summation step.

---

# 5 · Rotor and azimuth conventions

The ecosystem inherits the HeliLab rotor convention:

- main rotor rotates **counter-clockwise viewed from above**;
- ψ = 0° at the tail;
- ψ = 90° advancing side/right;
- ψ = 180° nose;
- ψ = 270° retreating side/left.

Module 1's local hover figure does not need azimuth labels, but it must never contradict this convention when later reused in forward-flight media.

---

# 6 · Nomenclature policy

Student-facing primary notation should remain stable across book, HeliLab and media:

| Meaning | Student-facing notation |
|---|---|
| rotational velocity | `vᵣ` or `vrot`, with `vᵣ = Ωr` |
| induced velocity | `vᵢ` |
| resultant relative airflow | `vrel` |
| blade pitch / AOI | `θ` / book symbol `ϑ` where required |
| inflow angle | `φ` |
| effective angle of attack | `α` |
| lift / drag | `FL`, `FD` |
| total aerodynamic force | `TAF` |
| resolved components | `FV`, `FH` |
| rotor outputs | `T`, `Mbrake` |

HeliLab internal quantities such as `U_T` and `U_P` may remain in code/readouts where useful, but early student-facing media should not introduce extra notation unless it serves a learning objective.

The curriculum can display `vᵣ` while the physics engine computes `U_T`; the mapping must be explicit and physically identical in the active scenario.

---

# 7 · Colour semantics

Renderer colours may adapt for light/dark mode, but semantic roles must remain stable.

The HeliLab palette is the interactive reference:

- airflow / velocity: accent blue family;
- chord / blade reference: orange family where used by HeliLab;
- lift / useful-force semantics: green family;
- drag / resisting-force semantics: red family;
- warnings / prediction uncertainty: amber family;
- reference geometry / helpers: neutral gray.

The book TikZ palette may retain its print-optimised colours, but the **meaning** of each vector must remain consistent. Do not use colour decoratively when the same colour already carries a physical meaning.

---

# 8 · Progressive reveal contract

Module 1 uses:

**GHOST → PREDICT → REVEAL → TRANSFER**

The canonical Master B progression is:

### State B0 — Ghost
`reference-frame + blade-element + chord-line`

No answer-bearing resultant, angle or force vectors.

### State B1 — Velocity inputs
Add `velocity-vr` and active `velocity-axial`.

Learner should be able to identify the inputs but not yet see `vrel`.

### Gate 1 — Predict flow geometry
Student predicts the direction/tendency of `vrel` and/or `φ` before reveal.

### State B2 — Flow geometry
Reveal `velocity-vrel + angle-phi`.

### State B3 — Pitch and AOA
Add `angle-theta`; learner predicts `α`; reveal `angle-alpha` and, when appropriate, `α = θ − φ`.

### Gate 2 — Predict section-force consequence
Student predicts the effect of the changed geometry before force vectors appear.

### State B4 — Local forces
Reveal `FL + FD + TAF`.

### State B5 — Resolved forces
Reveal `FV + FH`.

### Gate 3 — Predict rotor consequence
Learner makes a structured causal prediction before any whole-rotor answer is shown.

### State B6 — Rotor consequence
Reveal `rotor-output` / local-to-rotor summation.

Moving sliders without prediction is not mission completion.

---

# 9 · Simplification policy

A visual may simplify the active physics only when the simplification is intentional and visible in the curriculum scope.

For Module 1 M1-04:

- use a **canonical hover/near-hover local blade-element case**;
- no forward-flight μ term;
- no flapping term;
- no body-rate terms;
- no twist-dependent comparison unless explicitly introduced;
- no autorotation sign reversal;
- no non-uniform inflow complexity.

The full HeliLab engine may support these effects, but hidden complexity must not leak into an early conceptual mission.

Later modules reuse the same visual grammar and activate additional inputs rather than replacing the model.

---

# 10 · Renderer-specific rules

## Book / TikZ

The established `\BETdiagram` macro is the mature technical geometry reference for exam-style diagrams. It already supports advancing/retreating, hover/vertical, climb/descent and autorotation variants.

Changes to its geometry should be made only when they improve correctness or alignment with this contract.

## Curriculum / SVG / media

`docs/assets/figures/module-1/master-b-bet-blade-element.svg` is a derived reusable asset.

Its named groups should map to the canonical layer names in §3. New SVGs should reuse those names where applicable.

SVG/media artwork must not redraw a technically different velocity triangle just because an animation tool makes that easier.

## HeliLab / Canvas

HeliLab uses its verified physics engine for values and geometry. The canvas implementation should map its draw calls to the canonical conceptual layers and use the same reveal order.

Where existing `wBladeElement` / Guided BET geometry differs from the book macro or Master B, document the difference before M1-04 implementation.

Do not reimplement physics in a widget if an existing `helilab_core.js` helper already supplies it.

## NotebookLM / Gemini media

Generated narration may explain approved relationships, but generated aerodynamic artwork is not authoritative.

Use the approved Master SVG/TikZ-derived assets or faithful animated derivatives of them.

Pre-study must not reveal the complete M1-04 causal solution before the classroom prediction.

---

# 11 · QA checklist

A BET visual is approved only when all applicable items pass:

- [ ] Reference plane and chord are unambiguous.
- [ ] Active velocity inputs actually construct `vrel`.
- [ ] φ is measured against the intended reference.
- [ ] θ and α are visually distinct.
- [ ] α follows the intended sign relation for the active regime.
- [ ] FL is normal to `vrel`.
- [ ] FD follows the adopted local-flow convention.
- [ ] TAF is consistent with FL + FD.
- [ ] FV/FH are resolved relative to the TPP.
- [ ] Local forces are not labelled as whole-rotor output.
- [ ] HeliLab `verify_physics.js` remains green for relevant code changes.
- [ ] Desktop and 390 px mobile views have no critical label collisions.
- [ ] Light/dark rendering preserves semantic colour meaning.
- [ ] The figure uses the Module 1 reveal sequence when used instructionally.
- [ ] No hidden advanced physics changes the learner-visible answer in the simplified M1-04 state.

---

# 12 · Change protocol

1. Change the contract first when a convention intentionally changes.
2. Then update the relevant renderer(s).
3. Physics changes require verification tests.
4. Visual changes require comparison against the canonical layers and at least one desktop/mobile check.
5. Do not fix a mismatch by silently making each medium different.

!!! success "Architecture decision"
    **There is one BET model and multiple renderers — not one BET model per tool.**
