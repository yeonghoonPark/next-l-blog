import { getNewPosts } from "@/service/posts";
import PostsGrid from "./PostsGrid";
export default async function FeaturedPosts() {
  const newPosts = await getNewPosts();

  return (
    <section>
      <h2 className='font-bold text-xl my-4'>FeaturedPosts</h2>
      <PostsGrid newPosts={newPosts} />
    </section>
  );
}
