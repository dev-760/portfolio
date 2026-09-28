# Content Audit

Date: 2026-09-28

## Pass 1 scope

I audited the current user-facing copy in the app layouts, route pages, components, profile data, Sanity fallback content, metadata, structured data, alt text, links, and error/empty states. The local Sanity dataset was not configured, so live Sanity documents could not be inspected. I also could not verify external image destinations or the `@hassankarasu` Twitter account from repository content.

This pass does not rewrite site copy. Pass 2 should use only existing facts and Hassan's answers to the questions below.

## Weakest passages

| File and line | Current text | Problem |
| --- | --- | --- |
| `src/data/profile.ts:90` | “studying management, accounting, and practical execution.” | “Practical execution” is abstract without an example or artifact. |
| `src/data/profile.ts:117` | “Building core competencies in microeconomics, organizational theory, general accounting, and quantitative methods at FSJES Aïn Chock.” | Generic and unverifiable without coursework, assessment, or output. |
| `src/data/profile.ts:123` | “Mastering general accounting, cost analysis, descriptive statistics, and financial modeling in Excel.” | “Mastering” overstates a first-year level; Excel modeling is not supported elsewhere by a named work sample. |
| `src/data/profile.ts:130` | “Commercial ad production, on-set filming, post-production video editing, and client delivery gained through traineeship at EL25 Studio.” | Lists activities without a specific production, deliverable, tool, or personal responsibility. |
| `src/data/profile.ts:145` | “the essential pillars of modern commerce” | Filler that does not tell a reviewer what was studied. |
| `src/data/profile.ts:146` | “strong quantitative discipline and fluency in English.” | Unverifiable without grades, certification, or an assessed example. |
| `src/data/profile.ts:147` | “working directly with clients under tight deadlines.” | Unverifiable because no client, production, deadline, or deliverable is named. |
| `src/data/profile.ts:148` | “organizing community workshops and mentoring local youth.” | The responsibility and outcome are not supported by a specific workshop, audience, or result. |
| `src/data/profile.ts:149` | “solve real-world problems.” | Generic claim with no named problem or artifact. |
| `src/data/profile.ts:241` | “Open to internship conversations (targeting summer 2027, accounting or operations, Casablanca or remote) and academic collaboration.” | Useful direction, but availability, employer type, and preferred role titles remain unclear. |
| `src/data/profile.ts:243` | “Practical tools and applications built to solve everyday student and operational problems.” | Unverifiable because `profile.projects` is empty. |
| `src/components/AboutSection.tsx:79` | “trying to understand how people, organizations, and numbers fit together” | Vague positioning that could describe any business student. |
| `src/components/AboutSection.tsx:94` | “a useful counterweight to classroom theory.” | Metaphorical and does not state what was learned or delivered. |
| `src/components/AboutSection.tsx:123` | “a working picture of how organizations actually run: how decisions get made, how accounting keeps track of whether they were good ones, and how the daily work gets coordinated.” | Too long and abstract for an about paragraph; “good ones” is imprecise. |
| `src/components/AboutSection.tsx:130` | “communities that do not get many of them.” | “Them” is unclear and the claim is not verifiable. |
| `src/components/AboutSection.tsx:133` | “someone is always waiting on your part of the work.” | Generic aphorism rather than evidence about Hassan's work. |
| `src/components/AboutSection.tsx:193` | “Full Professional (Bilingual Baccalaureate)” | The language level and the baccalaureate are combined unclearly. |
| `src/components/AboutSection.tsx:212` | “Rigorous academic preparation bridging quantitative analytical methods, scientific problem-solving, and core business administration principles.” | Generic summary with no named result or assessed work. |
| `src/components/AboutSection.tsx:269` | “How I try to work” | Vague heading that does not tell a recruiter what the section contains. |
| `src/components/AboutSection.tsx:275` | “I keep files and call sheets the way I keep journal entries — dated and balanced.” | Unclear metaphor; “balanced” is not a natural description of files or call sheets. |
| `src/components/AboutSection.tsx:278` | “I am still early in all of this.” | Filler and self-undermining without adding useful context. |
| `src/components/WorkSection.tsx:78` | “The first-year curriculum, organized around the three directions I care most about.” | Does not explain why these directions matter or what work supports that interest. |
| `src/components/SkillsSection.tsx:83` | “A disciplined toolkit balancing analytical problem-solving with practical software execution.” | Abstract self-description; the listed skills need evidence from projects, coursework, or experience. |
| `src/components/ExperienceSection.tsx:48` | “Real-world execution discipline gained through commercial media production coordination and civic youth initiatives.” | Generic claim and repeated positioning language. |
| `src/sanity/lib/client.ts:77` | “Graduated with distinction with a specialized scientific focus...” | Unverifiable: no distinction, grade, or awarding body is identified. |
| `src/sanity/lib/client.ts:96` | “Developing foundational rigor across enterprise management, organizational dynamics, quantitative financial modeling, and commerce.” | Abstract and potentially overstated for the stated first-year level. |
| `src/sanity/lib/client.ts:172` | “the informal highway ... that actually move work forward” | Metaphorical and not tied to a documented observation. |
| `src/sanity/lib/client.ts:173` | “nuanced glance signals” and “production cadence immediately collapsed.” | Unverifiable and overstated without a named shoot or observable consequence. |
| `src/sanity/lib/client.ts:180` | “invites catastrophe.” | Exaggerated language for an academic reflection. |
| `src/sanity/lib/client.ts:208` | “how work actually happens in real settings.” | Generic phrasing. |
| `src/sanity/lib/client.ts:214` | “Frontline workers develop brilliant local hacks...” | Generic and overstated; no observed worker, process, or example is identified. |
| `src/sanity/lib/client.ts:247` | “provides an extraordinary mental model for economics.” | Overstated and unsupported by an academic result or example. |
| `src/app/(site)/blog/page.tsx:11` | “Thoughtful stories and field dispatches...” | Generic filler and not clearly connected to Hassan's stated portfolio purpose. |
| `src/app/(site)/blog/page.tsx:18` | `link: "#"` | Broken destination; the same placeholder appears on six article cards. |
| `src/app/(site)/blog/page.tsx:103` | “Welcome to our blog” | Generic and inconsistent with a personal portfolio voice. |
| `src/app/(site)/blog/page.tsx:107` | “Thoughtful stories and field notes about travel, culture, science, and everyday life.” | Generic and inconsistent with the business administration positioning. |
| `src/app/(site)/blog/page.tsx:117` | “Subscribe to newsletter” | Misleading: no subscription control or workflow is implemented. |
| `src/app/(site)/blog/page.tsx:197` | “Load more articles” | Misleading: no load-more behavior is implemented. |
| `src/app/not-found.tsx:17` | “The page you are looking for doesn’t exist or has been moved.” | Generic error-state copy. |
| `src/app/(site)/error.tsx:17` | “Something went wrong!” | Generic error heading; it does not identify the problem or recovery action. |
| `src/components/RedirectToSection.tsx:17` | “SYS.ROUTER // NAVIGATING TO #...” | Implementation jargon exposed to visitors. |

