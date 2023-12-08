import React from 'react';
import {Link} from 'react-router-dom'
import '../../index.css'

const Header = () => {
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <Link href="#" className="nav__brand">
          <img src="https://res.cloudinary.com/dsesprxhl/image/upload/v1702051982/portfolio/logo_lc45fc.png" className="nav__logo" alt="website logo" />
        </Link>
        <ul className="nav__lists" id="nav__lists">
          <li className="nav__item"><Link to="/" className="nav__link ">Home</Link></li>
          <li className="nav__item"><Link to="/projects" className="nav__link nav__link--active">Portfolio</Link></li>
          <li className="nav__item"><Link to="/contact" className="nav__link">Contact Me</Link></li>
        </ul>

        {/* <a id="nav__toggle" className="nav__burger" aria-label="open navigation">
          <div className="nav__burger-lines" id="nav__burger-lines">
            <span className="nav__burger-line nav__burger-line--1"></span>
            <span className="nav__burger-line nav__burger-line--2"></span>
            <span className="nav__burger-line nav__burger-line--3"></span>
          </div>
        </a> */}
      </nav>
    </header>
  );
};

export default Header;
