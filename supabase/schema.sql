-- SOMA EVEXIA — Supabase schema
-- Run in Supabase Dashboard → SQL Editor (or via psql on the 5432 session pooler).

create table if not exists products (
  id text primary key,
  name text not null,
  universe text not null check (universe in ('hydro','somnus','cortex','cellular','vitality','terra')),
  tagline text not null default '',
  description text not null default '',
  price_inr integer not null check (price_inr > 0),
  unit text not null default '',
  badge text,
  image_path text not null default '',
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists orders (
  id text primary key,
  created_at timestamptz not null default now(),
  customer_name text not null,
  customer_phone text not null,
  customer_email text,
  address text not null,
  city text not null,
  pincode text not null,
  payment_method text not null check (payment_method in ('razorpay','cod','upi','whatsapp')),
  subtotal_inr integer not null,
  discount_inr integer not null default 0,
  total_inr integer not null,
  status text not null default 'confirmed',
  razorpay_order_id text,
  razorpay_payment_id text
);

create table if not exists order_items (
  id bigint generated always as identity primary key,
  order_id text not null references orders(id) on delete cascade,
  product_id text not null references products(id),
  qty integer not null check (qty > 0),
  unit_price_inr integer not null
);

create index if not exists idx_order_items_order on order_items(order_id);
create index if not exists idx_products_universe on products(universe);

-- Public read on products; orders written via backend service role only.
alter table products enable row level security;
alter table orders enable row level security;
alter table order_items enable row level security;

drop policy if exists "public read products" on products;
create policy "public read products" on products for select using (true);
