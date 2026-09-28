# Content Changes

Date: 2026-09-28
Branch: `audit-fixes`

Every rewrite below uses only facts already present in the repository: the FSJES Aïn Chock enrolment, the listed first-year coursework, the EL25 Studio traineeship (Jul – Sep 2023), the Motatawi3 volunteering (Jul – Aug 2024), the Baccalaureate in Physical Science (English Option), the stated tools, and the existing monograph titles. No metric, employer, client, date, or outcome was invented.

## About section

### Headline

- Before: “I’m Hassan, a Business Administration student trying to understand how people, organizations, and numbers fit together — and what happens when they don’t.”
- After: “I’m Hassan. I study how decisions become records, schedules, and daily work.”

### Supporting paragraph

- Before: “Before university, I spent two months on commercial sets at EL25 Studio in Casablanca — a useful counterweight to classroom theory.”
- After: “From Jul – Sep 2023, I trained at EL25 Studio in Casablanca, supporting commercial ad production, filming, video editing, and client collaboration.”

The old text claimed “two months” while the stated period names three calendar months. The new text uses the same period already recorded in the experience entry.

### Academic paragraph

- Before: “…What I want from the degree is a working picture of how organizations actually run: how decisions get made, how accounting keeps track of whether they were good ones, and how the daily work gets coordinated.”
- After: “…I am building a foundation in management, accounting, economics, statistics, mathematics, and business law.”

### Coursework paragraph

- Before: “The first year covers the basics: micro and macroeconomics, general accounting, cost analysis, descriptive statistics, and business law. The part I keep coming back to is the accounting — it is the one subject where an answer is either right or it is not.”
- After: “My first-year coursework covers microeconomics, macroeconomics, general accounting, cost analysis, descriptive statistics, mathematics for economics, and business law.”

### Volunteering paragraph

- Before: “Outside class, volunteering with the national Motatawi3 youth program meant planning workshops and working with local organizers in communities that do not get many of them. Both experiences point the same way as my coursework: keep the records straight, meet the deadline, leave things tidy for whoever comes next.”
- After: “Outside class, I volunteered with the national Motatawi3 program under the Ministry of Youth, Culture and Communication. I helped organize workshops and worked with local organizers and volunteers.”

The old text claimed sole ownership of organizing and mentoring, and used an unverifiable claim about those communities. The new text matches the lower-claim wording already used in the Sanity fallback.

### Removed pull quote

- Before: an italic blockquote reading “Two months on a film set taught me more about deadlines than any syllabus has: someone is always waiting on your part of the work.”
- After: removed.

This was a closing line restating the section, with a duration claim that conflicted with the recorded dates.

### Education timeline intro

- Before: “Rigorous academic preparation bridging quantitative analytical methods, scientific problem-solving, and core business administration principles.”
- After: “Education and coursework in physical science and business administration.”

### Working-principles heading

- Before: “How I try to work”
- After: “How I approach the work”

### Working-principles paragraphs

- Before: “I read the figures before I propose anything, and I keep files and call sheets the way I keep journal entries — dated and balanced.” / “I am still early in all of this. The plan is to let the coursework, and whatever internships come next, keep correcting me.”
- After: “I start with the question or brief, write down the steps, and check the figures before I present the work.” / “I am a first-year student. Coursework, production work, and future internships will keep testing these habits.”

The original metaphor compared files and call sheets to balanced journal entries, and the closing line summarized the section.

## Sanity fallback content

### High school education entry

- Before: “Graduated with distinction with a specialized scientific focus in Physics and Chemistry combined with the English International Option. Cultivated rigorous mathematical problem-solving, analytical discipline, and bilingual fluency.”
- After: “Completed a Baccalaureate in Physical Science (English Option). TODO(hassan): Which subjects, result, or assessed work should this entry include?”

The original asserted a distinction with no named award or grade, and used a qualification name that conflicted with the profile wording.

### University education entry

- Before: “Developing foundational rigor across enterprise management, organizational dynamics, quantitative financial modeling, and commerce. Balancing academic theory with real-world execution discipline.”
- After: “Current first-year Licence in Business Administration. Coursework includes management, general accounting, microeconomics, macroeconomics, statistics, mathematics for economics, and business law.”

### Experience date formatting

- Before: `Jul — Sep 2023` and `Jul — Aug 2024` (em dash)
- After: `Jul – Sep 2023` and `Jul – Aug 2024` (en dash)

This removes a conflict with the date format already used in `src/data/profile.ts`.

### Featured monograph

- Before description: “On the urge to fix processes before understanding them, and what I noticed about informal workarounds while assisting on commercial shoots.”
- After description: “A reflection on why process changes should begin with observation, based on notes from commercial shoots and first-year management coursework.”

- Before thesis: “Most workflows get improved too early and understood too late. This is my case for watching a process carefully before touching it.”
- After thesis: “Before changing a workflow, observe how people use it and why its steps exist.”

