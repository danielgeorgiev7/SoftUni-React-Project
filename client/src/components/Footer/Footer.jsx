import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-sections">
          <div className="footer-section footer-section-copy">
            <h4>Vista Madridista</h4>
            <ul>
              <li>All rights reserved</li>
              <li>&copy;2023</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>About</h4>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Social</h4>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Pages</h4>
            <ul className="footer-pages">
              <Link to="/">Home</Link>
              <Link to="/fixtures">Fixtures</Link>
              <Link to="/la-liga">La Liga</Link>
              <Link to="/players">Players</Link>
              <Link to="/champions-league">Champions League</Link>
              <Link to="/profile">Profile</Link>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
