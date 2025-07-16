
import Item from "../../components/popular/Item";
import Search from "./Search";

const Products = ({ productsData, handleSearch }) => {
  return (
    <div className="flex flex-col">
      {productsData.length != 0 ? (
        <>
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mb-6 md:mb-2">
            <h2 className="relative mb-6 md:self-start text-2xl md:text-4xl text-gray-700 font-medium">
              Products
              <p className={`w-full h-0.5 absolute bg-orange-600`}></p>
            </h2>
            <Search handleSearch={handleSearch} />
          </div>

          <div className="gap-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:gap-12 xl:grid-cols-5">
            {productsData.map((curElem) => {
              return <Item curElem={curElem} key={curElem._id} />;
            })}
          </div>
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
