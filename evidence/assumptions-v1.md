# Assumption Ledger — candidate-005

| ID | Assumption | Source / reason | Confidence | Impact if wrong | Resolution |
|---|---|---|---|---|---|
| ASSUMP-001 | Static HTML/CSS/JS is sufficient for the current W1 requirements. | Existing implementation has no backend-dependent journey. | HIGH | Medium | Re-evaluate if online ordering, forms, booking API, or CMS becomes required. |
| ASSUMP-002 | Phone-first ordering is the safest CTA until an official ordering endpoint is verified. | Research found no verified ordering provider/endpoint. | HIGH | Medium | Replace only after authoritative endpoint is confirmed. |
| ASSUMP-003 | Provisional performance budgets are appropriate for a small static W1 site. | Low-risk project default; no explicit client budget supplied. | MEDIUM | Medium | Measure with Lighthouse-equivalent tooling before certification. |
| ASSUMP-004 | Remote Restaurant Guru imagery can remain only as progressive enhancement, not as the sole visual asset. | Licensing/ownership is unverified. | HIGH | High | Confirm rights or replace with owner-supplied assets before public launch. |
| ASSUMP-005 | Published hours should be displayed with a change warning. | Research found conflicting public hour sources. | HIGH | Medium | Reconfirm against the owner's current schedule before launch. |
| ASSUMP-006 | WCAG 2.2 AA is the correct default accessibility target. | AEOS default for web projects; no alternative target supplied. | HIGH | Medium | Replace only by explicit project-level requirement. |
| ASSUMP-007 | No canonical domain should be emitted until the actual production domain is known and controlled. | Domain is currently unknown. | HIGH | High | Add canonical URL and sitemap during deployment-readiness loop. |
