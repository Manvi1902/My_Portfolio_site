import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  
  const advancedProjects = [

    {
      title: "BITR CollegeCircle: Socio-Academic Website",
      techUsed: "HTML, CSS, PHP, JavaScript, phpMyAdmin, Xampp Server.",
      description:"This app is designed for college students, providing information about BITR College, Faculty, Alumni, Placement Training, Career Roadmap, etc",
      learning: "Developed proficiency in performing CRUD operations, establishing database connections, and manipulating the JavaScript DOM",
      imgUrl: "/images/tech/college.png",
      githubLink:"https://github.com/Manvi1902/College-Circle-Project"
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
    },{
      title: "Blog-App Backend",
      techUsed: "MongoDB, Node.js, Express.js, Postman API tool",
      imgUrl: "/images/tech/backend.jpg",
      description:"Developed backend for a blog app.It serves as the foundation for managing blog posts, & user authentication.",
      learning: "Gained experience with CRUD operations, database connections, and API development using Node.js and Express.js.",
      githubLink:"https://github.com/Manvi1902/Blog-App"
    },
    {  
      title: "Assignment Submission Backend",  
      techUsed: "MongoDB, Node.js, Express.js, Postman API tool",  
      imgUrl: "/images/tech/backend.jpg",  
      description: "Developed a backend system for managing assignment submissions, enabling seamless handling of user data, submission tracking, and authentication.",  
      learning: "Enhanced proficiency in designing schemas, implementing CRUD operations, connecting databases, and developing robust REST APIs using Node.js and Express.js.",  
      githubLink: "https://github.com/Manvi1902/Assignment-Submission-System-Backend"  
    }  
     
  ];


  const javascriptProjects  = [
  
    {
      title: "Beauty Diva website",
      techUsed: "HTML,CSS,Javascript,Vite",
      description:"A beauty product website providing a seamless shopping experience,featuring dynamic product displays and add-to-cart functionality.",
      learning: " Implemented add-to-cart functionality to enhance user experience, utilized local storage for efficient data storage and retrieval, and mastered CSS properties along with advanced concepts like Flexbox and Grid for responsive design. Gained practical knowledge in developing interactive web applications.",
      imgUrl:"/images/tech/beautyDiva.png",
      githubLink:"https://github.com/Manvi1902/-Brainwave_Matrix_Intern/tree/main/Ecommerce_Website/Beauty_Diva_website/src"
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
      title: "Card Design",  
      techUsed: "HTML, CSS, JavaScript",  
      description: "An aesthetically pleasing and customizable card design template.",  
      learning: "Enhanced skills in designing interactive user interfaces and CSS animations.",  
      imgUrl: "/images/tech/card-design.png",  
      githubLink: "https://github.com/Manvi1902/Card-Designs"  
    },
    ]

    const  reactProjects= [
      {
        title: "World Wise Travel Website",
        techUsed: "React, Context API, React Hooks, Vite, CSS",
        description:"React-based website enabling users to select a city and country while adding personalized travel notes that include date, city, and country details. ",
        learning: "Gained knowledge in Context API, component design, and React Hooks. ",
        imgUrl: "/images/tech/world.png",
        githubLink:"https://github.com/Manvi1902/World-Wise-Website"
      },
  
      {  
        title: "Real-time Pattern Generation",  
        techUsed: "React.js, React Router, React Hooks, Real-time JSON data",  
        description: "A dynamic application that generates and displays real-time grid-based patterns based on user input.",  
        learning: "Deepened understanding of React Router, state management, and handling real-time data.",  
        imgUrl: "images/tech/project-img3.png",  
        githubLink: "https://github.com/Manvi1902/Grid-Pattern-Game",  
       
      },
      {  
        title: "Dream Music App",  
        techUsed: "React.js, React Hooks, React Context API, Express.js, Node.js",  
        description: "A music streaming app with a rich interface and seamless user experience.",  
        learning: "Enhanced knowledge in API integration, state management, and building intuitive UI.",  
        imgUrl: "/images/tech/music-app.png",  
        githubLink: "https://github.com/Manvi1902/Dream-music",  
        
      },
      {
        title: "Chat-App ",
        techUsed: "React.js, Firebase , Material design, CSS ",
        imgUrl:"/images/tech/chat-app.jpg", 
        description:"A real-time chat app built with React that supports instant messaging and notifications.",
        learning: "Enhanced knowledge of CRUD operations, real-time data handling, and React.js for interactive user experiences.",
        githubLink:"https://github.com/Manvi1902/ChatApp"
      },
      {  
        title: "Dynamic JSON Form Generation",  
        techUsed: "React 18+, TypeScript, Tailwind CSS, React Hook Form, Playwright for E2E testing, Jest for unit testing",  
        description: "A robust form generation platform allowing users to dynamically create and manage forms with enhanced responsiveness and accessibility.",  
        learning: "Gained expertise in implementing TypeScript for scalable development, crafting responsive designs using Tailwind CSS, and performing E2E testing with Playwright to ensure application reliability.",  
        imgUrl: "/images/tech/project-img3.png",  
        githubLink: "https://github.com/Manvi1902/Dynamic-From-Generation"  
    },  
    {  
        title: "My Portfolio",  
        techUsed: "React,React Router,React-Bootstrap, Nodemailer",  
        description: "A personal portfolio showcasing projects, skills, and achievements with a focus on modern UI/UX design and responsiveness.",  
        learning: "Enhanced skills in building responsive layouts, integrating backend services like Nodemailer, and employing E2E testing to ensure seamless functionality.",  
        imgUrl: "/images/tech/protfolio.png",  
        githubLink: "https://github.com/Manvi1902/My_Portfolio_site",  
       
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
                  <Nav variant="pills" className="nav-pills mb-5  justify-content-space-around align-items-center" id="pills-tab">
                  <Nav.Item>
                      <Nav.Link eventKey="first">ReactJS Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Web development Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Advanced Projects</Nav.Link>
                    </Nav.Item>
                 
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          reactProjects.map((project, index) => {
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
                          javascriptProjects.map((project, index) => {
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
                        advancedProjects.map((project, index) => {
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
