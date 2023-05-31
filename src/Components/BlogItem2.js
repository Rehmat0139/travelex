import React from "react";
import "./style.css";

const BlogItem2 = () => {
  return (
    <>
      <div className=" row text-start text-dark" data-aos="fade-up">
        <h1 className=" text-sm-center">
          It's time to start your adventure with Us !!!
        </h1>
        <div className="d-flex justify-content-around flex-row mb-3 py-2 m-4">
          <a href="/" className="p-2">
            <i
              className="fas fa-handshake-angle fa-2x mx-3 fa-beat-fade fa-2xl text-dark"
              // style={{textUnderlineOffset:'none'}}
            ></i>
          </a>
          <a href="/" className="p-2">
            <i className="fas fa-solid fa-clock-rotate-left fa-2x mx-3 fa-spin fa-spin-reverse fa-2xl text-dark"></i>
          </a>
          <a href="/" className="p-2">
            <i className="fas fa-solid fa-people-group fa-beat-fade fa-2x text-primary mx-3 text-dark"></i>
          </a>
        </div>
        <h2
          className="text-center text-white fw-bold"
          style={{ fontFamily: "Snell Roundhand, cursive" }}
        >
          Thanks For <br /> Visiting !
        </h2>
      </div>
    </>
  );
};

export default BlogItem2;
