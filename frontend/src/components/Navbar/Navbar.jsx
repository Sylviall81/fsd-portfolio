import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'

 const Navbar = ({ textColor }) => {
  return (
    <div className="navlinks-container" >


        <NavLink className='navlink' exact to= "/" activeClassName= 'active' style={{ color: textColor }}>HOME</NavLink>

        <NavLink className='navlink' exact to= "/portfolio" activeClassName= 'active' style={{ color: textColor }}>PORTFOLIO</NavLink>

        <NavLink className='navlink' exact to= "/contact-me" activeClassName= 'active' style={{ color: textColor }}>CONTACT ME</NavLink> 
        

    </div>
  )
}

export default Navbar