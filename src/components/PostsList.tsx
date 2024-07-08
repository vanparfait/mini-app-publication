import React from "react";
import Post from "../pages/Post";
import { PostData } from "../interface";

interface PostsListProps {
  allPosts: PostData[] | null;
}

const PostsList: React.FC<PostsListProps> = ({ allPosts }) => {
  return (
    <ul className="posts">
      {allPosts ? (
        allPosts.map((post) => <Post post={post} key={post.id} />)
      ) : (
        <p style={{ color: "red", fontSize: 46, textAlign: "center" }}>
          Pas encore de Posts disponible
        </p>
      )}
    </ul>
  );
};

export default PostsList;
