import React from 'react'
import TextComp from "./TextComp";
import { TextContent } from "./TextContent";

const Srilanka = () => {
  return (
    <>
         <h3 className="SouthH">
        Explore Sri-Lanka with{" "}
        <span className="h1 fs-1 fw-bold logoText ">E</span>
        <span className="h1 fs-1 fw-bold logoText">K</span>
        <span className="h1 fs-1 fw-bold logoText">U</span>{" "}
         and get the best experience of Life
      </h3>
      <div className="container-fluid DetailCard">
        <div className="container">
          <div className="row">
            <TextComp
              title={TextContent.Srilanka.title}
              h2={TextContent.Srilanka.h2}
              p={TextContent.Srilanka.p}
              imgUrl={TextContent.Srilanka.imgUrl}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Srilanka