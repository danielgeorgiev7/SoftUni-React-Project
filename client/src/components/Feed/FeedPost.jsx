import { useContext } from "react";
import { deletePost } from "../../services/postService";
import postsDateFormat from "../../utils/postsDateFormating";
import AuthContext from "../../contexts/authContext";

export function FeedPost({ post }) {
  const { setPosts } = useContext(AuthContext);
  function deleteHandler() {
    deletePost(post._id);
    setPosts((state) =>
      state.filter((statePost) => statePost._id !== post._id)
    );
  }

  //  function editHandler() {
  //    editPost();
  //    setPosts((state) =>
  //
  //    );
  //  }
  return (
    <div className="feed-post-wrapper">
      <div className="feed-post-upper-layer">
        <img src={post.ownerImg} alt="" />
        <h3 className="feed-post-username">{post.ownerUsername}</h3>
        <p className="feed-post-timestamp">
          Posted on: <span>{postsDateFormat(post._createdOn)}</span>
        </p>
      </div>
      <p className="feed-post-content">{post.content}</p>
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
            <button className="feed-post-edit-btn">Edit</button>
            <button className="feed-post-delete-btn" onClick={deleteHandler}>
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default FeedPost;
