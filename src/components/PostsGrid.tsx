import { Post } from "@/service/posts";
import PostsCard from "./PostsCard";

type Props = {
  newPosts: Post[];
};

export default function PostsGrid({ newPosts }: Props) {
  return (
    <ul className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
      {newPosts.map((cV) => {
        return (
          <li
            className='mx-auto shadow-lg rounded-md overflow-hidden'
            key={cV.id}
          >
            <PostsCard post={cV} />
          </li>
        );
      })}
    </ul>
  );
}
