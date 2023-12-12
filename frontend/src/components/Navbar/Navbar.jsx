import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

export default  function Navbar() {
  return (
    <div className="navlinks-container" >


        <Link className='navlink' to= "/">HOME</Link>

        <Link className='navlink' to= "/portfolio">PORTFOLIO</Link>

        <Link className='navlink' to= "/contact-me">CONTACT ME</Link> 
        

    </div>
  )
}

