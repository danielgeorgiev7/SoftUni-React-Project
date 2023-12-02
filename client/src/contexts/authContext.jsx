import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as authService from "../services/authService";
import usePersistedState from "../hooks/usePersistedState";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [auth, setAuth] = usePersistedState("auth", {});
  const [errorMessage, setErrorMessage] = useState("");

  const loginSubmitHandler = async (values) => {
    const result = await authService.login(values.email, values.password);

    if (!result.code) {
      console.log(result);
      setAuth(result);

      localStorage.setItem("accessToken", result.accessToken);

      setLoggedIn(true);
      navigate("/");
    } else {
      setErrorMessage(result.message);
    }
  };

  const registerSubmitHandler = async (values) => {
    const result = await authService.register(
      values.username,
      values.email,
      values.password
    );
    if (!result.code) {
      setAuth(result);

      localStorage.setItem("accessToken", result.accessToken);

      setLoggedIn(true);
      navigate("/");
    } else {
      setErrorMessage(result.message);
    }
  };

  const logoutHandler = () => {
    setAuth({});
    setLoggedIn(false);
    localStorage.removeItem("accessToken");
  };

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    username: auth.username || auth.email,
    email: auth.email,
    userId: auth._id,
    isAuthenticated: !!auth.accessToken,
    errorMessage,
    setErrorMessage,
    loggedIn,
    setLoggedIn,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

AuthContext.displayName = "AuthContext";

export default AuthContext;
