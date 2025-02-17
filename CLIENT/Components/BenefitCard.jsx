import React from 'react'
import '../Styles/BenefitCard.scss'

function BenefitCard({num, title, text}) {
  return (
    <div className='benefit-card'>
        <div className='number'>{num}</div>
        <div className='txt'>
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default BenefitCard