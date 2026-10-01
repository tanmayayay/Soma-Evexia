import express from 'express'
import cors from 'cors'
import crypto from 'crypto'
import Razorpay from 'razorpay'

const app = express()
app.use(cors())
app.use(express.json())

const {
  RAZORPAY_KEY_ID,
  RAZORPAY_KEY_SECRET,
  PORT = 3001,
} = process.env

const rzp = RAZORPAY_KEY_ID && RAZORPAY_KEY_SECRET
  ? new Razorpay({ key_id: RAZORPAY_KEY_ID, key_secret: RAZORPAY_KEY_SECRET })
  : null

app.get('/health', (_req, res) => res.json({ ok: true, razorpay: Boolean(rzp) }))

// Create a Razorpay order for the checkout total (amount in paise).
app.post('/api/razorpay/order', async (req, res) => {
  try {
    if (!rzp) return res.status(503).json({ error: 'Razorpay not configured (test mode).' })
    const { amountPaise, receipt } = req.body
    if (!Number.isInteger(amountPaise) || amountPaise <= 0) {
      return res.status(400).json({ error: 'Invalid amount.' })
    }
    const order = await rzp.orders.create({
      amount: amountPaise,
      currency: 'INR',
      receipt: receipt || `SE-${Date.now()}`,
    })
    res.json({ id: order.id, amount: order.amount, currency: order.currency })
  } catch (e) {
    res.status(500).json({ error: 'Failed to create Razorpay order.' })
  }
})

// Verify the Razorpay payment signature after checkout.
app.post('/api/razorpay/verify', (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body
  if (!RAZORPAY_KEY_SECRET) return res.status(503).json({ error: 'Razorpay not configured.' })
  const expected = crypto
    .createHmac('sha256', RAZORPAY_KEY_SECRET)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest('hex')
  if (expected === razorpay_signature) return res.json({ ok: true })
  return res.status(400).json({ ok: false, error: 'Signature mismatch.' })
})

app.listen(PORT, () => console.log(`soma-evexia backend on :${PORT}`))
