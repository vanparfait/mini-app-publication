import React from "react";
import "../styles/Post.css";
import { Link } from "react-router-dom";

interface PostPropss {
  post: {
    id: number;
    title: string;
    body: string;
  };
}

const Post: React.FC<PostPropss> = ({ post }) => {
  return (
    <li>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p>
        <Link to={`/publication/${post.id}`}>Lire l'article</Link>
      </p>
    </li>
  );
};

export default Post;
