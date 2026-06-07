import React from 'react'
import PageHero from '../components/PageHero'

const contactCards = [
  { label: 'Address', value: 'Tunis ' },
  { label: 'WhatsApp', value: '+216 52 721 406' },
  { label: 'Email', value: 'techvibestore@gmail.com' },
  { label: 'Facebook', value: 'facebook.com/techvibestore' },
  { label: 'Instagram', value: '@techvibe.store' },
]

export default function Contact() {
  return (
    <div>
      <PageHero
        eyebrow="Contact us"
        title="Everything you need to reach the store"
        description="Find our address, phone numbers, social pages, and support details in one clear place."
        image="/home%20header.png"
        imageAlt="Store contact preview"
      />
      <div className="container section">
        <div className="contact-layout">
          <section className="panel-card contact-panel">
            <h2>Store information</h2>
            <p className="muted">We are available for orders, support, and partnership inquiries during business hours.</p>
            <div className="contact-list">
              {contactCards.map((item) => (
                <div key={item.label} className="contact-row">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </section>
          <aside className="panel-card contact-panel contact-panel-aside">
            <h3>Visit hours</h3>
            <p className="muted">Monday to Saturday: 9:00 AM - 7:00 PM</p>
            <p className="muted">Sunday: 11:00 AM - 5:00 PM</p>
            <div className="contact-note">
              <strong>Need help with an order?</strong>
              <p className="muted">Call or message us and we'll respond as soon as possible.</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}