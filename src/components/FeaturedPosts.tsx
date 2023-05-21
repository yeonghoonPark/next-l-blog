import { getNewPosts } from "@/service/posts";
import PostsGrid from "./PostsGrid";
export default async function FeaturedPosts() {
  const newPosts = await getNewPosts();

  return (
    <section className='py-4'>
      <h2 className='font-bold text-xl my-4'>Featured Posts</h2>
      <PostsGrid posts={newPosts} />
    </section>
  );
}
