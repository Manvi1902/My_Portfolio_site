import { Col } from "react-bootstrap";
import navIcon2 from '../assets/img/github-icons2.png';

export const ProjectCard = ({ title, techUsed, imgUrl,description,learning ,githubLink}) => {
  
  const openGithubLink = () => {
    window.open(githubLink, '_blank');
  };
  
  return (
    <Col size={12} sm={12} md={6} lg={4} >
      <div className="proj-imgbx" onClick={openGithubLink} style={{ cursor: "pointer" }}>
        <img src={imgUrl} alt="text" className="project-img"/>
        <div className="proj-txtx">
                <h4>what's I Learnt?</h4>
                <p>{learning}</p>
                <div style={{ display: 'flex', alignItems: 'center',  marginLeft:'5rem'}}>  
                <img src={navIcon2} alt="github-icon" style={{ width: '20px', height: '20px' }} />  
                <p style={{ margin: '0 5px' }}>Check source code</p>  
  
        </div> 
        </div>
        <div className="proj-txt2">
          <h4>{title}</h4>
          <p>{description}</p>
          <h6>{techUsed}</h6>
        </div>
      
      </div>
    </Col>
  )
}
