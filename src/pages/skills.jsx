import React from 'react'
import htmlSkills from "../assets/html-icon.png"
import cssSkills from "../assets/css-icon.png"
import javaSkills from "../assets/java.png"
import javaScriptSkills from "../assets/Js-icon.png"
import UIskills from "../assets/ui.png"
import Header from '../components/header'
import Footer from '../components/footer'


const Skills = () => {
  return (
      <div className='container'>
          <Header/>
           <main className="skills-content">
    
            <div className="skills-intro">
                <h1>MY SKILLS</h1>
                <p>I possess expertise in HTML, CSS, JavaScript, and Java, enabling me to develop dynamic and
                    visually appealing websites. With proficiency in HTML, I structure web content for optimal
                    readability and accessibility. CSS skills allow me to design responsive layouts and customize the
                    appearance of web elements. JavaScript knowledge enables the creation of interactive features
                    and user-friendly interfaces. Additionally, Java proficiency empowers me to build robust backend
                    systems, ensuring reliability and scalability for your brand's digital presence.</p>
            </div>
            <div className="my-skills">
                <div className="skills-box">

                    <img src={htmlSkills} alt="html-icons"/>
                    <p>HTML</p>
                </div>
                <div className="skills-box">
                    <img src={cssSkills} alt="css-icon"/>
                    <p>CSS</p>
                </div>
                <div className="skills-box">
                    <img src={javaScriptSkills} alt="JavaScript"/>
                    <p>JavaScript</p>
                </div>
                <div className="skills-box">
                    <img src={javaSkills} alt="java"/>
                    <p>Java</p>
                </div>
                <div className="skills-box">
                    <img src={UIskills} alt="ui-icon"/>
                    <p>UX/UI Design</p>
                </div>
            </div>

            <a href="https://drive.google.com/file/d/1Eg5DXBvZHK8gja_K-2Bgosl_MwiFxEBS/view?usp=sharing"> <button
                    className="downloads-cv" >Downloads CV</button></a>

        </main>
    <Footer/>
    </div>
  )
}

export default Skills