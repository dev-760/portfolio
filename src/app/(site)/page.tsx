"use client";
import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-background text-on-surface antialiased font-sans min-h-screen selection:bg-primary-fixed selection:text-on-primary-fixed">
      

{/*  Section 1: Hero (85vh layout)  */}
<section className="min-h-[870px] flex flex-col justify-between border-b border-outline-variant/40 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col lg:flex-row items-stretch">
{/*  Left (60%)  */}
<div className="lg:w-[60%] py-12 lg:py-20 flex flex-col justify-between pr-0 lg:pr-12">
<div className="flex flex-col gap-6">
<div className="inline-flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
<span className="text-label-uppercase text-primary font-bold uppercase tracking-[0.14em]">BUSINESS ADMINISTRATION STUDENT</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-on-surface">
            I think in systems.<br />
<span className="text-primary-container">I work toward better ones.</span>
</h1>
<p className="text-body-lg text-on-surface-variant max-w-xl font-normal leading-relaxed pt-2">
            Business Administration student exploring how analytical thinking, creativity, and structured execution can solve real problems.
          </p>
<div className="flex flex-wrap items-center gap-4 pt-4">
<a className="inline-flex items-center gap-2 bg-primary-container hover:bg-primary text-on-primary px-6 py-3.5 rounded font-semibold text-sm transition-all duration-200 shadow-sm hover:translate-y-[-1px]" href="#work">
<span className="">Explore My Work</span>
<span className="text-lg leading-none">→</span>
</a>
<a className="inline-flex items-center gap-2 bg-surface-container hover:bg-surface-container-high text-on-surface border border-outline-variant/60 px-6 py-3.5 rounded font-semibold text-sm transition-all" href="#contact">
<span className="">Let's Talk</span>
</a>
</div>
</div>
<div className="pt-12 lg:pt-8 flex items-center gap-3 text-xs text-outline font-medium tracking-tight border-t border-outline-variant/30 mt-8">
<span className="material-symbols-outlined text-sm text-primary">location_on</span>
<span className="">Based in Casablanca, Morocco</span>
<span className="text-outline-variant">•</span>

</div>
</div>
{/*  Right (40%): Interactive Systems Visualization  */}

</div>
</section>
{/*  Section 2: 01 — INTRODUCTION (Editorial Statement)  */}
<section className="py-20 lg:py-24 border-b border-outline-variant/40 bg-surface" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="pb-10">
<span className="text-xs font-bold tracking-[0.2em] uppercase text-outline">01 — INTRODUCTION</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
{/*  Left (60% / 7 cols)  */}
<div className="lg:col-span-7">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-on-surface leading-[1.2]">
            “I'm Hassan, a Business Administration student interested in understanding how <span className="text-primary underline decoration-outline-variant decoration-1 underline-offset-8">people</span>, <span className="text-primary underline decoration-outline-variant decoration-1 underline-offset-8">processes</span>, and <span className="text-primary underline decoration-outline-variant decoration-1 underline-offset-8">systems</span> work together.”
          </h2>
</div>
{/*  Thin Divider & Right (40% / 5 cols)  */}
<div className="lg:col-span-5 lg:pl-10 lg:border-l border-outline-variant/40 flex flex-col gap-6 text-on-surface-variant">
<p className="text-body-md text-on-surface-variant leading-relaxed">
            Bridging business theory with pragmatic digital execution, continuous feedback loops, and thoughtful operational design to solve complex real-world challenges.
          </p>
<p className="text-body-md text-on-surface-variant leading-relaxed">
            Modern enterprise problems aren't solved purely through spreadsheets or purely through intuition. They require an architectural lens—mapping dependencies, isolating points of failure, and designing streamlined protocols that teams genuinely enjoy adopting.
          </p>
<div className="pt-2 flex items-center gap-6">
<div className="flex flex-col">


