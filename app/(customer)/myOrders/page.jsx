import { auth, currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

const getOrderData = async (id) => {
  const userRes = await fetch(`${process.env.BASE_URL}/api/users/${id}`);
  const user = await userRes.json();
  const orderObject = user.orders;

  const orderKeys = Object.keys(orderObject);

  const ordersDetails = await Promise.all(
    orderKeys.map(async (key) => {
      const res = await fetch(`${process.env.BASE_URL}/api/products/${key}`);
      const data = await res.json();
      return {
        ...data,
        quantity: (orderObject[key]),
      };
    })
  );
  return ordersDetails;
};

const page = async () => {
  const { userId } = await auth();
  const orderDetails = await getOrderData(userId);

  return (
    <div className="box flex flex-col grow">
      <div className="grow flex justify-center">
        <div className=" border-gray-300 border-1 rounded-md text-gray-700 border-b-0 flex-grow max-w-[80rem]">
          <div className="grid grid-cols-2 md:grid-cols-3 grow  border-gray-300 border-b-1 text-black">
            <h2 className=" px-6 py-2">Product</h2>
            <h2 className=" px-4 py-2 hidden md:flex justify-center">Price</h2>
            <h2 className=" px-4 py-2 flex justify-center">Total</h2>
          </div>

          {orderDetails.map((curElem) => {
            const { name, image, offerPrice, _id, quantity } = curElem;

            return (
              <div
                className="grid grid-cols-2 md:grid-cols-3 grow py-2 border-gray-300 border-b-1"
                key={_id}
              >
                <div className=" px-6 py-2 flex items-center flex-col md:flex-row gap-2">
                  <figure className=" rounded-xl ">
                    <Image
                      src={image[0]}
                      alt={name}
                      height={70}
                      width={70}
                      className="min-w-20"
                    />
                  </figure>
                  <h2>{name}</h2>
                </div>

                <div className=" items-center justify-center hidden md:flex border-l-0 px-4 py-2 ">
                  <p>${offerPrice}</p>
                </div>

                <div className=" px-4 flex items-center py-2 justify-center">
                  <p>
                    {offerPrice}x{quantity}={offerPrice * quantity} $
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
