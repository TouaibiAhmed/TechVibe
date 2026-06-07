import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiTrash2 } from 'react-icons/fi'
import { PRODUCTS } from '../data/products'
import PageHero from '../components/PageHero'
import { formatTnd, getCart, removeFromCart } from '../utils/cart'

function buildCartItems(cart) {
  return Object.keys(cart).map(key => {
    const entry = cart[key]

    if (typeof entry === 'number') {
      const product = PRODUCTS.find(p => p.id === key)
      return product ? { product, qty: entry, isBulk: false, key } : null
    }

    const product = PRODUCTS.find(p => p.id === entry.productId)
    return product ? { product, qty: entry.qty, isBulk: entry.isBulk || false, key } : null
  }).filter(Boolean)
}

export default function Cart(){
  const [items, setItems] = useState(() => buildCartItems(getCart()))

  useEffect(() => {
    const refresh = () => setItems(buildCartItems(getCart()))

    window.addEventListener('cart-updated', refresh)
    window.addEventListener('storage', refresh)

    return () => {
      window.removeEventListener('cart-updated', refresh)
      window.removeEventListener('storage', refresh)
    }
  }, [])

  const subtotal = items.reduce((sum, item) => {
    const unitPrice = item.isBulk ? item.product.bulkPrice : item.product.price
    return sum + unitPrice * item.qty
  }, 0)

  return (
    <div>
      <PageHero
        eyebrow="Order overview"
        title="Your cart in one clear view"
        description="Review items, confirm quantities, and continue to checkout with a clean summary."
        image="/home%20header.png"
        imageAlt="Cart summary preview"
      />
      <div className="container section">
      <div className="responsive-flex-layout">
        <div className="main-content">
          {items.length === 0 ? (
            <div className="cart-empty panel-card">
              <p className="muted">Your cart is empty.</p>
              <Link to="/shop" className="btn btn-primary">Continue Shopping</Link>
            </div>
          ) : (
            <div className="responsive-table-container">
              <table className="cart-table">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Unit Price</th>
                    <th>Qty</th>
                    <th>Subtotal</th>
                    <th><span className="sr-only">Remove</span></th>
                  </tr>
                </thead>
                <tbody>
                  {items.map(item => {
                    const unitPrice = item.isBulk ? item.product.bulkPrice : item.product.price
                    return (
                      <tr key={item.key}>
                        <td className="cart-cell-image" data-label="Image">
                          <img src={item.product.images[0]} alt={item.product.name} className="cart-product-image" />
                        </td>
                        <td data-label="Product">
                          {item.product.name}
                          {item.isBulk && <span className="cart-bulk-label">Par Gros</span>}
                        </td>
                        <td data-label="Unit Price">
                          {formatTnd(unitPrice)}
                          {item.isBulk && (
                            <div className="price-original" style={{ fontSize: '11px' }}>{formatTnd(item.product.price)}</div>
                          )}
                        </td>
                        <td data-label="Qty">{item.qty}</td>
                        <td data-label="Subtotal">{formatTnd(unitPrice * item.qty)}</td>
                        <td className="cart-cell-remove" data-label="Remove">
                          <button
                            type="button"
                            className="icon-btn cart-remove-btn"
                            aria-label={`Remove ${item.product.name} from cart`}
                            onClick={() => removeFromCart(item.key)}
                          >
                            <FiTrash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
        <aside className="sidebar-content order-summary panel-card">
          <h4>Order Summary</h4>
          <div style={{ fontSize: '18px', fontWeight: '700', display: 'flex', justifyContent: 'space-between', margin: '12px 0 20px' }}>
            <span>Subtotal</span>
            <span>{formatTnd(subtotal)}</span>
          </div>
          <button
            className="btn btn-primary"
            style={{width:'100%'}}
            disabled={items.length === 0}
            onClick={()=>location.href='/checkout'}
          >
            Proceed to Checkout
          </button>
        </aside>
      </div>
      </div>
    </div>
  )
}
