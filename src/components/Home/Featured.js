import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FeaturedProjectCard from "./FeaturedProjectCard";
import stocktrading from "../../Assets/Projects/stock-trading.png";
import backtesting from "../../Assets/Projects/backtesting.png";
import DMZ_Winner from "../../Assets/Projects/DMZ_Winner.PNG";



function Featured() {
  return (
    <Container fluid className="home-about-section" id="about">
      <h1 style={{textAlign: "center"}}>Featured</h1>

      <Container>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <FeaturedProjectCard
              imgPath={stocktrading}
              title="Autonomous Stock Trading Systems"
              description="Created quantitative strategies, implemented them on Interactive Brokers, and deployed them on GCP"   
            />
          </Col>

          <Col md={4} className="project-card">
            <FeaturedProjectCard
              imgPath={backtesting}
              title="Strategy Back-tester"
              description="Designed back-tester that reflects quantitative strategies on Interactive Brokers historical data with 90% accuracy"
            />
          </Col>

          <Col md={4} className="project-card">
            <FeaturedProjectCard
              imgPath={DMZ_Winner}
              title="NearMe"
              description="NearMe is an innovative app that uses geolocation to connect post-secondary students based on their interests, promoting in-person interactions"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Featured;
