//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data";

const PostsPage = () => {
  const [data, setData] = useState(dummyData);

  return (
    <div className="posts-container-wrapper">
      {data.map(({ id, ...otherItemProps }) => (
        <Post key={id} {...otherItemProps} />
      ))}
    </div>
  );
};

export default PostsPage;
