import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import image from "../../Assets/Projects/image.jpeg";
import mdc from "../../Assets/Projects/mdc.png";
import wba from "../../Assets/Projects/wba.jpeg";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
               imgPath={image}
              title="IMPLEMENTATION OF ANN ON HUMAN ACTIVITY RECOGNITION"
              description="Tools used- Python(using libraries such as pandas, sklearn, seaborn, scikit learn etc), Jupyter Notebook, WISDM dataset"
              // link="https://github.com/arnob43"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
               imgPath={image}
              title="Decision Tree and KNN implementation on BMW stock data"
              description="Decision Tree and KNN implementation on BMW's 10 years stock data. Tools used- 1. Python 2. Jupyter Notebook"
              // link="https://github.com/arnob43"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={image}
              title="KNN and Decision Tree implementation on IRIS Dataset"
              description="KNN and Decision Tree Implementation on IRIS dataset. Tools used- 1. Python 2. Jupyter Notebook"
              // link="https://github.com/arnob43"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={image}
              title="Visualization of NordicThingy52 sensory data using Raspberry Pie and Fireb"
              description="Visualizing real time data of NordicThingy52 on an web-app Through raspberry pi 3 and control HS100 and camera remotely. Tools used- 1. Raspberry pie 3 2. NordicThingy52 3. HS100 4. React.js 5. Node.js 6. Firebase 7. Camera"
              // link="https://github.com/arnob43"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={image}
              title="Machine learning's impact on making a smart city and how it can be utilized. Such as-
-Machine learning in healthcare
 Analyzing existing Electronic health record 
 Developing patient specific plans
-Machine learning in smart traffic management and transportation
 Analyze traffic flow and predict it beforehand to avoid congestion 
-Machine learning in combating pollution
Prediction of pollution peaks"
              // link="https://github.com/arnob43"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wba}
              title="Weather based agriculture"
              description="It is a python program that tells the API (Air Pollution Index) and further pollutants level in air of any city in the world. It uses Matplotlib to plot pie chart of pollutants in air."
              // link="https://github.com/arnob43"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mdc}
              title="Shop Location Analysis Tool"
              description="A project I have done for my thesis. A web crawler taking Wuhan University as perimeter, analyzing the demographics to select the best location for a pharmaceutical shop. Tools Used- 1. Sketch 2. Javascript 3. Node.js 4. MongoDB 5. Googlemaps API"
              // link="https://github.com/arnob43"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
