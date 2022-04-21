// styles
import "../../styles/Book.scss";

// libraries
import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from "react";

function Book() {
    const location = useLocation();
    const state: any = location.state;
    const id: number = state?.id;

    const [book, setBook] = useState<any>({});

    useEffect(() => {
        fetch(`http://localhost:5000/books/${id}`)
            .then(response => response.json())
            .then(data => setBook(data[0]))
    }, [id])

    const { title, image, author, reviewedBy, publishedOn, description } = book;

    return (
        <figure className="selected-book">
            <img src={image} alt="book-cover" className="selected-book-image" />
            <div className="selected-book-details">
                <p className="selected-book-title">{title}</p>
                <p className="selected-book-author">Author: {author}</p>
                <p className="selected-book-reviewer">Reviewer: {reviewedBy}</p>
                <p className="selected-book-date">Published: {publishedOn}</p>
                <pre className="selected-book-description">{description?.replace(/\. |, /gi, "\n")}</pre>
            </div>
        </figure>
    );
}

export default Book;
