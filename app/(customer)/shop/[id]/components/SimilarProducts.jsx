import Item from "@/app/(customer)/components/popular/Item";

const getSimilarProductData = async (id) => {
  const res = await fetch(`${process.env.BASE_URL}/api/products?limit=10`);
  const data = await res.json();
  return data;
};

const SimilarProducts = async ({ id }) => {
  const similarProducts = await getSimilarProductData();

  return (
    <div className="flex flex-col flex-1">
      <h2 className="relative mb-6 self-center text-3xl text-[#1f2937e6] font-medium ">
        Similar Products
        <p className="w-1/2 h-0.5 absolute translate-x-1/2 bg-orange-600 "></p>
      </h2>

      <div className="gap-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:gap-12 xl:grid-cols-5">
        {similarProducts.map((curElem) => {
          return <Item curElem={curElem} key={curElem._id} />;
        })}
      </div>
    </div>
  );
};

export default SimilarProducts;
