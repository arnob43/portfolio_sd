import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import ResumePdf from "../../Assets/CV_SD.pdf";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={ResumePdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Resume
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Student Consultant at Kristianstad Akademi"
              date="Sep 2021 - present"
              content={[
                "EU funded program where the student consultants help small and medium sized businesses to solve different tasks and come up with innovative ideas. Tools Used- Google Analytics, Python, Sketch, Affinity Designer, Magneto2, Shopify. Projects- 1.Aspirio AB- Where I was appointed to develop a launch strategy for the company doing different competitor analysis, market analysis and TG analysis. I also developed a guideline for content creation for the company. 2. ceninodonna.shop - In this project I was appoint to do data migration of the whole shop from magento2 to shopify.",
              ]}
            />
            <Resumecontent
              title="Web Developer at love4nature AB"
              date="Nov 2021 - Dec 2021"
              content={[
                "Design, development and deployment of the website love4nature.se. Tools used- Sketch, React.js, Node.js, Git, Netlify. Responsibilities- 1. Design of the website 2. Development of the website 3. Deployment of the website",
              ]}
            />
            <Resumecontent
              title="Junior Project Manager at Carrotcomm Limited"
              date="Feb 2021 - Aug 2021 "
              content={[
                "Tools Used-Sketch, Excel, AWS, Raspberry pie, PPT, Excel, Python, MySQL. Projects- 1. British American Tobacco (We race as one) - Handling the website database and updating the website, updating the internal competition campaign information remotely using raspberry pi devices in different working zones of the factory, making the AVs, executing digital and physical events. 2. TEAKKO- Handling all data driven social media campaigns, making the brand guideline, market analysis. 3. British American Tobacco(Battle of Minds 2020)- Handling the dedicated website,virtual events, customized games design for the participants' engagement and design of posters, KV, Logo, website etc. 4. Lucky Strike- Design and execution of internal branding of leaf branch.",
              ]}
            />
            <Resumecontent
              title="Product Owner at Minicampus Limited"
              date="Jun 2020 - Jan 2021"
              content={[
                "Tools Used- Sketch, Figma, Vue.js, Flutter, Firebase, Git, Jira, Heroku, Third party API. Responsibilities- 1. End to end management of the product lifecycle 2. Prioritizing features and capabilities of the product. 3. Designing the UI/UX 4. Developing web-app features 5. Managing JIRA 6. Maintaining Database 7. Quality Assurance. Achievements- 1. Reached 1000+ downloads on google playstore within the first 15 days of the launch. 2.Competed on a global level in startany. 3. The web-app registered 2000+ users. APP Link- https://play.google.com/store/apps/details?id=com.jtechnologies.edu_share&gl=SE Web-app link- theminicampus.com",
              ]}
            />

            <Resumecontent
              title="Junior Product Manager at Dutta Trading Corporation"
              date="Jun 2017 - Aug 2018"
              content={[
                "An Export-import company based in Bangladesh, imports different products from China. Tools used- Excel, PPT. Responsibilities- 1. Bringing new products by analyzing the market 2. Communicate with suppliers about the specification of the products. 3. Customizing existing products to satisfy customer demands.",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Vice President of HKIF(University Sports Union)"
              date="Sep 2021 - present"
              content={[
                "Planning, monitoring, and managing the organization end to end. Organize grants and manage them.",
              ]}
            />
            <Resumecontent
              title="Country Representative"
              date="Sep 2018 - Jan 2020"
              content={[
                "Organize different events and go on competitions. ",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Kristianstad University- Kristianstad, Sweden (Masters of Applied Computer Science for Sustainable Development) "
              date="Sep 2021 - Jun 2022"
              content={[`VG`]}
            />
            <Resumecontent
              title="Wuhan University- Wuhan, China (Bachelor of Software Engineering)"
              date="Sep 2016 - May 2020"
              content={["Precentage: 89%"]}
            />
            <Resumecontent
              title="BAF Shaheen College- Dhaka, Bangladesh (Higher Secondary Certificate) "
              date="2014"
              content={["GPA-5"]}
            />
              <Resumecontent
              title="Cambrian College- Dhaka, Bangladesh (Secondary School Certificate) "
              date="2012"
              content={["GPA-5"]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                "MERIT BASED SCHOLARSHIP RECEPIENT OF 37400SEK ",
                "TOP 30 IN SG50 HACKATHON",
      
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={ResumePdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Resume
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
