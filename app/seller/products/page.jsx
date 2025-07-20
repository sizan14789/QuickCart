import ProductsList from "@/app/seller/products/components/ProductsList";
import connectDB from "@/config/db";
import Product from "@/models/product";
import { auth } from "@clerk/nextjs/server";

const Products = async () => {
  const { userId } = await auth()

  await connectDB();
  const products = await Product.find({userId:userId}).sort({createdAt: 1})
  
  const productsList = JSON.parse(JSON.stringify(products))

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
