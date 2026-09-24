"use client";
import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";

export default function AboutPageContent() {
  return (
    <div className="bg-background text-on-background antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
      <svg className="inline-defs-container" aria-hidden="true" style={{"position":"absolute","width":"0","height":"0","overflow":"hidden"}}></svg>
<meta charSet="utf-8" />
<meta content="width=device-width, initial-scale=1.0" name="viewport" />
<title>About &amp; Background — Hassan Karasu</title>
{/*  Fonts  */}
<link href="https://fonts.googleapis.com" rel="preconnect" />
<link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet" />
{/*  Material Symbols Outlined  */}
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
{/*  Tailwind CSS  */}


<style dangerouslySetInnerHTML={{ __html: `
    .material-symbols-outlined {
      font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
      display: inline-block;
      vertical-align: middle;
      line-height: 1;
    }
  ` }} />


{/*  Layout Container mirroring Shared TopNavBar Container  */}
<div className="relative flex h-auto min-h-screen w-full flex-col bg-background">
<div className="layout-container flex h-full grow flex-col">
<div className="px-4 sm:px-8 md:px-16 lg:px-28 xl:px-40 flex flex-1 justify-center py-5">
<div className="layout-content-container flex flex-col max-w-[960px] flex-1">
{/*  Shared Component: TopNavBar Header portion  */}

{/*  SECTION 1: HERO  */}
<section className="pt-8 pb-10 border-b border-outline-variant/30">
<div className="px-4">
<p className="text-secondary font-semibold text-xs tracking-[0.14em] uppercase pb-3">02 — ABOUT</p>
<h1 className="text-on-surface text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] tracking-tight pb-6 pt-1 max-w-[820px]">
                Curious by nature.<br />
<span className="text-secondary">Structured by mindset.</span>
</h1>
<p className="text-on-surface-variant text-base sm:text-lg leading-relaxed max-w-[760px] font-normal">
                Balancing first-year academic rigor in Business Administration at FSJES Aïn Chock with real-world digital production, design engineering, and operational strategy at EL25 Studio.
              </p>
</div>
</section>
{/*  SECTION 2: SPLIT LAYOUT (Narrative Bio vs. At a Glance)  */}
<section className="py-12 border-b border-outline-variant/30">
<div className="px-4 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
{/*  Left Column: Narrative Bio (approx 60%)  */}
<div className="lg:col-span-7 flex flex-col gap-6 max-w-[680px]">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-xl" data-icon="article">article</span>
<h2 className="text-on-surface text-[22px] font-bold tracking-tight">Narrative Bio</h2>
</div>
<div className="text-on-surface-variant text-[15px] sm:text-base leading-relaxed space-y-4 font-normal">
<p className="">
                    I view organizations not as static charts, but as intricate, living mechanisms. My journey started with a compulsive desire to deconstruct how systems perform under stress—spanning from algorithmic design files to institutional cash-flow logistics.
                  </p>
<p className="">
                    Currently undertaking undergraduate studies at the <span className="font-medium text-on-surface">Faculté des Sciences Juridiques, Économiques et Sociales (FSJES) Aïn Chock</span> in Casablanca, I immerse myself in the foundational frameworks of modern commerce: quantitative modeling, corporate jurisprudence, and macroeconomic variables.
                  </p>
<p className="">
                    Parallel to my coursework, my work at <span className="font-medium text-on-surface">EL25 Studio</span> immerses me daily in high-velocity creative production and operational infrastructure. This dual existence informs every project: theoretical analysis grounds my intuition, while rapid commercial prototyping prevents paralysis by analysis.
                  </p>
<p className="italic text-on-surface border-l-2 border-primary pl-4 py-1 bg-surface-container-low/60 rounded-r">
                    “Strategy without precise execution is mere daydreaming; operational precision without strategic architecture is purely cosmetic.”
                  </p>
</div>
{/*  Subtle Image asset integrating editorial vibe  */}
<div className="pt-3">
<div className="overflow-hidden rounded-lg border border-outline-variant/40 bg-surface-container-low shadow-sm">


</div>
</div>
</div>
{/*  Right Column: At a Glance Card (approx 40%)  */}
<div className="lg:col-span-5">
<div className="sticky top-6 rounded-lg bg-surface-container-lowest border border-outline-variant/60 shadow-sm p-6 space-y-6">
<div className="flex items-center justify-between pb-4 border-b border-outline-variant/40">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-lg" data-icon="badge">badge</span>
<h3 className="text-xs font-bold tracking-widest uppercase text-on-surface">At a Glance</h3>
</div>
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-primary-fixed text-on-primary-fixed uppercase tracking-wide">
                      Active
                    </span>
</div>
<dl className="space-y-4 text-xs sm:text-sm">
<div className="flex flex-col gap-1 pb-3 border-b border-outline-variant/20">
<dt className="text-[11px] font-semibold uppercase tracking-wider text-outline">Name</dt>
<dd className="text-on-surface font-semibold text-base">Hassan Karasu</dd>
</div>
<div className="flex flex-col gap-1 pb-3 border-b border-outline-variant/20">
<dt className="text-[11px] font-semibold uppercase tracking-wider text-outline">Field</dt>
<dd className="text-on-surface font-medium">Business Administration &amp; Management</dd>
</div>
<div className="flex flex-col gap-1 pb-3 border-b border-outline-variant/20">
<dt className="text-[11px] font-semibold uppercase tracking-wider text-outline">Location</dt>
<dd className="text-on-surface flex items-center gap-1.5 font-medium">
<span className="material-symbols-outlined text-primary text-base" data-icon="location_on">location_on</span>
                        Casablanca, Morocco
                      </dd>
</div>
<div className="flex flex-col gap-1 pb-3 border-b border-outline-variant/20">
<dt className="text-[11px] font-semibold uppercase tracking-wider text-outline">Current Status</dt>
<dd className="text-on-surface font-medium flex items-center gap-2">
<span className="size-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                        First-year undergraduate student
                      </dd>
</div>
<div className="flex flex-col gap-1 pb-3 border-b border-outline-variant/20">
<dt className="text-[11px] font-semibold uppercase tracking-wider text-outline">Core Focus</dt>
<dd className="text-secondary font-medium leading-snug">
                        Operational Analysis &amp; Systems Strategy
                      </dd>
</div>
<div className="flex flex-col gap-1 pb-3 border-b border-outline-variant/20">
<dt className="text-[11px] font-semibold uppercase tracking-wider text-outline">Languages</dt>
<dd className="text-on-surface-variant font-normal space-y-1 pt-1">
<div className="flex justify-between items-center text-xs">
<span className="font-medium text-on-surface">Arabic</span>
<span className="text-outline text-[11px]">Native</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="font-medium text-on-surface">English</span>
<span className="text-outline text-[11px]">Full Professional</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="font-medium text-on-surface">French</span>
<span className="text-outline text-[11px]">Working Proficiency</span>
</div>
</dd>
</div>
<div className="flex flex-col gap-2 pt-1">
<dt className="text-[11px] font-semibold uppercase tracking-wider text-outline">Repositories &amp; Networks</dt>
<dd className="flex flex-col gap-1.5 pt-1">
<a className="flex items-center justify-between p-2 rounded bg-surface-container-low hover:bg-surface-container transition-colors group" href="https://github.com/dev-760" rel="noopener" target="_blank">
<span className="flex items-center gap-2 text-xs font-medium text-on-surface">
<span className="material-symbols-outlined text-sm text-outline group-hover:text-primary" data-icon="terminal">terminal</span>
                            GitHub <span className="text-outline font-normal">@dev-760</span>
</span>
<span className="material-symbols-outlined text-xs text-outline group-hover:translate-x-0.5 transition-transform" data-icon="arrow_outward">arrow_outward</span>
</a>
<a className="flex items-center justify-between p-2 rounded bg-surface-container-low hover:bg-surface-container transition-colors group" href="#">
<span className="flex items-center gap-2 text-xs font-medium text-on-surface">
<span className="material-symbols-outlined text-sm text-outline group-hover:text-primary" data-icon="share">share</span>
                            LinkedIn
                          </span>
<span className="material-symbols-outlined text-xs text-outline group-hover:translate-x-0.5 transition-transform" data-icon="arrow_outward">arrow_outward</span>
</a>
<a className="flex items-center justify-between p-2 rounded bg-surface-container-low hover:bg-surface-container transition-colors group" href="#">
<span className="flex items-center gap-2 text-xs font-medium text-on-surface">
<span className="material-symbols-outlined text-sm text-outline group-hover:text-primary" data-icon="photo_camera">photo_camera</span>
                            Instagram
                          </span>
<span className="material-symbols-outlined text-xs text-outline group-hover:translate-x-0.5 transition-transform" data-icon="arrow_outward">arrow_outward</span>
</a>
</dd>
</div>
</dl>
</div>
</div>
</div>
</section>
{/*  SECTION 3: EDUCATION & FORMATION TIMELINE  */}
<section className="py-12 border-b border-outline-variant/30 px-4">
<div className="max-w-[780px]">
<div className="mb-8">
<p className="text-secondary font-semibold text-xs tracking-[0.14em] uppercase pb-2">FORMATION &amp; MILESTONES</p>
<h2 className="text-on-surface text-2xl sm:text-3xl font-bold tracking-tight">Academic Foundations</h2>
</div>
{/*  Vertical Timeline  */}
<div className="relative pl-6 sm:pl-8 border-l-2 border-primary/20 space-y-10">
{/*  Timeline Item 1 (Active / Now)  */}
<div className="relative group">
{/*  Active Node Marker  */}
<div className="absolute -left-[31px] sm:-left-[39px] top-1 size-5 rounded-full border-4 border-background bg-primary ring-4 ring-primary-fixed shadow-sm"></div>
<div className="flex items-center gap-3 mb-1.5 flex-wrap">
<span className="px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider rounded bg-primary text-on-primary">
                      NOW · 2025 – Present
                    </span>
<span className="text-xs font-medium text-outline">First-year student</span>
</div>
<h3 className="text-lg font-bold text-on-surface tracking-tight mt-1">
                    Licence in Business Administration
                  </h3>
<p className="text-secondary text-sm font-medium mb-3">
                    Faculté des Sciences Juridiques, Économiques et Sociales (FSJES) Aïn Chock
                  </p>
<div className="rounded-lg bg-surface-container-low border border-outline-variant/30 p-4 mt-2">
<p className="text-xs font-semibold uppercase tracking-wider text-outline mb-2">Key Core Coursework &amp; Methodology</p>
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-on-surface">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-sm" data-icon="check_circle">check_circle</span>
                        Microeconomics &amp; Market Equilibrium
                      </li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-sm" data-icon="check_circle">check_circle</span>
                        Management Principles &amp; Organizational Theory
                      </li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-sm" data-icon="check_circle">check_circle</span>
                        Quantitative Methods &amp; Applied Statistics
                      </li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-sm" data-icon="check_circle">check_circle</span>
                        Commercial &amp; Business Law Frameworks
                      </li>
</ul>
</div>
</div>
{/*  Timeline Item 2  */}
<div className="relative group">
{/*  Node Marker  */}
<div className="absolute -left-[31px] sm:-left-[39px] top-1 size-5 rounded-full border-4 border-background bg-outline-variant ring-2 ring-outline-variant/20"></div>
<div className="flex items-center gap-3 mb-1.5">
<span className="px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider rounded bg-surface-container-highest text-on-surface-variant">
                      Graduated · 2024–2025
                    </span>
</div>
<h3 className="text-lg font-bold text-on-surface tracking-tight mt-1">
                    Baccalaureate in Physical Science
                  </h3>
<p className="text-on-surface-variant text-sm font-medium mb-2">
                    English Option — Prince Moulay Abdellah High School
                  </p>
<p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed bg-surface-container-low/60 rounded-md p-3.5 border border-outline-variant/20">
                    Developed a disciplined foundation in rigorous scientific methodology, mathematical modeling, analytical proofs, and bilingual problem-solving in fast-paced international academic tracks.
                  </p>
</div>
</div>
</div>
</section>
{/*  SECTION 4: OPERATING PRINCIPLES PREVIEW  */}
<section className="py-12 px-4">
<div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
<div>
<p className="text-secondary font-semibold text-xs tracking-[0.14em] uppercase pb-2">METHODOLOGY</p>
<h2 className="text-on-surface text-2xl sm:text-3xl font-bold tracking-tight">Operating Principles</h2>
</div>
<a className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-secondary transition-colors group" href="#">
                Explore Full Principles
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform" data-icon="east">east</span>
</a>
</div>
{/*  3 Minimal Cards  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
{/*  Card 1  */}
<div className="group relative rounded-lg border border-outline-variant/40 bg-surface-container-lowest p-6 hover:border-primary/50 transition-all hover:shadow-md flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-5">
<span className="text-xs font-bold font-mono tracking-wider text-primary px-2 py-1 rounded bg-primary-fixed">01</span>
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-xl" data-icon="search_insights">search_insights</span>
</div>
<h3 className="text-lg font-bold text-on-surface tracking-tight mb-2">Understand First</h3>
<p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    Prioritize root-cause diagnosis over premature execution. Diagnose underlying operational patterns before writing a single line or reorganizing a workflow.
                  </p>
</div>
<div className="mt-6 pt-4 border-t border-outline-variant/20 text-[11px] uppercase tracking-wider text-outline font-medium">
                  Discovery &amp; Diagnosis
                </div>
</div>
{/*  Card 2  */}
<div className="group relative rounded-lg border border-outline-variant/40 bg-surface-container-lowest p-6 hover:border-primary/50 transition-all hover:shadow-md flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-5">
<span className="text-xs font-bold font-mono tracking-wider text-primary px-2 py-1 rounded bg-primary-fixed">02</span>
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-xl" data-icon="account_tree">account_tree</span>
</div>
<h3 className="text-lg font-bold text-on-surface tracking-tight mb-2">Structure the Variables</h3>
<p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    Transform chaos into systematized architecture. Every business friction point can be decomposed into identifiable variables, constraints, and repeatable models.
                  </p>
</div>
<div className="mt-6 pt-4 border-t border-outline-variant/20 text-[11px] uppercase tracking-wider text-outline font-medium">
                  Systems &amp; Architecture
                </div>
</div>
{/*  Card 3  */}
<div className="group relative rounded-lg border border-outline-variant/40 bg-surface-container-lowest p-6 hover:border-primary/50 transition-all hover:shadow-md flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-5">
<span className="text-xs font-bold font-mono tracking-wider text-primary px-2 py-1 rounded bg-primary-fixed">03</span>
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-xl" data-icon="precision_manufacturing">precision_manufacturing</span>
</div>
<h3 className="text-lg font-bold text-on-surface tracking-tight mb-2">Deliver Tangible Value</h3>
<p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    Ideas exist to be built and evaluated against genuine impact. Measure design and administrative effort by operational velocity and verifiable output.
                  </p>
</div>
<div className="mt-6 pt-4 border-t border-outline-variant/20 text-[11px] uppercase tracking-wider text-outline font-medium">
                  Execution &amp; Output
                </div>
</div>
</div>
</section>
{/*  Minimal Editorial Footer  */}

</div>
</div>
</div>
</div>





    </div>
  );
}
