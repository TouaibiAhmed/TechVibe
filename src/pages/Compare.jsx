import React from 'react'
import PageHero from '../components/PageHero'

export default function Compare(){
  return (
    <div>
      <PageHero
        eyebrow="Side by side"
        title="Compare products with a crisp, focused layout"
        description="Review the details that matter most before you decide what belongs in your cart."
        image="/home%20header.png"
        imageAlt="Comparison preview"
        reverse
      />
      <div className="container section">
      <div style={{overflowX:'auto'}}>
        <table style={{width:'100%'}}>
          <thead><tr><th>Feature</th><th>Product A</th><th>Product B</th></tr></thead>
          <tbody>
            <tr><td>Price</td><td>$19.95</td><td>$99.00</td></tr>
          </tbody>
        </table>
      </div>
      </div>
    </div>
  )
}
