// styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/Carousels.scss";

// libraries
import React from "react";
import Slider from 'react-slick';
import { Link } from "react-router-dom";


interface Props {
  books: Array<any>,
  linkTarget: string,
  title: string,
  i: number
}

function Carousel({ books, title, linkTarget, i }: Props) {
  const settings = {
    rows: 1,
    arrows: true,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 900,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        }
      }
    ],
    draggable: true,
    adaptiveHeight: true,
  }

  return (
    <article className="carousel-container" id={`carouselContainer${linkTarget}`} key={i}>
      <p className="carousel-title">{title}</p>

      <div className="carousel" id={`carousel${linkTarget}`}>
        <Slider {...settings}>
          {books?.map((book: any, o: number) =>
            <div className="slide-container" key={o}>
              <div>
                <div>
                  <Link to="/book" state={{ id: book.id }}>
                    <img className="book-image" src={book.image} alt={`book${book.id}`} />
                  </Link>
                  <div className="book-details">
                    <p className="book-title">{book.title}</p>
                    <p className="book-author">By {book.author}</p>
                    <p className="book-reviewedBy">Reviewed by {book.reviewedBy}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Slider>
      </div>
    </article>
  );
}

export default Carousel;
