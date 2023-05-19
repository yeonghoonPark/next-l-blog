import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <header className='fixed w-full bg-white shadow-sm shadow-cyan-200 z-10'>
          <nav className='flex justify-between items-center max-w-6xl my-0 mx-auto p-4'>
            <div className='text-3xl font-bold select-none'>
              <Link href={"/"}>L's Blog</Link>
            </div>
            <div className='flex gap-4'>
              <Link href={"/"}>Home</Link>
              <Link href={"/about"}>About</Link>
              <Link href={"/posts"}>Posts</Link>
              <Link href={"/contact"}>Contact</Link>
            </div>
          </nav>
        </header>
        <main className='max-w-6xl my-0 mx-auto pt-24 pb-6 px-4'>
          {children}
        </main>
        <footer className='w-full text-center py-3 bg-sky-950 text-white'>
          It Just Test Project | All Right Reserved.
        </footer>
      </body>
    </html>
  );
}
