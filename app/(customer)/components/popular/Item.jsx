import Image from "next/image";
import Link from "next/link";
import Rating from "./Rating";

const Item = ({ curElem }) => {
  return (
    <Link
      className="grid gap-1 max-w-[14.5rem] justify-self-center"
      href={`/shop/${curElem._id}`}
    >
      <div className=" min-w-40 rounded-2xl mb-4">
        <figure className="object-cover relative w-auto aspect-square overflow-hidden">
          <Image
            src={curElem.image[0]} 
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt={curElem.name}
            priority
            className="hover:scale-110 rounded-xl transition-all object-cover"
          />
        </figure>
      </div>
      <h2 className="text-[1.125rem]">{curElem.name}</h2>
      <p className="text-[.75rem] lightText ">
        {curElem.description.length > 33
          ? curElem.description.slice(0, 33) + "..."
          : curElem.description}
      </p>
      <div className="flex gap-2 mb-2">
        <p className="mr-3">{curElem.rating}</p>
        <Rating rating={curElem.rating} />
      </div>
      <div className="flex md:flex-col md:self-start md:gap-2 lg:self-auto lg:flex-row lg:gap-0 justify-between items-center">
        <p className="text-xl">${curElem.offerPrice}</p>
        <button className="border-1 text-xs cursor-pointer border-gray-3400 rounded-2xl px-4 py-2">
          Buy now
        </button>
      </div>
    </Link>
  );
};

export default Item;
