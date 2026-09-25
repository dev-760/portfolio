---
target: src/app/(site)/page.tsx
total_score: 22
max_score: 32
na_heuristics: 7,10
p0_count: 1
p1_count: 1
target_identity: "file:C:\\Users\\Hassan\\Downloads\\portfolio\\src\\app\\(site)\\page.tsx"
target_fingerprint: "sha256:feb134c5971a44f351303d24ea0623de4a199250d5eee57c506645d6e2e44c86"
target_path: "C:\\Users\\Hassan\\Downloads\\portfolio\\src\\app\\(site)\\page.tsx"
timestamp: 2026-09-25T20-37-49Z
slug: src-app-site-page-tsx
---
Method: dual-agent (A: 2d312144-af2b-4551-b2fe-494e323edac4 · B: c944e80d-ccc8-4d8b-acee-6aa5404c6bd2)

# Impeccable Design Critique: Hassan Karasu Portfolio

**Target Surface:** `src/app/(site)/page.tsx` (Homepage & Core Sections)  
**Evaluator:** Impeccable Design Director & Deterministic Evidence Engine  
**Creative North Star:** "The Disciplined Analyst's Ledger"  

---

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|---|:---:|---|
| 1 | **Visibility of System Status** | **3** | Scroll telemetry and timeline indicators track well, but Navbar maps `"home"` and `"about"` to index 0, falsely highlighting "About" while at top of page. |
| 2 | **Match Between System and Real World** | **3** | Grounded in Moroccan academic/commercial reality, but "Direct Inquiry Dispatch" terminology is robotic and contact form fakes API delivery before launching `mailto:`. |
| 3 | **User Control and Freedom** | **3** | Modal reader handles Esc key and body scroll lock, but does not push browser history state, causing browser "Back" button to eject users from site. |
| 4 | **Consistency and Standards** | **2** | Split iconography (Material Symbols font ligatures vs. Lucide SVGs in Navbar); inconsistent border radii (4px, 8px, 12px, 16px); 3-stop gradient on scrollbar violating DESIGN.md rules. |
| 5 | **Error Prevention** | **3** | Required fields enforced and filter search reset provided; contact form lacks email validation before building raw `mailto:` query string. |
| 6 | **Recognition Rather Than Recall** | **3** | Rich metadata across essays and coursework; however, Hero lacks an explicit primary call-to-action button (no "Download CV" or "Explore Work"). |
| 7 | **Flexibility and Efficiency of Use** | **N/A** | *Editorial portfolio evaluated through linear reading; power-user accelerators are not primary requirements for this surface mode.* |
| 8 | **Aesthetic and Minimalist Design** | **2** | Clean typography, but diluted by SVG gooey navbar filter, DOM particles, rotating hero typewriter, inoperable newsletter box, and 38 nested card containers. |
| 9 | **Help Users Recognize, Diagnose, and Recover from Errors** | **3** | Search empty states provide 1-click filter reset; contact form includes direct email address fallback if `mailto:` fails to launch. |
| 10 | **Help and Documentation** | **N/A** | *Standard personal academic portfolio; universal web conventions apply and external user manuals are not applicable.* |
| **Total** | | **22 / 32** | **Good / Acceptable (68.75%)** |

*Note: Mode applicability allows scoring Heuristics 7 and 10 as N/A on Experience/Portfolio surfaces; score is renormalized to applicable maximum of 32 points.*

---

## Design Specificity Verdict

**Verdict: Grounded Academic Core Diluted by Front-End Gimmicks**

