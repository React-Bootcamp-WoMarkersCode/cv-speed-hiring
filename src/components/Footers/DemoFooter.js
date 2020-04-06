import React from "react";
import { Link } from 'react-router-dom'
import { Row, Container } from "reactstrap";
import "./style.css";

function DemoFooter() {
  return (
    <Container>
      <footer className="footer footer-black footer-white">
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <Link to="/sobre">Sobre</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/politica-de-privacidade">Política de privacidade</Link>
              </li>
              <li>
                <Link to="/termo-de-uso">Termo de uso</Link>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by speed hiring
            </span>
          </div>
        </Row>
      </footer>
    </Container>
  );
}

export default DemoFooter;
