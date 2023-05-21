import { getAllPosts } from "@/service/posts";
import FilterPosts from "@/components/FilterPosts";

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((cV) => cV.category))];

  return <FilterPosts posts={posts} categories={categories} />;
}
