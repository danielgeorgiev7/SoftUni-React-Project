import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";
import "./Register.css";
import isValidEmail from "../../utils/isValidEmail";
/* eslint-disable react-hooks/exhaustive-deps */

function Register() {
  const { registerSubmitHandler, errorMessage, setErrorMessage } =
    useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(
    registerSubmitHandler,
    {
      email: "",
      password: "",
    },
    false
  );
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => setErrorMessage(""), []);

  function onChangeConfirmPassword(e) {
    setConfirmPassword(e.target.value);
    setErrorMessage("");
  }

  function submitHandler(e) {
    e.preventDefault();
    if (values.email === "") {
      setErrorMessage("Email field is required");
    } else if (!isValidEmail(values.email)) {
      setErrorMessage("Provided email isn't valid");
    } else if (values.password === "" && confirmPassword === "") {
      setErrorMessage("Password fields are required");
    } else if (values.password === "") {
      setErrorMessage("Password field is required");
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
          <label htmlFor="register-email">Email address:</label>
          <input
            className={
              errorMessage === "Email field is required" ||
              errorMessage === "Provided email isn't valid"
                ? "field-error"
                : ""
            }
            type="email"
            id="register-email"
            name="email"
            onChange={onChange}
            value={values.email}
            autoComplete="username"
          />
          <label htmlFor="register-password">Password:</label>
          <input
            className={
              errorMessage === "Password fields are required" ||
              errorMessage === "Password field is required" ||
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
