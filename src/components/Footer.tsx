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
          <li className="footer-list-item"><a href="#home"><div>Home</div></a></li>
          <li className="footer-list-item"><a href="#books"><div>Books</div></a></li>
          <li className="footer-list-item"><a href="#reviews"><div>Reviews</div></a></li>
          <li className="footer-list-item"><a href="#news"><div>News</div></a></li>
          <li className="footer-list-item"><a href="#footer"><div>Contacts</div></a></li>
        </ul>
      </section>
      <span className="vertical-line" />
      <section className="footer-section footer-categories">
        <p className="footer-title">Categories</p>
        <ul className="footer-list">
          <li className="footer-list-item"><a href="#art"><div>Art</div></a></li>
          <li className="footer-list-item"><a href="#biography"><div>Biography</div></a></li>
          <li className="footer-list-item"><a href="#business"><div>Business</div></a></li>
          <li className="footer-list-item"><a href="#chick"><div>Chick Lit</div></a></li>
          <li className="footer-list-item"><a href="#children"><div>Children's</div></a></li>
          <li className="footer-list-item"><a href="#christian"><div>Christian</div></a></li>
          <li className="footer-list-item"><a href="#classics"><div>Classics</div></a></li>
          <li className="footer-list-item"><a href="#comics"><div>Comics</div></a></li>
          <li className="footer-list-item"><a href="#contemporary"><div>Contemporary</div></a></li>
          <li className="footer-list-item"><a href="#cookbooks"><div>Cookbooks</div></a></li>
          <li className="footer-list-item"><a href="#crime"><div>Crime</div></a></li>
          <li className="footer-list-item"><a href="#ebooks"><div>Ebooks</div></a></li>
          <li className="footer-list-item"><a href="#fantasy"><div>Fantasy</div></a></li>
          <li className="footer-list-item"><a href="#fiction"><div>Fiction</div></a></li>
          <li className="footer-list-item"><a href="#gay"><div>Gay And Lesbian</div></a></li>
          <li className="footer-list-item"><a href="#graphic"><div>Graphic Novels</div></a></li>
          <li className="footer-list-item"><a href="#historical"><div>Historical Fiction</div></a></li>
          <li className="footer-list-item"><a href="#history"><div>History</div></a></li>
          <li className="footer-list-item"><a href="#horror"><div>Horror</div></a></li>
          <li className="footer-list-item"><a href="#humor"><div>Humor And Comedy</div></a></li>
          <li className="footer-list-item"><a href="#manga"><div>Manga</div></a></li>
          <li className="footer-list-item"><a href="#memoir"><div>Memoir</div></a></li>
          <li className="footer-list-item"><a href="#music"><div>Music</div></a></li>
        </ul>
      </section>
      <span className="vertical-line" />
      <section className="footer-section footer-contact">
        <p className="footer-title">Follow Us</p>
        <ul className="footer-list">
          <li className="footer-list-item"><a href="https://www.facebook.com" target="_blank" rel="noreferrer"><div>Facebook</div></a></li>
          <li className="footer-list-item"><a href="https://www.twitter.com" target="_blank" rel="noreferrer"><div>Twitter</div></a></li>
          <li className="footer-list-item"><a href="#rss"><div>RSS</div></a></li>
        </ul>
      </section>
    </footer>
  );
}

export default Footer;
