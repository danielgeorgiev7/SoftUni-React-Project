import { useContext } from "react";
import useForm from "../../hooks/useForm";
import { createPost } from "../../services/postService";
import "./Feed.css";
import AuthContext from "../../contexts/authContext";

function WritePost() {
  const { setPosts, setErrorMessage, errorMessage } = useContext(AuthContext);
  const ownerUsername = JSON.parse(localStorage.auth).username;
  const { values, onChange, onSubmit } = useForm(
    createPost,
    {
      ownerUsername,
      content: "",
      img: "",
    },
    true
  );

  async function onSubmitHandler(e) {
    e.preventDefault();
    const result = await onSubmit();
    if (!result.code) {
      setPosts((state) => [...state, result]);
    } else {
      setErrorMessage(result.message);
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
        rows="4"
        cols="50"
        placeholder="Type something..."
        onChange={onChange}
        value={values.content}
      ></textarea>
      <p className="error-placeholder">{errorMessage}</p>
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
