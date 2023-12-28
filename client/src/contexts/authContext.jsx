import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPosts } from "../services/postService";
import { getLikes } from "../services/likeService";
import { getComments } from "../services/commentService";
import { getUser, getUserImg, postUserImg } from "../services/userService";
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
  const [userImg, setUserImg] = useState(null);
  const [allImages, setAllImages] = useState(null);
  /* eslint-disable react-hooks/exhaustive-deps */

  useEffect(function () {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken !== null) setLoggedIn(true);
  }, []);

  useEffect(
    function () {
      if (loggedIn) {
        getPosts().then((postsData) =>
          postsData instanceof Error
            ? setErrorMessage(postsData)
            : setPosts(postsData.reverse())
        );
        getLikes().then((likesData) =>
          likesData instanceof Error
            ? setErrorMessage(likesData.message)
            : setLikes(Object.values(likesData))
        );
        getComments().then((commentsData) =>
          commentsData instanceof Error
            ? setErrorMessage(commentsData.message)
            : setComments(Object.values(commentsData))
        );
        getUser().then((userData) =>
          userData instanceof Error
            ? setErrorMessage(userData.message)
            : setUser(userData)
        );
        getUserImg().then((userImagesData) =>
          userImagesData instanceof Error
            ? setErrorMessage(userImagesData.message)
            : setAllImages(userImagesData)
        );
      }
    },
    [loggedIn]
  );

  useEffect(
    function () {
      if (user !== null && allImages !== null) {
        console.log(allImages);
        setUserImg(allImages.filter((each) => each._ownerId === user._id)["0"]);
      }
    },
    [user]
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
      values.password
    );

    if (!result.code) {
      setAuth(result);

      postUserImg("/default-user.png", result.accessToken);

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
    userImg,
    setUserImg,
    allImages,
    setAllImages,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

AuthContext.displayName = "AuthContext";

export default AuthContext;
