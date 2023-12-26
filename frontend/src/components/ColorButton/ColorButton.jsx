import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./ColorButton.css";

const ColorButton = ({ text, link }) => {
  return (
    <>
      <>
        <Link smooth to={link}>
          <button className="color-button">
            <div className="chevron-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="28">
                <g fill="none" fill-rule="evenodd" stroke="#5FB4A2">
                  <path d="M0 9l16 8 16-8" />
                  <path opacity=".5" d="M0 5l16 8 16-8" />
                  <path opacity=".25" d="M0 1l16 8 16-8" />
                </g>
              </svg>
            </div>
            {text}
          </button>
        </Link>
      </>
    </>
  );
};

export default ColorButton;
