// styles
import "../styles/Footer.scss";

// libraries
import React from "react";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <section className="footer-section footer-navigation">
        <p className="footer-title">Navigation</p>
        <ul className="footer-list">
          <li className="footer-list-item"><a href="#home">Home</a></li>
          <li className="footer-list-item"><a href="#books">Books</a></li>
          <li className="footer-list-item"><a href="#reviews">Reviews</a></li>
          <li className="footer-list-item"><a href="#news">News</a></li>
          <li className="footer-list-item"><a href="#footer">Contacts</a></li>
        </ul>
      </section>
      <section className="footer-section footer-categories">
        <p className="footer-title">Categories</p>
        <ul className="footer-list">
          <li className="footer-list-item"><a href="#art">Art</a></li>
          <li className="footer-list-item"><a href="#home">Biography</a></li>
          <li className="footer-list-item"><a href="#home">Business</a></li>
          <li className="footer-list-item"><a href="#home">Chick Lit</a></li>
          <li className="footer-list-item"><a href="#home">Children's</a></li>
          <li className="footer-list-item"><a href="#home">Christian</a></li>
          <li className="footer-list-item"><a href="#home">Classics</a></li>
          <li className="footer-list-item"><a href="#home">Comics</a></li>
          <li className="footer-list-item"><a href="#home">Contemporary</a></li>
          <li className="footer-list-item"><a href="#home">Cookbooks</a></li>
          <li className="footer-list-item"><a href="#home">Crime</a></li>
          <li className="footer-list-item"><a href="#home">Ebooks</a></li>
          <li className="footer-list-item"><a href="#home">Fantasy</a></li>
          <li className="footer-list-item"><a href="#home">Fiction</a></li>
          <li className="footer-list-item"><a href="#home">Gay And Lesbian</a></li>
          <li className="footer-list-item"><a href="#home">Graphic Novels</a></li>
          <li className="footer-list-item"><a href="#home">Historical Fiction</a></li>
          <li className="footer-list-item"><a href="#home">History</a></li>
          <li className="footer-list-item"><a href="#home">Horror</a></li>
          <li className="footer-list-item"><a href="#home">Humor And Comedy</a></li>
          <li className="footer-list-item"><a href="#home">Manga</a></li>
          <li className="footer-list-item"><a href="#home">Memoir</a></li>
          <li className="footer-list-item"><a href="#home">Music</a></li>
        </ul>
      </section>
      <section className="footer-section footer-contact">
        <p className="footer-title">Follow Us</p>
        <ul className="footer-list">
          <li className="footer-list-item"><a href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
          <li className="footer-list-item"><a href="https://www.twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
          <li className="footer-list-item"><a href="#home">RSS</a></li>
        </ul>
      </section>
    </footer>
  );
}

export default Footer;
