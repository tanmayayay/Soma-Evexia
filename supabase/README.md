# Supabase setup — Soma Evexia

No secrets are pasted anywhere in this guide. All keys are entered in the Supabase Dashboard UI.

## 1. Create the project
1. Go to https://supabase.com/dashboard → New project.
2. Name it `soma-evexia`, pick the nearest region, set a database password (store it in your password manager).
3. Wait for the project to finish provisioning.

## 2. Run the SQL
1. Open the project → **SQL Editor** → New query.
2. Paste the full contents of `schema.sql` → Run. (Creates `products`, `orders`, `order_items` + RLS.)
3. New query → paste `seed.sql` → Run. (Inserts the 27 formulations.)
4. Verify: **Table Editor** → `products` should show 27 rows.

## 3. Connect the app (later, when going live)
1. Project **Settings → API**: copy the Project URL and the `anon` public key.
2. In the app, create `.env` (never commit it):
   - `VITE_SUPABASE_URL=<project url>`
   - `VITE_SUPABASE_ANON_KEY=<anon key>`
3. The storefront reads `products` directly; order writes go through the backend (service role), never the anon key.

## 4. Storage (product images, when ready)
1. **Storage** → New bucket: `product-images`, public.
2. Upload the webp files from the app's `src/assets/` (or the final packshots).
3. The `image_path` column stores the file name; the app prefixes the public bucket URL.
