import React, { useEffect, useState } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { FiSearch, FiUser, FiHeart, FiShoppingCart } from 'react-icons/fi'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Compare from './pages/Compare'
import Wishlist from './pages/Wishlist'
import Account from './pages/Account'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import { getCart } from './utils/cart'
import './index.css'

function BrandMark({ footer = false }) {
  return (
    <Link to="/" className={`brand ${footer ? 'brand-footer' : ''}`}>
      <img src="/logo.png" alt="TechVibe logo" className="brand-logo" />
      <span className="brand-copy">
        <strong>TechVibe</strong>
        <small>Modern essentials</small>
      </span>
    </Link>
  )
}

function Header(){
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const updateCartCount = () => {
      const cart = getCart()
      const count = Object.values(cart).reduce((sum, qty) => sum + qty, 0)
      setCartCount(count)
    }

    updateCartCount()
    window.addEventListener('storage', updateCartCount)
    window.addEventListener('cart-updated', updateCartCount)

    return () => {
      window.removeEventListener('storage', updateCartCount)
      window.removeEventListener('cart-updated', updateCartCount)
    }
  }, [])

  return (
    <header className="site-header">
      <div className="header-inner container">
        <div className="header-side header-side-left">
          <BrandMark />
        </div>
        <nav className="nav nav-centered">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className="header-side header-side-right" style={{display:'flex',gap:8,alignItems:'center'}}>
          <button className="icon-btn" aria-label="Search"><FiSearch size={18}/></button>
          <Link to="/account" className="icon-btn" aria-label="Account"><FiUser size={18}/></Link>
          <Link to="/wishlist" className="icon-btn" aria-label="Wishlist"><FiHeart size={18}/></Link>
          <Link to="/cart" className="icon-btn cart-icon-btn" aria-label="Cart">
            <FiShoppingCart size={18}/>
            {cartCount > 0 ? <span className="cart-count-badge">{cartCount}</span> : null}
          </Link>
        </div>
      </div>
    </header>
  )
}

function Footer(){
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <BrandMark footer />
          <p className="muted footer-copy">A clean retail experience for curated accessories, daily tech, and thoughtful essentials.</p>
        </div>
        <div>
          <h4>Store</h4>
          <ul className="footer-list">
            <li>Tunis</li>
            <li>+216 52 721 406</li>
            <li>techvibestore@gmail.com</li>
          </ul>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul className="footer-list">
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/checkout">Checkout</Link></li>
          </ul>
        </div>
        <div>
          <h4>Newsletter</h4>
          <p className="muted footer-copy">Get product drops, offers, and store updates.</p>
          <input placeholder="Email address" className="footer-input" />
        </div>
      </div>
    </footer>
  )
}

export default function App(){
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/product/:id" element={<Product/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/compare" element={<Compare/>} />
          <Route path="/wishlist" element={<Wishlist/>} />
          <Route path="/account" element={<Account/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/blog" element={<Blog/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
