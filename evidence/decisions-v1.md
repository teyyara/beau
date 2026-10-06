# Decision Ledger — candidate-005

## DEC-001 — Static architecture
**Context:** Current project is a restaurant brochure/interactive marketing site.  
**Chosen:** Static HTML/CSS/JS.  
**Reason:** Minimal operational complexity, no paid backend, easy static deployment, small attack surface.  
**Tradeoff:** No real-time ordering, CMS, or server-side booking without a future change.  
**Risk:** R1.  
**Reversible:** HIGH.

## DEC-002 — Phone-first conversion
**Context:** Public ordering endpoint could not be verified.  
**Chosen:** Verified phone CTA as primary order/reservation path.  
**Reason:** Avoids inventing a provider or destination.  
**Tradeoff:** No embedded order flow.  
**Risk:** R1.  
**Reversible:** HIGH.

## DEC-003 — Progressive-enhancement imagery
**Context:** Public food imagery is useful but ownership is not verified.  
**Chosen:** Local fallback assets remain immediately available; remote imagery can upgrade after load.  
**Reason:** Prevents broken-image presentation and preserves a runnable visual candidate.  
**Tradeoff:** Final public launch still requires image-rights confirmation or replacement assets.  
**Risk:** R1.  
**Reversible:** HIGH.

## DEC-004 — No canonical domain yet
**Context:** Actual owned production domain was not supplied/verified.  
**Chosen:** Do not invent a canonical URL or sitemap.  
**Reason:** A false canonical URL creates SEO and deployment risk.  
**Risk:** R1.  
**Reversible:** HIGH.

## DEC-005 — Product Contract becomes the requirement baseline
**Context:** Previous loops had implementation and evidence but lacked a formal repository requirement trace.  
**Chosen:** Establish Product Contract v1 and requirements baseline before further certification-oriented work.  
**Reason:** AEOS requires requirements traceability and explicitly warns against confusing implementation with production readiness.  
**Tradeoff:** Adds repository metadata, but materially improves recoverability and release confidence.  
**Risk:** R1.  
**Reversible:** HIGH.
