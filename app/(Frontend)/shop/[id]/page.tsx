import CurrentProduct from "@/components/Shop/product/CurrentProduct";
import SimilarProducts from "@/components/Shop/product/SimilarProducts";

const Product = async ({ params }: { params: {
  id: string; slug: string 
} }) => {
  const id = params.id;

  return (
    <div className="box my-auto">
      <CurrentProduct id={id} />
      <SimilarProducts />
    </div>
  );
};

export default Product;
