import "./Home.css";
function Home() {
  return (
    <div className="home-section-wrapper">
      <div className="home-section">
        <div className="home-text">
          <h2>Join the best Real Madrid community platform!</h2>
          <p className="here-you-can">Here you can:</p>
          <p>- Find all season fixtures with match and player details</p>
          <p>- Stay up to date with La Liga and Champions League standings</p>
          <p>- Post, Like and Comment anything regarding our favourite club</p>
        </div>
        <div className="home-buttons">
          <a className="sign-up-btn">Sign Up</a>
          <a className="login-btn">Login</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
