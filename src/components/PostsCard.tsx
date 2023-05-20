import { Post } from "@/service/posts";
import Image from "next/image";
import Link from "next/link";

type Props = {
  post: Post;
};

export default function PostsCard({
  post: { id, title, description, category, image, name, created_at },
}: Props) {
  return (
    <Link href={`/posts/${id}`}>
      <article className='w-72'>
        <div className='w-full h-48 overflow-hidden'>
          <Image
            src={`/images/posts/${image}`}
            alt={name}
            width={300}
            height={230}
          />
        </div>
        <div className='flex flex-col items-center p-4'>
          <time className='self-end text-sm text-gray-500'>
            {created_at.toString()}
          </time>
          <h3 className='font-bold capitalize'>{title}</h3>
          <p className='w-full text-center truncate'>{description}</p>
          <span className='bg-cyan-100 capitalize text-sm px-2 mt-2 rounded-xl'>
            {category}
          </span>
        </div>
      </article>
    </Link>
  );
}
