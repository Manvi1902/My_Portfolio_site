import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import profileImg from "../assets/img/profile.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Coder", "MERN Stack  Developer","Frontend Developer", "Backend Developer", "Quick Learner"];
  const period = 2000;

  
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  });

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
        <Col>
        <img src={profileImg} alt="profile-img" className="Profile-Image"/>
        </Col>
        <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span><br/>
                <h1>
                    {`Hi! I'm `}
                    <span style={{ color: " rgba(219, 2, 205, 0.902)", fontWeight: "bold" }}>Manvi Dewangan </span>
                    <span className="txt-rotate">
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                   A passionate MERN developer with a solid foundation in technologies like MongoDB, ExpressJS, NodeJS, ReactJS, JavaScript, C++, and HTML/CSS. 
                  Through internships, personal projects, and coursework ,developed skills in building responsive, user-friendly web applications.
                  I enjoy solving complex real-world problems creatively and Ready to enhance 
                  my skills while contributing to innovative projects that make a remarkable impact.
                 </p>
                  <a href='https://drive.google.com/file/d/1zp9AST62J6wXVBCjG8V_GNXRtFPkJGlF/view?usp=sharing'>
                      <button className="resume-link"><span>My Resume</span></button>
                  </a>
              </div>}
            </TrackVisibility>
        </Col>
        </Row>
      </Container>
    </section>
  )
}