"use client";
import React from "react";
import { Navbar } from "@/components/Navbar";

export default function BlogPageContent() {
  return (
    <div className="bg-background text-on-surface font-['Inter'] antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
      
{/*  Top Sticky Reading Progress Bar  */}
<div className="fixed top-0 left-0 right-0 h-1 bg-surface-container-high z-50">
<div className="h-full bg-primary w-0 transition-all duration-150" id="readingProgress"></div>
</div>
<div className="relative flex h-auto min-h-screen w-full flex-col bg-background group/design-root overflow-x-hidden" style={{"fontFamily":"Inter, &quot"}}>
<div className="layout-container flex h-full grow flex-col">
<div className="px-4 sm:px-8 md:px-16 lg:px-40 flex flex-1 justify-center py-5">
<div className="layout-content-container flex flex-col max-w-[960px] flex-1">
<Navbar />
{/*  Shared Header Component  */}

{/*  Section 1: Blog Hero  */}
<div className="pt-10 pb-6 px-4">
<p className="text-primary text-xs font-semibold tracking-widest uppercase mb-2">06 — BLOG &amp; WRITING</p>
<h1 className="text-on-surface text-4xl md:text-5xl font-bold leading-[1.15] tracking-tight pb-4">
              Ideas, observations,<br className="hidden sm:inline" />and things I&apos;m learning.
            </h1>
<p className="text-on-surface-variant text-base md:text-lg font-normal leading-relaxed max-w-2xl">
              A collection of notes, ideas, experiments, and lessons from my journey through business administration, systems design, and continuous learning.
            </p>
</div>
{/*  Section 2: Featured Article Card  */}
<div className="px-4 py-2 @container">
<div className="border border-outline-variant bg-surface-container-lowest rounded-xl p-5 md:p-6 transition-all duration-200 hover:shadow-md hover:border-outline-variant">
<div className="flex flex-col @xl:flex-row gap-6 items-stretch">
<div className="w-full @xl:w-2/5 aspect-video @xl:aspect-auto rounded-lg bg-cover bg-center overflow-hidden flex-shrink-0" data-alt="Minimalist abstract photograph of interlocking architectural white concrete curves, geometric shadow lines, and structural balancing beams under natural light, evoking a deliberate sense of systematic balance and high-order organizational clarity." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDA7lLXNCKE2765DxKbnAKMJfFe3b2GSmRmwoQ6dJK3lH1wwcFvRBp43IciLqwrQAn21QH2TGcxWO7wcqPSclKyfahqAOm9vfc9lWZb20lln0u0IxagkbM_rQBc1BDDKlCUxaPHvSTyUdkWoPkReQKEnGK_T5GSGKMhsMwVYljanaJ1uM1nDmFrjtJcHcdyPxxZBd9ozTbi5pD5anLCBwgXAI7V0nHifnoWe7h3PmFt7nvHBI2zG6Ez')"}}></div>
<div className="flex flex-col justify-between flex-1 py-1">
<div>
<span className="inline-block text-primary text-xs font-bold tracking-wider uppercase mb-2">FEATURED ESSAY · 6 MIN READ</span>
<h2 className="text-on-surface text-2xl font-bold leading-tight tracking-tight mb-3 hover:text-primary transition-colors cursor-pointer">
                      Understanding Systems Before Improving Them
                    </h2>
<p className="text-on-surface-variant text-sm md:text-base leading-relaxed mb-4">
                      Why the instinctive urge to optimize processes often causes second-order chaos when the underlying behavioral feedback loops are misunderstood.
                    </p>
</div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-surface-container">
<span className="text-outline text-xs md:text-sm font-medium">Business &amp; Strategy · Sep 24, 2026 · By Hassan Karasu</span>
<a className="inline-flex items-center gap-1.5 justify-center rounded px-4 py-2 bg-primary-container hover:bg-primary text-on-primary text-sm font-medium transition-colors self-start sm:self-auto" href="#">
<span className="">Read article</span>
<span className="material-symbols-outlined text-base">arrow_forward</span>
</a>
</div>
</div>
</div>
</div>
</div>
{/*  Section 3: Search & Dynamic Category Filters  */}
<div className="px-4 pt-10 pb-6">
{/*  Search bar  */}
<div className="relative w-full mb-6">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline pointer-events-none">search</span>
<input className="w-full pl-11 pr-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-lg text-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm" id="articleSearch" placeholder="Search articles, frameworks, or tags... (instant filter)" type="text" />
</div>
{/*  Category filter pills  */}
<div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs font-semibold uppercase tracking-wider" id="filterContainer">
<button className="filter-btn active-filter px-3.5 py-1.5 rounded-full bg-primary text-on-primary transition-colors" data-cat="all">
                ALL <span className="opacity-75 font-normal ml-0.5">(12)</span>
</button>
<button className="filter-btn px-3.5 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest transition-colors" data-cat="business">
                BUSINESS <span className="opacity-60 font-normal ml-0.5">(4)</span>
</button>
<button className="filter-btn px-3.5 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest transition-colors" data-cat="systems">
                SYSTEMS <span className="opacity-60 font-normal ml-0.5">(3)</span>
</button>
<button className="filter-btn px-3.5 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest transition-colors" data-cat="productivity">
                PRODUCTIVITY <span className="opacity-60 font-normal ml-0.5">(2)</span>
</button>
<button className="filter-btn px-3.5 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest transition-colors" data-cat="learning">
                LEARNING <span className="opacity-60 font-normal ml-0.5">(5)</span>
</button>
<button className="filter-btn px-3.5 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest transition-colors" data-cat="technology">
                TECHNOLOGY <span className="opacity-60 font-normal ml-0.5">(3)</span>
</button>
<button className="filter-btn px-3.5 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest transition-colors" data-cat="experience">
                EXPERIENCE <span className="opacity-60 font-normal ml-0.5">(1)</span>
</button>
</div>
</div>
{/*  Section 4: Editorial Two-Column Article Grid  */}
<div className="px-4 grid grid-cols-1 md:grid-cols-2 gap-6 pb-12" id="articlesGrid">
{/*  Article 1  */}
<article className="article-item flex flex-col justify-between p-6 bg-surface-container-lowest border border-outline-variant rounded-lg hover:border-primary-fixed-dim transition-all group" data-category="systems">
<div>
<div className="flex items-center justify-between text-xs font-semibold mb-3">
<span className="text-primary tracking-wider uppercase">SYSTEMS</span>
<span className="text-outline font-normal">SEP 24, 2026 · 6 MIN READ</span>
</div>
<h3 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors leading-snug mb-2.5">
<a href="#" className="">Why Process Improvement Starts With Observation</a>
</h3>
<p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                  Before writing standard operating procedures or automating workflows, spend ten uninterrupted hours observing how work actually flows through humans.
                </p>
</div>
<div className="flex items-center text-xs font-semibold text-primary gap-1 group-hover:translate-x-0.5 transition-transform">
<span className="">Read note</span>
<span className="material-symbols-outlined text-sm">arrow_forward</span>
</div>
</article>
{/*  Article 2  */}
<article className="article-item flex flex-col justify-between p-6 bg-surface-container-lowest border border-outline-variant rounded-lg hover:border-primary-fixed-dim transition-all group" data-category="business">
<div>
<div className="flex items-center justify-between text-xs font-semibold mb-3">
<span className="text-primary tracking-wider uppercase">BUSINESS</span>
<span className="text-outline font-normal">OCT 12, 2026 · 5 MIN READ</span>
</div>
<h3 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors leading-snug mb-2.5">
<a href="#" className="">The First-Year Perspective: Applying Systems Thinking to Business School</a>
</h3>
<p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                  How treating coursework as interconnected modules rather than isolated subjects unlocks compound knowledge retention.
                </p>
</div>
<div className="flex items-center text-xs font-semibold text-primary gap-1 group-hover:translate-x-0.5 transition-transform">
<span className="">Read note</span>
<span className="material-symbols-outlined text-sm">arrow_forward</span>
</div>
</article>
{/*  Article 3  */}
<article className="article-item flex flex-col justify-between p-6 bg-surface-container-lowest border border-outline-variant rounded-lg hover:border-primary-fixed-dim transition-all group" data-category="productivity">
<div>
<div className="flex items-center justify-between text-xs font-semibold mb-3">
<span className="text-primary tracking-wider uppercase">PRODUCTIVITY</span>
<span className="text-outline font-normal">NOV 02, 2026 · 7 MIN READ</span>
</div>
<h3 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors leading-snug mb-2.5">
<a href="#" className="">Structuring the Digital Workspace: An Operating System for Knowledge</a>
</h3>
<p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                  Why folder taxonomies fail and how associative tagging creates an antifragile digital notebook.
                </p>
</div>
<div className="flex items-center text-xs font-semibold text-primary gap-1 group-hover:translate-x-0.5 transition-transform">
<span className="">Read note</span>
<span className="material-symbols-outlined text-sm">arrow_forward</span>
</div>
</article>
{/*  Article 4  */}
<article className="article-item flex flex-col justify-between p-6 bg-surface-container-lowest border border-outline-variant rounded-lg hover:border-primary-fixed-dim transition-all group" data-category="learning">
<div>
<div className="flex items-center justify-between text-xs font-semibold mb-3">
<span className="text-primary tracking-wider uppercase">LEARNING</span>
<span className="text-outline font-normal">NOV 18, 2026 · 4 MIN READ</span>
</div>
<h3 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors leading-snug mb-2.5">
<a href="#" className="">From High School Physics to Business Economics: The Continuity of Principles</a>
</h3>
<p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                  Translating thermodynamic entropy and equilibrium equations into market supply-demand dynamics.
                </p>
</div>
<div className="flex items-center text-xs font-semibold text-primary gap-1 group-hover:translate-x-0.5 transition-transform">
<span className="">Read note</span>
<span className="material-symbols-outlined text-sm">arrow_forward</span>
</div>
</article>
</div>
{/*  Section 5: Newsletter / RSS Note Component  */}
<div className="px-4 pb-16">
<div className="p-8 bg-surface-container border border-outline-variant/50 rounded-xl relative overflow-hidden">
<div className="max-w-xl">
<div className="flex items-center gap-2 mb-2 text-primary font-semibold text-xs tracking-wider uppercase">
<span className="material-symbols-outlined text-base">rss_feed</span>
<span className="">Direct to your inbox or feed reader</span>
</div>
<h3 className="text-xl font-bold text-on-surface mb-2">Subscribe to future dispatches</h3>
<p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
                  Join readers receiving occasional, high-signal essays on systems theory, behavioral efficiency, and interdisciplinary mental models. No noise, just field observations.
                </p>
<form className="flex flex-col sm:flex-row gap-2.5" >
<input className="flex-1 px-4 py-2.5 bg-surface-container-lowest border border-outline-variant rounded text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Enter your email address" required type="email" />
<button className="px-5 py-2.5 bg-primary hover:bg-secondary text-on-primary text-sm font-semibold rounded transition-colors whitespace-nowrap" type="submit">
                    Join newsletter
                  </button>
</form>
<div className="mt-4 flex items-center gap-4 text-xs text-outline">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-sm">verified_user</span> Zero spam, unsubscribe anytime
                  </span>
<span className="">·</span>
<a className="hover:text-primary transition-colors flex items-center gap-1" href="#">
<span className="material-symbols-outlined text-sm">rss_feed</span> RSS XML Feed
                  </a>
</div>
</div>
</div>
</div>
{/*  Minimal Footer  */}

</div>
</div>
</div>
</div>
{/*  Interactive Search and Filter Script  */}




    </div>
  );
}
