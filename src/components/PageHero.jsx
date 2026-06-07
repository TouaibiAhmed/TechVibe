import React from 'react'

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  reverse = false,
  children,
  stats = [],
}) {
  return (
    <section className={`page-hero ${reverse ? 'page-hero-reverse' : ''}`}>
      <div className="page-hero-background" style={{ backgroundImage: `url(${image})` }} aria-hidden="true" />
      <div className="page-hero-overlay" aria-hidden="true" />
      <div className="container page-hero-grid">
        <div className="page-hero-copy">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1 className="page-hero-title">{title}</h1>
          {description ? <p className="page-hero-description">{description}</p> : null}
          {children ? <div className="hero-actions">{children}</div> : null}
        </div>
      </div>
    </section>
  )
}