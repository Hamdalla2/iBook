// styles
import "../../styles/Header.scss";

// libraries
import React from "react";
import { Link } from "react-router-dom";

// file
import Navbar from "./Navbar";

function Header() {
    return (
        <header className="header">
            <Link to="/home" className="header-logo">
                <b className="header-logo-book">Books</b>
                <span className="header-logo-reviews">Reviews</span>
            </Link>

            <Navbar />
        </header>
    );
}

export default Header;
