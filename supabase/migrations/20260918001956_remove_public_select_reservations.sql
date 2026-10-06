/*
# Remove public SELECT on reservations

1. Security changes
- Drop the "anon_select_own_reservations" policy. The previous predicate
  `lower(email) = lower(email)` was a tautology that would expose every
  reservation to any caller.
- Public guests only INSERT new booking requests via the reservation form.
  Reading back reservations is not a feature of this site, so no public
  SELECT policy is needed. Staff manage records server-side with the
  service-role key.

2. Notes
- INSERT remains allowed for anon + authenticated (public booking form).
- No UPDATE or DELETE from the public client.
*/

DROP POLICY IF EXISTS "anon_select_own_reservations" ON reservations;
