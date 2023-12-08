import React from "react";
import { Link } from "react-router-dom";



// export default function Header() {

//  return (
   
//     <div className="flex-row">
    
  
//         <Link to="/">
//             <img className="logo-img" src='https://res.cloudinary.com/dsesprxhl/image/upload/v1702051982/portfolio/logo_lc45fc.png' alt="Logo" /> 
//         </Link>

//         <nav className=" w-24 flex-row justify-around">
//             <Link to="/"> HOME</Link>
//             <Link to="/projects"> PORTFOLIO</Link>
//             <Link to="/contact">CONTACT ME</Link>
//         </nav>
//       </div>
//  )
// }




const Header = () => {
  return (
    <div className="flex items-center justify-between flex-wrap">
      <img className="logo-img bg-primary text-white" src='https://res.cloudinary.com/dsesprxhl/image/upload/v1702051982/portfolio/logo_lc45fc.png' alt="Logo" />
      <nav className="flex w-24 flex-row justify-around">
        <Link to="/"> HOME</Link>
        <Link to="/projects"> PORTFOLIO</Link>
        <Link to="/contact">CONTACT ME</Link>
      </nav>
    </div>
  );
};

export default Header;



