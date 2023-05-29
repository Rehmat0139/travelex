import React from "react";

import BlogItem1 from "./BlogItem1";
import BlogItem2 from "./BlogItem2";

const Blogs = () => {
  return (
    <>
      <div className="container-fluid" id="Blogs" style={{backgroundColor:'#8e9eab'}}>
        <div className="container">
        <h1 class="display-4 mb-4 fw-bold text-dark">Blogs</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deleniti dolor molestiae tenetur quibusdam odit ea velit et delectus nam!</p>
          <div className="row justify-content-center">
            <div className="col-md-7 col-sm-12 p-1 m-1">
                 <BlogItem1/>
            </div>
            <div className="col-md-4 col-sm-12 p-3 m-1">
                <BlogItem2/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
