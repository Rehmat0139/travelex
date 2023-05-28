import React from "react";
import "./style.css";

const Banner = () => {
  return (
    <>
      <div className="container-fluid Banner">
        <div className="container ">
          <div
            className="row justify-content-center align-items-center "
            style={{ height: "90vh" }}
          >
            <div className="col-lg-6 col-12 banner-left" data-aos="fade-up">
              <div className="d-flex align-items-start align-self-center text-center text-white fw-bold fs-1">
                Plan Perfect Holiday <br />
                With US
              </div>
            </div>
            <div className="col-lg-6 col-12 banner-right">
              <form
                className="SidForm d-flex flex-column p-5 rounded vh-60"
                data-aos="fade-up"
              >
                <div className="form-outline mb-4 ">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Where ?"
                    aria-label="Where ?"
                  />
                </div>

                <div className="form-outline mb-4">
                  <input
                    className="form-control"
                    list="datalistOptions"
                    id="exampleDataList"
                    placeholder="Select Type"
                  />
                  <datalist id="datalistOptions">
                    <option value="Adventure" />
                    <option value="Local Island" />
                    <option value="Resorts" />
                    <option value="Beaches" />
                    <option value="City" />
                  </datalist>
                </div>

                <div className="form-outline mb-4 ">
                  <input
                    type="date"
                    value="From"
                    name="from"
                    className="date p-2 w-100"
                  />
                </div>

                <div class="d-flex flex-wrap justify-content-sm-center">
                  <button
                    class="btn fw-bold fs-5 rounded btn-primary me-md-2"
                    type="button"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
