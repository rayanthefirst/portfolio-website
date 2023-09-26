import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import stocktrading from "../../Assets/Projects/stock-trading.png"
import backtesting from "../../Assets/Projects/backtesting.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent <strong className="purple">Projects </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={backtesting}
              isBlog={false}
              title="Strategy Back-tester"
              description="Designed back-tester that reflects quantitative strategies on Interactive Brokers historical data with 90% accuracy"
              ghLink="https://github.com/rayanthefirst/Autonomous-Trading-Systems-old"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stocktrading}
              isBlog={false}
              title="Autonomous Stock Trading Systems"
              description="Created quantitative strategies, implemented them on Interactive Brokers, and deployed them on GCP"
              ghLink="https://github.com/rayanthefirst/Autonomous-Trading-Systems-old"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
