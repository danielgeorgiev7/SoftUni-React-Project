import { useEffect, useRef, useState } from "react";
import postsDateFormatting from "../../utils/postsDateFormating";
import { putComments } from "../../services/commentService";
import "./CommentItem.css";

function CommentItem({ commentObj, userId, deleteCommentHandler }) {
  const [editable, setEditable] = useState(false);
  const [comment, setComment] = useState(commentObj.comment);
  const [beforeEdit, setBeforeEdit] = useState(commentObj.comment);
  const [edited, setEdited] = useState(commentObj.edited);
  const CommentEditField = useRef();
  const [style, setStyle] = useState({ height: 4 + "rem" });

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
      const length = Math.ceil(comment.length / 38);
      if (length > 1) {
        setStyle({ height: 4 + (length - 1) * 2 + "rem" });
      } else {
        setStyle({ height: 4 + "rem" });
      }
    },
    [comment.length]
  );

  function editCommentHandler() {
    setEditable(true);
    setBeforeEdit(comment);
  }

  async function editSaveClickHandler() {
    if (comment !== beforeEdit && comment !== "") {
      console.log(comment);
      const result = await putComments(commentObj._id, {
        ...commentObj,
        content: comment,
        edited: true,
      });
      if (!result.code) {
        setEdited(true);
        setEditable(false);
      }
    } else if (comment !== "") {
      setEditable(false);
    }
  }

  function editCancelClickHandler() {
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
        <div className="comment-item-save-cancel">
          <a onClick={editSaveClickHandler}>Save</a>
          <a onClick={editCancelClickHandler}>Cancel</a>
        </div>
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
