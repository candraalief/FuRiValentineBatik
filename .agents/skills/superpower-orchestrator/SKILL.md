---
name: superpower-orchestrator
description: >-
  The Master Conductor skill for orchestrating complex end-to-end UI/UX, web development,
  browser visual testing, and multi-agent workflows. Use this skill when planning large features,
  coordinating specialized subagents, conducting multi-step audits, or decomposing complex project goals.
---

# Superpower Orchestrator: Multi-Agent & Skill Conductor

This skill equips the agent to act as a **Lead Tech Architect and Orchestrator**, coordinating specialized subagents, visual audits, and code generation across the entire development lifecycle.

---

## 🧭 Core Orchestration Principles

1. **Separation of Concerns & Specialization**:
   - Don't attempt to execute research, visual inspection, backend design, and frontend refactoring in a single unstructured turn.
   - Decompose tasks into specialized sub-tracks:
     - **Research Subagent**: For codebase exploration, API documentation, and competitor benchmarks.
     - **Browser Subagent**: For live web verification, responsive breakpoint inspections, and visual checks.
     - **Implementation (Self)**: For precise, modular code modifications.

2. **Context Preservation**:
   - Heavy exploratory work (searching hundreds of files, browsing multiple external sites) should be delegated to subagents so the main agent context remains crisp and focused on the user's immediate goal.

3. **Verification-First Loop**:
   - **Perceive**: Inspect current state before proposing changes.
   - **Plan**: Structure changes logically (dependencies first, UI second).
   - **Execute**: Make surgical, minimal edits.
   - **Verify**: Validate with automated build commands (`next build`) and visual inspection before reporting completion.

---

## ⚡ Orchestration Workflows

### Track A: UI/UX Redesign & Layout Upgrade
1. **Analyze Design Intent**: Compare user request against current design tokens and references.
2. **Consult Design System Skill**: Activate `ui-ux-design-system` for accessibility (contrast, touch targets, keyboard nav) and responsiveness.
3. **Implement Components**: Follow feature-driven modular structure (`src/features/<domain>/`).
4. **Visual & Build Validation**: Run build verification and use browser agents to verify layout.

### Track B: Browser Automation & Visual QA
1. **Trigger Browser Subagent**: Delegate navigation and viewport inspections.
2. **Inspect Viewports**: Test Mobile (375px), Tablet (768px), and Desktop (1280px+).
3. **Validate Edge Cases**:
   - Modal backdrops & click-outside dismissal
   - Body scroll locking without layout shift
   - Form error states and accessibility tags
4. **Report Findings**: Summarize defects as actionable fix tasks.

### Track C: Database & Backend Integration
1. **Define Schema & Types First**: Build TypeScript interfaces under `types/` before touching UI.
2. **Build Async Service Layer**: Wrap queries in asynchronous service methods (e.g. `KoleksiService`) to allow seamless DB swapping without breaking UI components.
3. **Isolate Core Pages**: Keep landing pages independent from heavy DB calls to maintain optimal Core Web Vitals.
