import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const CardItems = ({ tittle, desc, imgUrl,route }) => {
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
          <Link to={route} className="btn btn-primary">
            Get Details
          </Link>
        </div>
      </div>
    </>
  );
};

export default CardItems;
