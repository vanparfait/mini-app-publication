import React, { useEffect, useState } from "react";
import PostsList from "../components/PostsList";
import "../styles/Posts.css";
import { PostData } from "../interface";

const Posts: React.FC = () => {
  const [allPosts, setAllPosts] = useState<PostData[] | null>(null);
  const [range, setRange] = useState<number>(1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${range}`)
      .then((response) => response.json())
      .then((data) => setAllPosts(data));
  }, [range]);
  console.log(allPosts);

  // function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  //   setRange(+e.target.value);
  // }

  return (
    <div className="posts-container">
      <h1>Page principale</h1>
      <div className="contenu">
        <label htmlFor="posts">Nombre de publication : {range} </label>
        <input
          value={range}
          onChange={(e) => setRange(+e.target.value)}
          type="range"
          id="posts"
          min={1}
          max={20}
        />
        <PostsList allPosts={allPosts} />
      </div>
    </div>
  );
};

export default Posts;
