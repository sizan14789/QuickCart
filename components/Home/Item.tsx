import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { productInterface } from "@/types/Interfaces";

const Item = ({ curElem }: { curElem: productInterface }) => {
  return (
    <Link
      className="grid gap-1 max-w-[14.5rem] justify-self-center"
      href={`/shop/${curElem.name}`}
    >
      <div className="bg-[#E6E9F2] rounded-2xl mb-4">
        <figure className="object-cover relative w-auto aspect-square">
          <Image
            src={curElem.image[0]} 
            fill={true}
            alt={curElem.name}
            className="overflow-hidden hover:scale-110 transition-all"
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
        {Array.from({ length: Math.floor(curElem.rating) }, (_, i) => i).map(
          (curInt) => {
            return (
              <Image
                src={assets.star_icon}
                height={12}
                width={12}
                alt="rating"
                key={curInt}
              />
            );
          }
        )}
        {Array.from(
          { length: 5 - Math.floor(curElem.rating) },
          (_, i) => i
        ).map((curInt) => {
          return (
            <Image
              src={assets.star_dull_icon}
              height={12}
              width={12}
              alt="rating"
              key={curInt}
            />
          );
        })}
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
