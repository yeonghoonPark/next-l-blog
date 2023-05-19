import Slider from "@/components/Slider";

type Props = {
  oldPosts: any;
};

export default function YouMayLike({ oldPosts }: Props) {
  return (
    <section>
      <h2 className='font-bold text-xl mb-2'>You may Like</h2>
      <Slider oldPosts={oldPosts} />
    </section>
  );
}
