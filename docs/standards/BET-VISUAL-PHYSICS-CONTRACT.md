# BET Visual & Physics Contract

> Shared source of truth for Blade Element Theory visuals across the ATPL(H) learning ecosystem.
>
> Applies to: **Book/TikZ · Curriculum/MkDocs · SVG/media assets · HeliLab/Canvas · NotebookLM/Gemini media**.

## Purpose

The same Blade Element Theory must not be redrawn independently in every medium. This contract separates **technical meaning** from **renderer implementation** and freezes the conventions that all renderers must follow.

The technical authority is:

1. the verified HeliLab physics engine;
2. `ZanneRay/helilab/PHYSICS_VISUAL_CONTRACT.md`;
3. approved course-book aerodynamics and the established `\BETdiagram` construction, provided they do not conflict with 1–2;
4. the curriculum's Module 1 progressive-reveal design.

If a book, SVG, media or canvas rendering conflicts with the verified HeliLab convention, the renderer is corrected. A disagreement in the physics itself must be stopped and reviewed before implementation.

---

# 1 · Canonical reasoning chain

Every BET representation must preserve this causal structure:

**LOCAL INPUTS → VELOCITIES → FLOW GEOMETRY → SECTION FORCES → RESOLVED COMPONENTS → ROTOR OUTPUT**

For the Module 1 hover reference case:

**Ω, r, vᵢ, θ, ρ → vrot = Ωr + perpendicular/axial velocity → vrel → φ → α = θ − φ → FL/FD → TAF → dT (FV) / FH → ΣdT → T; Σ(FH·r) → Mbrake**

The visual system exists so the learner can propagate a change through this chain rather than memorise an endpoint.

---

# 2 · Authority and precedence

When visual implementations differ, use this order:

1. **Physics correctness:** verified HeliLab physics.
2. **Vector/sign/visual convention:** HeliLab `PHYSICS_VISUAL_CONTRACT.md` and this shared contract.
3. **Instructional reveal order:** Module 1 Visual System / Learning Experience.
4. **Renderer implementation:** TikZ, SVG, Canvas or media animation.

The SVG is a **controlled derived asset**, not a source of aerodynamic truth.

The existing book/TikZ BET macro remains valuable as the mature print implementation, but any convention that conflicts with the verified shared contract must be brought into alignment rather than propagated into new media.

---

# 3 · Canonical conceptual layers

All BET renderers should map their elements to these canonical layer names, even when the technology cannot literally use SVG group IDs.

| Canonical layer | Meaning |
|---|---|
| `reference-frame` | local TPP / rotor-plane reference and construction axes |
| `blade-element` | aerofoil section / local blade element |
| `chord-line` | structural chord reference |
| `velocity-vrot` | local rotational velocity, `vrot = Ωr` in hover |
| `velocity-vt` | additional tangential contribution when applicable |
| `velocity-axial` | induced/climb/descent/perpendicular contribution as applicable |
| `velocity-vrel` | local resultant relative-airflow vector |
| `angle-theta` | blade pitch angle θ relative to the rotor-plane reference |
| `angle-phi` | inflow angle φ between rotor-plane/tangential reference and `vrel` |
| `angle-alpha` | effective angle of attack α between chord and `vrel` |
| `forces-local` | FL, FD and TAF |
| `forces-resolved` | local thrust component `dT (FV)` and in-plane component `FH` |
| `rotor-output` | summed thrust and braking-torque consequence |
| `construction-helpers` | right-angle boxes, parallelogram guides, ghost vectors |
| `annotations` | labels, equations and didactic callouts |

For Module 1, renderers may hide later layers, but they must not change their meaning.

---

# 4 · Coordinate and vector conventions

## 4.1 Reference plane

The **local TPP / rotational reference stays horizontal where practical** in blade-element teaching diagrams. The blade chord must remain visually distinct from it.

## 4.2 Velocity-triangle topology

Use the established HeliLab topology consistently across Canvas, SVG, TikZ-derived teaching assets and media.

- `vrot` is the canonical rotational-velocity label for students.
- The perpendicular/induced component constructs the velocity triangle in the same orientation as HeliLab; do not mirror the triangle merely for page composition.
- In the Module 1 hover reference state, only `vrot` and `vi` are active.
- Additional forward-flight, climb/descent, flapping or body-rate terms appear later without changing the base topology.

## 4.3 Relative airflow — arrow direction is fixed

`vrel` is drawn using the HeliLab/Leishman aerodynamic convention:

**tail upstream → arrowhead at the blade element / leading-edge reference point.**

Do not draw `vrel` from the blade outward/downstream. Although an opposite velocity-vector convention can be algebraically transformed, mixing the two conventions reverses the visual interpretation of φ, α and force orientation.

The direction of `vrel` must be derived from the active velocity components, never manually rotated for aesthetics.

