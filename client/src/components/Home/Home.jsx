import { Link } from "react-router-dom";
import "./Home.css";
import Feed from "../Feed/Feed";

function Home() {
  const accessToken = localStorage.getItem("accessToken");
  return accessToken === null ? (
    <div className="home-section-wrapper">
      <div className="home-section">
        <div className="home-text">
          <h2>Join the best Real Madrid community platform!</h2>
          <p className="here-you-can">Here you can:</p>
          <p>- Find all seasonal fixtures with match and player details</p>
          <p>- Stay up to date with La Liga and Champions League standings</p>
          <p>- Post, Like and Comment anything regarding our favourite club</p>
        </div>
        <div className="home-button">
          <Link to="/register" className="sign-up-btn">
            Sign Up Now
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <Feed />
  );
}

export default Home;
