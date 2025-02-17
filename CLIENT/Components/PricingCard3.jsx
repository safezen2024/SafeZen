import React from 'react'
import '../Styles/PricingCards.scss'

function PricingCard3() {
  return (
    <div className='pricing-card pricing-card3'>
      <h3>BLISS</h3>
        <h1>₹4999</h1>
        <p>(6 Sessions) <span>(₹833 per session)</span></p>

        <ul>
            <li>Start making changes in your behaviour.</li>
            <li>Learn how to manage your thoughts.</li>
            <li>Learn how to manage your emotions.</li>
        </ul>

        <button onClick={()=>window.location.href="appointment-page3"}>Book Now</button>
    </div>
  )
}

export default PricingCard3