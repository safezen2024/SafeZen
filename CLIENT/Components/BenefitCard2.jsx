import React from 'react'
import '../Styles/BenefitCard.scss'

function BenefitCard2({num, title, text}) {
  return (
    <div className='benefit-card2'>
        <div className='number'>{num}</div>
        <div className='txt'>
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default BenefitCard2