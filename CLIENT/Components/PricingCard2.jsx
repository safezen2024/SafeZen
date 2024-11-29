import React from 'react'
import '../Styles/PricingCards.scss'

function PricingCard2() {
  return (
    <div className='pricing-card pricing-card2'>
      <h3>Premium</h3>
        <h1>₹2699</h1>
        <p>(3 Sessions) <span>(₹899 per session)</span></p>

        <ul>
            <li>Benefits 1</li>
            <li>Benefits 2</li>
            <li>Benefits 3</li>
            <li>Benefits 4</li>
            <li>Benefits 5</li>
        </ul>

        <button onClick={()=>window.location.href="appointment-page2"}>Book Now</button>
    </div>
  )
}

export default PricingCard2