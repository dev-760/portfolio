# Audit Baseline

Date: 2026-09-28
Branch: `audit-fixes`

## Repository checks

| Check | Result |
| --- | --- |
| `npm ci` | Passed in 3m; 1,203 packages added, 1,204 audited |
| `npm run build` | Passed; 17 static routes generated |
| `npx tsc --noEmit` | Passed (`TYPECHECK_EXIT=0`) |
| `npx eslint .` | Passed (`ESLINT_EXIT=0`) |
| `npx oxlint` | Passed (`OXLINT_EXIT=0`) |

`npm ci` reported the existing `uuid@10.0.0` deprecation, an unapproved `unrs-resolver` install script, and 16 vulnerabilities: 12 moderate and 4 high.

## Static output

The `out/` directory contained 341 files totaling 14,032,376 bytes:

- JavaScript: 8,562,118 bytes
- CSS: 246,227 bytes
- HTML: 548,396 bytes

Largest generated files were the JavaScript chunks `_next/static/chunks/3fw36t--3amww.js`, `_next/static/chunks/1s5tnkuasn14s.js`, and `_next/static/chunks/08-61j3q22rjx.js`.

## Lighthouse

The raw reports are stored beside this document as `lighthouse-baseline-desktop.json` and `lighthouse-baseline-mobile.json`.

| Profile | Performance | Accessibility | Best Practices | SEO | FCP | LCP | CLS | TBT |
| --- | ---: | ---: | ---: | ---: | --- | --- | --- | --- |
| Desktop | 82 | 97 | 96 | 100 | 0.4 s | 1.4 s | 0.018 | 270 ms |
| Mobile | 60 | 97 | 96 | 100 | 1.1 s | 5.3 s | 0.045 | 780 ms |

Both Lighthouse runs wrote complete JSON reports. The CLI returned exit code 1 after report generation because Windows denied cleanup of a temporary Lighthouse directory (`EPERM: Permission denied`); this is recorded as a tooling cleanup failure, not a failed audit report.

## Axe

Axe was run against `http://localhost:3000/` using axe-core 4.10.2 in Chromium.

- Violations: 2
- Passes: 43
- Incomplete: 0

Violations:

- `color-contrast` (serious): three nodes failed, with measured ratios of 2.45:1 for the `(1)` counts and 3.59:1 for the muted contact note.
- `image-redundant-alt` (minor): the light logo image repeats the adjacent `Hassan Karasu` text.

## Browser/tooling notes

`npx playwright install chromium` was started to support the later responsive and interaction checks. The browser package is not currently a project dependency; Phase 7 will add the requested Playwright test dependencies and CI workflow.
