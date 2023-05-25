import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="p-10 m-10" id="footer">
        <div className="container p-10  ">
          <div className="row d-flex p-10">
            <form
              className="text-white text-start col-md-5 m-10"
              data-aos="fade-up"
            >
              <h1 data-aos="fade-up" style={{color:'#052f4b'}}>Reach Out To Us</h1>
              <span className="underline mb-4"></span>
              <div className="form-group">
                <label for="name"> Name </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                />
              </div>

              <div className="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  id="email"
                />
              </div>
              <div className="form-group">
                <label for="number">Phone Number</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Phone Number"
                  id="email"
                />
              </div>

              <div className="form-group">
                <label for="name">Reviews</label>
                <textarea
                  placeholder="Share your reviews"
                  className="form-control"
                  id="message"
                  rows="3"
                ></textarea>
              </div>

              <div className="d-grid mt-2">
                <button
                  className="btn btn-outline-warning d-grid"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
            <div className="col-4 text-white">
              <h1 style={{ padding: "10", color:'#052f4b' }} data-aos="fade-up">
                Section
              </h1>
              <span className="underline black mb-4 "></span>
              <ul
                className="nav flex-column fs-4 fw-bold"
                data-aos="fade-up"
                style={{ cursor: "pointer" }}
              >
                <li className="nav-item mb-4"> Home</li>
                <li className="nav-item mb-4">Features</li>
                <li className="nav-item mb-4">Pricing</li>
                <li className="nav-item mb-4">FAQs</li>
                <li className="nav-item mb-4">About</li>
              </ul>
            </div>
            <div className="col-md-3 text-white text-start">
              <h1
                className="text-center"
                style={{ padding: "10", color:'#052f4b'}}
                data-aos="fade-up"
              >
                Address
              </h1>
              <h4 data-aos="fade-up"> - Location</h4>
              <p data-aos="fade-up">
                Office No 001, First Foloor, lorem lorem lroenmg, lorem lorem,
                Male, Maldives - 410 203
              </p>

              <h4 data-aos="fade-up"> - Contact</h4>
              <div data-aos="fade-up" className="contactWrapper d-flex">
                <b>Phone : </b>
                <p> +9101111111 </p>
              </div>
              <div data-aos="fade-up" className="contactWrapper">
                <b>Mail Us : </b>
                <p>lorem@gamil.com</p>
              </div>
            </div>
          </div>

          <div className="py-2">
            <a href="/">
              <i className="fa-brands fa-facebook text-danger"></i>
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
          <p className="text-white">Copyright 2023</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
