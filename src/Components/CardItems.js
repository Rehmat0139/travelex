import React from "react";

const CardItems = ({ tittle, desc, imgUrl }) => {
  return (
    <>
      <div className="card m-5" style={{ width: "18rem", }} data-aos="zoom-in">
        <img src={imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
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
