import React from 'react'
//import {Link} from 'react-router-dom'

import './SocialNetworkIcon.css'


const SocialNetworkIcon = ({ color, src, url }) =>  {
  return (
   <>
   <div className = "social-network-icon-container">
   <a href= {url} target = "_blank" rel = "noreferrer">
   <img className ="social-network-icons" src={src} alt="" style={{ fill: color }}/>
   </a>
   {/* <a href="mailto:sylviall81@gmail.com" target = "_blank" rel = "noreferrer">
   <img src={src} alt="" style={{ fill: color }} />
   </a>
   <a href="https://www.linkedin.com/in/sylviall81/" target = "_blank" rel = "noreferrer">
   <img src={src} alt="" style={{ fill: color }}/>
   </a> */}
   </div>



   
   
   
   
   </>
  )
}

export default SocialNetworkIcon