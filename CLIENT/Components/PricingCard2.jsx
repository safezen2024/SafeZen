import React from 'react'
import '../Styles/PricingCards.scss'

function PricingCard2() {
  return (
    <div className='pricing-card pricing-card2'>
      <h3>INTROSPECT</h3>
        <h1>₹2699</h1>
        <p>(3 Sessions) <span>(₹899 per session)</span></p>

        <ul>
            <li>Notice how you think.</li>
            <li>Break negative thought loops.</li>
            <li>Start positive ones.</li>
        </ul>

        <button onClick={()=>window.location.href="appointment-page2"}>Book Now</button>
    </div>
  )
}

export default PricingCard2