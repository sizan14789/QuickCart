import ProductsList from "@/app/seller/products/components/ProductsList";

const getProductsList = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/products/sellersList`);
  const data = await res.json();
  return data;
};

const Products = async () => {
  const productsList = await getProductsList();

  return (
    <div className="flex flex-col gap-6 p-4 grow">
      <h2 className="text-2xl text-gray-700">All Products</h2>

      <ProductsList productsList={productsList} />
    </div>
  );
};

export default Products;
