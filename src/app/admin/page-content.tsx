"use client";
import React from "react";

export default function AdminPageContent() {
  return (
    <div className="bg-surface font-sans text-on-surface antialiased min-h-screen flex selection:bg-primary-container selection:text-white">
      
{/*  ================= PERSISTENT ADMIN SIDEBAR (240px) =================  */}
<aside className="w-60 flex-shrink-0 bg-surface-container-low border-r border-outline-variant flex flex-col justify-between h-screen sticky top-0 select-none z-30">
<div className="flex flex-col">
{/*  Brand Header  */}
<div className="p-5 border-b border-outline-variant/60 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-primary-container flex items-center justify-center text-white font-bold text-sm tracking-tight shadow-sm">
            HK
          </div>
<div className="flex flex-col">
<span className="text-xs font-bold tracking-wider text-on-surface uppercase">Hassan Admin</span>
<div className="flex items-center gap-1.5 mt-0.5">
<span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
<span className="text-[10px] font-semibold text-primary font-mono tracking-tight">LIVE v1.4</span>
</div>
</div>
</div>
</div>
{/*  Quick Action: Primary Compose button  */}
<div className="p-3">
<button className="w-full h-9 bg-primary-container hover:bg-primary text-white text-xs font-semibold rounded flex items-center justify-center gap-2 transition-colors shadow-sm">
<span className="material-symbols-outlined text-[18px]">add</span>
<span className="">New Post</span>
</button>
</div>
{/*  Navigation Links  */}
<nav className="px-2 py-1 space-y-0.5 text-xs">
{/*  Dashboard (Active)  */}
<a className="flex items-center justify-between px-3 py-2 rounded bg-surface-container-highest text-primary font-semibold transition-all" href="/admin">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-[18px]" style={{"fontVariationSettings":"'FILL' 1"}}>dashboard</span>
<span className="">Dashboard</span>
</div>
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
</a>
{/*  Posts  */}
<a className="flex items-center justify-between px-3 py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all" href="#posts">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-[18px]">article</span>
<span className="">Posts</span>
</div>
<span className="px-1.5 py-0.5 text-[10px] font-semibold rounded bg-surface-container-high text-on-surface-variant font-mono">12</span>
</a>
{/*  Categories  */}
<a className="flex items-center justify-between px-3 py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all" href="#categories">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-[18px]">folder</span>
<span className="">Categories</span>
</div>
<span className="px-1.5 py-0.5 text-[10px] font-semibold rounded bg-surface-container-high text-on-surface-variant font-mono">6</span>
</a>
{/*  Media Library  */}
<a className="flex items-center justify-between px-3 py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all" href="#media">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-[18px]">photo_library</span>
<span className="">Media Library</span>
</div>
</a>
{/*  Settings  */}
<a className="flex items-center justify-between px-3 py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all" href="#settings">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-[18px]">settings</span>
<span className="">Settings</span>
</div>
</a>
</nav>
</div>
{/*  Bottom Sidebar Section  */}
<div className="p-3 border-t border-outline-variant/60 space-y-1 bg-surface-container-low/70">
<a className="flex items-center justify-between px-3 py-2 text-xs font-medium text-on-surface-variant hover:text-primary rounded hover:bg-surface-container transition-colors" href="/" target="_blank">
<span className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px]">open_in_new</span>
<span className="">View Live Website</span>
</span>
</a>
<a className="flex items-center justify-between px-3 py-2 text-xs font-medium text-on-surface-variant hover:text-error rounded hover:bg-error-container/30 transition-colors" href="#logout">
<span className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px]">logout</span>
<span className="truncate">Logout (Hassan)</span>
</span>
</a>
<div className="pt-2 px-3 text-[10px] text-outline flex items-center justify-between">
<span className="font-mono">Karasu CMS v1.4</span>
<span className="inline-flex items-center text-emerald-700 font-mono">● Sync&apos;d</span>
</div>
</div>
</aside>
{/*  ================= MAIN CONTENT AREA =================  */}
<div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
{/*  Top Bar  */}

