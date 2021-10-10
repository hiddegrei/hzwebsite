import React from "react";
import "../css/Comment.css";
import { Avatar, Button } from "@material-ui/core";

function Comment({ username, text }) {
  return (
    <div className="comment">
      <div className="comment__body">
        <div className="comment__user">
          <Avatar src="" />
          <p className="comment__user__name">{username}</p>
        </div>
        <p className="comment__user__text"> {text}</p>
      </div>
    </div>
  );
}

export default Comment;
