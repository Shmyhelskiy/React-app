import React from "react";
import "./Post.css";
import * as img from "./image/post-image";

const Post = ({ postdata }) => {
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
          <img className="footer-image" src={img.comment} alt="comment" />
          <p>{postdata.comends}</p>
        </div>
        <div className="footer-container">
          <img className="footer-image" src={img.likes} alt="likes" />
          <p>{postdata.likes}</p>
        </div>
        <div className="footer-container">
          <img className="footer-image" src={img.DOUWLOAD} alt="douwload" />
        </div>
      </div>
    </div>
  );
};

export default Post;
