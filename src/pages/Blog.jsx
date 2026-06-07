import React from 'react'
import PageHero from '../components/PageHero'

export default function Blog(){
  return (
    <div>
      <PageHero
        eyebrow="Guides and stories"
        title="Latest from the blog"
        description="Read practical tips, product spotlights, and updates from the TechVibe team."
        image="/home%20header.png"
        imageAlt="Blog preview"
      />
      <div className="container section">
      <div className="blog-grid">
        <article className="blog-card">
          <img src="/products/headphonescat.jpg" alt="Audio Quality Guide" />
          <div style={{ marginTop: '8px' }}>
            <small className="muted" style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '700', fontSize: '11px' }}>Audio Guide</small>
            <h3 style={{ margin: '8px 0 6px', fontSize: '18px' }}>Choosing the Right Headphones</h3>
            <p className="muted" style={{ margin: 0, fontSize: '14px', lineHeight: '1.5' }}>Find out how comfort, noise cancellation, and driver size affect your daily audio experience.</p>
          </div>
        </article>
        
        <article className="blog-card">
          <img src="/products/chargercat.jpg" alt="Charging Speed Guide" />
          <div style={{ marginTop: '8px' }}>
            <small className="muted" style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '700', fontSize: '11px' }}>Tech Tips</small>
            <h3 style={{ margin: '8px 0 6px', fontSize: '18px' }}>Demystifying Fast Charging</h3>
            <p className="muted" style={{ margin: 0, fontSize: '14px', lineHeight: '1.5' }}>Watts, Volts, and Amps: learn what makes charger adapters power up your devices safely and quickly.</p>
          </div>
        </article>

        <article className="blog-card">
          <img src="/products/cablecat.jpg" alt="Cable Durability" />
          <div style={{ marginTop: '8px' }}>
            <small className="muted" style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '700', fontSize: '11px' }}>Buying Advice</small>
            <h3 style={{ margin: '8px 0 6px', fontSize: '18px' }}>Why Premium Cables Matter</h3>
            <p className="muted" style={{ margin: 0, fontSize: '14px', lineHeight: '1.5' }}>Explore how braided shielding, gold-plated connectors, and high gauge wiring extend cable life.</p>
          </div>
        </article>
      </div>
      </div>
    </div>
  )
}
