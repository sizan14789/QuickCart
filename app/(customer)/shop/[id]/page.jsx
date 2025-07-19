import CurrentProduct from "./components/CurrentProduct";
import SimilarProducts from "./components/SimilarProducts";

const Product = async ({ params }) => {
  const { id } = await params;

  return (
    <div className="box my-auto flex flex-col">
      <CurrentProduct id={id} />
      <SimilarProducts id={id}/>
    </div>
  );
};

export default Product;
