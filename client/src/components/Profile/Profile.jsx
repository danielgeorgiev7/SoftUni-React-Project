// import { useContext, useState } from "react";
// import { putUser } from "../../services/userService";
import { useContext } from "react";
import AuthContext from "../../contexts/authContext";
import postsDateFormatting from "../../utils/postsDateFormating";
import "./Profile.css";

function Profile() {
  const { user, errorMessage } = useContext(AuthContext);
  // const { user, setUser } = useContext(AuthContext);
  // const accessToken = localStorage.getItem("accessToken");
  // const [inputValue, setInputValue] = useState("");
  // const [previewDisabled, setPreviewDisabled] = useState(false);
  // const [customPhoto, setCustomPhoto] = useState(user?.img);
  // const [imgError, setImgError] = useState("");

  if (errorMessage !== "")
    return <p className="error-placeholder main-error">{errorMessage}</p>;

  if (user === null) return;
  // function previewClickHandler() {
  //   if (inputValue !== "") {
  //     setCustomPhoto(inputValue);
  //     setPreviewDisabled(true);
  //     setImgError(false);
  //   } else {
  //     setImgError("Link field is required");
  //   }
  // }

  // function cancelClickHandler() {
  //   setCustomPhoto("");
  //   setImgError(false);
  //   setPreviewDisabled(false);
  //   setInputValue("");
  // }

  // function imgErrorHandler() {
  //   setImgError("Linked image couldn't load");
  //   setCustomPhoto(""); // user?.img ?
  //   setPreviewDisabled(false);
  //   setInputValue("");
  // }

  // async function onSaveClickHandler() {
  //   // if (imgError) return;
  //   setUser({ ...user, img: customPhoto });
  //   putUser(user, customPhoto, accessToken);
  //   setInputValue("");
  //   setPreviewDisabled(false);
  // }

  return (
    <div className="profile-wrapper">
      <div className="profile-heading-wrapper">
        <h2 className="profile-heading">User Profile</h2>
      </div>
      <div className="profile-section-wrapper">
        <div className="profile-section">
          <img
            // src={customPhoto ? customPhoto : user?.img}
            src={user?.img}
            alt={`${user?.username}'s profile photo`}
            // onError={imgErrorHandler}
          />
          <div className="profile-info">
            <p>Username:</p>
            <span>{user?.username}</span>
            <p>Email address:</p>
            <span>{user?.email}</span>
            <p>Joined on:</p>
            <span>{postsDateFormatting(user?._createdOn)}</span>
          </div>
        </div>
      </div>
      {/* <div className="profile-link-img">
        <p>Link other image:</p>
        <input
          className={previewDisabled ? "profile-link-img-disabled" : ""}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          readOnly={previewDisabled}
          disabled={previewDisabled}
        />
      </div>
      <p className="error-placeholder">{imgError}</p>
      <div className="profile-link-buttons">
        <a
          onClick={previewClickHandler}
          className={`profile-button-preview${
            previewDisabled ? "-disabled" : ""
          }`}
          disabled={previewDisabled}
        >
          Preview
        </a>

        <a
          onClick={onSaveClickHandler}
          className={`profile-button-save${
            !previewDisabled ? "-disabled" : ""
          }`}
        >
          Save
        </a>
        <a onClick={cancelClickHandler} className="profile-button-cancel">
          Cancel
        </a>
      </div> */}
    </div>
  );
}

export default Profile;
