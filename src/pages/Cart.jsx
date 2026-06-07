import React from 'react'
import { PRODUCTS } from '../data/products'
import PageHero from '../components/PageHero'
import { formatTnd, getCart } from '../utils/cart'

export default function Cart(){
  const cart = getCart()

  const items = Object.keys(cart).map(key => {
    const entry = cart[key]

    // Support both old schema (number) and new schema (object)
    if (typeof entry === 'number') {
      const product = PRODUCTS.find(p => p.id === key)
      return product ? { product, qty: entry, isBulk: false, key } : null
    }

    const product = PRODUCTS.find(p => p.id === entry.productId)
    return product ? { product, qty: entry.qty, isBulk: entry.isBulk || false, key } : null
  }).filter(Boolean)

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
          <div className="responsive-table-container">
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Unit Price</th>
                  <th>Qty</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {items.map(item => {
                  const unitPrice = item.isBulk ? item.product.bulkPrice : item.product.price
                  return (
                    <tr key={item.key}>
                      <td><img src={item.product.images[0]} alt={item.product.name} className="cart-product-image" /></td>
                      <td>
                        {item.product.name}
                        {item.isBulk && <span className="cart-bulk-label">Par Gros</span>}
                      </td>
                      <td>
                        {formatTnd(unitPrice)}
                        {item.isBulk && (
                          <div className="price-original" style={{ fontSize: '11px' }}>{formatTnd(item.product.price)}</div>
                        )}
                      </td>
                      <td>{item.qty}</td>
                      <td>{formatTnd(unitPrice * item.qty)}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
        <aside className="sidebar-content order-summary panel-card">
          <h4>Order Summary</h4>
          <div style={{ fontSize: '18px', fontWeight: '700', display: 'flex', justifyContent: 'space-between', margin: '12px 0 20px' }}>
            <span>Subtotal</span>
            <span>{formatTnd(subtotal)}</span>
          </div>
          <button className="btn btn-primary" style={{width:'100%'}} onClick={()=>location.href='/checkout'}>Proceed to Checkout</button>
        </aside>
      </div>
      </div>
    </div>
  )
}
