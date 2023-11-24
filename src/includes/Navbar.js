import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    const [isActive, setActive] = useState(false);
    // const navbar = document.querySelectorAll('navbar-continer');

    const handleToggle = () => {
        setActive(!isActive) ;
    }
    
    const handleClick = event => {
        event.currentTarget.classList.remove('active');
      };

    return (
        <nav className="sticky">
            <div className="navbar-logo">
                <h3 className="text-uppercase fw-bolder m-0">Meg G.</h3>
                <div>
                    {/* <span className="mode"><FontAwesomeIcon icon={faMoon} /></span> */}
                    <span className="mobile-nav" onClick={handleToggle}><FontAwesomeIcon icon={faBars} /></span>


                </div>
            </div>
            <div className={`navbar-container ${isActive ? "active" : null }`} id="meny">
                <ul className="navbar m-0">
                    <li><a href="#home" onClick={ handleClick }>Home</a></li>
                    <li><a href="#about" onClick={ handleClick }>About</a></li>
                    <li><a href="#projects" onClick={ handleClick }>Projects</a></li>
                    <li><a href="#contact" onClick={ handleClick }>Contact</a></li>
                </ul>
                
            </div>
        </nav>
    )
}

export default Navbar