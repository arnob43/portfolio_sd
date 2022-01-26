import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shilajit Datta </span>
            living in <span className="purple"> Sweden.</span>
            <br />I am currently pursuing my Masters of Applied Computer Science for Sustainable Development at <span className="purple"> Kristianstad University.</span> I'm{" "}
            <b className="purple"> a Data Analyst/Product manager  </b> and
            <b className="purple"> Artificial Intelligence enthusiast.</b>
            <br />I am looking forward to gain more competency and exposure in{" "}
            <b className="purple">
               Machine Learning, Neural Network, Google Cloud Platforms and Data mining.
            </b>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Badminton(3 times champion in college and university level)
            </li>
            <li className="about-activity">
              <ImPointRight /> Football(Vice-captain of the champion team of Wuhan University)
            </li>
            <li className="about-activity">
              <ImPointRight /> Making music(Have a band named CloudIX, you are welcome to check on youtube)
            </li>
            <li className="about-activity">
              <ImPointRight /> Working out(A very important part of my life)
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "#14FFEC", opacity: 0.7 }}>
            "Sky is not the limit, it's the beginning"{" "}
          </p>
          <footer className="blockquote-footer">Shilajit Datta</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
