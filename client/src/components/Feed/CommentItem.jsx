function CommentItem() {
  return (
    <div className="feed-comment-item">
      <div className="feed-comment-item-upper">
        <h3>User</h3>
        <span>Posted on date</span>
      </div>
      <input
        className="feed-comment-item-input"
        readOnly={true}
        disabled={true}
        value={"Comment Text"}
      ></input>

      <div className="feed-comment-item-buttons">
        <a>Edit</a>
        <a>Delete</a>
      </div>
    </div>
  );
}

export default CommentItem;
