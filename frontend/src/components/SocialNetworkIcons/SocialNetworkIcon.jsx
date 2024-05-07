import React from 'react'
//import {Link} from 'react-router-dom'

import './SocialNetworkIcon.css'


const SocialNetworkIcon = ({ src, url }) =>  {
  return (
   <>
   <div className = "social-network-icon-container">
   <a href= {url} target = "_blank" rel = "noreferrer">
   <img className ="social-network-icons" src={src} alt="social network link"/>
   </a>
   
   </div>
   
   </>
  )
}

export default SocialNetworkIcon