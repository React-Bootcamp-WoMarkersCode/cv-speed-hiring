import React from "react";
import "./style.css";

import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a href="/sobre">Sobre</a>
              </li>
              <li>
                <a href="/faq">FAQ</a>
              </li>
              <li>
                <a href="/politica-de-privacidade">Política de privacidade</a>
              </li>
              <li>
                <a href="/termo-de-uso">Termo de uso</a>
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
      </Container>
    </footer>
  );
}

export default DemoFooter;
