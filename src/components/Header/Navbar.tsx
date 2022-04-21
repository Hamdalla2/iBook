// libraries
import React, { useEffect, useState } from "react";

function Header() {
    const [showBooksMenu, setShowBooksMenu] = useState(false);
    const blurBooksMenu = (e: any) => !e.relatedTarget?.classList.contains("navbar-sub-item-link") ? setShowBooksMenu(false) : '';

    const [list, setList] = useState<any>({});

    useEffect(() => {
      fetch(`http://localhost:5000/categorieslist`)
        .then(response => response.json())
        .then(data => setList(data[0]))
    }, [])
  
    const { categories } = list;

    return (
        <nav className="navbar">
            <ul className="navbar-main-menu">
                <li className="navbar-main-item"><a href="/">Home</a></li>
                <li className="navbar-main-item" id="booksMainMenu" onClick={() => { setShowBooksMenu(!showBooksMenu) }} onBlur={(e) => blurBooksMenu(e)}>
                    Books<i className="arrow-down" />
                    <div className="sub-menu-books" style={{ display: showBooksMenu ? "flex" : "none" }}>
                        <ul className="navbar-sub-menu">
                            {categories?.map((category: any, i: number) =>
                                <li className="navbar-sub-item" key={i}>
                                    <a href={`#carouselContainer${category.href}`} className="navbar-sub-item-link">
                                        <div className="navbar-sub-item-text">{category.title}</div>
                                    </a>
                                </li>
                            )}
                        </ul>
                    </div>
                </li>
                <li className="navbar-main-item"><a href="#reviews">Reviews</a></li>
                <li className="navbar-main-item"><a href="#news">News</a></li>
                <li className="navbar-main-item"><a href="#footer">Contacts</a></li>
                <li className="navbar-main-item" id="searchMainMenu"><a href="#search">🔍︎</a></li>
            </ul>
        </nav>
    );
}

export default Header;
