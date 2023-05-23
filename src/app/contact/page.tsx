import ContactForm from "@/components/ContactForm";
import { AiFillGithub, AiFillYoutube, AiFillFacebook } from "react-icons/ai";

const LINKS = [
  { icon: <AiFillGithub />, url: "https://github.com" },
  { icon: <AiFillYoutube />, url: "https://youtube.com" },
  { icon: <AiFillFacebook />, url: "https://google.com" },
];
export default function ContactPage() {
  return (
    <section className='w-96 flex flex-col items-center mx-auto'>
      <h2 className='font-bold text-4xl my-2'>Contact Me</h2>
      <p className='font-semibold'>info@lizard.com</p>
      <div className='flex gap-4 mb-4'>
        {LINKS.map((cV, i) => (
          <a
            className='text-4xl my-2 hover:text-sky-500'
            key={i}
            href={cV.url}
            target='_blank'
          >
            {cV.icon}
          </a>
        ))}
      </div>
      <h2 className='font-bold text-4xl my-2'>Or Send me an Email</h2>
      <ContactForm />
    </section>
  );
}
