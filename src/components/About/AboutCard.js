import React from "react";
import Card from "react-bootstrap/Card";


// I am an accomplished React Native and full-stack developer specializing in major e-commerce applications. With a knack for crafting seamless user experiences and a keen eye for backend intricacies, I thrive in building dynamic solutions that bridge technology and user needs.

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Arun Raja </span>
            from <span className="purple"> Coimbatore,Tamil Nadu,India.</span>
            <br /> I am an accomplished React Native and full-stack developer
            specializing in major e-commerce applications With a knack for
            crafting seamless user experiences and a keen eye for backend
            intricacies,
            <br />
            I thrive in building dynamic solutions that bridge technology and
            user needs.
            <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
