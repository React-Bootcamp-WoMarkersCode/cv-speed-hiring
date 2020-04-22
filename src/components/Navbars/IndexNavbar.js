import React from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo-sem-bg.png";
import logoSemBg from "../../assets/img/logo-sem-bg.png";
import './style.css'
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Button
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 50 ||
        document.body.scrollTop > 50
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 50 ||
        document.body.scrollTop < 50
      ) {
        setNavbarColor("navbar-transparent");
      } else if ( (document.documentElement.scrollTop === 0 ||
        document.body.scrollTop === 0) && 
        (document.getElementsByClassName('page-header').length === 0 ||
        document.getElementsByClassName('section section-dark').length === 0)) {
        setNavbarColor("");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/"
            title="Logo Collective Hiring">
              <img src={navbarColor === 'navbar-transparent' ? logo : logoSemBg} className="logo" alt="Logo Collective Hiring"></img>
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/sobre" tag={Link}>
                Sobre
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/acessar-conta" tag={Link}>
                Entrar
              </NavLink>
            </NavItem>
            <NavItem>
              <Button
                className="btn-cadastrar"
                to="/cadastrar-conta"
                tag={Link}
              >
                cadastrar
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
