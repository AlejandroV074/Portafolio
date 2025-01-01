import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiFirebase,
  SiGit,
  SiJavascript,
  SiReact,
  SiGithub,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiDjango,
  SiFlask,
  SiMysql,
  SiNodedotjs,
  SiFigma,
  SiPython,
} from "react-icons/si";

const technologies = [
  { id: "github", icon: SiGithub },
  { id: "git", icon: SiGit },
  { id: "html5", icon: SiHtml5 },
  { id: "css3", icon: SiCss3 },
  { id: "tailwindcss", icon: SiTailwindcss },
  { id: "javascript", icon: SiJavascript },
  { id: "react", icon: SiReact },
  { id: "nodejs", icon: SiNodedotjs },
  { id: "python", icon: SiPython },
  { id: "django", icon: SiDjango },
  { id: "flask", icon: SiFlask },
  { id: "mysql", icon: SiMysql },
  { id: "firebase", icon: SiFirebase },
  { id: "figma", icon: SiFigma },
];

function TechIcon({ Icon }) {
  return (
    <Col xs={4} md={2} className="tech-icons">
      <Icon />
    </Col>
  );
}

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {technologies.map((tech) => (
        <TechIcon key={tech.id} Icon={tech.icon} />
      ))}
    </Row>
  );
}

export default Techstack;
