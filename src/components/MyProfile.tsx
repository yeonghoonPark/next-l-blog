import Image from "next/image";
import Link from "next/link";
import LizardImage from "/public/images/lizard.jpg";
export default function MyProfile() {
  return (
    <div className='flex flex-col justify-center items-center gap-1 mb-6'>
      <Image
        className='rounded-full pb-2 grayscale'
        src={LizardImage}
        alt='my-image'
        width={300}
        height={300}
      />
      <h2 className='font-bold text-xl'>Hi, I'm Lizard.</h2>
      <p className='font-medium'>Full stack animal</p>
      <p className='font-medium mb-2'>I love bugs~❤, 🐞</p>
      <Link
        href={"/contact"}
        className='bg-yellow-400 rounded-xl py-1 px-3 font-medium'
      >
        Contact Me
      </Link>
    </div>
  );
}
