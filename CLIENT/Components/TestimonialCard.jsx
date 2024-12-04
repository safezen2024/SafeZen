import React from 'react'
import "../Styles/TestimonialCard.scss"
import { FaStar } from "react-icons/fa";

function TestimonialCard({head, para, img, name, profession, stars}) {

  const maxLength = 160; // Set the maximum length for the paragraph
  const truncatedPara = para.length > maxLength ? `${para.substring(0, maxLength)}...` : para;

  return (
    <div className='testimonial-card'>
        <h4>{head}</h4>
        <p>{truncatedPara}</p>
        <div className='testimonial-info'>
            <img src={img}></img>
            <div className='testimonial-name-stars'>
                <p><span>{name}</span>, {profession}</p>
                <div className='stars'>
                        {Array.from({ length: stars }).map((_, index) => (
                            <FaStar key={index} color='#FF9C66'/>
                          ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCard