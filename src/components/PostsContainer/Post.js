// You will add code in this file
import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = ({
  username,
  thumbnailUrl,
  imageUrl,
  likes,
  timestamp,
  comments
}) => {
  const [like, setLikes] = useState(likes);

  return (
    <div className="post-border">
      <PostHeader username={username} thumbnailUrl={thumbnailUrl} />
      <div className="post-image-wrapper">
        <img alt="post thumbnail" className="post-image" src={imageUrl} />
      </div>
      <LikeSection likes={like} addLikes={setLikes} />
      <CommentSection postId={imageUrl} comments={comments} />
    </div>
  );
};

export default Post;
