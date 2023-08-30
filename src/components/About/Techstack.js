import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiAndroid,
  DiApple,
} from "react-icons/di";
import { GrGraphQl } from "react-icons/gr";
import { SiHasura } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <span>
          <DiAndroid />
          <DiApple />
        </span>
        <h4 style={{ fontSize: 10 }}>React Native</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h4 style={{ fontSize: 10 }}>Javascript</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHasura />
        <h4 style={{ fontSize: 10 }}>Hasura and other ORMs</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h4 style={{ fontSize: 10 }}>React</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h4 style={{ fontSize: 10 }}>Node Js</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GrGraphQl />
        <h4 style={{ fontSize: 10 }}>GraphQl</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h4 style={{ fontSize: 10 }}>Git</h4>
      </Col>
    </Row>
  );
}

export default Techstack;
