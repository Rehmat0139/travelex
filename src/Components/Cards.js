import React from "react";
import CardItems from "./CardItems";
import { DetailFeatures } from "./Content";
import "./style.css";

const Cards = () => {
  return (
    <>
      <div className="container-fluid" id="Destinations">
        <div className="container">
          <div className="card-items row justify-content-center">       
          <h1 class="display-4 mb-4 fw-bold text-dark">Destinations</h1>
          <p class="lead fw-normal">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            {DetailFeatures.map((features) => {
              return (
                <div class="col-lg-4 col-sm-10 mx-auto mb-4" data-aos="zoom-in">
                  <CardItems
                    tittle={features.tittle}
                    desc={features.desc}
                    imgUrl={features.img}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
