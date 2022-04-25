// libraries
import React from "react";

// files
import Carousels from "./Carousels";
import Categories from "./Categories";

function Home() {
    return (
        <div className="home" id="home">
            <Categories />
            <Carousels />
        </div>
    );
}

export default Home;
