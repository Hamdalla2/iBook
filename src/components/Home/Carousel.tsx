// libraries
import debounce from 'lodash.debounce';
import { Link } from "react-router-dom";
import React, { useState, useRef } from "react";

// files
import Data from "../../data/categories";

interface Props {
  category: string,
  i: number
}

function Carousel({ category, i }: Props) {
  const carouselPosition = useRef(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const divisor: number = screenWidth < 768 ? 1 : screenWidth < 1024 ? 3 : 5;
  const seekNumber: number = Math.floor((Data[category].books.length - 1) / divisor);
  const distance: number = divisor === 1 ? 150 : divisor === 3 ? 150:150;

  window.addEventListener('resize', debounce(() => { setScreenWidth(window.innerWidth); carouselPosition.current = 0; document.getElementById(`carousel-${category}`).style.transform = "translateX(0)" }, 500));

  const carouselPrev = (category: string) => {
    if (++carouselPosition.current > 0) carouselPosition.current = -seekNumber;
    document.getElementById(`carousel-${category}`).style.transform = "translateX(" + (carouselPosition.current * distance) + "vw)";
  }
  const carouselNext = (category: string) => {
    if (--carouselPosition.current < -seekNumber) carouselPosition.current = 0;
    document.getElementById(`carousel-${category}`).style.transform = "translateX(" + (carouselPosition.current * distance) + "vw)";
  }

  return (
    <fieldset className="carousel-container" key={i}>
      <p className="carousel-title">{Data[category].title}</p>

      <div className="carousel" id={`carousel-${category}`}>
        {Data[category].books.map((book: any, o: number) =>
          <article className="book" key={o}>
            <Link to="/book" state={{ id: book.id }}>
              <img className="book-image" src={book.image} alt={`book${book.id}`} />
            </Link>
            <div className="book-details">
              <p className="book-title">{book.title}</p>
              <p className="book-author">By {book.author}</p>
              <p className="book-reviewedBy">Reviewed by {book.reviewedBy}</p>
            </div>
          </article>
        )}
      </div>

      <div className="arrow-left">
        <button type="button" className="prev" onClick={() => { carouselPrev(category) }}>&#x2039;</button>
      </div>
      <div className="arrow-right">
        <button type="button" className="next" onClick={() => { carouselNext(category) }}>&#x203a;</button>
      </div>
    </fieldset>
  );
}

export default Carousel;
