import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({ data }) => {
  return (
    <Link
      href="#"
      className="border aspect-[4/5] relative flex items-end group"
    >
      <div className="w-full h-full absolute inset-0 -z-10 overflow-hidden">
        <Image
          src={data.image}
          className="w-full h-full group-hover:scale-110 transition duration-300 ease-in object-cover"
        />
      </div>
      <h3 className="text-white group-hover:-translate-y-5 transition duration-300 ease-in text-6xl font-bold px-5 py-10">
        {data.title}
      </h3>
    </Link>
  );
};

export default CategoryCard;
