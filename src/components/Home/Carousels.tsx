// libraries
import React, { useEffect, useState } from "react";

// files
import Carousel from "./Carousel";

function Carousels() {
  const [list, setList] = useState<any>({});

  useEffect(() => {
    fetch(`https://api.jsonbin.io/b/626617f325069545a328c5e3`)
      .then(response => response.json())
      .then(data => setList(data))
  }, [])

  return (
    <section className="carousels" id="books">
      {Object.keys(list)?.map((category: any, i: number) =>
        <Carousel books={list[category].books} title={category} linkTarget={list[category].href} i={i} key={i} />
      )}
    </section>
  );
}

export default Carousels;