</div>
<div className="w-px h-8 bg-outline-variant/60"></div>
<div className="flex flex-col">
<span className="text-2xl font-bold font-mono text-on-surface">Casablanca</span>
<span className="text-xs text-outline uppercase tracking-wider">Academic Base</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Section 3: Highlights / Pillars  */}
<section className="py-20 lg:py-24 border-b border-outline-variant/40 bg-surface-container-low" id="pillars">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between pb-12 gap-4">
<div>
<span className="text-xs font-bold tracking-[0.2em] uppercase text-outline">02 — CORE PILLARS</span>
<h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-on-surface mt-2">
            Structured Execution Disciplines
          </h2>
</div>
<p className="text-sm text-outline max-w-sm">
          A tri-part foundation combining business fundamentals, rigorous systems analysis, and hands-on execution.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/*  Card 1: BUSINESS  */}
<div className="group bg-surface-container-lowest p-8 rounded border border-outline-variant/50 hover:border-primary hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full">
<div>
<div className="flex items-center justify-between pb-8">
<span className="font-mono text-2xl font-bold text-outline-variant group-hover:text-primary transition-colors">01</span>
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">account_balance</span>
</div>
<h3 className="text-xl font-bold text-on-surface mb-3 tracking-tight">BUSINESS</h3>
<p className="text-sm text-on-surface-variant leading-relaxed mb-6">
              Administration, Financial intuition, Organizational design, and resource allocation models constructed for durability.
            </p>
</div>
<ul className="pt-6 border-t border-outline-variant/30 space-y-2 text-xs font-mono text-outline">
<li className="flex items-center gap-2">
<span className="w-1 h-1 bg-primary rounded-full"></span>
<span className="">Financial Forecasting</span>
</li>
<li className="flex items-center gap-2">
<span className="w-1 h-1 bg-primary rounded-full"></span>
<span className="">Organizational Topology</span>
</li>
<li className="flex items-center gap-2">
<span className="w-1 h-1 bg-primary rounded-full"></span>
<span className="">Governance &amp; Protocol</span>
</li>
</ul>
</div>
{/*  Card 2: THINKING  */}
<div className="group bg-surface-container-lowest p-8 rounded border border-outline-variant/50 hover:border-primary hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full">
<div>
<div className="flex items-center justify-between pb-8">
<span className="font-mono text-2xl font-bold text-outline-variant group-hover:text-primary transition-colors">02</span>
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">query_stats</span>
</div>
<h3 className="text-xl font-bold text-on-surface mb-3 tracking-tight">THINKING</h3>
<p className="text-sm text-on-surface-variant leading-relaxed mb-6">
              Systems &amp; Analysis, Bottleneck identification, Data synthesis, and isolating root-cause friction within workflows.
            </p>
</div>
<ul className="pt-6 border-t border-outline-variant/30 space-y-2 text-xs font-mono text-outline">
<li className="flex items-center gap-2">
<span className="w-1 h-1 bg-primary rounded-full"></span>
<span className="">Root Cause Diagnosis</span>
</li>
<li className="flex items-center gap-2">
<span className="w-1 h-1 bg-primary rounded-full"></span>
<span className="">Synthesis of Multi-source Data</span>
</li>
<li className="flex items-center gap-2">
<span className="w-1 h-1 bg-primary rounded-full"></span>
<span className="">System Feedback Loops</span>
</li>
</ul>
</div>
{/*  Card 3: EXECUTION  */}
<div className="group bg-surface-container-lowest p-8 rounded border border-outline-variant/50 hover:border-primary hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full">
<div>
<div className="flex items-center justify-between pb-8">
<span className="font-mono text-2xl font-bold text-outline-variant group-hover:text-primary transition-colors">03</span>
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">rocket_launch</span>
</div>
<h3 className="text-xl font-bold text-on-surface mb-3 tracking-tight">EXECUTION</h3>
<p className="text-sm text-on-surface-variant leading-relaxed mb-6">
              Creative Production, High-leverage workflows, Rapid delivery, and pragmatic digital asset orchestration.
            </p>
