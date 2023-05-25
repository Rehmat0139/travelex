import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-default sticky-top navbar-expand-lg p-0 navbar-light bg-light">
        <div className="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav d-flex justify-content-around fs-5 fw-bold text me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
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
                    <span className="h1 fs-1 iconStyle logoText">K</span>
                    <span className="h1 fs-1 iconStyle logoText">U</span>
                  </a>
                </a>
              </li>
              <li className="nav-item  p-4">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item p-4">
                <a className="nav-link" href="/">
                  Destinations
                </a>
              </li>
              <li className="nav-item p-4">
                <a className="nav-link" href="/">
                  Tours
                </a>
              </li>
              <li className="nav-item p-4">
                <a className="nav-link" href="/">
                  Pages
                </a>
              </li>
              <li className="nav-item p-4">
                <a className="nav-link" href="/">
                  Blogs
                </a>
              </li>
              <li className="nav-item p-4">
                <a className="nav-link" href="/">
                  Contact
                </a>
              </li>
            </ul>
            <div class="d-md-flex justify-content-lg-end">
              <button
                class="btn btn-primary fw-bold fs-5 rounded me-md-2 p-3"
                type="button"
              >
                  ENQUIRE
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
