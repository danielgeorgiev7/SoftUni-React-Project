import { useContext } from "react";
import "./Feed.css";
import FeedPost from "./FeedPost";
import WritePost from "./WritePost";
import AuthContext from "../../contexts/authContext";
function Feed() {
  const { posts } = useContext(AuthContext);
  return (
    <div className="feed-section">
      <div className="feed-wrapper">
        <WritePost />
        <div className="feed-posts">
          {posts.reverse().map((post) => (
            <FeedPost post={post} key={`feedPost-${post._id}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feed;
