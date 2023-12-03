import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";
import "./Login.css";
import isValidEmail from "../../utils/isValidEmail";
/* eslint-disable react-hooks/exhaustive-deps */

function Login() {
  const { loginSubmitHandler, errorMessage, setErrorMessage } =
    useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(
    loginSubmitHandler,
    {
      email: "",
      password: "",
    },
    false
  );

  function submitHandler(e) {
    e.preventDefault();
    if (values.email === "") {
      setErrorMessage("Email field is required");
    } else if (!isValidEmail(values.email)) {
      setErrorMessage("Provided email isn't valid");
    } else if (values.password === "") {
      setErrorMessage("Password field is required");
    } else if (values.password.length < 6) {
      setErrorMessage("Password must be at least 6 characters");
    } else {
      e.preventDefault();
      setErrorMessage("");
      onSubmit();
    }
  }

  useEffect(() => setErrorMessage(""), []);
  return (
    <div className="login-section">
      <div className="login-wrapper">
        <h2>Welcome back!</h2>
        <form className="login-form" id="login" onSubmit={submitHandler}>
          <label htmlFor="login-email">Email address:</label>
          <input
            className={
              errorMessage === "Email field is required" ||
              errorMessage === "Provided email isn't valid"
                ? "field-error"
                : ""
            }
            type="text"
            id="login-email"
            name="email"
            onChange={onChange}
            value={values.email}
            autoComplete="username"
          />
          <label htmlFor="login-password">Password:</label>
          <input
            className={
              errorMessage === "Password field is required" ||
              errorMessage === "Password must be at least 6 characters"
                ? "field-error"
                : ""
            }
            type="password"
            id="login-password"
            name="password"
            onChange={onChange}
            value={values.password}
            autoComplete="current-password"
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
