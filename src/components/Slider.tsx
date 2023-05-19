"use client";

import Image from "next/legacy/image";
import Link from "next/link";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type Props = {
  oldPosts: any;
};

export default function Slider({ oldPosts }: Props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      paritialVisibilityGutter: 30,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <Carousel
        responsive={responsive}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
      >
        {oldPosts.map(
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
                key={cV?.id}
                className='basis-80 mr-2 border border-slate-200 overflow-hidden rounded-md select-none'
              >
                <Link href={`/posts/${cV.id}`}>
                  <Image
                    src={`/images/posts/${cV.image}`}
                    alt={cV.name}
                    width={374}
                    height={246}
                  />
                  <span className='block text-right text-slate-400 text-sm pr-2'>
                    {cV.created_at}
                  </span>
                  <h3 className='text-center font-bold capitalize'>
                    {cV.title}
                  </h3>
                  <p className='text-center truncate px-4'>{cV.description}</p>
                  <p className='w-1/4 mx-auto mt-2 my-4 mb-4 rounded-xl text-center bg-cyan-100'>
                    {cV.category}
                  </p>
                </Link>
              </div>
            );
          },
        )}
      </Carousel>
    </div>
  );
}
