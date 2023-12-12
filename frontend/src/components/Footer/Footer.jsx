import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Footer.css";
import SocialNetworkIcon from "../SocialNetworkIcons/SocialNetworkIcon";
import GithubIcon from "../../assets/icons/icon-github.png";
import LinkedInIcon from "../../assets/icons/icons-linkedin.png";
import EmailIcon from "../../assets/icons/icon-email.png";

function Footer() {
  return (
    <>
      <footer className="footer-container">
        <div className="logo-navlinks-container">
          <Link to="/">
            <div className="footer-logo-container">
              <img
                className="footer-img-logo"
                src="https://res.cloudinary.com/dsesprxhl/image/upload/v1702404502/portfolio/Handdrawn%20Circle%20Logo/2_ngmyne.png"
                alt=""
              />
            </div>
          </Link>

          <Navbar textColor="#fafafa" />
        </div>

        <div className = 'social-network-copyright-container' >

            <div className="footer-social-network-container">
          <SocialNetworkIcon
            src={GithubIcon}
            url="https://github.com/Sylviall81"
          />
          <SocialNetworkIcon
            src={LinkedInIcon}
            url="https://www.linkedin.com/in/sylviall81/"
          />
          <SocialNetworkIcon
            src={EmailIcon}
            url="mailto:sylviall81@gmail.com"
          />
          </div>
       

        {/* <div className="copyright">
          <p>&copy; 2023 Sylvia Llorente | Full Stack Developer</p>
        </div> */}

        </div>
      </footer>
    </>
  );
}

export default Footer;
