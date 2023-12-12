import React from "react";
import Navbar from "../Navbar/Navbar";
import './Header.css'
import {Link} from 'react-router-dom'



function Header() {
  return (
    <>
      <header className = "header">

        <Link to='/' >

        <div className="logo-container">
          <img className ="img-logo"
            src='https://res.cloudinary.com/dsesprxhl/image/upload/v1702404502/portfolio/Handdrawn%20Circle%20Logo/2_ngmyne.png'
            alt=""
          /> 
        </div>
        </Link>
        <div>
          <Navbar />
        </div>

      </header>
    </>
  );
}

export default Header;
