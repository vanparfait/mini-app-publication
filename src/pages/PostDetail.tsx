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
    <div>
      <h1>Publication numero : {id}</h1>
      <h2>Titre: {onePost?.title}</h2>
      <p>Titre: {onePost?.body}</p>
      <Link to="/">Retour a la page d'accueil</Link>
    </div>
  );
};

export default PostDetail;
