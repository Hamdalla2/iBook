// libraries
import React, { useEffect, useState } from "react";

// files
import Carousel from "./Carousel";

function Carousels() {
  const [list, setList] = useState<any>({});

  useEffect(() => {
    fetch(`http://localhost:5000/categorieslist`)
      .then(response => response.json())
      .then(data => setList(data[0]))
  }, [])

  const { categories } = list;

  return (
    <section className="carousels" id="books">
      {categories?.map((category: any, i: number) =>
        <Carousel title={category.title} i={i} key={i} />
      )}
    </section>
  );
}

export default Carousels;
