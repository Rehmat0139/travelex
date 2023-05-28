import React from "react";
import "./style.css";
import Carousel2 from "./Carousel2";

const Carousel = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row justify-content-left">
            <div
              id="carouselExampleDark"
              className="carousel carousel-dark slide p-5 col-lg-8"
              class="carousel slide"
              data-bs-ride="true"
              data-aos="zoom-in"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="2000">
                  <img
                    src="https://images.unsplash.com/photo-1494674557684-c26be0f88950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80 "
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block d-sm-none d-lg-block text-dark fw-bold">
                    <h3> On safari to the sands</h3>
                    <p>
                      “What makes the desert beautiful is that somewhere it
                      hides a well.” ...
                    </p>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img
                    src="https://images.unsplash.com/photo-1682686580849-3e7f67df4015?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block d-sm-none d-lg-block text-white fw-bold">
                    <h3>Dive to escape life for a while</h3>
                    <p>
                      S stands for Signal, O stands for Orientation, R stands
                      for Regulator, T stands for Time, E stands for Equalize
                      and D stands for Descent.
                    </p>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img
                    src="https://images.unsplash.com/photo-1554132267-d06483b00adc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block d-sm-none d-lg-block text-white fw-bold">
                    <h3>Whatever floats your jet ski.</h3>
                    <p>
                      A bad day on the jet ski is better than a good day at
                      work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <Carousel2 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