- Before key takeaways: three broad claims about premature automation, bottlenecks, and informal coordination.
- After key takeaways: “Observe a process before proposing a new tool.” / “Ask what a workaround protects before removing it.” / “Record informal handoffs alongside the formal workflow.”

The monograph body sections were left unchanged because they are first-person argument rather than claims about Hassan’s credentials.

### Physical-science monograph

- Before description: “How an analytical foundation in high school physical science translates into quantitative reasoning for microeconomics, statistics, and business.”
- After description: “A reflection on links between physical science coursework and quantitative business subjects.”

- Before thesis: “…provides an extraordinary mental model for economics.”
- After thesis: “Physical science and economics both ask how systems respond to changing conditions. This note compares the questions, not the subjects themselves.”

- Before key takeaways: three claims presented as direct equivalences between equilibrium and market clearing, marginal analysis and calculus, and hypothesis testing and causality.
- After key takeaways: “Equilibrium is a useful comparison point when studying supply and demand.” / “Rates of change help explain why marginal analysis matters.” / “Testing a claim is different from assuming that two events are related.”

## Section labels and metadata

- `src/components/ExperienceSection.tsx`: “Real-world execution discipline gained through commercial media production coordination and civic youth initiatives.” → “Commercial production and community work alongside first-year business coursework.”
- `src/components/WorkSection.tsx`: “The first-year curriculum, organized around the three directions I care most about.” → “First-year coursework grouped around management, accounting, and communication.”
- `src/components/WritingSection.tsx`: “Syntheses exploring business administration, operations modeling, financial discipline, and compound learning.” → “Short notes on management, operations, finance, and quantitative study.”
- `src/app/(site)/skills/page.tsx` description: “Tools for thinking, organizing, and solving. A calibrated toolkit balancing systemic problem solving with modern business productivity software.” → “Coursework and software Hassan uses for analysis, organization, and communication.”

## Sanity-managed Skills

Previously the Skills section was hardcoded in `src/components/SkillsSection.tsx`. It now reads from Sanity with a local fallback.

- New `skill` document type in `src/sanity/schemaTypes/skillType.ts` and `studio/schemaTypes/skillType.ts`, registered in both schema indexes.
- New `skillsQuery` in `src/sanity/lib/queries.ts` and a `getSkills()` getter in `src/sanity/lib/client.ts` using the same configured/fallback pattern as the other sections.
- `SkillsSection` now renders the `group` values `analysis` and `software`, so Studio manages both the analytical skills and the software stacks through one document type.

### Rewritten skill descriptions

- Before: “Working through accounting and economics problems the way the courses demand: show the steps, check the total.”
- After: “I work through accounting, economics, mathematics, and statistics exercises by showing the steps and checking the totals.”

- Before: “Preparing call sheets and equipment lists the day before a shoot so filming started on time; planning assignments the same way.”
- After: “I keep tasks, handoffs, and deadlines visible across coursework and commercial production work.”

The original described a specific production practice that is not confirmed anywhere else in the site content.

- Before: “A journal entry that does not balance is wrong; I treat tables, filenames, and citations the same way.”
- After: “I check totals, tables, filenames, and citations before treating an assignment or document as finished.”

- Before (software): “Excel formulas and data tables for budgets and analysis, Word for academic reports, and PowerPoint for structured executive presentations.”
- After: “I use Excel for formulas and tables, Word for reports, and PowerPoint for structured presentations.”

The original claimed executive-level presentation work that the site does not otherwise evidence.

- Before (software): “Notion knowledge organization, Google Workspace collaboration, digital skills, and structured folder taxonomies.”
- After: “I use Notion and Google Workspace to organize notes, files, and shared work.”

### Removed skill labels

- “Attention to Detail & Accuracy” → renamed to “Accuracy and Checking”.
- “Digital Workspaces & Productivity” with a “SYSTEMS” badge → renamed to “Digital Workspaces”. The badge was removed because it was decorative and not a fact.

## Verification

Commands run after these changes:

- `npx tsc --noEmit` → `ROOT_TYPECHECK_EXIT=0`
- `npm --prefix studio run type-check` → `STUDIO_TYPECHECK_EXIT=0`
- `npx eslint .` → `ESLINT_EXIT=0`
- `npx oxlint` → `OXLINT_EXIT=0`
- `npm run build` → `BUILD_EXIT=0`, 17 static routes generated

## Not done, and why

- No documents were created in Sanity. The local project is not configured, and publishing content requires your Sanity project ID and dataset. Until documents exist, the site renders the local fallbacks.
- Existing `TODO(hassan):` outcome questions for the EL25 and Motatawi3 entries were kept as written. They still need your answers.
- The blog page, `not-found`, `error`, and `RedirectToSection` copy was not changed. Those are separate from the sections you asked about and were flagged in `docs/content-audit.md`.
- `StructuredData.tsx` still uses three different descriptions and places FSJES under `alumniOf`. Those are documented conflicts, not part of this content pass.
- `profile.projects` is still empty, so there is no project content to move into Sanity.
