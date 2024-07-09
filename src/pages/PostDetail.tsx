import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PostData } from "../interface";
type PostParams = {
  id: string;
};

const PostDetail: React.FC = () => {
  const { id } = useParams<PostParams>();
  const [onePost, setOnePost] = useState<PostData | null>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setOnePost(data));
  }, [id]);

  console.log(onePost);

  return (
    <div
      style={{
        backgroundColor: "green",
        border: "1px solid black",
        width: "600px",
        margin: "0 auto",
        marginTop: "200px",
        paddingLeft: "10px",
      }}
    >
      <h1>Publication numero : {id}</h1>
      <h2>Titre: {onePost?.title}</h2>
      <h2>Body: {onePost?.body}</h2>
      <Link to="/">Retour a la page d'accueil</Link>
    </div>
  );
};

export default PostDetail;
