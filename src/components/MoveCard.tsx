import Image from "next/image";
import Link from "next/link";
import { Post } from "@/service/posts";

type Props = {
  post: Post;
};

export default function MoveCard({ post }: Props) {
  return (
    <Link href={`/posts/${post?.id}`}>
      <Image
        className='max-h-[130px] transition-all grayscale hover:grayscale-0'
        src={`/images/posts/${post?.image}`}
        alt={`${post?.name}`}
        width={200}
        height={130}
      />
    </Link>
  );
}
