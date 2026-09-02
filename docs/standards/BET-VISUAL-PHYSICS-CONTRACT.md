# BET Visual & Physics Contract

> Shared source of truth for Blade Element Theory visuals across the ATPL(H) learning ecosystem.
>
> Applies to: **Book/TikZ · Curriculum/MkDocs · SVG/media assets · HeliLab/Canvas · NotebookLM/Gemini media**.

## Purpose

The same Blade Element Theory must not be redrawn independently in every medium. This contract separates **technical meaning** from **renderer implementation** and freezes the conventions that all renderers must follow.

The technical authority is:

1. the verified HeliLab physics engine;
2. `ZanneRay/helilab/PHYSICS_VISUAL_CONTRACT.md`;
3. approved course-book aerodynamics and the established `\BETdiagram` construction;
4. the curriculum's Module 1 progressive-reveal design.

The core rule is:

> **Physics and relative geometry are invariant; page-left/page-right orientation is renderer-specific.**

A book figure and an interactive HeliLab figure may therefore be horizontal mirrors of one another and both be correct, provided the **entire local coordinate system and every dependent element are mirrored coherently**. A disagreement in physics, sign meaning, or relative vector geometry must be stopped and reviewed before implementation.

---

# 1 · Canonical reasoning chain

Every BET representation must preserve this causal structure:

**LOCAL INPUTS → VELOCITIES → FLOW GEOMETRY → SECTION FORCES → RESOLVED COMPONENTS → ROTOR OUTPUT**

For the Module 1 hover reference case:

**Ω, r, vᵢ, θ, ρ → vrot = Ωr + perpendicular/axial velocity → vrel → φ → α = θ − φ → FL/FD → TAF → dT (FV) / FH → ΣdT → T; Σ(FH·r) → Mbrake**

The visual system exists so the learner can propagate a change through this chain rather than memorise an endpoint.

---

# 2 · Authority and precedence

When implementations differ, use this order:

1. **Physics correctness:** verified HeliLab physics and approved course aerodynamics.
2. **Relative vector/sign meaning:** HeliLab `PHYSICS_VISUAL_CONTRACT.md` and this shared contract.
3. **Instructional reveal order:** Module 1 Visual System / Learning Experience.
4. **Renderer orientation and implementation:** TikZ, SVG, Canvas or media animation.

The SVG is a **controlled derived asset**, not a source of aerodynamic truth.

The existing book/TikZ BET macro remains a mature print implementation. Its mirrored page orientation is valid where the complete geometry is internally coherent. HeliLab remains the canonical **interactive** orientation for M1-04 and related widgets.

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

# 4 · Coordinate, orientation and vector conventions

## 4.1 Reference plane

The **local TPP / rotational reference stays horizontal where practical** in blade-element teaching diagrams. The blade chord must remain visually distinct from it.

## 4.2 Renderer orientation and mirroring

The current HeliLab `wBladeElement` layout is the **canonical interactive orientation**. New HeliLab mission states should reuse it rather than inventing another local layout.

The established book/TikZ BET figure may use the horizontally mirrored orientation. Mirroring is a renderer-level transform, not a physics change.

A valid mirror must transform the complete local construction together:

- blade/aerofoil orientation and leading/trailing-edge relationship;
- `vrot`;
- induced/axial component;
- `vrel` line and arrow convention used by that renderer;
- θ, φ and α arcs;
- FL, FD and TAF;
- resolved normal and in-plane components;
- construction helpers and dependent labels.

**Never mirror only the aerofoil, only `vrel`, only the force set, or only one velocity leg.** That creates a half-mirrored diagram whose relationships are physically incoherent.

Page-left/page-right is therefore **not** itself a physical sign convention. Use relational wording such as **upstream/downstream**, **toward the blade**, **opposite blade travel**, and **normal/in-plane relative to the rotor plane**.

## 4.3 Velocity-triangle topology

Within one renderer, preserve one coherent triangle topology throughout a learning sequence.

For HeliLab/M1-04, use the established HeliLab topology:

- `vrot` is the canonical rotational-velocity label for students;
- the axial/induced component completes the orthogonal velocity construction;
- the resulting `vrel` line connects the velocity-component construction to the local blade reference;
- in the Module 1 hover reference state, only `vrot` and `vi` are active;
- additional forward-flight, climb/descent, flapping or body-rate terms appear later without replacing the base construction logic.

A print renderer may show the horizontal mirror of this topology, provided §4.2 is satisfied.

## 4.4 Relative airflow / relative-velocity arrow convention

The **geometric line and angular relationships** are the physics-critical part. Arrowhead convention may differ between established renderers if the quantity is explicitly defined and the figure remains internally coherent.

For HeliLab interactive teaching, `vrel` follows the existing HeliLab relative-airflow convention:

**tail upstream → arrowhead at the blade-element / leading-edge reference point.**

The established book/TikZ renderer may retain its own outward resultant-vector convention where already defined. Do not mix the HeliLab arrowhead convention into an otherwise book-oriented figure, or vice versa, without transforming and relabelling the entire construction.

The direction/line of `vrel` must be derived from the active velocity components, never manually rotated for aesthetics.

## 4.5 Angles

- **θ — blade pitch angle:** angle between chord and local rotor-plane reference.
- **φ — inflow angle:** angle between local tangential/reference direction and `vrel`.
- **α — angle of attack:** angle between chord and `vrel`.
- For the normal Module 1 inflow reference: **α = θ − φ**.

