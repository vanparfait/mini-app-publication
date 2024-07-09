import React, { useEffect, useState } from "react";
import PostsList from "../components/PostsList";
import "../styles/Posts.css";
import { PostData } from "../interface";

const Posts: React.FC = () => {
  const [allPosts, setAllPosts] = useState<PostData[] | null>(null);
  const [numberOfPosts, setNumbersOfPosts] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);

  const localOrStateNumber = () =>
    localStorage.getItem("number") || numberOfPosts;

  const localOrStateNum = localOrStateNumber();

  useEffect(() => {
    setError(null); // Reset error before fetching
    fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${localOrStateNum}`
    )
      .then((response) => {
        // if (!response.ok) {
        //   throw new Error(`HTTP error! Status: ${response.status}`);
        // }
        return response.json();
      })
      .then((data) => setAllPosts(data))
      .catch((err) => setError(err.message));
  }, [localOrStateNum]);

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
          defaultValue={localOrStateNum}
          onChange={handleChange}
          type="range"
          id="posts"
          min={1}
          max={20}
        />
        {error && <p className="error">Erreur : {error}</p>}
        <PostsList allPosts={allPosts} />
      </div>
    </div>
  );
};

export default Posts;
