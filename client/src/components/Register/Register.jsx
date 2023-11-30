import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";
import "./Register.css";
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

  function submitHandler(e) {
    e.preventDefault();
    if (confirmPassword === values.password) {
      onSubmit();
    } else {
      setErrorMessage("Passwords don't match");
    }
  }
  return (
    <div className="register-section">
      <div className="register-wrapper">
        <h2>Welcome to our community!</h2>
        <form className="register-form" id="register" onSubmit={submitHandler}>
          <label htmlFor="register-email">Email address:</label>
          <input
            type="email"
            id="register-email"
            name="email"
            onChange={onChange}
            value={values.email}
            autoComplete="username"
            required
          />
          <label htmlFor="register-password">Password:</label>
          <input
            type="password"
            id="register-password"
            name="password"
            onChange={onChange}
            value={values.password}
            autoComplete="password"
            required
          />
          <label htmlFor="register-confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="register-confirm-password"
            name="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            autoComplete="off"
            value={confirmPassword}
            required
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
