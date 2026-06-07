import React from 'react'
import PageHero from '../components/PageHero'

export default function Account(){
  return (
    <div>
      <PageHero
        eyebrow="Account access"
        title="Sign in to manage your orders and saved items"
        description="Return to your account to review purchases, update details, and keep everything organized."
        image="/home%20header.png"
        imageAlt="Account preview"
        reverse
      />
      <div className="container section">
      <div className="signin-card">
        <h3>Sign In</h3>
        <input placeholder="Email" style={{marginTop:8}}/>
        <input placeholder="Password" type="password" style={{marginTop:8}}/>
        <button className="btn btn-primary" style={{marginTop:16,width:'100%'}}>Sign In</button>
      </div>
      </div>
    </div>
  )
}
