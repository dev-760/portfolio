# Anti-Slop Upstream Provenance

## Source Repository
- **Upstream:** [dmmulroy/anti-slop](https://github.com/dmmulroy/anti-slop)
- **Source Snapshot:** Pristine bundled snapshot from `.agents/skills/install-anti-slop/assets/anti-slop`
- **Skill Hash:** `d92d8dbdf1bd96e11ee33945dca76306179a7c415e7339769084b2c211c6897c` (from `skills-lock.json`)
- **Upstream Git Commit:** Unknown (installed from vendored agent skill snapshot)

## Nested Dependencies & Provenance
- `tools/oxlint/anti-slop/vendor/eslint-stylistic`:
  - Source: [eslint-stylistic/eslint-stylistic](https://github.com/eslint-stylistic/eslint-stylistic)
  - Commit: `435c3ea0fd26a5fef9042c4b36b6e165fbbf8d08`
  - License: MIT (preserved at `tools/oxlint/anti-slop/vendor/eslint-stylistic/LICENSE`)

## Installed Entry Points
- Generic plugin: `tools/oxlint/anti-slop/index.ts`
- Effect plugin: `tools/oxlint/anti-slop/effect/index.ts` (not enabled; repository does not declare `effect`)

## Intentional Deviations
- None from the skill bundle.
- Excluded `tools` directory in the root `tsconfig.json` so Next.js application typechecking does not conflict with `.ts` extension specifiers used in ESM Oxlint plugins.
