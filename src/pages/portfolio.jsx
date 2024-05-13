import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import countryApp from "../assets/country-app.png"
import weatherapp from "../assets/weatherapp.png"
import calculator from "../assets/calculator1.png"
import iwork from "../assets/Admin dashboard.png"


const Portfolio = () => {
  return (
      <div className='container'>
          <Header/>
          <main class="content-port">
            <h1 class="porto-title">My Portfolio</h1>
            <p>I possess expertise in HTML, CSS, JavaScript, and Java, enabling me to develop dynamic and visually
                appealing websites.
                With proficiency in HTML, I structure web content for optimal readability and accessibility.
            </p>
            <div class="project-wrapper">
                <div className="project-box1">
                    <img src={countryApp} alt="" className="project-boxes image1"/>
                    <a href="https://ismaelmurekezi.github.io/Countries-App/" id="visit-link"><button
                            className="visit-page">Visit page</button></a>
                </div>
                <div className="project-box1">
                    <img src={weatherapp} alt="" className="project-boxes image2"/>
                    <a href="https://ismaelmurekezi.github.io/Weather-App/" id="visit-link"><button
                            className="visit-page">Visit page</button></a>
                </div>
                <div className="project-box1">
                    <img src={calculator} alt="" className="project-boxes image3"/>
                    <a href="https://ismaelmurekezi.github.io/Calculator/" id="visit-link"><button
                            className="visit-page">Visit page</button></a>
                </div>
                <div className="project-box1">
                    <img src={iwork} alt="" className="project-boxes image3"/>
                    <a href="https://github.com/Ismaelmurekezi/Iwork.git" id="visit-link"><button
                            className="visit-page">Visit page</button></a>
                </div>
            </div>
        </main>
        <Footer/>
    </div>
  )
}

export default Portfolio