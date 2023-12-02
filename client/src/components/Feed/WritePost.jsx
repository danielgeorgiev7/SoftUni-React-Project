import useForm from "../../hooks/useForm";
import { createPost } from "../../services/postService";
import "./Feed.css";

function WritePost() {
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

  return (
    <form className="write-post" onSubmit={onSubmit}>
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
