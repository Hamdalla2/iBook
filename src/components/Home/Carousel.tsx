// libraries
import debounce from 'lodash.debounce';
import { Link } from "react-router-dom";
import React, { useState, useRef, useEffect, useCallback } from "react";

interface Props {
  title: string,
  i: number
}

function Carousel({ title, i }: Props) {

  const [category, setCategory] = useState<any>({});

  useEffect(() => {
    fetch(`http://localhost:5000/categories/${title}`)
      .then(response => response.json())
      .then(data => setCategory(data[0]))
  }, [title])

  const carouselPosition = useRef(0);
  const [divisor, setDivisor] = useState<number>(1);
  const [distance, setDistance] = useState<number>(150);
  const [seekNumber, setSeekNumber] = useState<number>(0);
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  const measure = useCallback(() => {
    carouselPosition.current = 0;
    setScreenWidth(window.innerWidth);
    screenWidth < 700 ? setDivisor(1) : (screenWidth < 1024 && screenWidth >= 700 ? setDivisor(3) : setDivisor(5));
    setSeekNumber(Math.floor((category?.books?.length - 1) / divisor));
    divisor === 1 ? setDistance(150) : divisor === 3 ? setDistance(178) : setDistance(182.5);
  }, [screenWidth, divisor, category])

  const debouncedResize = useCallback(() => debounce(() => {
    setScreenWidth(window.innerWidth);
    measure();
    if (category.href) {
      document.getElementById(`carousel${category.href}`).style.transform = "translateX(0)";
    };
  }, 100), [category, measure]);

  useEffect(() => {
    measure();
    window.addEventListener('resize', debouncedResize());
  }, [debouncedResize, measure]);

  const carouselPrev = (category: any) => {
    if (++carouselPosition.current > 0) carouselPosition.current = -seekNumber;
    document.getElementById(`carousel${category.href}`).style.transform = "translateX(" + (carouselPosition.current * distance) + "vw)";
  }
  const carouselNext = (category: any) => {
    if (--carouselPosition.current < -seekNumber) carouselPosition.current = 0;
    document.getElementById(`carousel${category.href}`).style.transform = "translateX(" + (carouselPosition.current * distance) + "vw)";
  }

  return (
    <fieldset className="carousel-container" id={`carouselContainer${category.href}`} key={i}>
      <p className="carousel-title">{category.title}</p>

      <div className="carousel" id={`carousel${category.href}`}>
        {category?.books?.map((book: any, o: number) =>
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
