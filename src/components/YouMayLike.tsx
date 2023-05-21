import { getOldPosts } from "@/service/posts";
import React from "react";
import PostsCard from "./PostsCard";
import Slider from "./Slider";

export default async function YouMayLike() {
  const oldPosts = await getOldPosts();

  return (
    <section className='py-4'>
      <h2 className='font-bold text-xl my-4'>You May Like</h2>
      <Slider>
        {oldPosts.map((cV) => (
          <PostsCard post={cV} />
        ))}
      </Slider>
    </section>
  );
}
