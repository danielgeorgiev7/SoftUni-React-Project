import { useContext, useEffect, useRef, useState } from "react";
import { deletePost, editPost } from "../../services/postService";
import { deleteLikes, putLikes } from "../../services/likeService";
import { deleteComments, postComments } from "../../services/commentService";
import AuthContext from "../../contexts/authContext";
import CommentItem from "./CommentItem";
import postsDateFormatting from "../../utils/postsDateFormating";
import "./FeedPost.css";
/* eslint-disable react-hooks/exhaustive-deps */

export function FeedPost({ post }) {
  const {
    setPosts,
    setLikes,
    setComments,
    getCurrentPostLikes,
    getCurrentPostComments,
  } = useContext(AuthContext);

  const userId = JSON.parse(localStorage.auth)._id;
  const ownerUsername = JSON.parse(localStorage.auth).username;
  const ownerImg = JSON.parse(localStorage.auth).img;

  const [postContent, setPostContent] = useState(post.content);
  const [beforeEditContent, setBeforeEditContent] = useState(post.content);
  const [editable, setEditable] = useState(false);
  const [liked, setLiked] = useState(null);
  const [currentPostLikes, setCurrentPostLikes] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [currentPostComments, setCurrentPostComments] = useState([]);
  const [addCommentValue, setAddCommentValue] = useState("");
  const PostEditField = useRef();
  const AddCommentField = useRef(null);

  const [errorMessage, setErrorMessage] = useState({
    addComment: "",
    postEdit: "",
  });
  const [commentNewLiners, setCommentNewLiners] = useState({
    addComment: 0,
    postEdit: 0,
  });
  const [style, setStyle] = useState({
    addComment: { height: 4.1 + "rem" },
    postEdit: { height: 4.1 + "rem" },
  });

  useEffect(() => {
    const allPostLikes = getCurrentPostLikes(post._id)["0"];
    setCurrentPostLikes(allPostLikes);

    const allPostComments = getCurrentPostComments(post._id);
    setCurrentPostComments(allPostComments);

    if (allPostLikes?.likes) {
      setLiked(allPostLikes?.likes.includes(userId));
    }
  }, [getCurrentPostLikes, getCurrentPostComments, post._id, userId]);

  useEffect(
    function () {
      if (editable) {
        PostEditField.current?.focus();
        const inputElement = PostEditField.current;
        inputElement.setSelectionRange(
          inputElement.value.length,
          inputElement.value.length
        );
      }
      if (commentsOpen) {
        AddCommentField.current?.focus({ preventScroll: true });
        const inputElement = PostEditField.current;
        inputElement.setSelectionRange(
          inputElement.value.length,
          inputElement.value.length
        );
      }
    },
    [editable, commentsOpen]
  );

  useEffect(
    function () {
      function handleKeyDown(e) {
        if (e.key === "Enter") {
          setCommentNewLiners((state) => {
            return {
              ...state,
              [e.target.name]: state[e.target.name] + 1,
            };
          });
        }
        if (e.key === "Backspace") {
          const lastNewlineIndex = e.target.value.lastIndexOf("\n");
          if (
            lastNewlineIndex === e.target.value.length - 1 &&
            commentNewLiners[e.target.name] !== 0
          ) {
            setCommentNewLiners((state) => {
              return {
                ...state,
                [e.target.name]: state[e.target.name] - 1,
              };
            });
          }
        } else if (
          e.key === " " &&
          e.target.value[e.target.value.length - 1] === " "
        ) {
          e.preventDefault();
        }
      }
      const addCommentLength = Math.ceil(addCommentValue.length / 39.9);
      if (addCommentLength + commentNewLiners.addComment > 1) {
        setStyle((prevState) => {
          return {
            ...prevState,
            addComment: {
              height:
                4.1 +
                (addCommentLength - 1 + commentNewLiners.addComment) * 2 +
                "rem",
            },
          };
        });
      } else {
        setStyle((prevState) => {
          return {
            ...prevState,
            addComment: {
              height: 4.1 + "rem",
            },
          };
        });
      }
      const postContentLength = Math.ceil(postContent.length / 44.9);
      if (postContentLength + commentNewLiners.postEdit > 1) {
        setStyle((prevState) => {
          return {
            ...prevState,
            postEdit: {
              height:
                4.1 +
                (postContentLength - 1 + commentNewLiners.postEdit) * 2.2 +
                "rem",
            },
          };
        });
      } else {
        setStyle((prevState) => {
          return {
            ...prevState,
            postEdit: {
              height: 4.1 + "rem",
            },
          };
        });
      }
      if (AddCommentField?.current) {
        AddCommentField.current.addEventListener("keydown", handleKeyDown);
      }
      if (PostEditField?.current) {
        PostEditField.current.addEventListener("keydown", handleKeyDown);
      }
      return () => {
        if (AddCommentField?.current) {
          AddCommentField.current.removeEventListener("keydown", handleKeyDown);
        }
        if (PostEditField?.current) {
          PostEditField.current.removeEventListener("keydown", handleKeyDown);
        }
      };
    },
    [
      addCommentValue,
      postContent,
      AddCommentField,
      PostEditField,
      commentNewLiners,
    ]
  );

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
    setAddCommentValue("");
    setEditable(true);
  }

  function deleteClickHandler() {
    const hasConfirmed = confirm(`Are you sure you want to delete this post?`);
    if (hasConfirmed) {
      deleteLikes(currentPostLikes?._id);
      setLikes((state) => state.filter((like) => like.postId !== post._id));
    }

    deletePost(post._id);
    setPosts((state) =>
      state.filter((statePost) => statePost._id !== post._id)
    );
  }

  async function editSaveClickHandler() {
    if (postContent.trim() !== beforeEditContent && postContent.trim() !== "") {
      const result = await editPost(post._id, {
        ...post,
        content: postContent.trim(),
      });
      if (!result.code) {
        setEditable(false);
        setErrorMessage((state) => {
          return {
            ...state,
            postEdit: "",
          };
        });
      } else {
        setErrorMessage((state) => {
          return {
            ...state,
            postEdit: "We're unable to post your comment right now.",
          };
        });
      }
    } else if (postContent.trim() === "") {
      setErrorMessage((state) => {
        return {
          ...state,
          postEdit: "Comment can't be blank.",
        };
      });
    }
    setCommentNewLiners((state) => {
      return {
        ...state,
        postEdit: 0,
      };
    });
    setPostContent(postContent.trim());
  }

  function editCancelClickHandler() {
    setErrorMessage((state) => {
      return {
        ...state,
        postEdit: "",
      };
    });
    setCommentNewLiners((state) => {
      return {
        ...state,
        postEdit: 0,
      };
    });
    setPostContent(beforeEditContent);
    setEditable(false);
  }

  async function addCommentHandler() {
    if (addCommentValue.trim() !== "") {
      const result = await postComments(
        post._id,
        addCommentValue.trim(),
        ownerUsername,
        ownerImg
      );
      if (!result.code) {
        setCurrentPostComments((current) => [...current, result]);
        setComments((current) => [...current, result]);
      } else {
        setErrorMessage((state) => {
          return {
            ...state,
            addComment: "Sorry, we couldn't add your comment",
          };
        });
      }
    } else {
      setErrorMessage((state) => {
        return {
          ...state,
          addComment: "Comment can't be blank",
        };
      });
    }
    setAddCommentValue("");
    setCommentNewLiners((state) => {
      return {
        ...state,
        addComment: 0,
      };
    });
  }

  function deleteCommentHandler(id) {
    const hasConfirmed = confirm(
      `Are you sure you want to delete this comment?`
    );
    if (hasConfirmed) {
      deleteComments(id);
      setComments((comments) =>
        comments.filter((comment) => comment._id !== id)
      );
    }
  }

  function onChangeAddComment(e) {
    setAddCommentValue(e.target.value);
    setErrorMessage((state) => {
      return {
        ...state,
        addComment: "",
      };
    });
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
          <textarea
            name="postEdit"
            type="text"
            readOnly={!editable}
            disabled={!editable}
            style={style.postEdit}
            className={`feed-post-content${post.img ? "-with-img" : ""} ${
              editable ? "post-input-editable" : ""
            }`}
            onChange={(e) => setPostContent(e.target.value)}
            value={postContent}
            ref={PostEditField}
          />
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
      <p
        className={`error-placeholder ${
          errorMessage.postEdit === "" ? "save-cancel-hidden" : ""
        }`}
        style={{ textAlign: "center" }}
      >
        {errorMessage.postEdit}
      </p>
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
            <textarea
              name="addComment"
              ref={AddCommentField}
              style={style.addComment}
              type="text"
              className="feed-post-comment-input"
              value={addCommentValue}
              onChange={onChangeAddComment}
            />
            <p
              className={`error-placeholder ${
                errorMessage.addComment === "" ? "save-cancel-hidden" : ""
              }`}
              style={{ textAlign: "center", margin: 0.5 + "rem" }}
            >
              {errorMessage.addComment}
            </p>
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