Use the term **blade pitch angle θ** in student-facing material. Do **not** use “AOI” as the primary label in the shared BET visual language.

Do not use visual placement that suggests `α = θ`.

## 4.6 Forces

- **FL** is normal to `vrel`.
- **FD** is parallel to the adopted local relative-flow convention and acts in the drag/downstream sense.
- **TAF** is the vector resultant of FL and FD.
- **dT (FV)** is the local component of TAF normal to the local TPP.
- **FH** is the in-plane component of TAF.
- In the normal powered-flight teaching case, `FH` represents the local **braking / torque contribution opposite blade travel**.
- Whether that braking vector appears left or right on the page depends on renderer orientation; **“left” or “right” is not the physics definition**.
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

Colour communicates **physical meaning**, not epistemological status.

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

`vrel` is an airflow/velocity construction and therefore remains blue. Purple is reserved for the **TAF resultant**.

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

HeliLab is the canonical **interactive renderer** for Module 1. M1-04 should reuse verified physics and the current `wBladeElement` geometry/control/drawing helpers rather than reimplementing or visually reorienting them.

## Book / TikZ

The established `\BETdiagram` macro remains the mature print implementation. A fully mirrored print orientation is valid. Its physics, relative vector relationships, labels and force meaning must conform to this contract, but it does **not** need to copy HeliLab page-left/page-right orientation.

## Curriculum / SVG / media

`docs/assets/figures/module-1/master-b-bet-blade-element.svg` is a derived reusable asset. For Module 1 instructional continuity, it should normally match the HeliLab interactive orientation unless there is an explicit print/layout reason to use the fully mirrored book orientation.

Named SVG groups should map to the canonical layers in §3. The asset must not introduce a hybrid orientation, its own colour grammar or inconsistent terminology.

## NotebookLM / Gemini media

Generated narration may explain approved relationships, but generated aerodynamic artwork is not authoritative. Use approved derived assets or faithful animated derivatives.

Pre-study must not reveal the complete M1-04 causal solution before the classroom prediction.

---

# 11 · Conflict-resolution log

The following decisions are frozen for Module 1:

| ID | Decision |
|---|---|
| C1 | canonical student label is `vrot (= Ωr)`, not `vr` |
| C2 | HeliLab/M1-04 uses the established HeliLab velocity-triangle topology |
| C3 | HeliLab `vrel` uses its existing upstream → blade relative-airflow arrow convention |
| C4 | a fully mirrored book/TikZ orientation is valid if the complete geometry is mirrored coherently |
| C5 | φ uses airflow blue |
| C6 | θ uses chord/pitch orange |
| C7 | FL green, FD red, TAF purple |
| C8 | normal-flight FH means aft/opposite blade travel; page-left/page-right depends on renderer orientation |
| C9 | use “blade pitch angle θ”; drop “AOI” as the shared primary term |
| C10 | local normal component is labelled `dT (FV)`; whole-rotor `T` only after summation |
| C11 | colour is meaning-based; input/derived role uses line style/reveal state instead of hue |
| C12 | never create a half-mirrored figure by changing only airfoil, vectors, forces or arrowheads |

---

# 12 · Stage 2 prerequisite / QA checklist

A BET visual is approved only when all applicable items pass:

- [ ] Renderer orientation is identified: HeliLab canonical interactive or fully mirrored print orientation.
- [ ] No partial/hybrid mirroring is present.
- [ ] Velocity-triangle geometry is internally coherent.
- [ ] `vrot`, `vi`, `vrel` and φ use airflow semantics.
- [ ] θ and chord use pitch/chord semantics.
- [ ] FL = green, FD = red, TAF = purple.
- [ ] Normal-powered-flight FH is opposite blade travel and amber, irrespective of page-left/page-right.
- [ ] Local normal component is `dT (FV)`, not whole-rotor `T`.
- [ ] “AOI” is absent from shared primary labels.
- [ ] α follows the intended sign relation for the active regime, including negative α when applicable.
- [ ] FL is normal to `vrel`.
- [ ] FD follows the adopted local-flow convention.
- [ ] TAF is vectorially consistent with FL + FD.
- [ ] Resolved components are consistent with TAF and the local TPP.
- [ ] Any angle exaggeration is explicitly labelled as not to scale.
- [ ] HeliLab `verify_physics.js` remains green for relevant code changes.
- [ ] Desktop and 390 px mobile views have no critical label collisions.
- [ ] Light/dark rendering preserves semantic colour meaning.
- [ ] Module 1 reveal sequence is preserved when used instructionally.

---

# 13 · Change protocol

1. Change this contract first when a convention intentionally changes.
2. Update SVG/TikZ/Canvas/media renderers against it.
3. Physics changes require verification tests.
4. Visual changes require a comparison against the canonical layers and desktop/mobile checks.
5. Do not resolve a mismatch by silently keeping different **physics or relative geometry** in different media.
6. Renderer-specific horizontal mirroring is permitted only as a complete coherent transform under §4.2.

!!! success "Architecture decision"
    **There is one BET model and multiple coherent renderers. HeliLab defines the canonical interactive orientation; the book/TikZ renderer may use a fully mirrored print orientation without changing the physics.**
