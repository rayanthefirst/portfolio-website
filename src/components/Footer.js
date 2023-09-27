import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from 'react-icons/md';

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3></h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons"  style={{textAlign: "center"}}>
          <li className="social-icons">
              <a
                  href="mailto:r29ahmad@uwaterloo.ca"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
              >
                  <MdEmail />
              </a>
            </li>
           
            <li className="social-icons">
              <a
                href="https://linkedin.com/in/rayan-ahmad29"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
              </li>
              <li className="social-icons">
              <a
                href="https://github.com/rayanthefirst"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            
            
          </ul>
        </Col>
        {/* <Col md="4" className="footer-copywright">
          <h3>Portfolio</h3>
        </Col> */}
        
      </Row>
    </Container>
  );
}

export default Footer;
