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

-- The site may only choose the language; id and timestamp are set by the database.
revoke all on public.visitor_marks from anon, authenticated;
grant select (id, created_at, lang) on public.visitor_marks to anon;
grant insert (lang) on public.visitor_marks to anon;

-- Simple flood guard: at most 30 marks per minute across the whole site.
create or replace function public.visitor_marks_rate_limit()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  if (select count(*) from public.visitor_marks where created_at > now() - interval '1 minute') >= 30 then
    raise exception 'rate limit' using errcode = 'P0001';
  end if;
  return new;
end;
$$;

revoke all on function public.visitor_marks_rate_limit() from public, anon, authenticated;

create trigger visitor_marks_rate_limit
  before insert on public.visitor_marks
  for each row execute function public.visitor_marks_rate_limit();

create index if not exists visitor_marks_created_at_idx on public.visitor_marks (created_at);
