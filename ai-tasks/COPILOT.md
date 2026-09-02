# Task Protocol — GitHub Copilot

## Role

Copilot is a **bounded coding assistant**, not the curriculum architect and not an independent HeliLab product owner.

Use Copilot after a technical task has a clear acceptance criterion.

## Before coding in HeliLab

Read the task-specific issue/brief and, where relevant:

- `docs/curriculum/MODULE-1-VISUAL-SYSTEM.md`
- `docs/curriculum/MODULE-1-INSTRUCTOR-LESSON-PLAN.md`

Then inspect the existing implementation in `ZanneRay/helilab`.

## Good Copilot tasks

Examples:

- extract an existing calculation into a testable function;
- implement one approved prediction-gate component;
- add/reset one mission state;
- write regression tests for an existing calculation;
- improve accessibility/keyboard behaviour for a defined control;
- refactor duplicated code without changing behaviour;
- implement an approved SVG/diagram state transition;
- fix a reproducible bug with stated expected behaviour.

## Bad Copilot tasks

Do not ask Copilot to:

- “redesign HeliLab”;
- decide the learning architecture;
- invent aerodynamic relationships;
- replace working architecture simply because another framework is fashionable;
- implement broad changes without acceptance criteria.

## Required completion note

Every coding task should report:

1. files changed;
2. behaviour changed;
3. tests/checks performed;
4. known limitations;
5. anything that might affect existing HeliLab functionality.

When Perplexity is acting as HeliLab lead developer, Copilot should implement/refactor clearly bounded tasks that follow the agreed implementation plan rather than competing with it.
