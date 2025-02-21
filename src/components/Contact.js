<<<<<<< HEAD
import { Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import location from "../assets/img/location.png";
import mobile from "../assets/img/tel-icon.png";
import language from "../assets/img/language.png";
import email from "../assets/img/email-icon.png";
import education from "../assets/img/graduation.png";
import "../css/contact.css"


export const Contact = () => {
 
  return (
    <section className="contact" id="connect">
      <div className="contact-content">
      <p className="contact-heading" >Get In Touch With Me</p>
        <Row className="align-items-center">
          <Col size={12} lg={6}  className="contact-img">
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""}  src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
        
          <Col size={12} lg={6} className="contact-me">
            
                <div className="contact-section">
                 <br/>
                    <div className="contact-info">
                       <img src={location} alt="location" className="contact-icon"/>
                        <h4>Mungeli, Chhattisgarh,India</h4>
                    </div>

                    <div size={12} sm={6} className="contact-info">
                      <img src={education} alt="education" className="contact-icon"/>
                      <h4>Bhilai Institute of Technology Raipur</h4>
                    </div>

                    <div size={12} sm={6} className="contact-info">
                      <img src={email} alt="email" className="contact-icon"/>
                      <h4>manvi19dewangan@gmail.com</h4>
                    </div>

                    <div size={12} sm={6} className="contact-info">
                      <img src={mobile} alt="mobile" className="contact-icon"/>
                      <h4>+916266319810</h4>
                    </div>

                    <div size={12} sm={6} className="contact-info">
                        <img src={language} alt="lannguage" className="contact-icon"/>
                        <h4>Hindi, English</h4>
                    </div>
                   
                  
                  </div>
          </Col>    
        </Row>
      </div>
    </section>
  )
=======
import { Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import location from "../assets/img/location.png";
import mobile from "../assets/img/tel-icon.png";
import language from "../assets/img/language.png";
import email from "../assets/img/email-icon.png";
import education from "../assets/img/graduation.png";


export const Contact = () => {
 
  return (
    <section className="contact" id="connect">
      <div className="contact-content">
      <p className="contact-heading" >Get In Touch With Me</p>
        <Row className="align-items-center">
          <Col size={12} lg={6}  className="contact-img">
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""}  src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
        
          <Col size={12} lg={6} className="contact-me">
            
                <div className="contact-section">
                  <br/><br/>
                    <div className="contact-info">
                       <img src={location} alt="location" className="contact-icon"/>
                        <h4>Mungeli, Chhattisgarh,India</h4>
                    </div>

                    <div size={12} sm={6} className="contact-info">
                      <img src={education} alt="education" className="contact-icon"/>
                      <h4>Bhilai Institute of Technology Raipur</h4>
                    </div>

                    <div size={12} sm={6} className="contact-info">
                      <img src={email} alt="email" className="contact-icon"/>
                      <h4>manvi19dewangan@gmail.com</h4>
                    </div>

                    <div size={12} sm={6} className="contact-info">
                      <img src={mobile} alt="mobile" className="contact-icon"/>
                      <h4>+916266319810</h4>
                    </div>

                    <div size={12} sm={6} className="contact-info">
                        <img src={language} alt="lannguage" className="contact-icon"/>
                        <h4>Hindi, English</h4>
                    </div>
                   
                  
                  </div>
          </Col>    
        </Row>
      </div>
    </section>
  )
>>>>>>> c775cbf (resovle error)
}