import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";
import { post, get } from "../api/http";
// axios.defaults.baseURL = "https://your-worker.emiliodeng98.workers.dev";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const resp = await get("/posts", {
          crossDomain: true,
          headers: { "Access-Control-Allow-Origin": "*" },
        });
      } catch (error) {
        console.log(error);
      }
    };
    getPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Posts;
