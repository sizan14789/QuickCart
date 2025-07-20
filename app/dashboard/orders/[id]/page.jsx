import { format } from "date-fns";
import Image from "next/image";

const getOrderData = async (id) => {
  const res = await fetch(`${process.env.BASE_URL}/api/orders/${id}`);
  const data = await res.json();
  const { productId } = data;

  const res2 = await fetch(`${process.env.BASE_URL}/api/products/${productId}`);
  const data2 = await res2.json();

  const { name, image, description, category, offerPrice, price } = data2;

  return {
    ...data,
    name,
    image,
    description,
    offerPrice,
    price,
    category,
  };
};

const Order = async ({ params }) => {
  const { id } = await params;
  const order = await getOrderData(id);

  const {
    quantity,
    address,
    username,
    phone,
    name,
    image,
    description,
    category,
    offerPrice,
    price,
    createdAt,
  } = order;

  const date = new Date(createdAt);
  const formatted = format(date, "MMM dd, yyyy");

  return (
    <div className="p-2 flex">
      <div className="grid grid-cols-1 md:grid-cols-2 text-[#1f2937e6] gap-16">
        <div className="px-5 lg:px-16 xl:px-30 2xl:px-40 flex flex-col gap-4">
          <figure className="bg-gray-500/10 rounded-lg overflow-hidden">
            <Image
              src={image[0]}
              height={300}
              width={400}
              alt={name}
              className="w-full h-auto object-cover"
            />
          </figure>
          <div className="grid grid-cols-4 gap-4">
            <figure className="bg-gray-500/10 rounded-lg overflow-hidden cursor-pointer">
              <Image
                src={image[0]}
                height={720}
                width={1080}
                alt={name}
                className="w-full h-auto object-cover"
              />
            </figure>
          </div>
        </div>
        <div>
          <h2 className="text-3xl mb-4 font-medium">{name}</h2>
          <p>{description}</p>

          <div className="flex gap-4 mt-6 items-end">
            <p className="text-3xl font-medium">${offerPrice}</p>
            <p className="line-through">${price}</p>
          </div>

          <p className="h-0.5 w-full bg-gray-200 my-6" />

          <div className="grid grid-cols-2 grid-rows-3">
            <h1 className="font-medium text-gray-600">Category</h1>
            <p className="text-gray-800/50">{category}</p>
          </div>

          <div className="text-xl">
            <h2 className="text-2xl">Ordered By</h2>
            <p>
              Name: <span className="text-gray-800/50">{username} </span>{" "}
            </p>
            <p>
              Address: <span className="text-gray-800/50">{address} </span>{" "}
            </p>
            <p>
              Phone: <span className="text-gray-800/50">{phone} </span>{" "}
            </p>
            <p>
              Quantity: <span className="text-gray-800/50">{quantity} </span>{" "}
            </p>
            <p>
              Total:{" "}
              <span className="text-gray-800/50">
                {quantity}x{offerPrice}={quantity * offerPrice}${" "}
              </span>{" "}
            </p>
            <p>
              Order date:
              <span className="text-gray-800/50"> {formatted} </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
