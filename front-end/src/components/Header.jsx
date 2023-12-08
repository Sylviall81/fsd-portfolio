import React from "react";
import { Link } from "react-router-dom";
import NavBar from '../components/NavBar';


export default function Header() {

 return (
    <header className="flex h-36 items-center pr-10 md:bg-transparent bg-black"> 
        <Link to="/">
            <img className="h-24 w-48 pl-10 md:block hidden" src='https://res.cloudinary.com/dsesprxhl/image/upload/v1702051982/portfolio/logo_lc45fc.png' alt="Logo" /> 
        </Link>
        <NavBar />
    </header>
 )
}