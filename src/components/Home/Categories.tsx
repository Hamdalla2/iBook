//  styles
import "../../styles/Categories.scss";

// libraries
import React, { useEffect, useState } from "react";

function Categories() {

  const [list, setList] = useState<any>({});

  useEffect(() => {
    fetch(`https://api.jsonbin.io/b/62641d1e25069545a327e403`)
      .then(response => response.json())
      .then(data => setList(data));
  }, [])

  return (
    <section className="categories" id="categories">
      <p className="categories-title">
        <b>Browse </b>
        <span>Our Most Popular Categories</span>
      </p>

      <fieldset className="categories-grid">
        {list?.categories?.map((category:any, i: number) =>
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