- **LLM Assessment:** Hassan Karasu’s portfolio features an exceptionally strong conceptual core: a first-year Business Administration undergraduate at FSJES Aïn Chock (Université Hassan II de Casablanca) with real-world production experience at EL25 Studio and thoughtful student monographs (e.g. applying Chesterton's Fence to operational workflows). However, this authentic identity is compromised by generic developer tropes: a liquid SVG gooey navbar blob with floating DOM particles, an animated typewriter hero paragraph, a pseudo-backend contact form with a fake latency spinner, and an unconfigured newsletter box. Stripping away these novelties will allow the true North Star—"The Disciplined Analyst's Ledger"—to command authority.
- **Deterministic Scan:** The Impeccable CLI detector reported **30 static advisories** across the core component tree, all violating `design-system-font-size`:
  - 13 instances of `10px` micro-text (e.g. `AboutSection.tsx` L219-L259, `SkillsSection.tsx` L187, `SystemTimeline.tsx` L219).
  - 14 instances of `11px` tag text (e.g. `WritingSection.tsx` L419, L518, `ContactSection.tsx` L143, L202).
  - 3 instances of `15px` body copy (e.g. `AboutSection.tsx` L189, L199, `WritingSection.tsx` L407).
- **Live Browser Evidence:** Headless browser inspection on `http://localhost:3000` corroborated the static scan with **31 `undersized-ui-text` live DOM warnings**, proving that `10px` text is functionally unreadable on mobile and standard screens. The browser inspection also flagged **38 `nested-cards` warnings** where card containers are stacked within card containers, flattening depth and adding extraneous visual borders.

---

## Overall Impression

The portfolio has rare academic and analytical substance: the student monographs and operational timeline are genuinely impressive. But the interface tries too hard to look like a Silicon Valley SaaS product rather than a serious analyst's ledger. Removing the visual clutter (liquid navbar blob, typewriter copy, fake API spinner, nested card borders) and introducing a first-class CV download CTA will immediately elevate this into an award-worthy presentation.

---

## What's Working

1. **Academic Monograph Modal Architecture (`WritingSection.tsx`):** Treating student writing as serious academic papers with explicit hypotheses, key takeaways, and FSJES coursework citations sets Hassan apart from typical undergraduate portfolios. The distraction-free reading modal is well-paced and readable.
2. **Spring-Driven Chronological System Timeline (`SystemTimeline.tsx`):** The scroll-linked milestone track uses smooth springs (`stiffness: 280, damping: 32`) to guide the reader through Hassan's transition from an English-option scientific baccalaureate to business administration.
3. **Tabular Numeral Discipline:** Strict use of tabular numbers (`font-variant-numeric: tabular-nums`) on dates, read times, and coordinate badges anchors the editorial aesthetic in quantitative rigor.

---

## Priority Issues

### **[P0] Remove Disjointed Visual Novelties (Gooey Blob & Typewriter)**
- **Why it matters:** The liquid SVG filter and particle animation in `GooeyNav.tsx` and rotating text in `TypingEffect.tsx` violate the "Disciplined Analyst's Ledger" and the "Calm Surface Rule" in `DESIGN.md`. They communicate front-end playground experimentation rather than analytical discipline.
- **Fix:** Replace `GooeyNav` with a clean sliding pill indicator with sharp easing (`--ease-sharp`); eliminate particle DOM injection. Replace the hero typewriter with an authoritative, static headline.
- **Suggested Command:** `$impeccable distill`

### **[P1] Eliminate Mailto Deception & Add a First-Class CV Download CTA**
- **Why it matters:** The contact form simulates a server-side API request with a fake loading timeout, then opens a `mailto:` link. Concurrently, there is no resume/CV download button anywhere on the landing page. Users without configured desktop mail clients experience broken inquiries, and recruiters cannot obtain an offline document.
- **Fix:** Add a prominent "Download CV (PDF)" button in the Hero and Contact headers. In the Contact section, provide a transparent direct-email card with 1-click clipboard copy.
- **Suggested Command:** `$impeccable clarify`

### **[P2] Fix Undersized Text and Lock the Type Ramp to DESIGN.md**
- **Why it matters:** 13 instances of `text-[10px]` fail WCAG legibility guidelines and trigger 31 `undersized-ui-text` browser warnings. Furthermore, 14 instances of `text-[11px]` and 3 instances of `text-[15px]` operate outside the documented DESIGN.md ramp.
- **Fix:** Bump all 10px labels up to at least 11px or `text-xs` (12px), and formally document the `caption-micro: 11px` step in `DESIGN.md` or standardize on `text-xs`.
- **Suggested Command:** `$impeccable typeset`

### **[P3] Harmonize Iconography, Border Radii, and Remove Card Nesting**
- **Why it matters:** The UI mixes Google Material Symbols font ligatures with Lucide SVGs, uses 4 different border radius values (`rounded` 4px to `rounded-2xl` 16px), and contains 38 nested card containers that create visual mud.
- **Fix:** Standardize exclusively on Lucide SVG icons. Enforce a clean 3-tier radius scale (6px controls, 12px cards, 9999px pills). Flatten nested card containers to respect the Single Elevation Rule.
- **Suggested Command:** `$impeccable harden`

### **[P4] Fix Hero Navigation Scroll-Spy Desynchronization**
- **Why it matters:** In `Navbar.tsx`, `getSectionIndex` maps both `"home"` and `"about"` to `0`, causing the "About" link to be active when the visitor is at the top of the hero section.
- **Fix:** Adjust section index mapping so that the active pill is either unhighlighted in the hero or correctly highlights an active Home anchor.
- **Suggested Command:** `$impeccable polish`

---

## Persona Red Flags

- **Alex (Power User / Recruiter skimming in 30 seconds):** Lands on hero; cannot find a PDF resume download link. Skims to footer; no CV link. Clicks "Read Full Essay"; essay modal opens. Presses hardware "Back" button to return; browser navigates away from the portfolio completely because modal state was not synced to URL hash.
- **Jordan (First-Timer / Business Partner):** Fills out inquiry form and clicks "Send Message". Form shows a fake loading spinner, then unexpectedly triggers Windows/macOS Mail app with an empty draft. Because Jordan uses webmail, the action fails silently, leaving them unsure if the message was sent.
- **Sam (Accessibility-Dependent / Screen Reader & Keyboard User):** Outer interactive `div` with `role="button"` and `tabIndex={0}` wraps an inner `<button type="button">` in `ExperienceSection.tsx`, creating duplicate focus traps. Material Symbols ligatures lack `aria-hidden="true"`, causing screen readers to pronounce raw underscore strings like `precision_manufacturing`.
- **Casey (Distracted Mobile User on Transit):** Opens monograph modal on iOS Safari; modal container `overflow-y-auto` causes rubber-band scroll chaining on background page. Tag filter buttons and search clear button are under 44x44px touch target minimums.

---

## Minor Observations

- `src/app/(site)/page.tsx` applies `suppressHydrationWarning` to the main root wrapper div, potentially masking SSR/CSR hydration bugs.
- The newsletter subscription block (`WritingSection.tsx`) uses a simulated `useState` toggle with no persistence; this dummy pattern conflicts with the product's "Truth Before Polish" ethos.
- In `AboutSection.tsx`, animated underlines under "people", "organizations", and "numbers" re-trigger repeatedly on scroll oscillations due to unconstrained `whileInView`.

---

## Questions to Consider

1. What if this portfolio completely abandoned tech-startup tropes and embraced 100% of the visual materiality of a prestigious French/Swiss accounting ledger—complete with crisp hairline grids and authentic audit stamps?
2. Why is Hassan’s single highest-value hiring asset—a downloadable, meticulously typeset 1-page Academic CV—absent from the hero, while an inoperable newsletter signup takes up 120 lines of code?
3. What if the "Work" section showcased real, anonymized operational deliverables (e.g. an EL25 production call sheet, an Excel budget model, a volunteer logistics schedule) instead of high-level abstract pillars?
