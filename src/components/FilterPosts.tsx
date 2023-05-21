"use client";

import { Post } from "@/service/posts";
import { useState } from "react";
import FilterPostsNav from "./FilterPostsNav";
import PostsGrid from "./PostsGrid";

type Props = {
  posts: Post[];
  categories: string[];
};

const ALL_POSTS = "all posts";

export default function FilterPosts({ posts, categories }: Props) {
  const [selected, setSelected] = useState(ALL_POSTS);

  const filteredPosts =
    selected === ALL_POSTS
      ? posts
      : posts.filter((cV) => cV.category === selected);

  return (
    <section className='flex justify-around my-4'>
      <FilterPostsNav
        categories={[ALL_POSTS, ...categories]}
        selected={selected}
        onClick={(selected) => setSelected(selected)}
      />
      <PostsGrid posts={filteredPosts} />
    </section>
  );
}
