import "./Feed.css";
import WritePost from "./WritePost";
function Feed() {
  return (
    <div className="feed-section">
      <div className="feed-wrapper">
        <WritePost />
      </div>
    </div>
  );
}

export default Feed;
