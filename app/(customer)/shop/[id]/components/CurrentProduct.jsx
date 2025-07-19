import RatingBigger from "./RatingBigger";
import Image from "next/image";
import AddOrBuy from "./AddOrBuy";

const getProductDetails = async (id) => {
  console.log(id)
  const res1 = await fetch(`${process.env.BASE_URL}/api/products/${id}`);
  const res2 = await res1.json();
  return res2;
};

const CurrentProduct = async ({ id }) => {
  const data = await getProductDetails(id);

  return (
    <div className="mb-16 ">
      <div className="grid grid-cols-1 md:grid-cols-2 text-[#1f2937e6] gap-16">
        <div className="px-5 lg:px-16 xl:px-30 2xl:px-40  flex flex-col gap-4">
          <figure className="bg-gray-500/10 rounded-lg overflow-hidden">
            <Image
              src={data.image[0]}
              height={720}
              width={1080}
              alt={data.name}
              className="w-full h-auto object-cover"
            />
          </figure>
          <div className="grid grid-cols-4 gap-4">
            <figure className="bg-gray-500/10 rounded-lg overflow-hidden cursor-pointer">
              <Image
                src={data.image[0]}
                height={720}
                width={1080}
                alt={data.name}
                className="w-full h-auto object-cover"
              />
            </figure>
          </div>
        </div>
        <div>
          <h2 className="text-3xl mb-4 font-medium">{data.name}</h2>
          <div className="flex items-center gap-3 mb-3">
            <RatingBigger rating={data.rating} />
            <p>({data.rating})</p>
          </div>
          <p>{data.description}</p>

          <div className="flex gap-4 mt-6 items-end">
            <p className="text-3xl font-medium">${data.offerPrice}</p>
            <p className="line-through">${data.price}</p>
          </div>

          <p className="h-0.5 w-full bg-gray-200 my-6" />

          <div className="grid grid-cols-2 grid-rows-3 mb-6">
            <h1 className="font-medium text-gray-600">Category</h1>
            <p className="text-gray-800/50">{data.category}</p>
          </div>

          <AddOrBuy id={id} />
        </div>
      </div>
    </div>
  );
};

export default CurrentProduct;
