import "./Login.css";
function Login() {
  return (
    <div className="login-section">
      <div className="login-wrapper">
        <h2>Welcome again!</h2>
        <form className="login-form">
          <label htmlFor="email">Email address:</label>
          <input type="text" name="email" />
          <label htmlFor="email">Password:</label>
          <input type="password" name="password" />
        </form>
        <p className="error-placeholder"></p>
        <button className="login-section-button">Login</button>
      </div>
    </div>
  );
}

export default Login;
