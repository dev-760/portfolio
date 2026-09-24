"use client";
import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";

export default function SkillsPageContent() {
  return (
    <div className="bg-background text-on-surface antialiased font-['Inter',sans-serif]">
      
{/*  Main Container  */}
<div className="relative flex h-auto min-h-screen w-full flex-col bg-background group/design-root overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
<div className="px-4 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
<div className="layout-content-container flex flex-col max-w-[960px] flex-1">
{/*  Shared Component Header  */}

{/*  SECTION 1: 04 — SKILLS  */}
<section className="pt-8 pb-16">
<p className="text-secondary text-xs font-semibold uppercase tracking-wider pb-2 pt-1 px-4">04 — SKILLS</p>
<h1 className="text-on-surface tracking-[-0.025em] text-3xl md:text-[38px] font-bold leading-tight px-4 text-left pb-3 pt-2">
              Tools for thinking,<br className="hidden sm:inline" />organizing, and solving.
            </h1>
<p className="text-on-surface-variant text-base font-normal leading-relaxed pb-8 pt-1 px-4 max-w-2xl">
              A calibrated toolkit balancing systemic problem solving with modern business productivity software.
            </p>
{/*  Modular Matrix Container  */}
<div className="px-4 space-y-10">
{/*  Category 1: PROBLEM SOLVING  */}
<div>
<div className="flex items-center justify-between border-b border-outline-variant/60 pb-3 mb-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-xl" data-icon="psychology">psychology</span>
<h3 className="text-on-surface text-sm font-bold tracking-wider uppercase">Problem Solving</h3>
</div>
<span className="text-on-surface-variant text-xs font-mono">06 Modules</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-3" id="problem-solving-grid">
{/*  Item 1: Systems Thinking (Accordion Item)  */}
<div className="bg-surface-container-lowest border border-outline-variant/40 rounded p-4 transition-all hover:border-primary/50 group">
<button className="w-full flex items-center justify-between text-left focus:outline-none" >
<div className="flex items-center gap-3">
<span className="size-2 rounded-full bg-primary inline-block"></span>
<span className="text-on-surface font-semibold text-sm group-hover:text-primary transition-colors">Systems Thinking</span>
</div>
<span className="material-symbols-outlined text-outline text-lg transform transition-transform duration-200" data-icon="add" id="icon-1">add</span>
</button>
<div className="hidden mt-3 pt-3 border-t border-surface-container text-xs leading-relaxed text-on-surface-variant bg-surface-container-low/50 p-2.5 rounded" id="desc-1">
                      Understanding relationships between processes, people, and outcomes. Mapping second-order dependencies across organizational scale.
                    </div>
</div>
{/*  Item 2: Analytical Thinking  */}
<div className="bg-surface-container-lowest border border-outline-variant/40 rounded p-4 transition-all hover:border-primary/50 group">
<button className="w-full flex items-center justify-between text-left focus:outline-none" >
<div className="flex items-center gap-3">
<span className="size-2 rounded-full bg-primary inline-block"></span>
<span className="text-on-surface font-semibold text-sm group-hover:text-primary transition-colors">Analytical Thinking</span>
</div>
<span className="material-symbols-outlined text-outline text-lg transform transition-transform duration-200" data-icon="add" id="icon-2">add</span>
</button>
<div className="hidden mt-3 pt-3 border-t border-surface-container text-xs leading-relaxed text-on-surface-variant bg-surface-container-low/50 p-2.5 rounded" id="desc-2">
                      Deconstructing ambiguous problems into testable hypotheses and structured components. Rigorous root-cause determination.
                    </div>
</div>
{/*  Item 3: Process Improvement  */}
<div className="bg-surface-container-lowest border border-outline-variant/40 rounded p-4 transition-all hover:border-primary/50 group">
<button className="w-full flex items-center justify-between text-left focus:outline-none" >
<div className="flex items-center gap-3">
<span className="size-2 rounded-full bg-primary inline-block"></span>
<span className="text-on-surface font-semibold text-sm group-hover:text-primary transition-colors">Process Improvement</span>
</div>
<span className="material-symbols-outlined text-outline text-lg transform transition-transform duration-200" data-icon="add" id="icon-3">add</span>
</button>
<div className="hidden mt-3 pt-3 border-t border-surface-container text-xs leading-relaxed text-on-surface-variant bg-surface-container-low/50 p-2.5 rounded" id="desc-3">
                      Eliminating friction and redundant steps in operational sequences through lean mapping and iterative optimization loops.
                    </div>
</div>
{/*  Item 4: Technical Problem Solving  */}
<div className="bg-surface-container-lowest border border-outline-variant/40 rounded p-4 transition-all hover:border-primary/50 group">
<button className="w-full flex items-center justify-between text-left focus:outline-none" >
<div className="flex items-center gap-3">
<span className="size-2 rounded-full bg-primary inline-block"></span>
<span className="text-on-surface font-semibold text-sm group-hover:text-primary transition-colors">Technical Problem Solving</span>
</div>
<span className="material-symbols-outlined text-outline text-lg transform transition-transform duration-200" data-icon="add" id="icon-4">add</span>
</button>
<div className="hidden mt-3 pt-3 border-t border-surface-container text-xs leading-relaxed text-on-surface-variant bg-surface-container-low/50 p-2.5 rounded" id="desc-4">
                      Bridging conceptual requirements with software tools and automation to construct robust operational workflows.
                    </div>
</div>
{/*  Item 5: Research & Independent Learning  */}
<div className="bg-surface-container-lowest border border-outline-variant/40 rounded p-4 transition-all hover:border-primary/50 group">
<button className="w-full flex items-center justify-between text-left focus:outline-none" >
<div className="flex items-center gap-3">
<span className="size-2 rounded-full bg-primary inline-block"></span>
<span className="text-on-surface font-semibold text-sm group-hover:text-primary transition-colors">Research &amp; Independent Learning</span>
</div>
<span className="material-symbols-outlined text-outline text-lg transform transition-transform duration-200" data-icon="add" id="icon-5">add</span>
</button>
<div className="hidden mt-3 pt-3 border-t border-surface-container text-xs leading-relaxed text-on-surface-variant bg-surface-container-low/50 p-2.5 rounded" id="desc-5">
                      Rapid literature review, synthesis, and actionable documentation. Accelerated assimilation of new paradigms and technical toolsets.
                    </div>
</div>
{/*  Item 6: Attention to Detail  */}
<div className="bg-surface-container-lowest border border-outline-variant/40 rounded p-4 transition-all hover:border-primary/50 group">
<button className="w-full flex items-center justify-between text-left focus:outline-none" >
<div className="flex items-center gap-3">
<span className="size-2 rounded-full bg-primary inline-block"></span>
<span className="text-on-surface font-semibold text-sm group-hover:text-primary transition-colors">Attention to Detail</span>
</div>
<span className="material-symbols-outlined text-outline text-lg transform transition-transform duration-200" data-icon="add" id="icon-6">add</span>
</button>
<div className="hidden mt-3 pt-3 border-t border-surface-container text-xs leading-relaxed text-on-surface-variant bg-surface-container-low/50 p-2.5 rounded" id="desc-6">
                      Precise documentation, structured naming conventions, and typographic rigor applied consistently across output media.
                    </div>
</div>
</div>
</div>
{/*  Category 2: BUSINESS & PRODUCTIVITY  */}
<div>
<div className="flex items-center justify-between border-b border-outline-variant/60 pb-3 mb-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-xl" data-icon="work">work</span>
<h3 className="text-on-surface text-sm font-bold tracking-wider uppercase">Business &amp; Productivity</h3>
</div>
<span className="text-on-surface-variant text-xs font-mono">04 Stacks</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
{/*  Stack 1  */}
<div className="bg-surface-container-lowest border border-outline-variant/40 rounded p-4 flex flex-col justify-between hover:border-primary/40 transition-colors">
<div>
<div className="flex items-center justify-between pb-2">
<h4 className="font-semibold text-sm text-on-surface">Microsoft 365 Suite</h4>
<span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed">CORE ENGINE</span>
</div>
<p className="text-xs text-on-surface-variant leading-relaxed">
                        Excel advanced models, Word documentation standards, PowerPoint executive decks crafted with strategic narrative clarity.
                      </p>
</div>
<div className="flex gap-2 pt-3 mt-3 border-t border-surface-container-low">
<span className="text-[11px] font-mono text-outline">#Excel</span>
<span className="text-[11px] font-mono text-outline">#PowerPoint</span>
<span className="text-[11px] font-mono text-outline">#DataModeling</span>
</div>
</div>
{/*  Stack 2  */}
<div className="bg-surface-container-lowest border border-outline-variant/40 rounded p-4 flex flex-col justify-between hover:border-primary/40 transition-colors">
<div>
<div className="flex items-center justify-between pb-2">
<h4 className="font-semibold text-sm text-on-surface">Business Analysis &amp; Financial Logic</h4>
<span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant">ANALYTICS</span>
</div>
<p className="text-xs text-on-surface-variant leading-relaxed">
                        Cost estimation, resource budgeting, unit economics, and translating high-level business goals into concrete operational metrics.
                      </p>
</div>
<div className="flex gap-2 pt-3 mt-3 border-t border-surface-container-low">
<span className="text-[11px] font-mono text-outline">#Budgeting</span>
<span className="text-[11px] font-mono text-outline">#Metrics</span>
<span className="text-[11px] font-mono text-outline">#Feasibility</span>
</div>
</div>
{/*  Stack 3  */}
<div className="bg-surface-container-lowest border border-outline-variant/40 rounded p-4 flex flex-col justify-between hover:border-primary/40 transition-colors">
<div>
<div className="flex items-center justify-between pb-2">
<h4 className="font-semibold text-sm text-on-surface">Workflow Design &amp; Tool Stacks</h4>
<span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant">WORKSPACES</span>
</div>
<p className="text-xs text-on-surface-variant leading-relaxed">
                        Building relational databases in Notion and Airtable, sprint execution in Linear, and interface layout blueprints in Figma.
                      </p>
</div>
<div className="flex gap-2 pt-3 mt-3 border-t border-surface-container-low">
<span className="text-[11px] font-mono text-outline">#Notion</span>
<span className="text-[11px] font-mono text-outline">#Airtable</span>
<span className="text-[11px] font-mono text-outline">#Linear</span>
<span className="text-[11px] font-mono text-outline">#Figma</span>
</div>
</div>
{/*  Stack 4  */}
<div className="bg-surface-container-lowest border border-outline-variant/40 rounded p-4 flex flex-col justify-between hover:border-primary/40 transition-colors">
<div>
<div className="flex items-center justify-between pb-2">
<h4 className="font-semibold text-sm text-on-surface">Production Coordination</h4>
<span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant">OPERATIONS</span>
</div>
<p className="text-xs text-on-surface-variant leading-relaxed">
                        Timeline synthesis, call sheet preparation, supplier liaison, on-location crew orchestration, and change order mitigation.
                      </p>
</div>
<div className="flex gap-2 pt-3 mt-3 border-t border-surface-container-low">
<span className="text-[11px] font-mono text-outline">#Logistics</span>
<span className="text-[11px] font-mono text-outline">#Scheduling</span>
<span className="text-[11px] font-mono text-outline">#VendorOps</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  SECTION 2: 05 — EXPERIENCE  */}
<section className="pt-8 pb-20 border-t border-outline-variant/40">
<p className="text-secondary text-xs font-semibold uppercase tracking-wider pb-2 pt-1 px-4">05 — EXPERIENCE</p>
<h2 className="text-on-surface tracking-[-0.025em] text-3xl md:text-[38px] font-bold leading-tight px-4 text-left pb-1 pt-2">
              Hands-on experience.
            </h2>
<p className="text-on-surface-variant text-base font-normal leading-relaxed pb-8 pt-1 px-4">
              Real production stakes before entering university.
            </p>
<div className="px-4 space-y-8">
{/*  Experience Entry Card  */}
<div className="bg-surface-container-lowest border border-outline-variant/50 rounded-lg p-6 sm:p-8 shadow-sm">
<div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-surface-container pb-6">
<div>
<div className="flex flex-wrap items-center gap-2 mb-2">
<span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-primary-fixed text-on-primary-fixed uppercase tracking-wider">
                        Production Trainee
                      </span>
<span className="text-xs text-on-surface-variant font-medium">· On-Site</span>
</div>
<h3 className="text-xl sm:text-2xl font-bold text-on-surface tracking-tight">EL25 Studio</h3>
<p className="text-xs font-medium text-outline pt-1 flex items-center gap-1.5">
<span className="material-symbols-outlined text-sm" data-icon="location_on">location_on</span>
                      Casablanca, Morocco
                    </p>
</div>
<div className="text-left md:text-right">
<span className="inline-block px-3 py-1 bg-surface-container text-on-surface-variant font-mono text-xs rounded font-medium">
                      2023 · Jul — Sep 2023
                    </span>
</div>
</div>
{/*  Responsibilities Accordion / Detail Container  */}
<div className="mt-6">
<div className="flex items-center justify-between cursor-pointer py-1" >
<span className="text-xs font-bold uppercase tracking-wider text-secondary flex items-center gap-1.5">
<span className="material-symbols-outlined text-base" data-icon="list_alt">list_alt</span>
                      Key Scope &amp; Deliverables
                    </span>
<button className="flex items-center gap-1 text-xs text-outline font-medium hover:text-primary transition-colors focus:outline-none">
<span id="exp-text" className="">Collapse scope</span>
<span className="material-symbols-outlined text-sm transform rotate-180 transition-transform duration-200" data-icon="expand_more" id="exp-icon">expand_more</span>
</button>
</div>
<div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4" id="exp-details">
<div className="flex items-start gap-3 p-3.5 rounded bg-surface-container-low/70 border border-outline-variant/30">
<span className="material-symbols-outlined text-primary text-lg mt-0.5 shrink-0" data-icon="check_circle">check_circle</span>
<p className="text-xs leading-relaxed text-on-surface">
                        Supported end-to-end content production across pre-production, on-set logistics, and post-production handoff.
                      </p>
</div>
<div className="flex items-start gap-3 p-3.5 rounded bg-surface-container-low/70 border border-outline-variant/30">
<span className="material-symbols-outlined text-primary text-lg mt-0.5 shrink-0" data-icon="check_circle">check_circle</span>
<p className="text-xs leading-relaxed text-on-surface">
                        Contributed to scriptwriting, concept development, and visual shot planning for client briefs.
                      </p>
</div>
<div className="flex items-start gap-3 p-3.5 rounded bg-surface-container-low/70 border border-outline-variant/30">
<span className="material-symbols-outlined text-primary text-lg mt-0.5 shrink-0" data-icon="check_circle">check_circle</span>
<p className="text-xs leading-relaxed text-on-surface">
                        Worked across multidisciplinary creative and production tasks while managing tight deadlines and changing requirements.
                      </p>
</div>
<div className="flex items-start gap-3 p-3.5 rounded bg-surface-container-low/70 border border-outline-variant/30">
<span className="material-symbols-outlined text-primary text-lg mt-0.5 shrink-0" data-icon="check_circle">check_circle</span>
<p className="text-xs leading-relaxed text-on-surface">
                        Developed practical experience in cross-functional communication, organization, teamwork, and execution under pressure.
                      </p>
</div>
</div>
</div>
</div>
{/*  Interactive Process Flow  */}
<div className="mt-12 pt-6">
<div className="flex items-center justify-between pb-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-lg" data-icon="account_tree">account_tree</span>
<h3 className="text-xs font-bold uppercase tracking-wider text-on-surface">Operational Methodology</h3>
</div>
<span className="text-xs text-outline font-mono">Sequential Framework</span>
</div>
{/*  4 Interconnected Typographic Blocks  */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 relative">
{/*  Phase 1: IDEA  */}
<div className="bg-surface-container-lowest border border-outline-variant/50 rounded p-4 relative flex flex-col justify-between hover:border-primary transition-all group">
<div>
<div className="flex items-center justify-between mb-2">
<span className="font-mono text-[11px] font-bold text-outline group-hover:text-primary transition-colors">PHASE 01</span>
<span className="material-symbols-outlined text-base text-outline-variant group-hover:text-primary transition-colors" data-icon="lightbulb">lightbulb</span>
</div>
<h4 className="text-lg font-bold text-on-surface tracking-tight group-hover:text-primary transition-colors">IDEA</h4>
<p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                        Creative briefing, conceptualization, and structured hypothesis formulation.
                      </p>
</div>
<div className="mt-4 pt-3 border-t border-surface-container">
<span className="text-[10px] font-mono uppercase text-secondary font-semibold">Callout:</span>
<p className="text-[11px] text-on-surface-variant mt-0.5">Translating open-ended client visions into defined specs.</p>
</div>
</div>
{/*  Phase 2: PLAN  */}
<div className="bg-surface-container-lowest border border-outline-variant/50 rounded p-4 relative flex flex-col justify-between hover:border-primary transition-all group">
<div>
<div className="flex items-center justify-between mb-2">
<span className="font-mono text-[11px] font-bold text-outline group-hover:text-primary transition-colors">PHASE 02</span>
<span className="material-symbols-outlined text-base text-outline-variant group-hover:text-primary transition-colors" data-icon="calendar_month">calendar_month</span>
</div>
<h4 className="text-lg font-bold text-on-surface tracking-tight group-hover:text-primary transition-colors">PLAN</h4>
<p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                        Shotlists, schedule sequencing, asset allocation, and vendor alignment.
                      </p>
</div>
<div className="mt-4 pt-3 border-t border-surface-container">
<span className="text-[10px] font-mono uppercase text-secondary font-semibold">Callout:</span>
<p className="text-[11px] text-on-surface-variant mt-0.5">Contingency buffers built into every production day.</p>
</div>
</div>
{/*  Phase 3: PRODUCE  */}
<div className="bg-surface-container-lowest border border-outline-variant/50 rounded p-4 relative flex flex-col justify-between hover:border-primary transition-all group">
<div>
<div className="flex items-center justify-between mb-2">
<span className="font-mono text-[11px] font-bold text-outline group-hover:text-primary transition-colors">PHASE 03</span>
<span className="material-symbols-outlined text-base text-outline-variant group-hover:text-primary transition-colors" data-icon="videocam">videocam</span>
</div>
<h4 className="text-lg font-bold text-on-surface tracking-tight group-hover:text-primary transition-colors">PRODUCE</h4>
<p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                        Live on-set orchestration, real-time problem triage, and capture discipline.
                      </p>
</div>
<div className="mt-4 pt-3 border-t border-surface-container">
<span className="text-[10px] font-mono uppercase text-secondary font-semibold">Callout:</span>
<p className="text-[11px] text-on-surface-variant mt-0.5">High-cadence teamwork across dynamic stage environments.</p>
</div>
</div>
{/*  Phase 4: DELIVER  */}
<div className="bg-surface-container-lowest border border-outline-variant/50 rounded p-4 relative flex flex-col justify-between hover:border-primary transition-all group">
<div>
<div className="flex items-center justify-between mb-2">
<span className="font-mono text-[11px] font-bold text-outline group-hover:text-primary transition-colors">PHASE 04</span>
<span className="material-symbols-outlined text-base text-outline-variant group-hover:text-primary transition-colors" data-icon="task_alt">task_alt</span>
</div>
<h4 className="text-lg font-bold text-on-surface tracking-tight group-hover:text-primary transition-colors">DELIVER</h4>
<p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                        Post-production handoff, version control, signoff packaging, and review.
                      </p>
</div>
<div className="mt-4 pt-3 border-t border-surface-container">
<span className="text-[10px] font-mono uppercase text-secondary font-semibold">Callout:</span>
<p className="text-[11px] text-on-surface-variant mt-0.5">Precision file structure ensuring frictionless client handoff.</p>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Footer Metadata  */}

</div>
</div>
</div>
</div>
{/*  Inline Script for Accordion & Interactive Elements  */}




    </div>
  );
}
