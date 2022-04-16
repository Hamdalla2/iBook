// styles
import "./styles/App.scss";

// libraries
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useRoutes } from 'react-router-dom';

// files
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import Book from "./components/Book/Book";
import Header from "./components/Header/Header";

// scripts
import Mouse from "./scripts/Mouse";

const Landing = () => useRoutes([
  { path: "/", element: <Home /> },
  { path: "/main", element: <Home /> },
  { path: "/mainpage", element: <Home /> },
  { path: "/home", element: <Home /> },
  { path: "/homepage", element: <Home /> },
  { path: "/landing", element: <Home /> },
  { path: "/landingpage", element: <Home /> }
]);

const App = () => {
  useEffect(() => Mouse(), []);

  return (
    <div className="container">
      <div className="cursor" id="cursor"></div>
      <Router>
        <Header />
        <Landing />
        <Routes>
          <Route path="/book" element={<Book />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
