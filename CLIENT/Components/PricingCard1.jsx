import React from 'react'
import '../Styles/PricingCards.scss'

function PricingCard1() {
  return (
    <div className='pricing-card pricing-card1'>
        <h3>EXPLORE</h3>
        <h1>₹999</h1>
        <p>(Per Session)</p>

        <ul>
            <li>Talk Openly.</li>
            <li>Address your concerns.</li>
            <li>Make a plan with your therapist.</li>
        </ul>

        <button onClick={()=>window.location.href="appointment-page1"}>Book Now</button>
    </div>
  )
}

export default PricingCard1