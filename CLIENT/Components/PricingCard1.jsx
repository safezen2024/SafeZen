import React from 'react'
import '../Styles/PricingCards.scss'

function PricingCard1() {
  return (
    <div className='pricing-card pricing-card1'>
        <h3>EXPLORE</h3>
        <h1>₹999</h1>
        <p>(Per Session)</p>

        <ul>
            <li>Benefits 1</li>
            <li>Benefits 2</li>
            <li>Benefits 3</li>
            <li>Benefits 4</li>
            <li>Benefits 5</li>
        </ul>

        <button onClick={()=>window.location.href="appointment-page1"}>Book Now</button>
    </div>
  )
}

export default PricingCard1