import React from "react";

function TextComp({ title, h2, p, imgUrl }) {
  return (
    <>
      {" "}
      <div data-aos="fade-up" className={`col-12 title-cnt mt-5 mb-4`}>
        {/* <h1 
    data-aos="fade-up" 
    className={`fw-bold`}>{title}</h1> */}
        <h2 data-aos="fade-up">{h2}</h2>
        <p data-aos="fade-up" className=" fs-5 ">
          {p}
        </p>
      </div>
      <div className="d-flex text-start">
        <img src={imgUrl} alt="..." style={{ width: "40%" }} />
      </div>
    </>
  );
}

export default TextComp;
