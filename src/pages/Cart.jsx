import React from 'react'
import { PRODUCTS } from '../data/products'
import PageHero from '../components/PageHero'
import { formatTnd, getCart } from '../utils/cart'

export default function Cart(){
  const cart = getCart()
  const items = Object.keys(cart).map(id=>({product:PRODUCTS.find(p=>p.id===id),qty:cart[id]}))
  const subtotal = items.reduce((s,i)=>s + i.product.price * i.qty,0)
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
              <thead><tr><th>Image</th><th>Product</th><th>Price</th><th>Qty</th><th>Subtotal</th></tr></thead>
              <tbody>
                {items.map(i=> (
                  <tr key={i.product.id}>
                    <td><img src={i.product.images[0]} alt={i.product.name} className="cart-product-image" /></td>
                    <td>{i.product.name}</td>
                    <td>{formatTnd(i.product.price)}</td>
                    <td>{i.qty}</td>
                    <td>{formatTnd(i.product.price*i.qty)}</td>
                  </tr>
                ))}
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
