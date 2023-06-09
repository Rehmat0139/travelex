import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="p-10 m-10" id="footer">
        <div className="container p-10  ">
          <div className="row d-flex p-10">
            <form className="text-white text-start col-md-5 m-10">
              <h1 style={{ color: "#052f4b" }}>Reach Out To Us</h1>
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
                  type="number"
                  className="form-control"
                  placeholder="Phone Number"
                  id="number"
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
              <h1 style={{ padding: "10", color: "#052f4b" }}>Section</h1>
              <span className="underline black mb-4 "></span>
              <ul
                className="nav flex-column fs-4 fw-bold"
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
                style={{ padding: "10", color: "#052f4b" }}
              >
                Address
              </h1>
              <h4> - Location</h4>
              <p>
                Office No 001, First Foloor, lorem lorem lroenmg, lorem lorem,
                Male, Maldives - 410 203
              </p>

              <h4> - Contact</h4>
              <div className="contactWrapper d-flex">
                <b>Phone : </b>
                <p> +9101111111 </p>
              </div>
              <div className="contactWrapper">
                <b>Mail Us : </b>
                <p>lorem@gamil.com</p>
              </div>
            </div>
          </div>
          <p className="text-white">Copyright 2023</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
