"use client";

type Props = {
  categories: string[];
  selected: string;
  onClick: (cV: string) => void;
};

export default function FilterPostsNav({
  categories,
  selected,
  onClick,
}: Props) {
  return (
    <nav className='sticky top-20 h-40 text-center'>
      <h2 className='font-bold text-xl border-b border-sky-500 pb-1'>
        Category
      </h2>
      <ul>
        {categories.map((cV) => (
          <li
            className={`cursor-pointer capitalize my-2 hover:text-sky-800 ${
              cV === selected && "text-sky-500"
            }`}
            key={cV}
            onClick={() => onClick(cV)}
          >
            {cV}
          </li>
        ))}
      </ul>
    </nav>
  );
}
