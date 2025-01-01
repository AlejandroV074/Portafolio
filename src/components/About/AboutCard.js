import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi there! 👋 I am{" "}
            <span className="purple">Alejandro Vargas Cuartas</span>, a Full
            Stack Developer from{" "}
            <span className="purple">Medellín, Colombia</span>, passionate about
            transforming ideas into impactful digital solutions. As a Software
            Engineering student, I’ve combined my academic foundation with
            hands-on experience in projects ranging from web application
            development to implementing APIs and AWS Lambda functions.
          </p>

          <p style={{ textAlign: "justify" }}>
            My professional focus lies in optimizing processes and delivering
            intuitive user experiences. Some of my key achievements include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Developing automations with Selenium and React to
              enhance operational efficiency.
            </li>
            <li className="about-activity">
              <ImPointRight /> Designing AI-driven UX/UI prototypes for
              innovative projects.
            </li>
            <li className="about-activity">
              <ImPointRight /> Building scalable web platforms using React and
              AWS Lambda.
            </li>
          </ul>

          <p style={{ textAlign: "justify" }}>
            My tech stack includes tools like Python, React, AWS, and Docker,
            alongside a strong commitment to learning and adapting to new
            technologies. My goal is to continue contributing to innovative
            projects that solve real-world challenges.{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
