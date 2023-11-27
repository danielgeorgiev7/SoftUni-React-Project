import { useState } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
function Header() {
  const location = useLocation();
  const [isActive, setIsActive] = useState(
    location.pathname === "/"
      ? "home"
      : location.pathname.substring(1).split("/")[0]
  );
  return (
    <div className="header">
      <Link to="/" onClick={() => setIsActive("home")}>
        <img className="logo" src="/logo.png" alt="Vista Madridista logo" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link
              className={`nav-btn ${isActive === "home" && "btn-active"}`}
              onClick={() => setIsActive("home")}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`nav-btn ${isActive === "fixtures" && "btn-active"}`}
              onClick={() => setIsActive("fixtures")}
              to="/fixtures"
            >
              Fixtures
            </Link>
          </li>
          <li>
            <Link
              className={`nav-btn ${isActive === "players" && "btn-active"}`}
              onClick={() => setIsActive("players")}
              to="/players"
            >
              Players
            </Link>
          </li>
          <li>
            <Link
              className={`nav-btn ${isActive === "la-liga" && "btn-active"}`}
              onClick={() => setIsActive("la-liga")}
              to="/la-liga"
            >
              La Liga
            </Link>
          </li>
          <li>
            <Link
              className={`nav-btn ${
                isActive === "champions-league" && "btn-active"
              }`}
              onClick={() => setIsActive("champions-league")}
              to="/champions-league"
            >
              Champions League
            </Link>
          </li>
          <li>
            <Link
              className={`nav-btn ${isActive === "profile" && "btn-active"}`}
              onClick={() => setIsActive("profile")}
              to="/profile"
            >
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
