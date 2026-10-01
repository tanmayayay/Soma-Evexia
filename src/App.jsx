import { useState } from 'react'
import { HashRouter, Routes, Route, ScrollToTop } from './router-helpers.jsx'
import { CartProvider } from './store/cart.jsx'
import { Header, Footer, CartDrawer } from './components/layout.jsx'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import Universes from './pages/Universes.jsx'
import Product from './pages/Product.jsx'
import Ritual from './pages/Ritual.jsx'
import Philosophy from './pages/Philosophy.jsx'
import Difference from './pages/Difference.jsx'
import Science from './pages/Science.jsx'
import Partners from './pages/Partners.jsx'
import Contact from './pages/Contact.jsx'
import Cart from './pages/Cart.jsx'
import Checkout from './pages/Checkout.jsx'
import Account from './pages/Account.jsx'

export default function App() {
  const [cartOpen, setCartOpen] = useState(false)
  return (
    <CartProvider>
      <HashRouter>
        <ScrollToTop />
        <Header onCartOpen={() => setCartOpen(true)} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/universes" element={<Universes />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/ritual" element={<Ritual />} />
            <Route path="/philosophy" element={<Philosophy />} />
            <Route path="/difference" element={<Difference />} />
            <Route path="/science" element={<Science />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </main>
        <Footer />
        <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      </HashRouter>
    </CartProvider>
  )
}
