import { productsInterface } from "@/types/Interfaces";
import Item from "../Home/popular/Item";

const Products = ({
  productsData,
  minMax,
}: {
  productsData: productsInterface[];
  minMax: number[];
}) => {
  const newProductsData = () => {
    return productsData.filter((curElem: productsInterface) => {
      return curElem.offerPrice > minMax[0] && curElem.offerPrice < minMax[1];
    });
  };

  return (
    <div className="flex flex-col">
      {productsData.length != 0 ? (
        <>
          <h2 className="relative mb-6 self-start text-2xl md:text-4xl text-gray-700 font-medium ">
            Products
            <p className={`w-full h-0.5 absolute bg-orange-600`}></p>
          </h2>
          {newProductsData().length != 0 ? (
            <div className="gap-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:gap-12 xl:grid-cols-5">
              {newProductsData().map((curElem: productsInterface) => {
                return <Item curElem={curElem} key={curElem._id} />;
              })}
            </div>
          ) : (
            <h2 className="text-2xl my-auto font-medium text-gray-700 self-center">
              Filtered too <span className="text-orange-600">much</span>!!!
            </h2>
          )}
        </>
      ) : (
        <h2 className="text-2xl md:text-4xl text-gray-700 font-medium">
          No Product found.
        </h2>
      )}
    </div>
  );
};

export default Products;
