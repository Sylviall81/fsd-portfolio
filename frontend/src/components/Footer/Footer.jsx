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
      <footer>
        <div className="footer-container">
          <div className="logo-navlinks-container">
            <div className="footer-logo-container">
              <Link to="/">
                <img
                  className="footer-img-logo"
                  src="https://res.cloudinary.com/dsesprxhl/image/upload/v1703623360/portfolio/Captura_de_Pantalla_2023-12-26_a_la_s_9.41.20_p._m._rfq9ba.jpg"
                  alt=""
                />
              </Link>
            </div>

            <Navbar textColor="#203A4C" />
          </div>

          <div className="social-network-copyright-container">
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
                        &copy; 2023 Sylvia Llorente | Full Stack Developer
                      </div>  */}
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
