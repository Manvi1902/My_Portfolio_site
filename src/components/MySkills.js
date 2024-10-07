
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
//import arrow1 from "../assets/img/meter3.svg";
//import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const MySkills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container" >
            <Row className="row">
                <Col className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>As a tech enthusiast,I enjoy learning and exploring new technologies.Some of my areas of expertise are listed below.</p>
                        <Carousel 
                              responsive={responsive} 
                              infinite={true} 
                              autoPlay={true}
                              autoPlaySpeed={2000}
                              className="owl-carousel owl-theme skill-slider"
                        >
                            <div className="item">
                                <img src="/images/tech/c++.png" alt="Img" />
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                 <img src="/images/tech/html.png" alt="Img" />
                                <h5>HTML5</h5>
                            </div>
                            <div className="item">
                                <img src="/images/tech/css.png" alt="Img" />
                                <h5>CSS3</h5>
                            </div>
                            <div className="item">
                                <img src="/images/tech/javascript.png" alt="Img" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src="/images/tech/mongodb.png" alt="Img" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src="/images/tech/express-js.png" alt="Img" />
                                <h5>ExpressJS</h5>
                            </div>
                            <div className="item">
                                <img src="/images/tech/reactjs.png" alt="Img" />
                                <h5>ReactJS</h5>
                            </div>
                            <div className="item">
                                <img src="/images/tech/nodejs.png" alt="Img" />
                                <h5>NodeJS</h5>
                            </div>
                            <div className="item">
                                <img src="/images/tech/mysql-icon.png" alt="Img" />
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src="/images/tech/aws-icon.png" alt="Img" />
                                <h5>AWS Cloud</h5>
                            </div>
                            <div className="item">
                                <img src="/images/tech/postman-icon.png" alt="Img" />
                                <h5>Postman API</h5>
                            </div>
                            <div className="item">
                                <img src="/images/tech/docker.png" alt="Img" />
                                <h5>Docker</h5>
                            </div>
                            <div className="item">
                                <img src="/images/tech/gitlab.png" alt="Img" />
                                <h5>GitLab</h5>
                            </div>
                            <div className="item">
                                <img src="/images/tech/git.png" alt="Img" />
                                <h5>Git</h5>
                            </div>
                        </Carousel>
                    </div>
                </Col>

               
            </Row>
            
        </div>
        <img className="background-image-left" src={colorSharp} alt="Img" />
    </section>
  )
}