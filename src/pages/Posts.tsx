import React, { useEffect, useState } from "react";
import PostsList from "../components/PostsList";
import "../styles/Posts.css";
import { PostData } from "../interface";

const Posts: React.FC = () => {
  const [allPosts, setAllPosts] = useState<PostData[] | null>(null);
  const [numberOfPosts, setNumbersOfPosts] = useState<number>(1);

  const localOrStateNumber = () =>
    localStorage.getItem("number") || numberOfPosts;

  const localOrStateNum = localOrStateNumber();

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${localOrStateNum}`
    )
      .then((response) => response.json())
      .then((data) => setAllPosts(data));
  }, [localOrStateNum]);
  console.log(allPosts);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNumbersOfPosts(+e.target.value);
    localStorage.setItem("number", e.target.value);
  }

  return (
    <div className="posts-container">
      <h1>Page principale</h1>
      <div className="contenu">
        <label htmlFor="posts">
          Nombre de publication : {localOrStateNum}{" "}
        </label>
        <input
          // value={numberOfPosts}
          defaultValue={localOrStateNum}
          onChange={handleChange}
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
