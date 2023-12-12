import React from 'react'
//import {Link} from 'react-router-dom'
import GithubIcon from '../../assets/icons/github.svg'
import LinkedInIcon from '../../assets/icons/linkedin.svg'
import EmailIcon from '../../assets/icons/email.png'
import './SocialNetworkIcon.css'


const SocialNetworkIcon = ({ color }) =>  {
  return (
   <>
   <div className = "social-network-icon-container">
   <a href="https://github.com/Sylviall81" target = "_blank" rel = "noreferrer">
   <img src={GithubIcon} alt="" />
   </a>
   <a href="mailto:sylviall81@gmail.com" target = "_blank" rel = "noreferrer">
   <img src={EmailIcon} alt="" />
   </a>
   <a href="https://www.linkedin.com/in/sylviall81/" target = "_blank" rel = "noreferrer">
   <img src={LinkedInIcon} alt="" />
   </a>
   </div>



   
   
   
   
   </>
  )
}

export default SocialNetworkIcon