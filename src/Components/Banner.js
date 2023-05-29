import React from "react";
import "./style.css";

const Banner = () => {
  return (
    <>
      <div className="container-fluid Banner">
        <div className="container ">
          <div
            className="row justify-content-center align-items-center "
            style={{ height: "100vh" }}
          >
           <div class="text-light text-md-end text-center banner">
        <h1 class="display-4 banner-heading" data-aos="slide-left">
          Welcome to <span class="text-uppercase fw-bold" style={{ color: "#2980b9" }}>EKU</span>
          <span>Travels</span>
          <p class="lead banner-par">
            Lorem ipsum dolor sit amet consector adipicing.
          </p>
          <p class="lead banner-par">
            Lorem ipsum dolor sit amet consector adipicing.
          </p>
          <p class="lead banner-par">
            Lorem ipsum dolor sit amet consector adipicing.
          </p>
        </h1>
      </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
