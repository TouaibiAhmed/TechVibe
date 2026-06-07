import React from 'react'
import PageHero from '../components/PageHero'

export default function Checkout(){
  return (
    <div>
      <PageHero
        eyebrow="Secure checkout"
        title="Complete your order with a simple, guided flow"
        description="Enter your details, review the summary, and place your order without distractions."
        image="/home%20header.png"
        imageAlt="Checkout preview"
        reverse
      />
      <div className="container section">
      <div className="responsive-flex-layout">
        <form className="main-content panel-card" onSubmit={(e) => e.preventDefault()}>
          <div className="responsive-form-grid">
            <input placeholder="First name" />
            <input placeholder="Last name" />
          </div>
          <input placeholder="Email" style={{marginTop:8}}/>
          <input placeholder="Address" style={{marginTop:8}}/>
        </form>
        <aside className="sidebar-content order-summary panel-card">
          <h4>Order Summary</h4>
          <div style={{ display: 'flex', justifyContent: 'space-between', margin: '12px 0' }}>
            <span>Items</span>
            <span>—</span>
          </div>
          <button className="btn btn-primary" style={{width:'100%', marginTop:12}}>Place Order</button>
        </aside>
      </div>
      </div>
    </div>
  )
}
