// styles
import "../../styles/Header.scss";

// libraries
import React from "react";

// file
import Navbar from "./Navbar";

function Header() {
    return (
        <header className="header">
            <a href="/" className="header-logo">
                <b className="header-logo-book">Books</b>
                <span className="header-logo-reviews">Reviews</span>
            </a>
            <Navbar />
        </header>
    );
}

export default Header;
