import React from 'react'
import '../Styles/PricingCards.scss'

function PricingCard3() {
  return (
    <div className='pricing-card pricing-card3'>
      <h3>Premium</h3>
        <h1>₹9999</h1>
        <p>(12 Sessions) <span>(₹833 per session)</span></p>

        <ul>
            <li>Benefits 1</li>
            <li>Benefits 2</li>
            <li>Benefits 3</li>
            <li>Benefits 4</li>
            <li>Benefits 5</li>
        </ul>

        <button onClick={()=>window.location.href="appointment-page3"}>Book Now</button>
    </div>
  )
}

export default PricingCard3