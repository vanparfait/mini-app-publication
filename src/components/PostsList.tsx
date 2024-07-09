import React from "react";
import Post from "../pages/Post";
import { PostData } from "../interface";

interface PostsListProps {
  allPosts: PostData[] | null;
}

const PostsList: React.FC<PostsListProps> = ({ allPosts }) => {
  return (
    <ul className="post">
      {allPosts && allPosts.map((post) => <Post post={post} key={post.id} />)}
    </ul>
  );
};

export default PostsList;
