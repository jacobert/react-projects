import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTour }) => {
  //console.log("qui", tours);
  return (
    <section>
      <div className="title">
        <h2>Ours tours</h2>
        <div className="underline"></div>
        <div>
          {tours.map((tour) => {
            return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Tours;