{/*  Page Content Container (max-width: 1360px)  */}
<main className="w-full max-w-[1360px] mx-auto p-6 md:p-8 space-y-6">
{/*  Header: Title & Context  */}
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-outline-variant/60">
<div>
<h1 className="text-2xl font-bold tracking-tight text-on-surface">Dashboard</h1>
<p className="text-xs md:text-sm text-on-surface-variant mt-0.5">Good morning, Hassan. Here&apos;s what&apos;s happening with your site.</p>
</div>
<div className="flex items-center gap-2">
<span className="text-[11px] font-mono text-outline">Last deployed: 14m ago by git:main</span>
<button className="px-2.5 py-1 text-xs font-medium rounded border border-outline-variant bg-surface-container-lowest hover:bg-surface-container text-on-surface transition-colors">
            Rebuild Cache
          </button>
</div>
</div>
{/*  ================= STATS GRID (4 Cards) =================  */}
<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
{/*  Card 1: Published Posts  */}
<div className="p-4 bg-surface-container-lowest rounded border border-outline-variant hover:border-outline transition-all">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="text-xs font-semibold uppercase tracking-wider text-outline">Published Posts</span>
<span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
</div>
<div className="mt-2 flex items-baseline gap-2">
<span className="text-2xl font-black text-on-surface font-mono">12</span>
<span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">+2 this month</span>
</div>
<p className="text-[11px] text-on-surface-variant mt-2">Active essays on production</p>
</div>
{/*  Card 2: Drafts  */}
<div className="p-4 bg-surface-container-lowest rounded border border-outline-variant hover:border-outline transition-all">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="text-xs font-semibold uppercase tracking-wider text-outline">Drafts</span>
<span className="material-symbols-outlined text-tertiary-container text-[18px]">edit_note</span>
</div>
<div className="mt-2 flex items-baseline gap-2">
<span className="text-2xl font-black text-on-surface font-mono">4</span>
<span className="text-xs font-semibold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">In review</span>
</div>
<p className="text-[11px] text-on-surface-variant mt-2">Unpublished scratchpads &amp; briefs</p>
</div>
{/*  Card 3: Categories Active  */}
<div className="p-4 bg-surface-container-lowest rounded border border-outline-variant hover:border-outline transition-all">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="text-xs font-semibold uppercase tracking-wider text-outline">Categories</span>
<span className="material-symbols-outlined text-secondary text-[18px]">folder_open</span>
</div>
<div className="mt-2 flex items-baseline gap-2">
<span className="text-2xl font-black text-on-surface font-mono">6</span>
<span className="text-xs font-semibold text-secondary bg-secondary-fixed/40 px-1.5 py-0.5 rounded">Active</span>
</div>
<p className="text-[11px] text-on-surface-variant mt-2">Systems, Business, Design, Learning...</p>
</div>
{/*  Card 4: Total Views  */}
<div className="p-4 bg-surface-container-lowest rounded border border-outline-variant hover:border-outline transition-all">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="text-xs font-semibold uppercase tracking-wider text-outline">Total Views</span>
<span className="material-symbols-outlined text-outline text-[18px]">visibility_off</span>
</div>
<div className="mt-2 flex items-baseline gap-2">
<span className="text-2xl font-black text-on-surface font-mono">—</span>
<span className="text-[11px] text-outline font-normal">Privacy-first mode</span>
</div>
<p className="text-[11px] text-outline mt-2">Analytics unconfigured by design</p>
</div>
</section>
{/*  Main Layout: 2 Columns (Content Management on left 70%, Scratchpad on right 30%)  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
{/*  ================= CONTENT MANAGEMENT SECTION (8 of 12 cols) =================  */}
<div className="lg:col-span-8 space-y-4">
{/*  Section Card Container  */}
<div className="bg-surface-container-lowest rounded border border-outline-variant shadow-sm overflow-hidden">
{/*  Tab Bar Header  */}
<div className="flex items-center justify-between border-b border-outline-variant px-4 pt-2 bg-surface-container-low/40">
<div className="flex gap-6">
<button className="pb-3 pt-2 text-xs font-bold text-primary border-b-2 border-primary flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px]">menu_book</span>
<span className="">Recent Posts</span>
<span className="ml-1 px-1.5 py-0.2 rounded-full bg-primary/10 text-primary text-[10px]">12</span>
</button>
<button className="pb-3 pt-2 text-xs font-semibold text-on-surface-variant hover:text-on-surface border-b-2 border-transparent transition-colors flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px]">pending_actions</span>
<span className="">Drafts to Polish</span>
<span className="ml-1 px-1.5 py-0.2 rounded-full bg-surface-container text-outline text-[10px]">4</span>
</button>
<button className="pb-3 pt-2 text-xs font-semibold text-on-surface-variant hover:text-on-surface border-b-2 border-transparent transition-colors flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px]">verified</span>
<span className="">Content Health</span>
</button>
</div>
<div className="hidden sm:flex items-center gap-2 pb-2">
<span className="text-[11px] text-outline font-mono">5 shown</span>
</div>
</div>
{/*  Action Bar (Filters + Search + Create)  */}
<div className="p-3 bg-surface-container-low/20 border-b border-outline-variant flex flex-wrap items-center justify-between gap-3">
<div className="flex items-center flex-wrap gap-2">
{/*  Category Filter  */}
<div className="relative">
<select className="h-7 text-xs bg-surface-container-lowest border border-outline-variant rounded pl-2 pr-7 py-0 text-on-surface focus:outline-none focus:border-primary">
<option>All Categories</option>
<option>Systems (4)</option>
<option>Business (3)</option>
<option>Learning (2)</option>
<option>Architecture (3)</option>
</select>
</div>
{/*  Status Filter  */}
<div className="relative">
<select className="h-7 text-xs bg-surface-container-lowest border border-outline-variant rounded pl-2 pr-7 py-0 text-on-surface focus:outline-none focus:border-primary">
<option>All Statuses</option>
<option>Published</option>
<option>Draft</option>
<option>Featured</option>
</select>
</div>
{/*  Sort Filter  */}
<div className="relative">
<select className="h-7 text-xs bg-surface-container-lowest border border-outline-variant rounded pl-2 pr-7 py-0 text-on-surface focus:outline-none focus:border-primary">
<option>Sort: Newest First</option>
<option>Sort: Title (A-Z)</option>
<option>Sort: Recently Edited</option>
</select>
</div>
</div>
{/*  Search in table + Create  */}
<div className="flex items-center gap-2 w-full sm:w-auto">
<div className="relative flex-1 sm:w-44">
<input className="w-full h-7 pl-6 pr-2 text-xs bg-surface-container-lowest border border-outline-variant rounded focus:outline-none focus:border-primary placeholder:text-outline" placeholder="Filter posts..." type="text" />
<span className="absolute inset-y-0 left-0 pl-1.5 flex items-center pointer-events-none text-outline">
<span className="material-symbols-outlined text-[14px]">filter_list</span>
</span>
</div>
<button className="h-7 px-2.5 bg-primary-container hover:bg-primary text-white text-xs font-semibold rounded flex items-center gap-1 transition-colors whitespace-nowrap">
<span className="material-symbols-outlined text-[14px]">add</span>
<span className="">Create Post</span>
</button>
</div>
</div>
{/*  Dense, Elegant Post Management Table  */}
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse text-xs">
<thead>
<tr className="bg-surface-container text-on-surface-variant uppercase text-[10px] tracking-wider font-semibold border-b border-outline-variant">
<th className="py-2.5 px-4 font-semibold">Title</th>
<th className="py-2.5 px-3 font-semibold">Category</th>
<th className="py-2.5 px-3 font-semibold">Status</th>
<th className="py-2.5 px-3 font-semibold">Date</th>
<th className="py-2.5 px-4 font-semibold text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/60 font-normal">
{/*  Row 1: Understanding Systems Before Improving Them  */}
<tr className="hover:bg-surface-container-low/60 transition-colors group">
<td className="py-3 px-4">
<div className="flex flex-col">
<span className="font-medium text-on-surface group-hover:text-primary transition-colors cursor-pointer line-clamp-1">
                          Understanding Systems Before Improving Them
                        </span>
