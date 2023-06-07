import React from 'react'
import TextComp from "./TextComp";
import { TextContent } from "./TextContent";

const SouthDetails = () => {
  return (
    <>
         <h3 className="SouthH">
        Explore the Southern part of India with{" "}
        <span className="h1 fs-1 fw-bold logoText ">E</span>
        <span className="h1 fs-1 fw-bold logoText">K</span>
        <span className="h1 fs-1 fw-bold logoText">U</span>{" "}
         and get the best experience of Life
      </h3>
      <div className="container-fluid DetailCard">
        <div className="container">
          <div className="row">
            <TextComp
              title={TextContent.South.title}
              h2={TextContent.South.h2}
              p={TextContent.South.p}
              imgUrl={TextContent.South.imgUrl}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default SouthDetails