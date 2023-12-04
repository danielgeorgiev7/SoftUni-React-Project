import { useContext } from "react";
import useForm from "../../hooks/useForm";
import { createPost } from "../../services/postService";
import "./Feed.css";
import AuthContext from "../../contexts/authContext";
import { postLikes } from "../../services/likeService";

function WritePost() {
  const { setPosts, setErrorMessage, errorMessage, setLikes } =
    useContext(AuthContext);
  const ownerUsername = JSON.parse(localStorage.auth).username;
  const ownerImg = JSON.parse(localStorage.auth).img;

  const { values, onChange, onSubmit } = useForm(createPost, true, {
    ownerUsername,
    content: "",
    ownerImg,
    img: "",
  });

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
        rows="4"
        cols="50"
        placeholder="Type something..."
        onChange={onChange}
        value={values.content}
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
