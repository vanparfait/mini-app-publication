import React from "react";
import "../styles/Post.css";

const Post: React.FC = ({ post }) => {
  return (
    <ul className="post">
      <li>{post.title}</li>
      <h2>Lire l'article</h2>
    </ul>
  );
};

export default Post;
