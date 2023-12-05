import { useState } from "react";
import postsDateFormatting from "../../utils/postsDateFormating";
import { putComments } from "../../services/commentService";

function CommentItem({ commentObj, userId, deleteCommentHandler }) {
  const [editable, setEditable] = useState(false);
  const [comment, setComment] = useState(commentObj.comment);
  const [beforeEdit, setBeforeEdit] = useState(commentObj.comment);
  const [edited, setEdited] = useState(commentObj.edited);

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

      <input
        className={`feed-comment-item-input ${
          editable ? "comment-input-active" : ""
        }`}
        readOnly={!editable}
        disabled={!editable}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></input>
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