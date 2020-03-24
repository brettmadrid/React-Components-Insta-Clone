// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  const [comments, setComments] = useState(props.comments);
  const [comment, setComment] = useState("");

  const commentHandler = e => {
    setComment(e.target.value);
  };

  const submitComment = e => {
    e.preventDefault();
    if (comments.length > 0) {
      const lastComment = comments[comments.length - 1];
      const idVal = lastComment.id + 1;
      const newComment = { id: idVal, text: comment, username: "bmadrid" }; // make object to add
      const commentsCopy = [...comments];
      commentsCopy.push(newComment); // add newComment object to the state array
      setComments(commentsCopy);
      setComment("");
    }
  };

  return (
    <div>
      {comments.map(({ id, ...otherItemProps }) => (
        <Comment key={id} {...otherItemProps} />
      ))}
      <CommentInput
        changeComment={commentHandler}
        comment={comment}
        submitComment={submitComment}
      />
    </div>
  );
};

export default CommentSection;
