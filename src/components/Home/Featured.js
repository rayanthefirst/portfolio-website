import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards"
import stocktrading from "../../Assets/Projects/stock-trading.png"
import backtesting from "../../Assets/Projects/backtesting.png"

function Featured() {
  return (
    <Container fluid className="home-about-section" id="about">
      <h1 style={{textAlign: "center"}}>Featured</h1>

      <Container>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stocktrading}
              isBlog={false}
              title="Autonomous Stock Trading Systems"
              description="Created quantitative strategies, implemented them on Interactive Brokers, and deployed them on GCP"   
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={backtesting}
              isBlog={false}
              title="Strategy Back-tester"
              description="Designed back-tester that reflects quantitative strategies on Interactive Brokers historical data with 90% accuracy"
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Featured;
