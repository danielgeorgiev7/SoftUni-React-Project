import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";
import "./Login.css";

function Login() {
  const { loginSubmitHandler, errorMessage, setErrorMessage } =
    useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
    email: "",
    password: "",
  });

  useEffect(() => setErrorMessage(""), [setErrorMessage]);
  return (
    <div className="login-section">
      <div className="login-wrapper">
        <h2>Welcome again!</h2>
        <form className="login-form" id="login" onSubmit={onSubmit}>
          <label htmlFor="login-email">Email address:</label>
          <input
            type="email"
            id="login-email"
            name="email"
            onChange={onChange}
            value={values.email}
            autoComplete="username"
            required
          />
          <label htmlFor="login-password">Password:</label>
          <input
            type="password"
            id="login-password"
            name="password"
            onChange={onChange}
            value={values.password}
            autoComplete="current-password"
            required
          />
          <p
            className={
              errorMessage ? "error-placeholder" : "error-placeholder-hidden"
            }
          >
            {errorMessage}
          </p>
          <input type="submit" className="login-button" value="Login" />
          <p className="login-to-register">
            Haven&apos;t registered yet?{" "}
            <Link to="/register" className="login-to-register-link">
              Sign up now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
