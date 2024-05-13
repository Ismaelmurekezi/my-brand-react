
import React, { useState } from 'react'
import logo from "../assets/brand-removebg-preview.png"
import hamburger from "../assets/burger-menu.png"
import { Link } from 'react-router-dom'

const Header = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);

  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };

  return (
        <header className="header">
            <figure>
                <img src={logo} alt="Logo image" className="brand"/>
            </figure>

            <img src={hamburger} alt="hamburger-menu" class="hamburger-menu" id="hamburgerMenu"     onClick={toggleNavLinks}/>
            <ul className={showNavLinks ? "nav-links show" : "nav-links"}  id="navLinks" >
                <li><Link  to="/" className='links'>Home</Link></li>
                <li><Link  to="/about" className='links'>About</Link></li>
                <li><Link  to="/blogs" className='links'>Blog</Link></li>
                 <li><Link  to="/portofolio" className='links'>My work</Link></li>
                <li><Link  to="/skills" className='links'>Skills</Link></li>
                 <li><Link  to="/contact" className='links'>Contact</Link></li>
                <Link to="/login"><button className="login-btn" id="login">Sign In</button></Link>

            </ul>

            {/* <div className="profile-display" id="profile">
                <p id="names"></p>
                <div className="dropdown-arrow" id="arrow">
                    <i className="fa-solid fa-caret-down" id="dropdown-btn" onClick="toggleDropdown()"></i>
                    <div id="dropdown-content" className="profile-links">
                        <div><a href="#" id="logout">Logout</a></div>
                        <div><a href="./src/userprofile.html" onClick="populateUserInfo()">Profile</a></div>
                    </div>
                </div>
            </div> */}


        </header>
  )
}

export default Header