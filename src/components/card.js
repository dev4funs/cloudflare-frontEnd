import React from "react";

const Card = ({ title, content, username }) => {
  return (
    <figure class="md:flex self-center md:w-2/3 sm:w-1 lg:w-2/3 xl:w-2/3 2xl:w-1/3 bg-gray-100 rounded-xl p-8 md:p-0 m-3">
      <img
        class="md:w-48 md:h-32 p-2 rounded-xl"
        src="https://cdn-images-1.medium.com/max/1600/0*o3c1g40EXj65Fq9k."
        alt=""
      />
      <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
        <figcaption class="font-medium">
          <div class="text-cyan-600">{username}</div>
          <div class="text-gray-500">{title}</div>
        </figcaption>
        <blockquote>
          <p class="text-lg font-semibold">{content}</p>
        </blockquote>
      </div>
    </figure>
  );
};

export default Card;