## 4.4 Angles

- **θ — blade pitch angle:** angle between chord and local rotor-plane reference.
- **φ — inflow angle:** angle between local tangential/reference direction and `vrel`.
- **α — angle of attack:** angle between chord and `vrel`.
- For the normal Module 1 inflow reference: **α = θ − φ**.

Use the term **blade pitch angle θ** in student-facing material. Do **not** use “AOI” as the primary label in the shared BET visual language.

Do not use visual placement that suggests `α = θ`.

## 4.5 Forces

- **FL** is normal to `vrel`.
- **FD** is parallel to and opposing the adopted relative-flow direction.
- **TAF** is the vector resultant of FL and FD.
- **dT (FV)** is the local component of TAF normal to the local TPP.
- **FH** is the in-plane component of TAF.
- In the normal powered-flight teaching case, `FH` is shown **aft/opposite blade travel** and represents the local braking/torque contribution the engine must overcome.
- A local `dT (FV)` is **not** whole-rotor thrust.
- Whole-rotor thrust appears only after radial/azimuthal summation.

Driving/neutral autorotation cases may reverse or suppress `FH` later, but the regime must be explicit; they are not part of the Module 1 canonical hover state.

---

# 5 · Rotor and azimuth conventions

The ecosystem inherits the HeliLab rotor convention:

- main rotor rotates **counter-clockwise viewed from above**;
- ψ = 0° at the tail;
- ψ = 90° advancing side/right;
- ψ = 180° nose;
- ψ = 270° retreating side/left.

Module 1's local hover figure does not need azimuth labels, but later reuse must never contradict this convention.

---

# 6 · Canonical nomenclature

Student-facing notation is fixed as follows:

| Meaning | Canonical student-facing notation |
|---|---|
| rotational velocity | `vrot (= Ωr)` |
| induced velocity | `vi` |
| resultant relative airflow | `vrel` |
| blade pitch angle | `θ` |
| inflow angle | `φ` |
| effective angle of attack | `α` |
| lift / drag | `FL`, `FD` |
| total aerodynamic force | `TAF` |
| local normal / thrust component | `dT (FV)` |
| local in-plane component | `FH` |
| whole-rotor outputs | `T`, `Mbrake` |

Internal HeliLab quantities such as `U_T` and `U_P` remain valid in code and advanced readouts. Early student-facing media should not introduce both internal and teaching notation unless there is a specific learning reason.

The mapping must remain explicit: in the Module 1 hover reference state, `vrot = Ωr` corresponds to the local tangential contribution represented by HeliLab's `U_T`.

---

# 7 · Meaning-based colour contract

Colour communicates **physical meaning**, not epistemological status. The previous “input vs constructed” hue system is retired.

| Physical meaning | HeliLab role | Canonical colour | Applies to |
|---|---|---|---|
| Airflow / wind | `wind` / `accent` | `#38bdf8` | `vrot`, `vi`, `vrel`, φ arc and φ label |
| Chord / pitch geometry | `chord` | `#fb923c` | blade chord, θ arc, θ label, leading-edge marker |
| Lift / local useful thrust | `lift` | `#34d399` | FL, `dT (FV)` |
| Drag penalty | `drag` | `#f87171` | FD |
| Resultant aerodynamic force | dedicated resultant | `#c084fc` | TAF |
| In-plane braking / torque contribution | `warn` | `#fbbf24` | FH in normal powered flight |
| Structural reference / helpers | `dim` | `#8b9bb4` | TPP, axes, construction helpers |
| α state | contextual | green → amber → red | α wedge/label according to stall proximity |

`vrel` is an airflow vector and therefore remains blue. Purple is reserved for the **TAF resultant**, not `vrel`.

Light/dark renderers may use contrast-adjusted equivalents, but the semantic category must remain recognisable.

### Input vs derived quantities

If an instructional state needs to distinguish an entered quantity from a derived quantity, express that with **line style, opacity, reveal state or annotation**, not with a conflicting hue.

Examples:

- directly set/persistent geometry: solid;
- derived/predicted angle during a gate: dashed or ghosted until reveal;
- revealed verified quantity: solid at its semantic colour.

---

# 8 · Progressive reveal contract

Module 1 uses:

**GHOST → PREDICT → REVEAL → TRANSFER**

The canonical Master B progression is:

### State B0 — Ghost
`reference-frame + blade-element + chord-line`

No answer-bearing resultant, angle or force vectors.

### State B1 — Velocity inputs
Add `velocity-vrot` and active `velocity-axial`.

### Gate 1 — Predict flow geometry
Student predicts the direction/tendency of `vrel` and/or φ before reveal.

### State B2 — Flow geometry
Reveal `velocity-vrel + angle-phi`.

