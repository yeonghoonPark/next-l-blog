import Image from "next/image";
import Link from "next/link";
import heroImg from "/public/images/lizard.jpg";

export default function Hero() {
  return (
    <section className='text-center'>
      <Image
        className='rounded-full mx-auto mb-2'
        src={heroImg}
        alt='Profile Image'
        width={250}
        height={250}
        priority
      />
      <h2 className='font-bold text-xl'>Hi, I'm Lizrd</h2>
      <h3 className='font-semibold'>Full stack animal</h3>
      <p className='mb-2'>I love bugs~❤ 🐞</p>
      <Link
        className='bg-yellow-500 font-semibold py-1 px-4 rounded-xl'
        href={"/contact"}
      >
        Contact Me
      </Link>
    </section>
  );
}
