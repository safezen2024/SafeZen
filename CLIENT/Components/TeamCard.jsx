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
        <div className='team-socials'>
            <FaLinkedin />
            <FaXTwitter />
            <FaFacebookSquare />
        </div>
    </div>
  )
}

export default TeamCard