## Gaps for reviewers

Recruiters and internship reviewers cannot currently verify:

- Which EL25 Studio productions Hassan worked on, what he delivered, which tools he used, or what responsibility he owned from preparation through delivery.
- Which Motatawi3 workshops or activities he supported, where they happened, who attended, and what changed because of his contribution.
- Any project portfolio. `profile.projects` is empty.
- Evidence for spreadsheet or productivity claims, such as a workbook, analysis, report, presentation, or workflow artifact.
- The exact internship role titles and employer sectors Hassan wants beyond “accounting” and “operations.”
- Expected graduation year, current semester, grades, academic ranking, or assessed coursework.
- Work authorization, language evidence, transport/remote constraints, or preferred employer types.
- References, supervisor names, permission to show work, or links to work samples.
- A recruiter-friendly CV or resume download.

Academic contacts cannot currently verify:

- The exact degree structure, current year or semester, expected completion, and official institution terminology.
- Whether each monograph is coursework, independent research, field notes, or published work.
- Sources, citations, methodology, data, or examples behind the monograph claims.
- Research interests beyond broad labels such as systems thinking and operations.
- Academic performance in physical science, accounting, mathematics, statistics, or economics.

Site-level content gaps:

- A referenced `/og-image.png` does not exist in `public/`.
- Several routes inherit the same root title and description instead of having route-specific metadata.
- The blog includes placeholder articles, placeholder `#` links, and controls with no implemented behavior.
- The local Sanity dataset was not configured, so live content and its metadata could not be checked.

## Questions for Hassan