<span className="text-[11px] text-outline mt-0.5 font-mono">/posts/understanding-systems-before-improving</span>
</div>
</td>
<td className="py-3 px-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-surface-container-high text-on-surface">
                        Systems
                      </span>
</td>
<td className="py-3 px-3 whitespace-nowrap">
<div className="flex items-center gap-1.5">
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-primary/10 text-primary border border-primary/20">
                          ★ Featured
                        </span>
<span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span> Published
                        </span>
</div>
</td>
<td className="py-3 px-3 text-on-surface-variant font-mono whitespace-nowrap">
                      Sep 24, 2026
                    </td>
<td className="py-3 px-4 text-right whitespace-nowrap">
<div className="inline-flex items-center gap-1">
<button className="px-2 py-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-primary transition-colors" title="Edit">
                          Edit
                        </button>
<button className="px-2 py-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-primary transition-colors" title="Preview">
                          Preview
                        </button>
<button className="p-1 rounded hover:bg-surface-container text-outline hover:text-on-surface transition-colors" title="More options">
<span className="material-symbols-outlined text-[16px]">more_horiz</span>
</button>
</div>
</td>
</tr>
{/*  Row 2: Why Process Improvement Starts With Observation  */}
<tr className="hover:bg-surface-container-low/60 transition-colors group">
<td className="py-3 px-4">
<div className="flex flex-col">
<span className="font-medium text-on-surface group-hover:text-primary transition-colors cursor-pointer line-clamp-1">
                          Why Process Improvement Starts With Observation
                        </span>
