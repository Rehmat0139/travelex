import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import { NavLink } from "react-router-dom";
import "./style.css";

function NavScrollExample() {
  return (
    <Navbar className="sticky-top" bg="light" expand="lg">
      <Container fluid d-flex justify-content-around >
        <Navbar.Brand href="#">
          <a
            className="nav-link active p-3 align-text-center"
            aria-current="page"
            href="/"
          >
            <a
              className="navbar-brand logo"
              style={{ color: "#2980b9" }}
              href="/"
            >
              <span className="h1 fs-1 fw-bold logoText ">E</span>
              <span className="h1 fs-1 fw-bold logoText">K</span>
              <span className="h1 fs-1 fw-bold logoText">U</span>
            </a>
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="nav-style me-auto my-2 my-lg-0 fs-5 fw-bold"
            style={{ maxHeight: "100px", color: "black" }}
            navbarScroll
          >
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#Destinations">Destinations</Nav.Link>
            <Nav.Link href="#Tours">Tours</Nav.Link>
            <Nav.Link href="#Blogs">Blogs</Nav.Link>
            <Nav.Link href="#footer">Contact</Nav.Link>
          </Nav>
          <div className="py-2 m-4">
            <a href="/">
              <i className="fa-brands fa-2x mx-3 fa-facebook text-primary "></i>
            </a>
            <a href="/">
              <i className="fab fa-google fa-2x text-danger mx-3"></i>
            </a>
            <a href="/">
              <i className="fab fa-twitter fa-2x text-primary mx-3"></i>
            </a>
            <a href="/">
              <i className="fab fa-youtube fa-2x text-danger mx-3"></i>
            </a>
          </div>
          <Button
            className="fw-bold fs-5 rounded me-md-2 p-3"
            variant="primary"
          >
            ENQUIRE
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
