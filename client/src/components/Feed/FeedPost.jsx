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
  //    editPost(post._id);
  //    setPosts((state) =>
  //      state.filter((statePost) => statePost._id !== post._id)
  //    );
  //  }
  return (
    <div className="feed-post-wrapper">
      <h3 className="feed-post-username">{post.ownerUsername}</h3>
      <p className="feed-post-content">{post.content}</p>
      {post.img && (
        <img
          src={post.img}
          alt={`${post.ownerUsername}'s attached to post photo`}
        />
      )}
      <span className="feed-post-timestamp">
        Posted on {postsDateFormat(post._createdOn)}
      </span>
      {post._ownerId === JSON.parse(localStorage.auth)._id && (
        <div className="feed-post-butons">
          <button className="feed-post-delete-btn" onClick={deleteHandler}>
            Delete
          </button>
          <button className="feed-post-edit-btn" onClick={editHandler}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
}

export default FeedPost;
