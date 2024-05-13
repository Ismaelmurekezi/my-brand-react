import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import profileImage from "../assets/profile.png"

const About = () => {
  return (
      <div className="container">
        <Header/>
           <main className="about-content">
            <div className="about-me">
                <img src={profileImage} alt="my-image" className="profile-image" id="about-profile"/>
                <div className="about-intro">
                    <h1>About Me</h1>
                    <p className="about-descript">I'm Ismael, <span>Software Developer</span> with a passion for crafting
                        engaging digital experiences
                        through intuitive UX/UI design. Eager to leverage my skills in HTML, CSS, JavaScript, to
                        contribute to innovative projects in the dynamic world of web development.
                    </p>
                    <a href="./contact.html"><button className="contact-btn">CONTACT ME</button></a>
                </div>

            </div>
s
            <div className="about-skill-boxes">
                <div className="about-skill-box1">
                    <h2>UX/UI Design</h2>
                    <p>UX/UI designer dedicated to creating meaningful digital experiences. With
                        a background in software Engineering, I combine creativity, empathy, and
                        problem-solving to craft seamless user-centric designs.</p>
                    <p className="skills-options"><span>Tools </span>:&nbsp &nbsp Figma &nbsp &nbsp Adobe XD</p>
                </div>
                <div className="about-skill-box2">
                    <h2>Software Developer</h2>
                    <p>a passion for crafting engaging digital experiences through intuitive UX/UI
                        design. Eager to leverage my skills in HTML, CSS, JavaScript, to contribute to
                        innovative projects in the dynamic world of web development.</p>
                    <p className="skills-options"><span>Tools</span>:&nbsp &nbsp HTML &nbsp &nbsp CSS &nbsp &nbsp JavaScript
                    </p>
                </div>
                <div className="vertical-line" id="about-line"></div>
            </div>



        </main>
   <Footer/>
          
    </div>
  )
}

export default About