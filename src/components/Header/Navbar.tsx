// libraries
import React, { useState } from "react";

// files
import Data from "../../data/categories";

function Header() {
    const [showBooksMenu, setShowBooksMenu] = useState(false);
    const blurBooksMenu = (e) => !e.relatedTarget?.classList.contains("navbar-sub-item-link") ? setShowBooksMenu(false) : '';
    return (
        <nav className="navbar">
            <ul className="navbar-main-menu">
                <li className="navbar-main-item"><a href="/home#home">Home</a></li>
                <li className="navbar-main-item" onClick={() => { setShowBooksMenu(!showBooksMenu) }} onBlur={(e) => blurBooksMenu(e)} tabIndex={-1}>
                    Books<i className="arrow-down">⯆</i>
                    <div className="sub-menu-books" style={{ display: showBooksMenu ? "flex" : "none" }}>
                        <ul className="navbar-sub-menu">
                            {Object.keys(Data).map((category: string, i: number) =>
                                <li className="navbar-sub-item" key={i}><a href={`/home#carousel-${category}`} className="navbar-sub-item-link">{category}</a></li>
                            )}
                        </ul>
                    </div>
                </li>
                <li className="navbar-main-item"><a href="#reviews">Reviews</a></li>
                <li className="navbar-main-item"><a href="#news">News</a></li>
                <li className="navbar-main-item"><a href="#footer">Contacts</a></li>
                <li className="navbar-main-item"><a href="#search">🔍︎</a></li>
            </ul>
        </nav>
    );
}

export default Header;
