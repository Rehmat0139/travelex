import React from "react";
import CardItems from "./CardItems";
import { DetailFeatures } from "./Content";

const Cards = () => {
  return (
    <div className="container my-3 ">
      <h2>Destinations</h2>
      <div className="row">
        {DetailFeatures.map((features)=>{
          return  <div className="col-md-4">
            <CardItems tittle={features.tittle} desc={features.desc} imgUrl={features.img}/>
            </div>
        })}
      </div>
    </div>
  );
};

export default Cards;


// .map((each) => {
//   return (
//       <div className="col-md-4">
//         <CardItems
//           title="my title"
//           desc="Description"
//           imgUrl="img"
//         />
//       </div>
//     </div>
//   );
// })