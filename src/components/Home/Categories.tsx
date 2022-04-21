// libraries
import React, { useEffect, useState } from "react";

function Categories() {

  const [list, setList] = useState<any>({});

  useEffect(() => {
    fetch(`http://localhost:5000/categorieslist`)
      .then(response => response.json())
      .then(data => setList(data[0]))
  }, [])

  const { categories } = list;

  return (
    <section className="categories" id="categories">
      <p className="categories-title">
        <b>Browse </b>
        <span>Our Most Popular Categories</span>
      </p>

      <fieldset className="categories-grid">
        {categories?.map((category, i: number) =>
          <article className="category-item" key={i}>
            <a href={`#carouselContainer${category.href}`}>
              <img className="category-image" src={category.image} alt={`category${category.id}`} />
            </a>
            <div className="category-details">
              <p className="category-title">{category.title}</p>
              <p className="category-discription">{category.description}</p>
            </div>
          </article>
        )}
      </fieldset>
    </section>
  );
}

export default Categories;
