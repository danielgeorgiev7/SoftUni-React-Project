import { useContext, useEffect, useState } from "react";
import { deletePost, editPost } from "../../services/postService";
import AuthContext from "../../contexts/authContext";
import { deleteLikes, putLikes } from "../../services/likeService";
import CommentItem from "./CommentItem";
import { deleteComments, postComments } from "../../services/commentService";
import postsDateFormatting from "../../utils/postsDateFormating";

export function FeedPost({ post }) {
  const userId = JSON.parse(localStorage.auth)._id;
  const ownerUsername = JSON.parse(localStorage.auth).username;
  const ownerImg = JSON.parse(localStorage.auth).img;

  const [editable, setEditable] = useState(false);
  const [postContent, setPostContent] = useState(post.content);
  const [beforeEditContent, setBeforeEditContent] = useState(post.content);
  const {
    setPosts,
    setLikes,
    setComments,
    getCurrentPostLikes,
    getCurrentPostComments,
  } = useContext(AuthContext);
  const [currentPostLikes, setCurrentPostLikes] = useState([]);
  const [liked, setLiked] = useState(null);
  const [currentPostComments, setCurrentPostComments] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [addCommentValue, setAddCommentValue] = useState("");

  useEffect(() => {
    const allPostLikes = getCurrentPostLikes(post._id)["0"];
    setCurrentPostLikes(allPostLikes);

    const allPostComments = getCurrentPostComments(post._id);
    setCurrentPostComments(allPostComments);

    if (allPostLikes?.likes) {
      setLiked(allPostLikes?.likes.includes(userId));
    }
  }, [getCurrentPostLikes, getCurrentPostComments, post._id, userId]);

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

  function commentsClickHandler(e) {
    if (editable) editCancelClickHandler();
    e.preventDefault();
    setCommentsOpen((state) => !state);
  }

  function editClickHandler(e) {
    e.preventDefault();
    setCommentsOpen(false);
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
    if (postContent !== beforeEditContent) {
      const result = await editPost(post._id, {
        ...post,
        content: postContent,
      });
      if (!result.code) {
        setEditable(false);
      }
    } else {
      setEditable(false);
    }
  }

  async function addCommentHandler() {
    if (addCommentValue !== "") {
      const result = await postComments(
        post._id,
        addCommentValue,
        ownerUsername,
        ownerImg
      );
      if (!result.code) {
        setAddCommentValue("");
        setCurrentPostComments((current) => [...current, result]);
        setComments((current) => [...current, result]);
      }
    }
  }

  function deleteCommentHandler(id) {
    deleteComments(id);
    setComments((comments) => comments.filter((comment) => comment._id !== id));
  }

  return (
    <form className="feed-post-wrapper">
      <div className="feed-post-upper-layer">
        <img src={post.ownerImg} alt={`${post.ownerUsername} profile photo`} />
        <h3 className="feed-post-username">{post.ownerUsername}</h3>
        <p className="feed-post-timestamp">
          Posted on: <span>{postsDateFormatting(post._createdOn)}</span>
        </p>
      </div>
      <div className="feed-post-content-wrapper">
        {post.content !== "" && (
          <input
            type="text"
            readOnly={!editable}
            disabled={!editable}
            className={`feed-post-content${post.img ? "-with-img" : ""} ${
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
          className={liked === true ? "feed-post-like-btn" : ""}
          onClick={likeClickHandler}
        >
          {liked ? "Liked" : "Like"}
          {currentPostLikes?.likes?.length !== 0 &&
            ` (${currentPostLikes?.likes?.length})`}
        </button>
        <button
          className={commentsOpen === true ? "feed-post-active-btn" : ""}
          onClick={commentsClickHandler}
        >
          Comments
          {currentPostComments?.length !== 0 &&
            ` (${currentPostComments?.length})`}
        </button>
        {post._ownerId === JSON.parse(localStorage.auth)._id && (
          <>
            <button
              className={`feed-post-edit-btn ${
                editable ? "feed-post-active-btn" : ""
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
      {commentsOpen && (
        <div className="feed-comments">
          {currentPostComments.map((commentObj) => (
            <CommentItem
              commentObj={commentObj}
              userId={userId}
              deleteCommentHandler={deleteCommentHandler}
              key={`comment-item-${commentObj._id}`}
            />
          ))}
          <div className="feed-post-add-comment">
            <input
              type="text"
              className="feed-post-comment-input"
              value={addCommentValue}
              onChange={(e) => setAddCommentValue(e.target.value)}
            />
            <a className="feed-add-comment-button" onClick={addCommentHandler}>
              Add comment
            </a>
          </div>
        </div>
      )}
    </form>
  );
}

export default FeedPost;
