create table public.profiles (
  id uuid references auth.users not null primary key,
  full_name text,
  email text,
  role text default 'Viewer',
  status text default 'Active',
  avatar_url text,
  properties_count int default 0,
  sales_ytd numeric default 0
);
