import React from "react";
import './style.css';

const Tours = () => {
  return (
    <>
      <section id="Tours" className="py-4" style={{backgroundColor:'#eef2f3'}}>
        <div className="container-fluid">
          <div className="row text-center">
            <div className="col m-4">
              <h1 className="display-4 mb-4 fw-bold text-dark">Tours</h1>
              <div className="underline mb-4 border-dark"></div>
              <p className="lead fw-normal">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, 
              </p>
            </div>

            <div className="row m-auto">
              <div className="col-lg-4 col-sm-6 my-3" data-aos='slide-right'>
                <div className="card border-0 card-shadow">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1661277691016-d7a981aa8809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1546&q=80"
                    className="card-img"
                    style={{height:'17rem'}}
                    alt="img"
                  />
                  <div className="card-img-overlay">
                    <h5 className="text-white text-uppercase fw-bold p-2 heading">
                      Honeymoon Photography
                    </h5>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 my-3" data-aos='fade-up'>
                <div className="card border-0 card-shadow">
                  <img
                    src="https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    className="card-img"
                    alt="img"
                  />
                  <div className="card-img-overlay">
                    <h5 className="text-white text-uppercase fw-bold p-2 heading">
                      Wedding Photography
                    </h5>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 my-3" data-aos='slide-right'>
                <div className="card border-0 card-shadow">
                  <img
                    src="https://images.unsplash.com/photo-1561525140-c2a4cc68e4bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    className="card-img"
                    alt="img"
                  />
                  <div className="card-img-overlay">
                    <h5 className="text-white text-uppercase fw-bold p-2 heading">
                      Family Photography
                    </h5>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 my-3" data-aos='slide-right'>
                <div className="card border-0 card-shadow">
                  <img
                    src="https://images.unsplash.com/photo-1599920609546-63c1b2422f20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    className="card-img"
                    alt="img"
                  />
                  <div className="card-img-overlay">
                    <h5 className="text-white text-uppercase fw-bold p-2 heading">
                      Baby Photography
                    </h5>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 my-3" data-aos='fade-down'>
                <div className="card border-0 card-shadow">
                  <img
                    src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    className="card-img"
                    alt="img"
                  />
                  <div className="card-img-overlay">
                    <h5 className="text-white text-uppercase fw-bold p-2 heading">
                      Party Photography
                    </h5>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 my-3" data-aos='slide-right'>
                <div className="card border-0 card-shadow">
                  <img
                    src="https://images.unsplash.com/photo-1612477954469-c6a60de89802?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    className="card-img"
                    alt="img"
                  />
                  <div className="card-img-overlay">
                    <h5 className="text-white text-uppercase fw-bold p-2 heading">
                      Fassion Photography
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tours;
