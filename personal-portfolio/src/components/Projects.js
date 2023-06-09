import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import metomice from"../assets/img/metomice.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import tinyURL from "../assets/img/tinyURL.png";
import Internshala from "../assets/img/Internshala--800x420.png";
import flipkart from "../assets/img/flipkart-ecommerce.jpg";
import blog from "../assets/img/blog.png";
import kindle from "../assets/img/kindle.png";
import scanner from "../assets/img/final-qr.jpg";

export const Projects = () => {

  const fprojects = [
    {
      title: "Ecommerce Website",
      description: "JavaScript, NodeJS, MongoDB, AWS S3",
      imgUrl: flipkart,
    },
    {
      title: "URL Shortner",
      description: "JavaScript, NodeJS, MongoDB, Redis",
      imgUrl: tinyURL,
    },
    {
      title: "Blogging Site",
      description: "JavaScript, NodeJS, MongoDB",
      imgUrl: blog,
    },
    {
      title: "InternShala Clone",
      description: "JavaScript, NodeJS, MongoDB.",
      imgUrl: Internshala,
    },
    {
      title: "Amazon Kindle Clone",
      description: "JavaScript, NodeJS, MongoDB, AWS S3",
      imgUrl: kindle,
    },
  ];

  const personalProjects = [
    {
      title: "Google Drive Risk Report",
      description: "MERN, Ant Design, Google Developer apis, React route dom",
      imgUrl: metomice,
    },
    {
      title: "QR Code Scanner & Generator",
      description: "JavaScript, NodeJS, React, React QR-Scanner",
      imgUrl: scanner,
    },
    {
      title: "Frontend of Blogging Site",
      description: "MERN, Bootstrap",
      imgUrl: blog,
    },
   
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>With FunctionUp I created 5 industry level Projects and 3 Personal Projects</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first" style={{cursor : 'pointer'}}>FunctionUp Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second" style={{cursor : 'pointer'}}>Personal Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third" style={{cursor : 'pointer'}}>Current Project</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row className="row" >
                        {
                          fprojects.map((project, index) => {
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
                          personalProjects.map((project, index) => {
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
                      <p>Currently working on the frontend of Flipkart Clone project</p>
                    </Tab.Pane>
                  </Tab.Content>
                  
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
