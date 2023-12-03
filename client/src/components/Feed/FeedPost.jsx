import { useContext, useState } from "react";
import { deletePost, editPostContent } from "../../services/postService";
import postsDateFormat from "../../utils/postsDateFormating";
import AuthContext from "../../contexts/authContext";

export function FeedPost({ post }) {
  const [editable, setEditable] = useState(false);
  const [postContent, setPostContent] = useState(post.content);
  const [beforeEditContent, setBeforeEditContent] = useState(post.content);
  const { setPosts } = useContext(AuthContext);

  function deleteClickHandler() {
    deletePost(post._id);
    setPosts((state) =>
      state.filter((statePost) => statePost._id !== post._id)
    );
  }

  function editClickHandler(e) {
    setBeforeEditContent(postContent);
    e.preventDefault();
    setEditable(true);
  }

  function editCancelClickHandler() {
    setPostContent(beforeEditContent);
    setEditable(false);
  }

  async function editSaveClickHandler() {
    const result = await editPostContent(post._id, {
      ...post,
      content: postContent,
    });
    console.log(result);
    setEditable(false);
  }

  return (
    <form className="feed-post-wrapper">
      <div className="feed-post-upper-layer">
        <img src={post.ownerImg} alt="" />
        <h3 className="feed-post-username">{post.ownerUsername}</h3>
        <p className="feed-post-timestamp">
          Posted on: <span>{postsDateFormat(post._createdOn)}</span>
        </p>
      </div>
      <div className="feed-post-content-wrapper">
        {post.content !== "" && (
          <input
            type="text"
            readOnly={!editable}
            disabled={!editable}
            className={`feed-post-content ${
              editable ? "post-input-editable" : ""
            }`}
            onChange={(e) => setPostContent(e.target.value)}
            value={postContent}
          ></input>
        )}
      </div>
      <div
        className={`edit-btn-save-cancel ${
          !editable ? "save-cancel-hidden" : ""
        }`}
      >
        <a onClick={editSaveClickHandler}>Save</a>
        <a onClick={editCancelClickHandler}>Cancel</a>
      </div>
      {post.img && (
        <img
          className="feed-post-img"
          src={post.img}
          alt={`${post.ownerUsername}'s attached to post photo`}
        />
      )}
      <div className="feed-post-buttons">
        <button className="feed-post-like-btn">Like</button>
        <button className="feed-post-comments-btn">Comments</button>
        {post._ownerId === JSON.parse(localStorage.auth)._id && (
          <>
            <button
              className={`feed-post-edit-btn ${
                editable ? "post-button-clicked" : ""
              }`}
              onClick={editClickHandler}
            >
              Edit
            </button>
            <button
              className="feed-post-delete-btn"
              onClick={deleteClickHandler}
            >
              Delete
            </button>
          </>
        )}
      </div>
    </form>
  );
}

export default FeedPost;