</div>
<ul className="pt-6 border-t border-outline-variant/30 space-y-2 text-xs font-mono text-outline">
<li className="flex items-center gap-2">
<span className="w-1 h-1 bg-primary rounded-full"></span>
<span className="">High-Leverage Workflows</span>
</li>
<li className="flex items-center gap-2">
<span className="w-1 h-1 bg-primary rounded-full"></span>
<span className="">Iterative Prototyping</span>
</li>
<li className="flex items-center gap-2">
<span className="w-1 h-1 bg-primary rounded-full"></span>
<span className="">Clear Stakeholder Comms</span>
</li>
</ul>
</div>
</div>
</div>
</section>
{/*  Section 4: Selected Writing & Thoughts preview  */}
<section className="py-20 lg:py-24 border-b border-outline-variant/40 bg-surface" id="writing">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-between pb-12">
<div>
<span className="text-xs font-bold tracking-[0.2em] uppercase text-outline">03 — THOUGHT ARCHIVE</span>
<h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-on-surface mt-2">
            Selected Writing
          </h2>
</div>
<a className="hidden sm:inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-primary hover:text-secondary" href="#all-writing">
<span className="">Read All Essays</span>
<span className="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
{/*  Essay Card 1  */}
<article className="p-8 rounded bg-surface-container-lowest border border-outline-variant/40 hover:border-primary/60 transition-all flex flex-col justify-between group">
<div>
<div className="flex items-center justify-between text-xs font-mono text-outline mb-4">
<span className="">SYSTEMS ARCHITECTURE</span>
<span className="">7 MIN READ</span>
</div>
<h3 className="text-2xl font-bold text-on-surface group-hover:text-primary transition-colors tracking-tight mb-3">
              Understanding Systems Before Improving Them
            </h3>
<p className="text-body-md text-on-surface-variant font-normal leading-relaxed mb-6">
              Why early intervention in organizational processes often amplifies dysfunctions instead of solving them. An argument for rigorous observation periods prior to redesign.
            </p>
</div>
<div className="pt-4 flex items-center justify-between border-t border-outline-variant/30 text-xs font-semibold uppercase tracking-wider text-primary">
<span className="">Read Publication</span>
<span className="group-hover:translate-x-1 transition-transform">→</span>
</div>
</article>
{/*  Essay Card 2  */}
<article className="p-8 rounded bg-surface-container-lowest border border-outline-variant/40 hover:border-primary/60 transition-all flex flex-col justify-between group">
<div>
<div className="flex items-center justify-between text-xs font-mono text-outline mb-4">
<span className="">OPERATIONAL EFFICIENCY</span>
<span className="">5 MIN READ</span>
</div>
<h3 className="text-2xl font-bold text-on-surface group-hover:text-primary transition-colors tracking-tight mb-3">
              Why Process Improvement Starts With Observation
            </h3>
<p className="text-body-md text-on-surface-variant font-normal leading-relaxed mb-6">
              Examining the psychological and mechanical friction of new operational rules. How human habit loops must guide structural corporate decisions.
            </p>
</div>
<div className="pt-4 flex items-center justify-between border-t border-outline-variant/30 text-xs font-semibold uppercase tracking-wider text-primary">
<span className="">Read Publication</span>
<span className="group-hover:translate-x-1 transition-transform">→</span>
</div>
</article>
</div>
</div>
</section>
{/*  Global Footer  */}
<footer className="bg-surface-container-lowest py-16" id="contact">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div>
<div className="flex items-center gap-3">
  <div className="w-4 h-4 text-primary">
    <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path clipRule="evenodd" d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" fill="currentColor" fillRule="evenodd"></path>
    </svg>
  </div>
  <span className="text-base font-bold tracking-tight text-on-surface">Hassan Karasu</span>
</div>

</div>
<div className="flex flex-wrap items-center gap-6 text-xs font-mono text-on-surface-variant">
<a className="hover:text-primary transition-colors" href="mailto:contact@hassankarasu.com">EMAIL</a>
<a className="hover:text-primary transition-colors" href="#">LINKEDIN</a>
<a className="hover:text-primary transition-colors" href="#">SUBSTACK</a>
<a className="hover:text-primary transition-colors" href="#">SYSTEM_SPEC</a>
</div>
<div className="text-xs font-mono text-outline">
        © 2025 ALL RIGHTS RESERVED
      </div>
</div>
</footer>
{/*  Node Interaction Script  */}






    </div>
  );
}
