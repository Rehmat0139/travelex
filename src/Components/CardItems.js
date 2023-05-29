import React from "react";
import './style.css';

const CardItems = ({ tittle, desc, imgUrl }) => {
  return (
    <>
      <div
        className="card brighten"
        style={{ border: "none" }}
        data-aos="zoom-in"
      >
        <img
          src={imgUrl}
          className="card-img-top"
          width="100%"
          height="250rem"
          alt="..."
        />
        <div className="card-body ">
          <h5 className="card-title">{tittle}</h5>
          <p className="card-text">{desc}.</p>
          <a href="/details" className="btn btn-primary">
            Get Details
          </a>
        </div>
      </div>


    </>
  );
};

export default CardItems;
