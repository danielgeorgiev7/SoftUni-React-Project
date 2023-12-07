import { useEffect, useRef, useState } from "react";
import postsDateFormatting from "../../utils/postsDateFormating";
import { putComments } from "../../services/commentService";
import "./CommentItem.css";
/* eslint-disable react-hooks/exhaustive-deps */

function CommentItem({ commentObj, userId, deleteCommentHandler }) {
  const [editable, setEditable] = useState(false);
  const [comment, setComment] = useState(commentObj.comment);
  const [beforeEdit, setBeforeEdit] = useState(commentObj.comment);
  const [edited, setEdited] = useState(commentObj.edited);
  const [commentNewLiners, setCommentNewLiners] = useState(0);
  const [style, setStyle] = useState({ height: 4 + "rem" });
  const [errorMessage, setErrorMessage] = useState("");
  const CommentEditField = useRef();

  useEffect(
    function () {
      if (editable) {
        CommentEditField.current?.focus();
        const inputElement = CommentEditField.current;
        inputElement.setSelectionRange(
          inputElement.value.length,
          inputElement.value.length
        );
      }
    },
    [editable]
  );

  useEffect(
    function () {
      function handleKeyDown(e) {
        if (e.key === "Enter") {
          setCommentNewLiners((state) => state + 1);
        }
        if (e.key === "Backspace") {
          const lastNewlineIndex = e.target.value.lastIndexOf("\n");
          if (
            lastNewlineIndex === e.target.value.length - 1 &&
            commentNewLiners !== 0
          ) {
            setCommentNewLiners((state) => state - 1);
          }
        } else if (
          e.key === " " &&
          e.target.value[e.target.value.length - 1] === " "
        ) {
          e.preventDefault();
        }
      }

      const length = Math.ceil(comment.length / 37.9);
      if (length + commentNewLiners > 1) {
        setStyle({ height: 4 + (length - 1 + commentNewLiners) * 2 + "rem" });
      } else {
        setStyle({ height: 4 + "rem" });
      }

      if (CommentEditField?.current) {
        CommentEditField?.current?.addEventListener("keydown", handleKeyDown);
        return () => {
          CommentEditField?.current?.removeEventListener(
            "keydown",
            handleKeyDown
          );
        };
      }
    },
    [comment, commentNewLiners, CommentEditField]
  );

  function editCommentHandler() {
    setEditable(true);
    setBeforeEdit(comment);
  }

  async function editSaveClickHandler() {
    if (comment.trim() !== beforeEdit && comment.trim() !== "") {
      const result = await putComments(commentObj._id, {
        ...commentObj,
        comment: comment.trim(),
        edited: true,
      });
      if (!result.code) {
        setEdited(true);
        setEditable(false);
        setErrorMessage("");
      } else {
        setErrorMessage("We're unable to post your comment right now.");
      }
    } else if (comment.trim() === "") {
      setErrorMessage("Comment can't be blank.");
    }
    setCommentNewLiners(0);
    setComment(comment.trim());
  }

  function editCancelClickHandler() {
    setErrorMessage("");
    setCommentNewLiners(0);
    setComment(beforeEdit);
    setEditable(false);
  }

  return (
    <div className="feed-comment-item">
      <div className="feed-comment-item-upper">
        <img
          className="feed-comment-item-img"
          src={commentObj.ownerImg}
          alt={`${commentObj.ownerUsername} profile photo`}
        />
        <h3>{commentObj.ownerUsername}</h3>
        <span>Posted on: {postsDateFormatting(commentObj._createdOn)}</span>
      </div>

      <textarea
        style={style}
        className={`feed-comment-item-input ${
          editable ? "comment-input-active" : ""
        }`}
        readOnly={!editable}
        disabled={!editable}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        ref={CommentEditField}
      ></textarea>
      <p className="comment-item-edited">{edited && !editable && "Edited"}</p>
      {editable && (
        <>
          <div className="comment-item-save-cancel">
            <a onClick={editSaveClickHandler}>Save</a>
            <a onClick={editCancelClickHandler}>Cancel</a>
          </div>
          <p className="error-placeholder">{errorMessage}</p>
        </>
      )}
      {commentObj._ownerId === userId && (
        <div className="feed-comment-item-buttons">
          <a
            className={editable ? "feed-post-like-btn" : ""}
            onClick={editCommentHandler}
          >
            Edit
          </a>
          <a onClick={() => deleteCommentHandler(commentObj._id)}>Delete</a>
        </div>
      )}
    </div>
  );
}

export default CommentItem;
