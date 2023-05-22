import { readFile } from "fs/promises";
import path from "path";

export type Post = {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  name: string;
  is_new: boolean;
  created_at: Date;
};

export const getAllPosts = async (): Promise<Post[]> => {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  return readFile(filePath, "utf-8")
    .then<Post[]>((json) => JSON.parse(json))
    .then((data) =>
      data.sort((a, b) => (a.created_at > b.created_at ? -1 : 1)),
    );
};

export const getNewPosts = async (): Promise<Post[]> => {
  const posts = await getAllPosts();
  return posts.filter((cV) => cV.is_new);
};

export const getOldPosts = async (): Promise<Post[]> => {
  const posts = await getAllPosts();
  return posts.filter((cV) => !cV.is_new);
};

export const getPost = async (slug: string): Promise<Post | undefined> => {
  const posts = await getAllPosts();
  return posts.find((cV) => cV.id === slug);
};
