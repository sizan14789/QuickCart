import CurrentProduct from "@/components/Shop/product/CurrentProduct";
import SimilarProducts from "@/components/Shop/product/SimilarProducts";

const Product = async ({ params }: { params: {
  id: string; slug: string 
} }) => {
  const res= await params
  const id = res.id;

  return (
    <div className="box my-auto">
      <CurrentProduct id={id} />
      <SimilarProducts id={id} />
    </div>
  );
};

export default Product;
