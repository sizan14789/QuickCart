import ProductsList from "@/app/seller/products/components/ProductsList";

const getProductsList = async () => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/products/sellersList`);
    const data = await res.json();
    return data;
  } catch (error) {}
};

const Products = async () => {
  const productsList = await getProductsList();

  if (!productsList) return <h2>Internal error</h2>;

  return (
    <div className="flex flex-col gap-6 p-4 grow">
      <h2 className="text-2xl text-gray-700">All Products</h2>
      {productsList.length === 0 ? (
        <p className="text-gray-800/50 text-sm">No products from you</p>
      ) : (
        <ProductsList productsList={productsList} />
      )}
    </div>
  );
};

export default Products;
