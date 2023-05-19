import MyProfile from "@/components/MyProfile";
import { getNewPost, getOldPost } from "@/service/posts";

import FeaturedPosts from "@/components/FeaturedPosts";
import YouMayLike from "@/components/YouMayLike";

export default async function HomePage() {
  const newPosts = await getNewPost();
  const oldPosts = await getOldPost();

  return (
    <div className=''>
      <MyProfile />
      <FeaturedPosts newPosts={newPosts} />
      <YouMayLike oldPosts={oldPosts} />
    </div>
  );
}
