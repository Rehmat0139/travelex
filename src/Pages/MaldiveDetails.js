import React from 'react'
import TextComp from "./TextComp";
import { TextContent } from "./TextContent";

const MaldiveDetails = () => {
  return (
    <>
         <h3 className="SouthH">
        Explore Maldives with{" "}
        <span className="h1 fs-1 fw-bold logoText ">E</span>
        <span className="h1 fs-1 fw-bold logoText">K</span>
        <span className="h1 fs-1 fw-bold logoText">U</span>{" "}
         and get the best experience of Life
      </h3>
      <div className="container-fluid DetailCard">
        <div className="container">
          <div className="row">
            <TextComp
              title={TextContent.Maldives.title}
              h2={TextContent.Maldives.h2}
              p={TextContent.Maldives.p}
              imgUrl={TextContent.Maldives.imgUrl}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default MaldiveDetails