import React from "react";
import Carousel from "./Carousel";

const Section = () => {
  return (
    <>
      <div className="container-fluid section">
        
        <div class="row">
          <div
            class="col-lg-12 col-sm-10 mx-auto m-4 d-flex align-item-right text-white"
            data-aos="zoom-in"
          >
              <Carousel/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
