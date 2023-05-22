import PostCard from "@/components/PostCard";
import { getAllPosts, getPost } from "@/service/posts";
import MoveCard from "@/components/MoveCard";

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostDetailPage({ params: { slug } }: Props) {
  const allPosts = await getAllPosts();
  const post = await getPost(slug);

  const currentIndex = allPosts.findIndex((cV) => cV.name === post?.name);
  const prevPost = allPosts.find((_cV, i) => i === currentIndex - 1);
  const nextPost = allPosts.find((_cV, i) => i === currentIndex + 1);

  return (
    <>
      <section className='flex justify-center my-8'>
        <PostCard post={post} />
      </section>
      <section className='flex justify-center my-8 rounded-md overflow-hidden'>
        {prevPost && <MoveCard post={prevPost} />}
        {nextPost && <MoveCard post={nextPost} />}
      </section>
    </>
  );
}
