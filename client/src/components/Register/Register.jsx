import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";
import "./Register.css";
import isValidEmail from "../../utils/isValidEmail";
/* eslint-disable react-hooks/exhaustive-deps */

function Register() {
  const { registerSubmitHandler, errorMessage, setErrorMessage } =
    useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(registerSubmitHandler, false, {
    username: "",
    email: "",
    password: "",
    img: "/default-user.png",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const registerFirstInput = useRef();

  useEffect(function () {
    setErrorMessage("");
    registerFirstInput.current.focus();
  }, []);

  function onChangeConfirmPassword(e) {
    setConfirmPassword(e.target.value);
    setErrorMessage("");
  }

  function submitHandler(e) {
    e.preventDefault();
    if (values.username === "") {
      setErrorMessage("Username field is required");
    } else if (values.username < 5) {
      setErrorMessage("Username must be at least 4 characters");
    } else if (values.username > 17) {
      setErrorMessage("Username cannot be longer than 16 characters");
    } else if (values.email === "") {
      setErrorMessage("Email field is required");
    } else if (!isValidEmail(values.email)) {
      setErrorMessage("Provided email isn't valid");
    } else if (values.password === "" && confirmPassword === "") {
      setErrorMessage("Password fields are required");
    } else if (values.password === "") {
      setErrorMessage("Password field is required");
    } else if (values.password.length < 6) {
      setErrorMessage("Password must be at least 6 characters");
    } else if (confirmPassword === "") {
      setErrorMessage("Confirm password field is required");
    } else if (values.password !== confirmPassword) {
      setErrorMessage("Passwords don't match");
    } else {
      e.preventDefault();
      setErrorMessage("");
      onSubmit();
    }
  }
  return (
    <div className="register-section">
      <div className="register-wrapper">
        <h2>Welcome to our community!</h2>
        <form className="register-form" id="register" onSubmit={submitHandler}>
          <label htmlFor="register-username">Username:</label>
          <input
            className={
              errorMessage === "Username field is required" ||
              errorMessage === "Username must be at least 4 characters" ||
              errorMessage === "Username cannot be longer than 16 characters"
                ? "field-error"
                : ""
            }
            maxLength="17"
            placeholder="@username"
            type="text"
            id="register-username"
            name="username"
            onChange={onChange}
            value={values.username}
            autoComplete="off"
            ref={registerFirstInput}
          />
          <label htmlFor="register-email">Email address:</label>
          <input
            className={
              errorMessage === "Email field is required" ||
              errorMessage === "Provided email isn't valid" ||
              errorMessage === "A user with the same email already exists"
                ? "field-error"
                : ""
            }
            placeholder="email@example.com"
            type="text"
            id="register-email"
            name="email"
            onChange={onChange}
            value={values.email}
            autoComplete="email"
          />

          <label htmlFor="register-password">Password:</label>
          <input
            className={
              errorMessage === "Password fields are required" ||
              errorMessage === "Password field is required" ||
              errorMessage === "Password must be at least 6 characters" ||
              errorMessage === "Passwords don't match"
                ? "field-error"
                : ""
            }
            type="password"
            id="register-password"
            name="password"
            onChange={onChange}
            value={values.password}
            autoComplete="password"
          />
          <label htmlFor="register-confirm-password">Confirm Password:</label>
          <input
            className={
              errorMessage === "Password fields are required" ||
              errorMessage === "Confirm password field is required" ||
              errorMessage === "Passwords don't match"
                ? "field-error"
                : ""
            }
            type="password"
            id="register-confirm-password"
            name="password"
            onChange={onChangeConfirmPassword}
            autoComplete="off"
            value={confirmPassword}
          />
          <p
            className={
              errorMessage ? "error-placeholder" : "error-placeholder-hidden"
            }
          >
            {errorMessage}
          </p>
          <input type="submit" className="register-button" value="Register" />
          <p className="register-to-login">
            Already registered?{" "}
            <Link to="/login" className="register-to-login-link">
              Login now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