### State B3 — Pitch and AOA
Add `angle-theta`; learner predicts α; reveal `angle-alpha` and, when appropriate, `α = θ − φ`.

### Gate 2 — Predict section-force consequence
Student predicts the effect of the changed geometry before force vectors appear.

### State B4 — Local forces
Reveal `FL + FD + TAF`.

### State B5 — Resolved forces
Reveal `dT (FV) + FH`.

### Gate 3 — Predict rotor consequence
Learner makes a structured causal prediction before any whole-rotor answer is shown.

### State B6 — Rotor consequence
Reveal `rotor-output` / local-to-rotor summation.

Moving sliders without prediction is not mission completion.

---

# 9 · Simplification policy

For Module 1 M1-04 use a deliberately simple canonical local hover case:

- no forward-flight μ term;
- no flapping term;
- no body-rate terms;
- no twist-dependent comparison unless explicitly introduced;
- no autorotation sign reversal;
- no non-uniform inflow complexity.

The full HeliLab engine may support these effects, but hidden complexity must not change the learner-visible answer in the simplified mission.

Later modules reuse the same visual grammar and activate additional inputs rather than replacing the model.

---

# 10 · Renderer-specific rules

## HeliLab / Canvas

HeliLab is the interactive reference implementation for sign, vector orientation, topology and semantic colours. M1-04 should reuse verified physics and existing drawing/control helpers rather than reimplement them.

## Book / TikZ

The established `\BETdiagram` macro remains the mature print implementation and a valuable geometric reference. Its output must now be audited against this contract. Where its labels, arrow direction or colours differ, update the print implementation deliberately rather than carrying the mismatch into other renderers.

## Curriculum / SVG / media

`docs/assets/figures/module-1/master-b-bet-blade-element.svg` is a derived reusable asset. It must conform to this contract before being treated as approved.

Named SVG groups should map to the canonical layers in §3. The asset must not introduce its own colour grammar, vector direction or terminology.

## NotebookLM / Gemini media

Generated narration may explain approved relationships, but generated aerodynamic artwork is not authoritative. Use approved derived assets or faithful animated derivatives.

Pre-study must not reveal the complete M1-04 causal solution before the classroom prediction.

---

# 11 · Conflict resolution log — Pre-Stage 2

The following decisions are frozen for M1-04:

| ID | Decision |
|---|---|
| C1 | canonical student label is `vrot (= Ωr)`, not `vr` |
| C2 | SVG/media use the established HeliLab velocity-triangle topology |
| C3 | `vrel` arrow points from upstream toward the blade element |
| C4 | φ uses airflow blue |
| C5 | θ uses chord/pitch orange |
| C6 | FL green, FD red, TAF purple |
| C7 | normal-flight FH points aft/opposite blade travel and uses amber |
| C8 | use “blade pitch angle θ”; drop “AOI” as the shared primary term |
| C9 | local normal component is labelled `dT (FV)`; whole-rotor `T` only after summation |
| C10 | colour is meaning-based; input/derived role uses line style/reveal state instead of hue |

---

# 12 · Stage 2 prerequisite / QA checklist

A BET visual is approved only when all applicable items pass:

- [ ] `vrel` arrow runs upstream → blade element.
- [ ] Velocity-triangle topology matches HeliLab.
- [ ] `vrot`, `vi`, `vrel` and φ use airflow semantics.
- [ ] θ and chord use pitch/chord semantics.
- [ ] FL = green, FD = red, TAF = purple.
- [ ] Normal-powered-flight FH points aft/opposite blade travel and is amber.
- [ ] Local normal component is `dT (FV)`, not whole-rotor `T`.
- [ ] “AOI” is absent from the shared primary labels.
- [ ] α follows the intended sign relation for the active regime.
- [ ] FL is normal to `vrel`.
- [ ] FD follows the adopted local-flow convention.
- [ ] TAF is vectorially consistent with FL + FD.
- [ ] Resolved components are consistent with TAF and the local TPP.
- [ ] HeliLab `verify_physics.js` remains green for relevant code changes.
- [ ] Desktop and 390 px mobile views have no critical label collisions.
- [ ] Light/dark rendering preserves semantic colour meaning.
- [ ] Module 1 reveal sequence is preserved when used instructionally.

Stage 2 must not begin from an unreviewed rendering that fails any HIGH-severity convention above.

---

# 13 · Change protocol

1. Change this contract first when a convention intentionally changes.
2. Update SVG/TikZ/Canvas/media renderers against it.
3. Physics changes require verification tests.
4. Visual changes require a comparison against the canonical layers and desktop/mobile checks.
5. Do not resolve a mismatch by silently keeping different conventions in different media.

!!! success "Architecture decision"
    **There is one BET model and multiple renderers — with HeliLab's verified physics and visual convention as the implementation authority.**
