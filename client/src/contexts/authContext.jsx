import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPosts } from "../services/postService";
import { getLikes } from "../services/likeService";
import { getComments } from "../services/commentService";
import { getUser } from "../services/userService";
import * as authService from "../services/authService";
import usePersistedState from "../hooks/usePersistedState";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [auth, setAuth] = usePersistedState("auth", {});
  const [errorMessage, setErrorMessage] = useState("");
  const [posts, setPosts] = useState([]);
  const [likes, setLikes] = useState([]);
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState(null);

  /* eslint-disable react-hooks/exhaustive-deps */

  useEffect(function () {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken !== null) setLoggedIn(true);
  }, []);

  useEffect(
    function () {
      if (loggedIn) {
        getPosts().then((posts) =>
          posts.code
            ? setErrorMessage(posts.message)
            : setPosts(posts.reverse())
        );
        getLikes().then((likes) =>
          likes.code
            ? setErrorMessage(likes.message)
            : setLikes(Object.values(likes))
        );
        getComments().then((comments) =>
          comments.code
            ? setErrorMessage(likes.message)
            : setComments(Object.values(comments))
        );
        getUser().then((user) =>
          user.code ? setErrorMessage(user.message) : setUser(user)
        );
      }
    },
    [loggedIn]
  );

  const loginSubmitHandler = async (values) => {
    const result = await authService.login(values.email, values.password);

    if (!result.code) {
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
      values.password,
      values.img
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

  function getCurrentPostLikes(id) {
    const currentPostLikes = likes.filter((likeObj) => likeObj.postId === id);
    return currentPostLikes;
  }

  function getCurrentPostComments(id) {
    const currentPostComments = comments.filter(
      (commentObj) => commentObj.postId === id
    );
    return currentPostComments;
  }

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
    posts,
    setPosts,
    likes,
    setLikes,
    getCurrentPostLikes,
    comments,
    setComments,
    getCurrentPostComments,
    user,
    setUser,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

AuthContext.displayName = "AuthContext";

export default AuthContext;
