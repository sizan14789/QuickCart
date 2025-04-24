import { assets } from "@/assets/assets";
import Image from "next/image";

const dummyCart = [
  {
    id: 1,
    name: "Apple Earphones",
    price: "299.99",
    imgSrc: assets.apple_earphone_image,
    quantity: 2,
  },
  {
    id: 2,
    name: "Bose QuietComfort 45",
    price: "329.99",
    imgSrc: assets.bose_headphone_image,
    quantity: 2,
  },
  {
    id: 3,
    name: "Samsung Galaxy S23",
    price: "799.99",
    imgSrc: assets.samsung_s23phone_image,
    quantity: 2,
  },
];

const CartList = () => {
  return (
    <div className="flex flex-col items-center gap-6 max-w-6xl self-center">
      <div className="flex flex-col text-gray-700 max-w-6xl rounded-xl overflow-hidden">
        <div className="grid bg-orange-600 text-[1.125rem] text-white font-medium py-2 border-1 grid-cols-3">
          <h2 className="text-center">Image</h2>
          <p className="px-2 sm:px-8">Name</p>
          <p className="text-center">Price</p>
        </div>
        {dummyCart.map(({ id, imgSrc, name, price }) => {
          return (
            <div
              className="grid border-b-1 
            border-b-orange-600 rounded-b-md grid-cols-3 py-2"
              key={id}
            >
              <figure className="border-r-1 border-orange-600 p-1 flex justify-center items-center ">
                <Image
                  height={200}
                  width={200}
                  alt={name}
                  src={imgSrc}
                  className="object-cover max-w-20"
                />
              </figure>
              <h2 className="p-2 sm:px-8 sm:text-xl text-gray-700 border-r-1 border-orange-600">
                {name}
              </h2>
              <p className="text-[1.125rem] text-center">${price}</p>
            </div>
          );
        })}
        <div className="grid grid-cols-3 mt-3">
          <p className="text-xl text-center">Total</p>
          <p></p>
          <p className="text-2xl text-center">${65464}</p>
        </div>
      </div>
      <button className="py-4 outline-0 border-1 font-medium  bg-orange-600 text-white  rounded-md border-orange-600 self-end px-10 cursor-pointer hover:text-gray-800 hover:bg-white duration-150 ">
          Place Order
        </button>
    </div>
  );
};

export default CartList;
