import React from "react";
import SocialNetworkIcon from "../SocialNetworkIcons/SocialNetworkIcon";
import GithubIcon from "../../assets/icons/icon-github.png";
import LinkedInIcon from "../../assets/icons/icons-linkedin.png";
import EmailIcon from "../../assets/icons/icon-email.png";
import './SectionText.css';

const SectionText = ({ title, content }) => {
  return (
    <>
      <div className="text-section-container">
        <div className="section-title">
          <h3>{title}</h3>
        </div>

        <div className="section-text-content">
          <p>{content}</p>
        

            <div className="social-network-capsule">
           
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
          
        </div>
      </div>
    </>
  );
};

export default SectionText;
