import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

 const Navbar = ({ textColor }) => {
  return (
    <div className="navlinks-container" >


        <Link className='navlink' to= "/" style={{ color: textColor }}>HOME</Link>

        <Link className='navlink' to= "/portfolio" style={{ color: textColor }}>PORTFOLIO</Link>

        <Link className='navlink' to= "/contact-me" style={{ color: textColor }}>CONTACT ME</Link> 
        

    </div>
  )
}

export default Navbar