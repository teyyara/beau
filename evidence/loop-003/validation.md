# Loop 003 Validation

**Candidate:** candidate-003
**Focus:** correct overnight opening-status behavior
**Timestamp:** 2026-10-06

## Defect addressed
The previous implementation treated any time before 00:30 on Monday–Saturday as open for that same weekday. That incorrectly marked Monday 00:00–00:29 as open even though Sunday is closed.

## Corrected model
The schedule is now evaluated as two possible states:
1. today's service window, when the current weekday has a scheduled opening time;
2. the previous weekday's overnight closing window, when the previous weekday is scheduled and the current time is before 00:30.

This correctly covers:
- Monday 15:00–23:59 → open
- Tuesday–Friday 00:00–00:29 → open from the previous day's service
- Saturday 00:00–00:29 → open from Friday's service
- Sunday 00:00–00:29 → open from Saturday's service
- Monday 00:00–00:29 → closed because Sunday is closed
- Sunday daytime → closed
- Monday–Friday before 15:00 → closed
- Saturday before 09:00 (except the overnight 00:00–00:29 carryover) → closed

## Additional hardening
- Opening status now refreshes once per minute so a user does not keep a stale state across a boundary.

## Regression scope
No menu items, prices, address, phone number, Instagram destination, or navigation destinations changed.

## Evidence limitation
The current environment does not expose a post-change browser execution runner, so this loop's validation is source-level/deterministic reasoning rather than runtime certification. Cross-browser, axe-core, screen-reader, Lighthouse, and production-host verification remain unavailable.

## Release state
LOOP COMPLETE — checkpointed and waiting for the next CONTINUE.
