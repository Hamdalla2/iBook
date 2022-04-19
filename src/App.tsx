// styles
import "./styles/App.scss";

// libraries
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// files
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import Book from "./components/Book/Book";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
