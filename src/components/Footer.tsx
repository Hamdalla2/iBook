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
          <li className="footer-list-item"><a href="#home"><div className="footer-list-link" tabIndex={-1}>Home</div></a></li>
          <li className="footer-list-item"><a href="#books"><div className="footer-list-link" tabIndex={-1}>Books</div></a></li>
          <li className="footer-list-item"><a href="#reviews"><div className="footer-list-link" tabIndex={-1}>Reviews</div></a></li>
          <li className="footer-list-item"><a href="#news"><div className="footer-list-link" tabIndex={-1}>News</div></a></li>
          <li className="footer-list-item"><a href="#footer"><div className="footer-list-link" tabIndex={-1}>Contacts</div></a></li>
        </ul>
      </section>
      <section className="footer-section footer-categories">
        <p className="footer-title">Categories</p>
        <ul className="footer-list">
          <li className="footer-list-item"><a href="#art"><div className="footer-list-link" tabIndex={-1}>Art</div></a></li>
          <li className="footer-list-item"><a href="#biography"><div className="footer-list-link" tabIndex={-1}>Biography</div></a></li>
          <li className="footer-list-item"><a href="#business"><div className="footer-list-link" tabIndex={-1}>Business</div></a></li>
          <li className="footer-list-item"><a href="#chick"><div className="footer-list-link" tabIndex={-1}>Chick Lit</div></a></li>
          <li className="footer-list-item"><a href="#childrens"><div className="footer-list-link" tabIndex={-1}>Children's</div></a></li>
          <li className="footer-list-item"><a href="#christian"><div className="footer-list-link" tabIndex={-1}>Christian</div></a></li>
          <li className="footer-list-item"><a href="#classics"><div className="footer-list-link" tabIndex={-1}>Classics</div></a></li>
          <li className="footer-list-item"><a href="#comics"><div className="footer-list-link" tabIndex={-1}>Comics</div></a></li>
          <li className="footer-list-item"><a href="#contemporary"><div className="footer-list-link" tabIndex={-1}>Contemporary</div></a></li>
          <li className="footer-list-item"><a href="#cookbooks"><div className="footer-list-link" tabIndex={-1}>Cookbooks</div></a></li>
          <li className="footer-list-item"><a href="#crime"><div className="footer-list-link" tabIndex={-1}>Crime</div></a></li>
          <li className="footer-list-item"><a href="#ebooks"><div className="footer-list-link" tabIndex={-1}>Ebooks</div></a></li>
          <li className="footer-list-item"><a href="#fantasy"><div className="footer-list-link" tabIndex={-1}>Fantasy</div></a></li>
          <li className="footer-list-item"><a href="#fiction"><div className="footer-list-link" tabIndex={-1}>Fiction</div></a></li>
          <li className="footer-list-item"><a href="#gay"><div className="footer-list-link" tabIndex={-1}>Gay and Lesbian</div></a></li>
          <li className="footer-list-item"><a href="#graphic"><div className="footer-list-link" tabIndex={-1}>Graphic Novels</div></a></li>
          <li className="footer-list-item"><a href="#historical"><div className="footer-list-link" tabIndex={-1}>Historical Fiction</div></a></li>
          <li className="footer-list-item"><a href="#history"><div className="footer-list-link" tabIndex={-1}>History</div></a></li>
          <li className="footer-list-item"><a href="#horror"><div className="footer-list-link" tabIndex={-1}>Horror</div></a></li>
          <li className="footer-list-item"><a href="#humor"><div className="footer-list-link" tabIndex={-1}>Humor and Comedy</div></a></li>
          <li className="footer-list-item"><a href="#manga"><div className="footer-list-link" tabIndex={-1}>Manga</div></a></li>
          <li className="footer-list-item"><a href="#memoir"><div className="footer-list-link" tabIndex={-1}>Memoir</div></a></li>
          <li className="footer-list-item"><a href="#music"><div className="footer-list-link" tabIndex={-1}>Music</div></a></li>
        </ul>
      </section>
      <section className="footer-section footer-contact">
        <p className="footer-title">Follow Us</p>
        <ul className="footer-list">
          <li className="footer-list-item"><a href="https://www.facebook.com" target="_blank" rel="noreferrer"><div className="footer-list-link" tabIndex={-1}>Facebook</div></a></li>
          <li className="footer-list-item"><a href="https://www.twitter.com" target="_blank" rel="noreferrer"><div className="footer-list-link" tabIndex={-1}>Twitter</div></a></li>
          <li className="footer-list-item"><a href="#rss"><div className="footer-list-link" tabIndex={-1}>RSS</div></a></li>
        </ul>
      </section>
    </footer>
  );
}

export default Footer;
