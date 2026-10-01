import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { getProduct } from '../data/products.js'

const CartCtx = createContext(null)
const KEY = 'soma-cart'

function load() {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return []
    const arr = JSON.parse(raw)
    return Array.isArray(arr) ? arr.filter((i) => i && getProduct(i.id)) : []
  } catch { return [] }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(load)

  useEffect(() => {
    try { localStorage.setItem(KEY, JSON.stringify(items)) } catch {}
  }, [items])

  const value = useMemo(() => {
    const addItem = (id, qty = 1) => {
      setItems((prev) => {
        const ex = prev.find((i) => i.id === id)
        if (ex) return prev.map((i) => i.id === id ? { ...i, qty: Math.min(99, i.qty + qty) } : i)
        return [...prev, { id, qty }]
      })
    }
    const removeItem = (id) => setItems((prev) => prev.filter((i) => i.id !== id))
    const updateQty = (id, qty) => {
      if (qty <= 0) return removeItem(id)
      setItems((prev) => prev.map((i) => i.id === id ? { ...i, qty: Math.min(99, qty) } : i))
    }
    const clear = () => setItems([])
    const detailed = items.map((i) => ({ ...i, product: getProduct(i.id) })).filter((i) => i.product)
    const count = detailed.reduce((s, i) => s + i.qty, 0)
    const subtotal = detailed.reduce((s, i) => s + i.qty * i.product.price, 0)
    return { items: detailed, addItem, removeItem, updateQty, clear, count, subtotal }
  }, [items])

  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>
}

export function useCart() {
  const ctx = useContext(CartCtx)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
