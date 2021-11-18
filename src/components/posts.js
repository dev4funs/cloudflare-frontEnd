import React, { useEffect, useState } from "react";
import { post, get } from "../api/http";
import Form from "./form";
import Card from "./card";

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
      const response = await post("/posts", inputs);
      const { status, data } = response;
      console.log(response);
      if (status === 200) {
        setPosts(data);
        alert("Post success!");
      } else {
        alert("Failed to add new post!");
      }
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
