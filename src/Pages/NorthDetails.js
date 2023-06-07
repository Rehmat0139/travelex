import React from "react";
import "./Details.css";
import TextComp from "./TextComp";
import { TextContent } from "./TextContent";

const NorthDetails = () => {
  return (
    <>
      <h3 className="NorthH">
        Explore the Northern part of India with{" "}
        <span className="h1 fs-1 fw-bold logoText ">E</span>
        <span className="h1 fs-1 fw-bold logoText">K</span>
        <span className="h1 fs-1 fw-bold logoText">U</span>{" "}
         and get the best experience of Life
      </h3>
      <div className="container-fluid DetailCard">
        <div className="container">
          <div className="row">
            <TextComp
              title={TextContent.North.title}
              h2={TextContent.North.h2}
              p={TextContent.North.p}
              imgUrl={TextContent.North.imgUrl}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NorthDetails;
