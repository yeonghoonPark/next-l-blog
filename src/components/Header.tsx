import Link from "next/link";

export default function Header() {
  return (
    <header className='top-0 sticky w-full shadow bg-white'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link href={"/"}>
          <h1 className='font-bold text-3xl'>L's Blog</h1>
        </Link>
        <nav className='flex gap-4'>
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/posts"}>Posts</Link>
          <Link href={"/contact"}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
