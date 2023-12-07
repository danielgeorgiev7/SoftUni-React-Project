import { useContext, useEffect, useState } from "react";
import { createPost } from "../../services/postService";
import { postLikes } from "../../services/likeService";
import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";
import "./WritePost.css";
/* eslint-disable react-hooks/exhaustive-deps */

function WritePost({ WritePostField }) {
  const { setPosts, setErrorMessage, errorMessage, setLikes } =
    useContext(AuthContext);
  const ownerUsername = JSON.parse(localStorage.auth).username;
  const ownerImg = JSON.parse(localStorage.auth).img;
  const [style, setStyle] = useState({ height: 7 + "rem" });
  const [commentNewLiners, setCommentNewLiners] = useState(0);
  const { values, onChange, onSubmit } = useForm(createPost, true, {
    ownerUsername,
    ownerImg,
    content: "",
    img: "",
  });

  useEffect(
    function () {
      function handleKeyDown(e) {
        if (e.key === "Enter") {
          setCommentNewLiners((state) => state + 1);
        }
        if (e.key === "Backspace") {
          const lastNewlineIndex = e.target.value.lastIndexOf("\n");
          if (
            lastNewlineIndex === e.target.value.length - 1 &&
            commentNewLiners !== 0
          ) {
            setCommentNewLiners((state) => state - 1);
          }
        } else if (
          e.key === " " &&
          e.target.value[e.target.value.length - 1] === " "
        ) {
          e.preventDefault();
        }
      }
      const length = Math.ceil(values.content.length / 40.9);
      if (length + commentNewLiners > 2) {
        setStyle({ height: 7 + (length - 2 + commentNewLiners) * 2.3 + "rem" });
      } else {
        setStyle({ height: 7 + "rem" });
      }

      if (WritePostField?.current) {
        WritePostField?.current?.addEventListener("keydown", handleKeyDown);
        return () => {
          WritePostField?.current?.removeEventListener(
            "keydown",
            handleKeyDown
          );
        };
      }
    },
    [values.content.length, commentNewLiners, WritePostField]
  );

  async function onSubmitHandler(e) {
    e.preventDefault();
    const isContentEmpty = /^\s*$/.test(values.content);
    if (isContentEmpty && values.img === "") {
      setErrorMessage("Post can't be empty without a linked photo.");
      setCommentNewLiners(0);
      values.content = "";
      return;
    } else {
      const postResult = await onSubmit();
      if (!postResult.code) {
        setPosts((state) => [postResult, ...state]);
      } else {
        setErrorMessage(postResult.message);
      }
      setCommentNewLiners(0);
      const likesResult = await postLikes(postResult._id, []);
      if (!likesResult.code) {
        setLikes((state) => [...state, likesResult]);
      }
    }
  }

  return (
    <form className="write-post" onSubmit={onSubmitHandler}>
      <label htmlFor="write-post" className="write-post-label">
        Write a post:
      </label>
      <textarea
        id="postContent"
        name="content"
        placeholder="Type something..."
        onChange={onChange}
        value={values.content}
        ref={WritePostField}
        style={style}
      ></textarea>
      <p
        className={
          errorMessage ? "error-placeholder" : "error-placeholder-hidden"
        }
      >
        {errorMessage}
      </p>
      <div className="link-post-wrapper">
        <label htmlFor="link-img" className="link-img-label">
          Link image:
        </label>
        <input
          type="text"
          className="link-img-input"
          name="img"
          onChange={onChange}
          value={values.img}
        />
        <input type="submit" className="post-button" value="Post" />
      </div>
    </form>
  );
}

export default WritePost;
