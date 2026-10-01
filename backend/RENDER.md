# Backend deploy — Render

## One-time setup (no secrets in chat)
1. Push the `backend/` folder to a GitHub repo (or add it as the `backend/` directory of the app repo).
2. https://dashboard.render.com → **New → Web Service** → connect the repo.
   - **Root Directory:** `backend`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
3. In the service's **Environment** tab, add:
   - `RAZORPAY_KEY_ID` → your Razorpay test key id
   - `RAZORPAY_KEY_SECRET` → your Razorpay test key secret
   (Create test keys at https://dashboard.razorpay.com → Settings → API Keys → Test Mode. Keys are pasted only into Render's env UI.)
4. Deploy. Note the service URL, e.g. `https://soma-evexia-backend.onrender.com`.

## App wiring (when going live)
- Set `VITE_BACKEND_URL=<render service url>` in the storefront `.env`.
- The checkout's Razorpay option calls `POST <backend>/api/razorpay/order` then verifies via `/api/razorpay/verify`.
- Until the backend is live, the Razorpay option in checkout shows the test-mode notice and the other three methods (COD / UPI Direct / WhatsApp) work without it.

## Switching Razorpay to live
1. Complete Razorpay KYC, generate **Live** API keys.
2. Replace the two env vars on Render with the live keys → redeploy.
3. Test with a real ₹1 transaction before announcing.