<span className="text-[11px] text-outline mt-0.5 font-mono">/posts/process-improvement-observation</span>
</div>
</td>
<td className="py-3 px-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-surface-container-high text-on-surface">
                        Systems
                      </span>
</td>
<td className="py-3 px-3 whitespace-nowrap">
<span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span> Published
                      </span>
</td>
<td className="py-3 px-3 text-on-surface-variant font-mono whitespace-nowrap">
                      Sep 18, 2026
                    </td>
<td className="py-3 px-4 text-right whitespace-nowrap">
<div className="inline-flex items-center gap-1">
<button className="px-2 py-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-primary transition-colors" title="Edit">
                          Edit
                        </button>
<button className="px-2 py-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-primary transition-colors" title="Preview">
                          Preview
                        </button>
<button className="p-1 rounded hover:bg-surface-container text-outline hover:text-on-surface transition-colors" title="More options">
<span className="material-symbols-outlined text-[16px]">more_horiz</span>
</button>
</div>
</td>
</tr>
{/*  Row 3: The First-Year Perspective: Systems in Business School  */}
<tr className="hover:bg-surface-container-low/60 transition-colors group">
<td className="py-3 px-4">
<div className="flex flex-col">
<span className="font-medium text-on-surface group-hover:text-primary transition-colors cursor-pointer line-clamp-1">
                          The First-Year Perspective: Systems in Business School
                        </span>
<span className="text-[11px] text-outline mt-0.5 font-mono">/posts/first-year-systems-business-school</span>
</div>
</td>
<td className="py-3 px-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-surface-container-high text-on-surface">
                        Business
                      </span>
</td>
<td className="py-3 px-3 whitespace-nowrap">
<span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span> Published
                      </span>
</td>
<td className="py-3 px-3 text-on-surface-variant font-mono whitespace-nowrap">
                      Oct 12, 2026
                    </td>
<td className="py-3 px-4 text-right whitespace-nowrap">
<div className="inline-flex items-center gap-1">
<button className="px-2 py-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-primary transition-colors" title="Edit">
                          Edit
                        </button>
<button className="px-2 py-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-primary transition-colors" title="Preview">
                          Preview
                        </button>
<button className="p-1 rounded hover:bg-surface-container text-outline hover:text-on-surface transition-colors" title="More options">
<span className="material-symbols-outlined text-[16px]">more_horiz</span>
</button>
</div>
</td>
</tr>
{/*  Row 4: Cashflow Mechanics for Small Creative Studios  */}
<tr className="hover:bg-surface-container-low/60 transition-colors group bg-amber-500/[0.02]">
<td className="py-3 px-4">
<div className="flex flex-col">
<span className="font-medium text-on-surface group-hover:text-primary transition-colors cursor-pointer line-clamp-1">
                          Cashflow Mechanics for Small Creative Studios
                        </span>
<span className="text-[11px] text-outline mt-0.5 font-mono">/drafts/cashflow-mechanics-creative-studios</span>
</div>
</td>
<td className="py-3 px-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-surface-container-high text-on-surface">
                        Business
                      </span>
