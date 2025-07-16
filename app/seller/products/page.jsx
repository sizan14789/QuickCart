import ProductsList from "@/app/seller/products/components/ProductsList";

const Products = () => {
  return (
    <div className="flex flex-col gap-6 p-4 grow">
      <h2 className="text-2xl text-gray-700">All Products</h2>

      <ProductsList />

    </div>
  );
};

export default Products;