1. Which exact EL25 Studio productions can you name, and what did you personally deliver on each?
2. Which editing software, camera, audio, lighting, spreadsheet, or collaboration tools did you actually use?
3. What responsibility did you own from preparation through delivery at EL25 Studio?
4. What result can you verify from the traineeship: an asset delivered, deadline met, client approval, corrected issue, or production volume?
5. Which Motatawi3 workshops or activities did you support, where and when did they happen, and who attended?
6. How many participants or organizers were involved, and what changed because of your contribution?
7. What is the official name of your current degree, your expected completion year, and your current academic year or semester?
8. What grades, distinctions, certifications, or assessed work can substantiate the academic and language claims?
9. Which internship sectors and exact role titles should recruiters associate with you besides accounting and operations?
10. Are the monographs based on coursework, independent research, field notes, or published work, and what sources should readers consult?
11. Does “graduated with distinction” refer to a formal award or simply strong performance?
12. Is the newsletter intended to exist, and if so, what service or publication workflow should the blog represent?
13. Should the site use US or UK spelling throughout?
14. Is `@hassankarasu` an active verified social account, and what is the correct public profile URL?
15. Do you want a CV or resume download on the site? If yes, which version and date should it use?

## Conflicts found

- Dates use both en dashes (`Jul – Sep 2023`) and em dashes (`Jul — Sep 2023`).
- The role appears as “Volunteer, Motatawi3 Program” and “Volunteer, Motatawi3 National Program.”
- The high-school qualification appears as “Physical Science (English Option),” “Physical Sciences with the English International Option,” and “French-track Moroccan Baccalauréat in Physical Sciences.”
- The profile says “Before university, I spent two months” at EL25, while `Jul – Sep 2023` names three calendar months; exact dates are missing.
- The profile says Hassan organized workshops and mentored youth; the fallback says he helped organize workshops and worked with organizers. These are different responsibility levels.
- The profile and fallback use different education period formats: `2026` versus `Class of 2026`.
- The profile has no volunteer location; the fallback says `Morocco`.
- Homepage, root metadata, OpenGraph metadata, and JSON-LD use different descriptions, including “systems-driven execution,” “specializing in systems thinking,” and “practical execution.”
- `StructuredData.tsx` places the current FSJES institution under `alumniOf`, which normally describes a former educational affiliation.
- Metadata and structured data reference `/og-image.png`, but that asset is absent from `public/`.
- The blog content concerns travel, culture, science, and everyday life, which does not match the stated business and academic portfolio positioning.
- Route names such as `/education/`, `/projects/`, and `/competencies/` redirect to sections rather than containing independent page content.

## Existing TODOs

The current source contains six `TODO(hassan):` occurrences, all about missing experience outcomes:

- `src/data/profile.ts:221`: What specific deliverable, responsibility, or result can you verify from the EL25 traineeship?
- `src/data/profile.ts:223`: What did the studio or client receive because of your contribution?
- `src/data/profile.ts:235`: Which Motatawi3 workshop, activity, or participant outcome can you verify?
- `src/data/profile.ts:237`: What changed for the participants or organizers because of your work?
- `src/sanity/lib/client.ts:116`: What specific deliverable, responsibility, or result can you verify from the EL25 traineeship?
- `src/sanity/lib/client.ts:133`: Which Motatawi3 workshop, activity, or participant outcome can you verify?

## Metadata, links, alt text, and states

- Root title: `Hassan Karasu`; the root description is repeated in HTML, OpenGraph, and Twitter metadata and is not specific enough for a recruiter.
- `/skills/` has a route title, but its description uses vague phrases such as “calibrated toolkit,” “systemic problem solving,” and “modern business productivity software.”
- `/blog/` has `Blog & Field Notes | Hassan Karasu`, but its description and content are unrelated to the portfolio positioning.
- `/about/`, `/work/`, `/experience/`, `/education/`, `/writing/`, `/contact/`, `/projects/`, and `/competencies/` inherit the root title and have no route-specific descriptions.
- `/og-image.png` is referenced by metadata and structured data but is not present in `public/`.
- The two logo images use `alt="Hassan Karasu"` while adjacent text also says `Hassan Karasu`; these should be assessed as redundant or decorative in Pass 2.
- The primary navigation labels are understandable out of context. “Read Essay” and “Share” are action labels; “Share” should be checked against its actual clipboard behavior.
- Blog article cards use placeholder `#` links, and “Subscribe to newsletter” and “Load more articles” describe unavailable actions.
- The not-found, error, loading, and redirect states exist, but the not-found/error/redirect copy is generic or implementation-facing.
- Structured data should be checked against only verified `profile.ts` facts in Pass 2.

## Pass 1 boundary

No site copy, metadata, links, alt text, or structured data was rewritten in this pass. After Hassan answers the questions, Pass 2 can rewrite with a `docs/content-changes.md` before/after record and list any remaining `TODO(hassan):` items.
