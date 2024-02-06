import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/Coffee_Logo.png";
import { Link,NavLink } from "react-router-dom";
function Menu() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            className="img-fluid"
            width={120}
            src={logo}
            alt="Logo RollingCoffee"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div className="d-flex justify-content-end">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink end className="nav-link" to="/">Inicio</NavLink>
              <NavLink end className="nav-link" to="/Administracion">Administrador</NavLink>
              <NavLink end className="nav-link" to="/Registro">Registro</NavLink>
              <NavLink end className="nav-link" to="/Login">Login</NavLink>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default Menu;
