import React, { useState } from "react";

const Form = ({ onSubmit }) => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  return (
    <form
      class="md:flex flex-col w-96 self-center"
      onSubmit={(e) => {
        if (e.target.checkValidity()) {
          onSubmit && onSubmit(inputs);
          console.log(inputs);
        } else {
        }
        e.preventDefault();
      }}
    >
      <label class="m-2">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        value={inputs.username || ""}
        onChange={handleChange}
        class="border-2 border-gray-500"
        required
      ></input>
      <label class="m-2">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        value={inputs.title || ""}
        onChange={handleChange}
        class="border-2 border-gray-500"
        required
      ></input>
      <label class="m-2">Content</label>
      <textarea
        type="text"
        id="content"
        name="content"
        value={inputs.content || ""}
        onChange={handleChange}
        required
        class="border-2 border-gray-500 "
      ></textarea>
      <input class="my-3 h-10" type="submit"></input>
    </form>
  );
};

export default Form;
