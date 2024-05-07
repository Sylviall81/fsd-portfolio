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
            src= 'https://res.cloudinary.com/dsesprxhl/image/upload/v1703623360/portfolio/Captura_de_Pantalla_2023-12-26_a_la_s_9.41.20_p._m._rfq9ba.jpg'
            alt="Sylvia Llorente Full-stack developer logo"
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
