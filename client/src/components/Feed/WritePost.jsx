import { useContext, useEffect, useState } from "react";
import { createPost } from "../../services/postService";
import { postLikes } from "../../services/likeService";
import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";
import "./WritePost.css";

function WritePost({ WritePostField }) {
  const { setPosts, setErrorMessage, errorMessage, setLikes } =
    useContext(AuthContext);
  const ownerUsername = JSON.parse(localStorage.auth).username;
  const ownerImg = JSON.parse(localStorage.auth).img;
  const [style, setStyle] = useState({ height: 7 + "rem" });

  const { values, onChange, onSubmit } = useForm(createPost, true, {
    ownerUsername,
    ownerImg,
    content: "",
    img: "",
  });

  useEffect(
    function () {
      const length = Math.ceil(values.content.length / 40.9);
      if (length > 2) {
        setStyle({ height: 7 + (length - 2) * 2.3 + "rem" });
      } else {
        setStyle({ height: 7 + "rem" });
      }
    },
    [values.content.length]
  );

  async function onSubmitHandler(e) {
    e.preventDefault();
    if (values.content === "" && values.img === "") {
      return;
    } else {
      const postResult = await onSubmit();
      if (!postResult.code) {
        setPosts((state) => [postResult, ...state]);
      } else {
        setErrorMessage(postResult.message);
      }
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
