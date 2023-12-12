import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer-container">

        <div className = "logo-navlinks-container">

          <Link to="/">
            <div className="footer-logo-container">
              <img
                className="footer-img-logo"
                src="https://res.cloudinary.com/dsesprxhl/image/upload/v1702404502/portfolio/Handdrawn%20Circle%20Logo/2_ngmyne.png"
                alt=""
              />
            </div>
          </Link>
        
          <Navbar textColor="#fafafa"/>

          </div>
         

          

          <div>

          </div>
      
      </footer>
    </>
  );
}

export default Footer;
