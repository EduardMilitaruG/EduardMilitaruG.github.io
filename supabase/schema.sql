-- Visitor log for the portfolio. Run once in the Supabase SQL editor.
-- Stores no personal data: only when a mark was made and in which site language.

create table if not exists public.visitor_marks (
  id         bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  lang       text not null check (lang in ('en', 'es', 'ro'))
);

alter table public.visitor_marks enable row level security;

-- Anyone (the anon key used by the site) can read the rows to count them...
create policy "visitor marks are readable"
  on public.visitor_marks for select
  to anon
  using (true);

-- ...and add a mark, but never update or delete one.
create policy "visitors can add a mark"
  on public.visitor_marks for insert
  to anon
  with check (lang in ('en', 'es', 'ro'));