</td>
<td className="py-3 px-3 whitespace-nowrap">
<span className="inline-flex items-center gap-1 text-[11px] font-medium text-amber-700">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Draft
                      </span>
</td>
<td className="py-3 px-3 text-on-surface-variant font-mono whitespace-nowrap">
                      Nov 20, 2026
                    </td>
<td className="py-3 px-4 text-right whitespace-nowrap">
<div className="inline-flex items-center gap-1">
<button className="px-2 py-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-primary transition-colors" title="Edit">
                          Edit
                        </button>
<button className="px-2 py-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-primary transition-colors" title="Preview">
                          Preview
                        </button>
<button className="p-1 rounded hover:bg-surface-container text-outline hover:text-on-surface transition-colors" title="More options">
<span className="material-symbols-outlined text-[16px]">more_horiz</span>
</button>
</div>
</td>
</tr>
{/*  Row 5: Mental Models for Autonomous Research  */}
<tr className="hover:bg-surface-container-low/60 transition-colors group bg-amber-500/[0.02]">
<td className="py-3 px-4">
<div className="flex flex-col">
<span className="font-medium text-on-surface group-hover:text-primary transition-colors cursor-pointer line-clamp-1">
                          Mental Models for Autonomous Research
                        </span>
<span className="text-[11px] text-outline mt-0.5 font-mono">/drafts/mental-models-autonomous-research</span>
</div>
</td>
<td className="py-3 px-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-surface-container-high text-on-surface">
                        Learning
                      </span>
</td>
<td className="py-3 px-3 whitespace-nowrap">
<span className="inline-flex items-center gap-1 text-[11px] font-medium text-amber-700">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Draft
                      </span>
</td>
<td className="py-3 px-3 text-on-surface-variant font-mono whitespace-nowrap">
                      Nov 22, 2026
                    </td>
<td className="py-3 px-4 text-right whitespace-nowrap">
<div className="inline-flex items-center gap-1">
<button className="px-2 py-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-primary transition-colors" title="Edit">
                          Edit
                        </button>
<button className="px-2 py-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-primary transition-colors" title="Preview">
                          Preview
                        </button>
<button className="p-1 rounded hover:bg-surface-container text-outline hover:text-on-surface transition-colors" title="More options">
<span className="material-symbols-outlined text-[16px]">more_horiz</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
{/*  Table Pagination / Footer  */}
<div className="p-3 bg-surface-container-low/40 border-t border-outline-variant flex items-center justify-between text-xs text-on-surface-variant">
<span className="">Showing <strong>1-5</strong> of <strong>16</strong> items (12 published, 4 drafts)</span>
<div className="flex items-center gap-1">
<button className="px-2 py-1 border border-outline-variant rounded bg-surface-container-lowest text-outline cursor-not-allowed">Previous</button>
<button className="px-2 py-1 border border-outline-variant rounded bg-primary-container text-white font-medium">1</button>
<button className="px-2 py-1 border border-outline-variant rounded bg-surface-container-lowest hover:bg-surface-container text-on-surface">2</button>
<button className="px-2 py-1 border border-outline-variant rounded bg-surface-container-lowest hover:bg-surface-container text-on-surface">3</button>
<button className="px-2 py-1 border border-outline-variant rounded bg-surface-container-lowest hover:bg-surface-container text-on-surface">Next</button>
</div>
</div>
</div>
{/*  Quick Content Health Indicator Block  */}
<div className="p-4 bg-surface-container-lowest border border-outline-variant rounded flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-[20px]">speed</span>
<div>
<h4 className="text-xs font-semibold text-on-surface">Static Site Generator Status</h4>
<p className="text-[11px] text-on-surface-variant">12 markdown routes rendered in 410ms. All slugs validated with no broken internal links.</p>
</div>
</div>
<span className="text-xs font-mono font-medium text-emerald-700 bg-emerald-50 px-2 py-1 rounded border border-emerald-200">100% HEALTHY</span>
</div>
</div>
{/*  ================= RIGHT COLUMN: QUICK PUBLISHING & SCRATCHPAD (4 of 12 cols) =================  */}
<div className="lg:col-span-4 space-y-4">
{/*  Scratchpad Widget  */}
<div className="bg-surface-container-lowest rounded border border-outline-variant overflow-hidden shadow-sm">
<div className="p-3 border-b border-outline-variant bg-surface-container-low/40 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[18px]">notes</span>
<span className="text-xs font-bold text-on-surface uppercase tracking-wider">Quick Scratchpad</span>
</div>
<div className="flex items-center gap-1 text-[11px] text-outline font-mono">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
<span id="save-status" className="">Saved just now</span>
</div>
</div>
<div className="p-3.5 space-y-3">
<div>
<label className="block text-[11px] font-semibold text-outline mb-1 uppercase tracking-wide">Working Title</label>
<input className="w-full h-8 px-2.5 text-xs bg-surface-container-low text-on-surface border border-outline-variant rounded focus:outline-none focus:border-primary font-medium" placeholder="Draft title..." type="text" value="System Archetypes in Solo Operations" />
</div>
<div>
<label className="block text-[11px] font-semibold text-outline mb-1 uppercase tracking-wide">Observation Notes</label>
<textarea className="w-full p-2.5 text-xs bg-surface-container-low text-on-surface border border-outline-variant rounded focus:outline-none focus:border-primary font-mono placeholder:text-outline resize-none leading-relaxed" placeholder="Draft a new observation, fleeting thought, or structure an outline..." rows={6}>Notice how friction isn&apos;t always negative: deliberate friction in the review pipeline prevents hasty publishing and forces structural synthesis.

