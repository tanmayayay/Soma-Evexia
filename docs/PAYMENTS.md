# Payments — Soma Evexia

Four checkout methods ship in the concept build. Only Razorpay moves real money; the rest are order-capture flows.

## 1. Razorpay (test mode until KYC)
- Backend: `backend/server.js` exposes `/api/razorpay/order` (create) and `/api/razorpay/verify` (signature check).
- Keys live ONLY in Render env vars (`RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET`) — never in chat, never in the repo.
- Frontend loads Razorpay checkout.js with the **key id** (public) and confirms the signature against the backend.
- Test cards: use Razorpay's test card numbers from their docs; no real money moves in test mode.
- Go-live: finish KYC → swap to live keys on Render → redeploy → test a ₹1 charge.

## 2. Cash on Delivery (COD)
- Order is recorded with `payment_method='cod'`, status `confirmed`.
- Collect cash/UPI on delivery. No integration needed.

## 3. UPI Direct
- Checkout shows the merchant UPI id (set `VITE_MERCHANT_UPI` in `.env` when live).
- Customer pays from any UPI app and enters the UTR/reference; the order is flagged for manual reconciliation.
- Verify each UTR in your bank/UPI statement before dispatching.

## 4. WhatsApp Order
- Checkout builds a pre-filled WhatsApp message (order id, items, total, address) and opens `https://wa.me/<number>?text=...`.
- Set the business number via `VITE_WHATSAPP_NUMBER` in `.env` (digits only, with country code, no `+`).
- You confirm payment manually in chat before dispatching.

## Env template (`.env`, never committed)
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
VITE_BACKEND_URL=
VITE_MERCHANT_UPI=
VITE_WHATSAPP_NUMBER=
