create table public.user_favorites (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete cascade not null,
  property_id uuid references public.properties(id) on delete cascade not null,
  created_at timestamptz default now() not null,
  unique(user_id, property_id)
);

-- Enable RLS
alter table public.user_favorites enable row level security;

-- Policies
create policy "Users can view their own favorites"
  on public.user_favorites for select
  using (auth.uid() = user_id);

create policy "Users can add their own favorites"
  on public.user_favorites for insert
  with check (auth.uid() = user_id);

create policy "Users can remove their own favorites"
  on public.user_favorites for delete
  using (auth.uid() = user_id);
