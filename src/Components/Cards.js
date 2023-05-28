import React from "react";
import CardItems from "./CardItems";
import { DetailFeatures } from "./Content";
import "./style.css";

const Cards = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row justify-content-center" style={{backgroundColor:''}}>
            <h2 style={{ fontWeight: "bolder", color: " #257e9e" }}>
              Destinations
            </h2>
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
