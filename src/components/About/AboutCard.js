import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            My name is <span className="purple">Rayan Ahmad </span>
            from <span className="purple"> Toronto.</span>
            <br />I am a Mechatronics Engineering student at the University of Waterloo.
            <br />
            <br />
            Some of the things I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Skateboard 🛹
            </li>
            <li className="about-activity">
              <ImPointRight /> Piano 🎹
            </li>
            <li className="about-activity">
              <ImPointRight /> Travel ✈️
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
