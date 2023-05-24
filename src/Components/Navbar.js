import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav d-flex justify-content-around fs-5 fw-bold text me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link active p-3" aria-current="page" href="/">
                  <img
                    src="http://ekutravels.org/wp-content/themes/travelex/assets/images/logo-3.png"
                    alt="Logo"
                  />
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
              <div class="d-grid d-md-flex justify-content-lg-end">
                <button class="btn fw-bold fs-5 rounded btn-primary me-md-2 p-3" type="button">
                  Book With Us
                </button>
              </div>
          </div>
        </div>
      </nav>
      
    </>
  );
};

export default Navbar;
