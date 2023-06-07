import React from 'react'
import TextComp from "./TextComp";
import { TextContent } from "./TextContent";

const GoaDetails = () => {
  return (
    <>
       <h3 className="SouthH">
        Explore Goa with{" "}
        <span className="h1 fs-1 fw-bold logoText ">E</span>
        <span className="h1 fs-1 fw-bold logoText">K</span>
        <span className="h1 fs-1 fw-bold logoText">U</span>{" "}
         and get the best experience of Life
      </h3>
      <div className="container-fluid DetailCard">
        <div className="container">
          <div className="row">
            <TextComp
              title={TextContent.Goa.title}
              h2={TextContent.Goa.h2}
              p={TextContent.Goa.p}
              imgUrl={TextContent.Goa.imgUrl}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default GoaDetails;