# Loop 004 Validation

**Candidate:** candidate-004
**Focus:** repeatable static smoke validation
**Timestamp:** 2026-10-06

## Implemented
- Added `tests/static-smoke.cjs`, a dependency-free Node.js validation harness.
- Added `.github/workflows/smoke.yml` to run the harness on pushes to `main` and pull requests.
- Documented the local validation command in README.
- Advanced project state to Loop 004 / candidate-004.

## Coverage encoded by the harness
- HTML doctype and language.
- Viewport and SEO description metadata.
- Restaurant JSON-LD.
- Main/menu/info landmarks.
- Phone, Instagram and Maps CTA destinations.
- Three menu tab/panel relationships.
- Lazy-loading and hero image priority hints.
- Deferred interaction script.
- Visible focus CSS.
- Keyboard tab navigation hooks.
- Live opening-status semantics.
- 60-second opening-status refresh.
- External-host allowlist.
- W1 project configuration and WCAG 2.2 AA target.
- Existence of referenced local assets.

## Execution observation
GitHub Actions runs queried after the Loop 004 pushes returned **zero workflow runs**. Therefore CI execution is **NOT OBSERVED**, not PASS.

## Evidence limitations
Cross-browser, axe-core, screen-reader, Lighthouse, production-host, real-user, and image-license validation remain unavailable.

## Release state
LOOP COMPLETE — repeatable validation infrastructure is committed, but certification remains blocked on missing runtime/environment evidence.
