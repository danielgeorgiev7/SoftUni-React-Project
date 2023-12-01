import "./Feed.css";
function WritePost() {
  return (
    <form className="write-post">
      <label htmlFor="write-post" className="write-post-label">
        Write a post:
      </label>
      <textarea
        id="w3review"
        name="w3review"
        rows="4"
        cols="50"
        placeholder="Type something..."
      ></textarea>
      <div className="link-post-wrapper">
        <label htmlFor="link-img" className="link-img-label">
          Link image:
        </label>
        <input type="text" className="link-img-input" />

        <input type="submit" className="post-button" value="Post" />
      </div>
    </form>
  );
}

export default WritePost;
