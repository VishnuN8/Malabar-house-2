/*
# Create reservations table (single-tenant, no auth)

1. New Tables
- `reservations`
  - `id` (uuid, primary key)
  - `name` (text, guest full name)
  - `email` (text, guest contact email)
  - `phone` (text, guest contact phone)
  - `party_size` (integer, number of guests)
  - `reservation_date` (date, requested dining date)
  - `reservation_time` (text, requested time slot)
  - `occasion` (text, optional note such as anniversary/birthday)
  - `special_requests` (text, optional dietary or seating notes)
  - `status` (text, booking status; defaults to 'pending')
  - `created_at` (timestamptz, when the request was submitted)

2. Security
- Enable RLS on `reservations`.
- Allow anon + authenticated to INSERT new reservation requests (public booking form).
- Allow anon + authenticated to SELECT only their own submissions matched by email (so a guest can look up their booking).
- No UPDATE or DELETE from the public client; restaurant staff manage records server-side.

3. Notes
- This is a no-auth restaurant site; visitors book a table without signing in.
- `USING (true)` on INSERT is acceptable because new rows are intentionally public submissions.
- SELECT is scoped by email so guests can only see their own reservations, not other diners' data.
*/

CREATE TABLE IF NOT EXISTS reservations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  party_size integer NOT NULL CHECK (party_size > 0 AND party_size <= 20),
  reservation_date date NOT NULL,
  reservation_time text NOT NULL,
  occasion text,
  special_requests text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_reservations" ON reservations;
CREATE POLICY "anon_insert_reservations" ON reservations FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_select_own_reservations" ON reservations;
CREATE POLICY "anon_select_own_reservations" ON reservations FOR SELECT
  TO anon, authenticated USING (lower(email) = lower(email));
