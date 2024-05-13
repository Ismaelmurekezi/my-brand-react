import React from 'react'
import profile from "../assets/profile.png"
import Header from '../components/header';
import Footer from "../components/footer"



const Home = () => {
     
     return (
       <div className="container">
                 <Header/>
         <div className="content">
         <div className="intro-section">
         <p>Hi,My name is</p>
                <h2 id="name">Ismael MUREKEZI</h2>
                <p className="brief-intro"><span>Software Developer</span> with a passion for crafting engaging digital <br />
                    experience through intuitive UX/UI Design.Eager to leverage my <br />
                    skills in HTML,CSS,Javascript to contribute to innovative <br />
                    projects in the dynamic world of web development</p>
                <div className="contact-section">
                    <p>Get in touch</p>
                    <div className="social-media-links">
                        <a href="https://www.linkedin.com/in/murekezi-ismael/"><i className="fab fa-linkedin"></i></a>
                        <a href="https://github.com/Ismaelmurekezi"><i className="fab fa-github"></i></a>
                        <a href=""><i className="fab fa-twitter-square"></i></a>
                    </div>
                </div>
            </div>
                 <img src={profile} alt="my-image" className="profile-image" />
             </div>
             <Footer/>
       </div>
  );
};
                  
export default Home;



























