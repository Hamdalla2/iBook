// styles
import "../../styles/Book.scss";

// libraries
import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from "react";

function Book() {
    const location = useLocation();
    const state: any = location.state;
    const id: number = state?.id;
    const [books, setBooks] = useState<any>({});

    useEffect(() => {
        fetch(`https://api.jsonbin.io/b/6266225d019db467969141a2`)
            .then(response => response.json())
            .then(data => setBooks(data))
    }, [])

    const book = books[id];

    return (
        book ?
            <figure className="selected-book">
                <img src={book.image} alt="book-cover" className="selected-book-image" />
                <div className="selected-book-details">
                    <p className="selected-book-title">{book.title}</p>
                    <p className="selected-book-author">Author: {book.author}</p>
                    <p className="selected-book-reviewer">Reviewer: {book.reviewedBy}</p>
                    <p className="selected-book-date">Published: {book.publishedOn}</p>
                    <pre className="selected-book-description">{book.description?.replace(/\. |, /gi, "\n")}</pre>
                </div>
            </figure>
            : <></>
    );
}

export default Book;
