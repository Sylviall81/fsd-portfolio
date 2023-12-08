import React from 'react';
import { Link } from 'react-router-dom';
// import {CloseIcon} from '../assets/icons/close.svg'
// import {BurguerMenuIcon} from '../assets/icons/hamburger.svg'


export default function NavBar() {
  return (
    
    <nav className="navbar">
      
      <ul>
        <li>
        <Link to="/"> HOME</Link>
        </li>
        <li>
        <Link to="/projects"> PORTFOLIO</Link>
        </li>
        <li>
        <Link to="/contact">CONTACT ME</Link>
        </li>
      </ul>
      {/* <a href="#" className="navbar__mobile">
        <img src={BurguerMenuIcon} class="hamburger" alt="Hamburger shape" />
        <img src={CloseIcon} class="close" alt="X shape" />
      </a> */}
    </nav>

  )
}






