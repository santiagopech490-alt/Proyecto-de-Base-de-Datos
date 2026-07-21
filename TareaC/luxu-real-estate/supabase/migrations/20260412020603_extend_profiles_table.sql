alter table public.profiles 
add column if not exists location text,
add column if not exists member_since timestamp with time zone default now(),
add column if not exists email_notifications boolean default true,
add column if not exists push_notifications boolean default true,
add column if not exists sms_notifications boolean default true;
