import React from "react";
import Navbar from "../Navbar/Navbar";
import './Header.css'
import {Link} from 'react-router-dom'



function Header() {
  return (
    <>
      <header className = "header">

        <Link to='/' >

        <div className="header-logo-container">
          <img className ="header-img-logo"
            src='https://res.cloudinary.com/dsesprxhl/image/upload/v1702401092/2_wqijbo.png'
            alt=""
          /> 
        </div>
        </Link>
        <div>
          <Navbar/>
        </div>

      </header>
    </>
  );
}

export default Header;
