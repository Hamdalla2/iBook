// libraries
import React from "react";

// files
import Carousel from "./Carousel";
import Data from "../../data/categories";

function Carousels() {
  return (
    <section className="carousels" id="books">
      {Object.keys(Data).map((category: string, i: number) =>
        <Carousel category={category} i={i} key={i} />
      )}
    </section>
  );
}

export default Carousels;
