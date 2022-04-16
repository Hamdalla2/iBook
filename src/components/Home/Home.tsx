// styles
import "../../styles/Carousels.scss";
import "../../styles/Categories.scss";

// libraries
import React from "react";

// files
import Carousel from "./Carousels";
import Categories from "./Categories";

function Home() {
    return (
        <div className="home" id="home">
            <Categories />
            <Carousel />
        </div>
    );
}

export default Home;
