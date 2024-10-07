import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  
   const majorProjects = [
     
    {
      title: "BITR CollegeCircle: Socio-Academic Website",
      techUsed: "HTML, CSS, PHP, JavaScript, phpMyAdmin, Xampp Server.",
      description:"This app is designed for college students, providing information about BITR College, Faculty, Alumni, Placement Training, Career Roadmap, etc",
      learning: "Developed proficiency in performing CRUD operations, establishing database connections, and manipulating the JavaScript DOM",
      imgUrl: "/images/tech/college.png",
      githubLink:"https://github.com/Manvi1902/College-Circle-Project"
    },
    {
      title: "Beauty Diva website",
      techUsed: "HTML,CSS,Javascript,Vite",
      description:"A beauty product website providing a seamless shopping experience,featuring dynamic product displays and add-to-cart functionality.",
      learning: " Implemented add-to-cart functionality to enhance user experience, utilized local storage for efficient data storage and retrieval, and mastered CSS properties along with advanced concepts like Flexbox and Grid for responsive design. Gained practical knowledge in developing interactive web applications.",
      imgUrl:"/images/tech/beautyDiva.png",
      githubLink:"https://github.com/Manvi1902/-Brainwave_Matrix_Intern/tree/main/Ecommerce_Website/Beauty_Diva_website/src"
    },
    {
      title: "World Wise Travel Website",
      techUsed: "React, Context API, React Hooks, Vite, CSS",
      description:"React-based website enabling users to select a city and country while adding personalized travel notes that include date, city, and country details. ",
      learning: "Gained knowledge in Context API, component design, and React Hooks. ",
      imgUrl: "/images/tech/world.png",
      githubLink:"https://github.com/Manvi1902/World-Wise-Website"
    },
   
    {
      title: "Container Management Site: Using Docker",
      techUsed: "HTML, CSS, EC2 Instance, Docker, GitLab.",
      description:"This application allows instant launching of OS without the need for bootable media. Ideal for fast development and deployment.",
      learning: "Gained a strong proficiency in connecting to EC2 instances, utilizing Docker commands, and managing projects with GitLab.",
      imgUrl: "/images/tech/dockerproj.png",
      githubLink:"https://github.com/Manvi1902/DockerContainer"
    },
    {
      title: "Live Linux Command Shell" ,
      techUsed:"EC2 instance, HTML, CSS, Python, JavaScript.",
      description:"AWS cloud-based live Linux shell for running commands without installing Linux OS.",
      learning: "Enhancing my grasp of EC2 instance management and utilizing Python CGI for web development.",
      imgUrl: "/images/tech/linux.png",
      githubLink:"https://github.com/Manvi1902/Live-Linux-Shell."
    },
     
  ];

  const minorProjects = [
   
    {
      title: "Blog-App Backend",
      techUsed: "MongoDB, Node.js, Express.js, Postman API tool",
      imgUrl: "/images/tech/backend.jpg",
      description:"Developed backend for a blog app.It serves as the foundation for managing blog posts, & user authentication.",
      learning: "Gained experience with CRUD operations, database connections, and API development using Node.js and Express.js.",
      githubLink:"https://github.com/Manvi1902/Blog-App"
    },
    {
      title: "Todo-List",
      techUsed: "HTML,CSS,Javascript",
      imgUrl:"/images/tech/TodoList.png",
      description:"A simple and interactive ToDo list that allows users to add, delete, and edit their tasks.",
      learning: "Developed skills in CRUD operations, JavaScript DOM manipulation, and front-end design using HTML and CSS.",
      githubLink:"https://github.com/Manvi1902/-Brainwave_Matrix_Intern/tree/main/To-Do-List"
    },
    {
      title: "Chat-App ",
      techUsed: "React.js, Firebase , Material design, CSS ",
      imgUrl:"/images/tech/chat-app.jpg", 
      description:"A real-time chat app built with React that supports instant messaging and notifications.",
      learning: "Enhanced knowledge of CRUD operations, real-time data handling, and React.js for interactive user experiences.",
      githubLink:"https://github.com/Manvi1902/ChatApp"
    },
    
  ];

  const workingProjects = [
  
    {
      title: "MERN Stack Ecommerce Website ",
      techUsed: "MongoDB, Express.js, Node.js, React.js, APIs, Json, libraries",
      description:"Currently developing a fully functional eCommerce site using the MERN stack.",
      learning: "frontend and backend connectivity, storing data on MongoDB, Handling REST API etc.",
      imgUrl:"/images/tech/project-img3.png",
      githubLink:"#"
    }
     
  ];



  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Worked on numerous projects that Transform my Ideas into Functional Web Applications.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Major</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Minor</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Working</Nav.Link>
                    </Nav.Item>
                 
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          majorProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          minorProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row xs={12} md={6} xl={7}>
                      {
                          workingProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""/>
    </section>
  )
}