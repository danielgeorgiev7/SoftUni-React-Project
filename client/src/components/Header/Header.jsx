import { useContext, useEffect, useState } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import AuthContext from "../../contexts/authContext";

function Header() {
  const location = useLocation();
  // console.log(location);
  const [isActiveNav, setIsActiveNav] = useState("home");
  const { user, loggedIn } = useContext(AuthContext);

  useEffect(() => {
    let locationPath = location.pathname.substring(1).split("/")[0];
    setIsActiveNav(locationPath || "home");
  }, [location.pathname]);

  return (
    <div className="header">
      <Link to="/" onClick={() => setIsActiveNav("home")}>
        <img className="logo" src="/logo.png" alt="Vista Madridista logo" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link
              className={`nav-btn ${isActiveNav === "home" && "btn-active"}`}
              onClick={() => setIsActiveNav("home")}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`nav-btn ${
                isActiveNav === "fixtures" && "btn-active"
              }`}
              onClick={() => setIsActiveNav("fixtures")}
              to="/fixtures"
            >
              Fixtures
            </Link>
          </li>
          <li>
            <Link
              className={`nav-btn ${isActiveNav === "players" && "btn-active"}`}
              onClick={() => setIsActiveNav("players")}
              to="/players"
            >
              Players
            </Link>
          </li>
          <li>
            <Link
              className={`nav-btn ${isActiveNav === "la-liga" && "btn-active"}`}
              onClick={() => setIsActiveNav("la-liga")}
              to="/la-liga"
            >
              La Liga
            </Link>
          </li>
          <li>
            <Link
              className={`nav-btn ${
                isActiveNav === "champions-league" && "btn-active"
              }`}
              onClick={() => setIsActiveNav("champions-league")}
              to="/champions-league"
            >
              Champions League
            </Link>
          </li>

          {localStorage.accessToken ? (
            <>
              <li>
                <Link
                  className={`nav-btn ${
                    isActiveNav === "profile" && "btn-active"
                  }`}
                  onClick={() => setIsActiveNav("profile")}
                  to="/profile"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  className={"nav-btn"}
                  onClick={() => setIsActiveNav("home")}
                  to="/logout"
                >
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  className={`nav-btn ${
                    isActiveNav === "register" && "btn-active"
                  }`}
                  onClick={() => setIsActiveNav("register")}
                  to="/register"
                >
                  Register
                </Link>
              </li>
              <li>
                <Link
                  className={`nav-btn ${
                    isActiveNav === "login" && "btn-active"
                  }`}
                  onClick={() => setIsActiveNav("login")}
                  to="/login"
                >
                  Login
                </Link>
              </li>
            </>
          )}
          {loggedIn && (
            <li className="hello-user">Logged as {user?.username}</li>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
