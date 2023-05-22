import { Post } from "@/service/posts";
import Image from "next/image";
import React from "react";

type Props = {
  post: Post | undefined;
};

export default function PostCard({ post }: Props) {
  return (
    <article className='max-w-[300px] bg-gray-100 rounded-lg overflow-hidden shadow-md text-center'>
      <Image
        className='w-full'
        src={`/images/posts/${post?.image}`}
        alt={`${post?.name}`}
        width={200}
        height={150}
      />
      <h2 className='font-bold text-2xl my-2 px-2'>{post?.title}</h2>
      <p className='font-semibold text-lg my-2 mb-5 px-2'>
        {post?.description}
      </p>
    </article>
  );
}
