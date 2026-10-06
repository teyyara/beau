# Product Contract v1 — Beau Burger Oujda

**Status:** ACTIVE / UNAPPROVED FOR FINAL RELEASE  
**Project class:** W1 — Interactive Marketing  
**Candidate:** candidate-005  
**Created:** 2026-10-06

## 1. Business objective

Create a polished, mobile-first public website for Beau Burger in Oujda that makes the three highest-value customer actions obvious:

1. discover the menu;
2. call Beau to order/reserve;
3. find the restaurant and its current published hours.

Secondary goal: present the brand in a distinctive, premium food-forward way and provide a direct Instagram path.

## 2. Target audience

Local and visiting customers in Oujda looking for burgers, chicken, fries, salads, takeaway, delivery, or restaurant information.

## 3. Critical user journeys

- Homepage → Menu → category selection → menu item discovery.
- Homepage → Call / Commander → device phone action.
- Homepage → Infos → address → Maps action.
- Homepage → Instagram → public social profile.
- Homepage → Infos → current open/closed status.

## 4. Functional requirements

| ID | Requirement | Risk | Verification | Current state |
|---|---|---|---|---|
| REQ-001 | Site is responsive across mobile, tablet, desktop, and large desktop layouts. | R2 | Runtime geometry + screenshots | PASS_WITH_LIMITATIONS |
| REQ-002 | Primary navigation reaches Menu, Experience, and Infos sections. | R1 | Runtime click/navigation | PASS_WITH_LIMITATIONS |
| REQ-003 | Menu exposes meat, chicken, and fries/salads categories. | R1 | Runtime interaction + DOM checks | PASS_WITH_LIMITATIONS |
| REQ-004 | Menu category controls are keyboard usable with visible focus and correct tab/panel semantics. | R1 | Keyboard + semantic inspection | PASS_WITH_LIMITATIONS |
| REQ-005 | Full public menu image can be opened and closed from the menu section. | R1 | Runtime journey | PASS_WITH_LIMITATIONS |
| REQ-006 | Primary phone CTA uses the verified public Beau Burger number. | R1 | Link-integrity check | PASS_WITH_LIMITATIONS |
| REQ-007 | Maps CTA points to a Beau Burger Oujda search. | R1 | Link-integrity check | PASS_WITH_LIMITATIONS |
| REQ-008 | Instagram CTA points to @beauburgeroujda. | R1 | Link-integrity check | PASS_WITH_LIMITATIONS |
| REQ-009 | Current opening status uses Africa/Casablanca time and correctly models overnight service. | R2 | Independent clock logic review + runtime edge cases | PASS_WITH_LIMITATIONS |
| REQ-010 | SEO description, robots policy, and Restaurant JSON-LD are present. | R1 | Static inspection | PASS_WITH_LIMITATIONS |
| REQ-011 | Third-party food/menu imagery has a local visual fallback. | R1 | Static inspection + offline rendering | PASS_WITH_LIMITATIONS |
| REQ-012 | No unsupported business facts are fabricated in public copy. | R2 | Content provenance review | PASS_WITH_LIMITATIONS |
| REQ-013 | Website introduces no paid runtime dependency. | R1 | Dependency/config review | PASS_WITH_LIMITATIONS |
| REQ-014 | Repository contains repeatable smoke validation and AEOS control-plane evidence. | R1 | Repository inspection | PASS_WITH_LIMITATIONS |

## 5. Content requirements

Authoritative/current public facts are maintained in `evidence/research/keyphrase-dossier.md`.

The website may use:
- Beau Burger name;
- Oujda / Rue Annakhil location;
- verified public phone;
- verified/public Instagram profile;
- observed public rating and price range;
- published menu items and prices documented in the research dossier;
- published hours, with an explicit notice that hours can change.

Unknowns must remain unknown:
- official owned domain;
- official online ordering endpoint;
- legal registered entity name;
- image licensing/ownership;
- holiday/Ramadan hours.

## 6. Brand / design direction

Editorial food-forward presentation using:
- dark brown/black foundation;
- warm paper/cream surfaces;
- copper/orange accent;
- strong serif display typography with restrained sans-serif UI typography;
- large food imagery;
- prominent Menu and Call/Order CTAs;
- generous spacing and mobile-first interaction sizing.

This is a design interpretation, not a claim about an official Beau Burger brand guide.

## 7. Technical constraints

- Static HTML/CSS/JS architecture.
- Static-hosting compatible.
- No paid runtime dependency.
- No secrets in the repository.
- Remote imagery must degrade to local placeholders.
- Domain remains unspecified until actual ownership/deployment information is available.

## 8. Accessibility

Target: WCAG 2.2 AA.

Required evidence before certification:
- semantic structure;
- keyboard interaction;
- focus visibility/restoration;
- automated accessibility scan where available;
- screen-reader validation where required by final acceptance profile.

Current environment does not expose axe-core or a screen-reader runtime, so certification is not claimed.

## 9. Performance

Provisional project defaults for a static W1 site:
- HTML source <= 25 KB;
- CSS <= 20 KB;
- first-party JS <= 8 KB;
- initial request count <= 20 where practical;
- LCP target < 2.5s under the eventual lab profile;
- no critical layout-shift regression.

These are release targets, not observed results. They must be measured before final certification where the capability exists.

## 10. Security

W1 static-web profile:
- secret scan;
- dependency/config review;
- external-host allowlist review;
- safe target blank links;
- no credential storage;
- production HTTPS verification when deployment exists.

No scanner result is treated as proof of complete security.

## 11. SEO

Required:
- meaningful title;
- meta description;
- crawl policy;
- Restaurant JSON-LD;
- canonical URL only after the actual production domain is known;
- sitemap only after the actual production domain is known.

## 12. Deployment

Target: static hosting.

Current deployment state:
- production host: UNKNOWN / NOT PROVISIONED;
- domain: UNKNOWN;
- DNS/HTTPS smoke: NOT EXECUTED;
- production monitoring: NOT CONFIGURED.

## 13. Rollback

Rollback target is the latest verified known-good Git commit. No force-push or history rewrite is permitted.

## 14. Success criteria

The candidate is considered ready for certification when:
- all critical requirements are traced;
- required capabilities are available or explicitly recorded as blocked;
- exact release artifact identity is established;
- applicable runtime, accessibility, responsive, security, SEO, and performance checks are observed;
- no critical failure remains;
- evidence is attached to the candidate;
- production promotion is performed only for the exact validated artifact.

## 15. Definition of done

A loop may be marked LOOP COMPLETE when its change is safely checkpointed and its applicable evidence is recorded.

The website must **not** be marked `CERTIFIED — READY FOR HUMAN ACCEPTANCE` until the release gates above are actually satisfied.