Core hypothesis:
1. Fast iteration on drafts
2. Slow execution on deployment
3. Clear isolation between thinking vs publishing phases.</textarea>
</div>
<div className="flex items-center justify-between pt-1">
<div className="flex items-center gap-1">
<span className="text-[10px] text-outline font-mono">48 words | 342 chars</span>
</div>
<div className="flex items-center gap-2">
<button className="px-2.5 py-1 text-xs font-medium rounded border border-outline-variant bg-surface-container-lowest hover:bg-surface-container text-on-surface-variant transition-colors">
                    Clear
                  </button>
<button className="px-3 py-1 text-xs font-semibold rounded bg-primary-container hover:bg-primary text-white transition-colors">
                    Convert to Draft
                  </button>
</div>
</div>
</div>
</div>
{/*  Active Categories Mini-Card  */}
<div className="bg-surface-container-lowest rounded border border-outline-variant p-4 space-y-3">
<div className="flex items-center justify-between">
<span className="text-xs font-bold text-on-surface uppercase tracking-wider">Categories Overview</span>
<a className="text-[11px] text-primary hover:underline font-medium" href="#categories">Manage (6)</a>
</div>
<div className="space-y-2 text-xs">
<div className="flex items-center justify-between py-1 border-b border-outline-variant/40">
<span className="text-on-surface font-medium flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-primary"></span> Systems
                </span>
<span className="font-mono text-outline">5 posts</span>
</div>
<div className="flex items-center justify-between py-1 border-b border-outline-variant/40">
<span className="text-on-surface font-medium flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-secondary"></span> Business
                </span>
<span className="font-mono text-outline">4 posts</span>
</div>
<div className="flex items-center justify-between py-1 border-b border-outline-variant/40">
<span className="text-on-surface font-medium flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-tertiary-container"></span> Learning
                </span>
<span className="font-mono text-outline">3 posts</span>
</div>
<div className="flex items-center justify-between py-1">
<span className="text-on-surface font-medium flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-outline"></span> Architecture
                </span>
<span className="font-mono text-outline">2 posts</span>
</div>
</div>
</div>
{/*  Quick System Diagnostic  */}
<div className="bg-surface-container-low/40 rounded border border-outline-variant p-3.5 space-y-2 text-[11px]">
<div className="flex items-center justify-between text-on-surface font-medium">
<span className="">Environment</span>
<span className="font-mono text-primary">production (Vercel Edge)</span>
</div>
<div className="flex items-center justify-between text-on-surface font-medium">
<span className="">Repo Status</span>
<span className="font-mono text-emerald-700">Clean working tree</span>
</div>
<div className="flex items-center justify-between text-on-surface font-medium">
<span className="">Next Backup</span>
<span className="font-mono text-outline">Today, 23:00 UTC</span>
</div>
</div>
</div>
</div>
</main>
</div>
{/*  Micro-interaction script for scratchpad autosave simulation  */}




    </div>
  );
}
