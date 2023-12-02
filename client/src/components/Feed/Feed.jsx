import "./Feed.css";
// import FeedPost from "./FeedPost";
import WritePost from "./WritePost";
// import { getPosts } from "../../services/postService";
function Feed() {
  return (
    <div className="feed-section">
      <div className="feed-wrapper">
        <WritePost />
        <div className="posts">
          <h2>Posts</h2>
        </div>
      </div>
    </div>
  );
}

export default Feed;
