import Image from "next/legacy/image";
import Link from "next/link";

type Props = {
  newPosts: any;
};

export default function FeaturedPosts({ newPosts }: Props) {
  return (
    <section className='mb-6'>
      <h2 className='font-bold text-xl mb-2'>Featured Posts</h2>
      <div className='flex flex-wrap gap-x-20 gap-y-8'>
        {newPosts.map(
          (cV: {
            id: string;
            image: string;
            name: string;
            created_at: string;
            title: string;
            description: string;
            category: string;
          }) => {
            return (
              <div
                key={cV.id}
                className='basis-80 shadow-xl rounded-md overflow-hidden select-none'
              >
                <Link href={`/posts/${cV.id}`}>
                  <Image
                    src={`/images/posts/${cV.image}`}
                    alt={cV.name}
                    width={374}
                    height={246}
                  />
                  <span className='block text-right text-slate-400 pr-2'>
                    {cV.created_at}
                  </span>
                  <h3 className='text-center font-bold capitalize'>
                    {cV.title}
                  </h3>
                  <p className='text-center'>{cV.description}</p>
                  <p className='w-1/4 mx-auto mt-2 my-4 rounded-xl text-center bg-cyan-100'>
                    {cV.category}
                  </p>
                </Link>
              </div>
            );
          },
        )}
      </div>
    </section>
  );
}
