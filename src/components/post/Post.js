import React from "react";
import "./Post.css";
import * as img from "./image/post-image";
import { useState } from "react";

const Post = ({ postdata }) => {
  const [countComment, setCountComment] = useState(0);
  const [countLike, setCountLike] = useState(0);

  return (
    <div className="post">
      <header className="post-heder">
        <img className="author-photo" src={postdata.author.photo} alt="text" />
        <h3 className="author-name">{postdata.author.name}</h3>
        <img className="author-checked" src={img.checked} alt="checked" />
        <p>{postdata.author.nickname}</p>
        <p>{postdata.date}</p>
      </header>
      <div className="post-content">{postdata.content}</div>
      <div className="post-image">
        <img src={postdata.image} alt="sometext" />
      </div>
      <div className="post-footer">
        <div className="footer-container">
          <img
            className="footer-image"
            src={img.comment}
            alt="comment"
            onClick={() => setCountComment((prev) => prev + 1)}
          />
          <p>{countComment}</p>
        </div>
        <div className="footer-container">
          <img
            className="footer-image"
            src={img.likes}
            alt="likes"
            onClick={() => setCountLike((prev) => prev + 1)}
          />
          <p>{countLike}</p>
        </div>
        <div className="footer-container">
          <img className="footer-image" src={img.DOUWLOAD} alt="douwload" />
        </div>
      </div>
    </div>
  );
};

export default Post;
