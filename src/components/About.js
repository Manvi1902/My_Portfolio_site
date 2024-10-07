import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const About = () => {
  return (
<Container id="experience" >
<h1 >Work experience</h1> <br/> 
      <Row className="about-section">  
        <Col xs={12} md={6} xl={5}>
            <section className="duration"> 
                   
              <h4>
                    Web Developer Intern | Brainwave Matrix Solution
              </h4>
              <p>August 2024 – September 2024</p><br/>
           <div>
           <ul className='work-learn'>
              <li>Developed and maintained responsive front-end components using HTML, CSS, and JavaScript, significantly enhancing user experience and ensuring seamless performance across various devices.</li><br/>
              <li>Designed and developed a functional and intuitive To-Do List application and Beauty Diva Website, showcasing skills in designing and user interactivity.</li><br/>
           </ul>
           </div>
              
            </section>
        </Col>
        <Col >
                     <TrackVisibility>
                        {({ isVisible }) =>
                          <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                          <img src={headerImg} alt="Header Img" className='astroImg'/>
                          </div>}
                     </TrackVisibility>
        </Col>
      </Row>
    </Container>

  )
}

export default About;


