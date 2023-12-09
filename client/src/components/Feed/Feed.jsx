import { useContext, useEffect, useRef } from "react";
import "./Feed.css";
import FeedPost from "./FeedPost";
import WritePost from "./WritePost";
import AuthContext from "../../contexts/authContext";
function Feed() {
  const { posts } = useContext(AuthContext);
  const WritePostField = useRef();

  useEffect(function () {
    WritePostField?.current?.focus();
  }, []);

  return (
    <div className="feed-section">
      <div className="feed-wrapper">
        <WritePost WritePostField={WritePostField} />
        <div className="feed-posts">
          {posts.map((post) => (
            <FeedPost post={post} key={`feedPost-${post._id}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feed;
