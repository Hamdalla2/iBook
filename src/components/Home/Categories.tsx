// libraries
import React from "react";
import Data from '../../data/CategoriesList.json';

function Categories() {
  const { categories } = Data;

  return (
    <section className="categories" id="categories">
      <p className="categories-title">
        <b>Browse </b>
        <span>Our Most Popular Categories</span>
      </p>

      <fieldset className="categories-grid">
        {categories.map((category, i:number) =>
          <article className="category-item" key={i}>
            <a href={`#carousel-${category.title.replace(/'| /gi, '')}`}>
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
