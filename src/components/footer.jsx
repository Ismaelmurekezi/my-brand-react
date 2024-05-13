import React from 'react'
import logo from "../assets/real-brand.png"

const footer = () => {

  return (
     <footer className="main-footer">
            <div className="footer">
                <img src={logo} alt="my-logo" id="brand-footer"/>
                <div className="quick-links">
                    <p className="footer-title">Quick-links</p>
                    <a href="./portfolio.html">
                        <p>My work</p>
                    </a>
                    <a href="./About.html">
                        <p>About me</p>
                    </a>
                    <a href="./Home.html">
                        <p>Home</p>
                    </a>
                    <a href="./contact.html">
                        <p>Contact</p>
                    </a>
                </div>
                <div>
                    <p className="footer-title">My platforms</p>
                    <span className="social-media-links">

                        <a href="https://www.linkedin.com/in/murekezi-ismael/"><i className="fab fa-linkedin"></i></a>
                        <a href="https://github.com/Ismaelmurekezi"><i className="fab fa-github"></i></a>
                        <a href=""><i className="fab fa-twitter-square"></i></a>

                    </span>
                </div>

            </div>
            <p className="copyright">copyright &copy; Ismael 2024.All rights reserved.</p>

        </footer>
  )
}

export default footer