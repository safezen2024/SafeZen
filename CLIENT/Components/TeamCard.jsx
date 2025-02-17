import React from 'react'
import '../Styles/TeamCard.scss'
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

function TeamCard({img, name, jobTitle, paragraph, socials}) {
  return (
    <div className='team-card'>
        <div className='team-img'>
            <img src={img}></img>
        </div>
        <div>
        <div className='team-name'>{name}</div>
        <div className='team-job-title'>{jobTitle}</div>
        </div>
        <div className='team-paragraph'>{paragraph}</div>
        {/* <div className='team-socials'>
          <a href={socials[0]} target='_blank'>
            <FaLinkedin />
          </a>
          <a href={socials[1]} target='_blank'>
            <FaXTwitter />
          </a>

          <a href={socials[2]} target='_blank'>
            <FaFacebookSquare />
          </a>
        </div> */}
    </div>
  )
}

export default TeamCard