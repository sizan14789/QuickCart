import { auth, currentUser } from "@clerk/nextjs/server";
import { format, formatDistanceToNow } from "date-fns";
import Image from "next/image";
import { redirect } from "next/navigation";

const getOrderProductDetails = async (ordersDetailsArray) => {
  const orderProductDetails = await Promise.all(
    ordersDetailsArray.map(async (order) => {
      const res = await fetch(
        `${process.env.BASE_URL}/api/products/${order.productId}`
      );
      const data = await res.json();
      const { name, image, offerPrice } = data;
      return {
        ...order,
        name,
        image,
        offerPrice,
      };
    })
  );
  return orderProductDetails;
};

const getOrderData = async (id) => {
  const userRes = await fetch(`${process.env.BASE_URL}/api/users/${id}`);
  const user = await userRes.json();
  const ordersArray = user.orders;

  const ordersDetails = await Promise.all(
    ordersArray.map(async (order) => {
      try {
        const res = await fetch(`${process.env.BASE_URL}/api/orders/${order}`);
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    })
  );

  const orderProductDetails = getOrderProductDetails(ordersDetails);
  return orderProductDetails;
};

const page = async () => {
  const { userId } = await auth();
  if (!userId)
    redirect('/')
  const orderDetails = await getOrderData(userId);

  return (
    <div className="box flex flex-col grow">
      <div className="grow flex justify-center">
        <div className=" border-gray-300 text-gray-700 flex-grow max-w-[80rem]">
          <div className="flex justify-between ">
            <h2 className="relative mb-6 self-start text-4xl font-medium ">
              <span className="text-orange-600">O</span>rders
            </h2>
          </div>
          <hr className="text-gray-400 mb-4" />

          {orderDetails.length === 0 ? (
            <h2 className="text-center text-gray-800/50 mt-3 mb-5">
              You have no pending orders
            </h2>
          ) : (
            <>
              <div className="grid grid-cols-3 md:grid-cols-4 grow  border-gray-300 border-1 rounded-t-md text-black">
                <h2 className=" px-6 py-2">Product</h2>
                <h2 className=" px-4 py-2 hidden md:flex justify-center">
                  Price
                </h2>
                <h2 className=" px-4 py-2 flex justify-center">Total</h2>
                <h2 className=" px-4 py-2 flex justify-center">Order time</h2>
              </div>

              {orderDetails.map((curElem, index) => {
                const { name, image, offerPrice, _id, quantity, createdAt } =
                  curElem;

                const date = new Date(createdAt);
                const formatted = format(date, "MMM dd, yyyy");
                const ago = formatDistanceToNow(date, { addSuffix: true });

                return (
                  <div
                    className={`grid grid-cols-3 md:grid-cols-4 grow text-sm md:text-[1rem] py-2 border-gray-300 border-1 border-t-0 ${
                      index === orderDetails.length - 1 ? "rounded-b-md" : ""
                    }`}
                    key={_id}
                  >
                    <div className=" px-6 py-2 flex items-center flex-col md:flex-row gap-2">
                      <figure className=" rounded-xl ">
                        <Image
                          src={image[0]}
                          alt={name}
                          height={70}
                          width={70}
                          className="w-12 md:min-w-20"
                        />
                      </figure>
                      <h2>{name}</h2>
                    </div>

                    <div className=" items-center justify-center hidden md:flex border-l-0 px-4 py-2 ">
                      <p>${offerPrice}</p>
                    </div>

                    <div className=" px-4  flex items-center py-2 justify-center">
                      <p>
                        {offerPrice}x{quantity}={offerPrice * quantity}$
                      </p>
                    </div>
                    <div className="flex justify-center flex-col items-center">
                      <p>{formatted}</p>
                      <p className="text-gray-800/50 text-xs">{ago}</p>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
