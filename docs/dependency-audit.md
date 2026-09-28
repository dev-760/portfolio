# Dependency Audit

Date: 2026-09-28
Branch: `audit-fixes`

## Results before the fix

- `npm audit --omit=dev`: 14 vulnerabilities, 11 moderate and 3 high.
- `npm audit`: 16 vulnerabilities, 12 moderate and 4 high.

The production findings were transitive dependencies beneath `sanity` and `next-sanity`: `adm-zip`, `js-yaml`, `smol-toml`, and `uuid` through the Sanity CLI/workbench and Vercel framework tooling.

The additional full-audit findings were development tooling: `@humanfs/node` and `brace-expansion`.

## Non-breaking fix

`npm audit fix` completed its non-breaking updates but returned exit code 1 because vulnerabilities remain. It added one package and changed five packages. The lockfile updates were limited to development tooling packages, including `@humanfs/core`, `@humanfs/node`, `@humanfs/types`, `brace-expansion`, and `js-yaml`.

Final audit counts:

- `npm audit --omit=dev`: 14 vulnerabilities, 11 moderate and 3 high (`PROD_AUDIT_EXIT=1`).
- `npm audit`: 14 vulnerabilities, 11 moderate and 3 high (`ALL_AUDIT_EXIT=1`).

## Remaining remediation

npm reports that the remaining vulnerabilities require `npm audit fix --force`, which would install `sanity@5.14.1`. That is a breaking major-version change from the current Sanity 6 dependency and was deliberately not applied. No parent package upgrade was attempted without approval.

## Needs Hassan

Please decide whether to approve the breaking Sanity 5.14.1 remediation. The audit workflow is paused here as requested; Phases 3 through 9 have not started.
