import path from "path";
import { promises } from "fs";

export type Post = {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  name: string;
  is_new: boolean;
  created_at: string;
};

export async function getPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  const data = await promises.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

export async function getNewPost(): Promise<Post[]> {
  const posts = await getPosts();
  return posts.filter((cV) => cV.is_new === true);
}

export async function getOldPost(): Promise<Post[]> {
  const posts = await getPosts();
  return posts.filter((cV) => cV.is_new === false);
}

export async function getPost(id: string): Promise<Post | undefined> {
  const posts = await getPosts();
  return posts.find((cV) => cV.id === id);
}
