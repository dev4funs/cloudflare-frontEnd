import React, { useEffect, useState } from "react";
import { post, get } from "../api/http";
import Form from "./form";
import Card from "./card";
// axios.defaults.baseURL = "https://your-worker.emiliodeng98.workers.dev";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const resp = await get("/posts");
        setPosts(resp.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPosts();
  }, []);

  const onSubmit = async (inputs) => {
    try {
      const resp = await post("/posts", inputs);
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div class="md:flex flex-col justify-center">
      <h1>Posts</h1>
      <Form onSubmit={onSubmit} />
      {posts.length === 0 && <div class="self-center">loading...</div>}
      {posts.map((post) => (
        <Card key={post.id} {...post} />
      ))}
    </div>
  );
};

export default Posts;
