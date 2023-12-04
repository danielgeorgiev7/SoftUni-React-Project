import { useContext, useEffect, useState } from "react";
import { deletePost, editPost } from "../../services/postService";
import postsDateFormat from "../../utils/postsDateFormating";
import AuthContext from "../../contexts/authContext";
import { deleteLikes, putLikes } from "../../services/likeService";

export function FeedPost({ post }) {
  const userId = JSON.parse(localStorage.auth)._id;

  const [editable, setEditable] = useState(false);
  const [postContent, setPostContent] = useState(post.content);
  const [beforeEditContent, setBeforeEditContent] = useState(post.content);
  const { setPosts, getCurrentPostLikes, setLikes } = useContext(AuthContext);
  const [currentPostLikes, setCurrentPostLikes] = useState([]);
  const [liked, setLiked] = useState(null);
  useEffect(() => {
    const postLikes = getCurrentPostLikes(post._id)["0"];
    setCurrentPostLikes(postLikes);

    if (postLikes?.likes) {
      setLiked(postLikes?.likes.includes(userId));
    }
  }, [getCurrentPostLikes, post._id, userId]);

  async function likeClickHandler(e) {
    e.preventDefault();
    let likeOutcome;

    if (!liked) {
      likeOutcome = {
        ...currentPostLikes,
        likes: [...currentPostLikes.likes, userId],
      };
      setCurrentPostLikes((state) => {
        return {
          ...state,
          likes: [...state.likes, userId],
        };
      });
      setLikes((state) =>
        state.map(
          (_, index) =>
            (state[index] =
              state[index].postId === post._id
                ? {
                    ...state[index],
                    likes: [...state[index].likes, userId],
                  }
                : state[index])
        )
      );
      setLiked(true);
    } else {
      likeOutcome = {
        ...currentPostLikes,
        likes: currentPostLikes?.likes?.filter(
          (likedUser) => likedUser !== userId
        ),
      };
      setCurrentPostLikes((state) => {
        return {
          ...state,
          likes: state.likes.filter((likedUser) => likedUser !== userId),
        };
      });
      setLikes((state) =>
        state.map(
          (_, index) =>
            (state[index] =
              state[index].postId === post._id
                ? {
                    ...state[index],
                    likes: state[index].likes.filter(
                      (likedUser) => likedUser !== userId
                    ),
                  }
                : state[index])
        )
      );

      setLiked(false);
    }
    putLikes(currentPostLikes?._id, likeOutcome);
  }

  function editClickHandler(e) {
    e.preventDefault();
    setBeforeEditContent(postContent);
    setEditable(true);
  }

  function editCancelClickHandler() {
    setPostContent(beforeEditContent);
    setEditable(false);
  }

  function deleteClickHandler() {
    deleteLikes(currentPostLikes?._id);
    setLikes((state) => state.filter((like) => like.postId !== post._id));

    deletePost(post._id);
    setPosts((state) =>
      state.filter((statePost) => statePost._id !== post._id)
    );
  }

  async function editSaveClickHandler() {
    const result = await editPost(post._id, {
      ...post,
      content: postContent,
    });
    if (!result.code) {
      setEditable(false);
    }
  }

  return (
    <form className="feed-post-wrapper">
      <div className="feed-post-upper-layer">
        <img src={post.ownerImg} alt={`${post.ownerUsername} profile photo`} />
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
        <button
          className={`feed-post-like-btn ${
            liked === true && "feed-post-liked"
          }`}
          onClick={likeClickHandler}
        >
          {liked ? "Liked" : "Like"}
          {currentPostLikes?.likes?.length !== 0 &&
            ` (${currentPostLikes?.likes?.length})`}
        </button>
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
