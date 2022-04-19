// styles
import "../../styles/Book.scss";

// libraries
import React from "react";
import { useLocation } from 'react-router-dom';

// files
import Data from "../../data/books";

function Book() {
    const location = useLocation();
    const state: any = location.state;
    const id = state.id;
    const book = Data[`Book${id}`];
    const { title, image, author, reviewedBy, publishedOn, description } = book;

    return (
        <figure className="selected-book">
            <img src={image} alt="book-cover" className="selected-book-image" />
            <p className="selected-book-title">{title}</p>
            <p className="selected-book-author">Author: {author}</p>
            <p className="selected-book-reviewer">Reviewer: {reviewedBy}</p>
            <p className="selected-book-date">Published: {publishedOn}</p>
            <pre className="selected-book-description">{description.replace(/\. /gi, "\n")}</pre>
        </figure>
    );
}

export default Book;
