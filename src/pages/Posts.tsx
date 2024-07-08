//import React from 'react';

const Posts = () => {
  return (
    <div className="posts-container">
      <div>
        <h1>Page principale</h1>
        <label htmlFor="posts">Nombre de publication : 5</label>
      </div>
      <input type="range" id="posts" min={1} max={20} />
    </div>
  );
};

export default Posts;
