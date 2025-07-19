"use client";

import { useAppContext } from "@/context/AppContext";
import { useRouter } from "next/navigation";

const AddOrBuy = ({id}) => {
  const { addToCart } = useAppContext();

  const router = useRouter();

  const handleBuyNow = async () => {
    await addToCart(id);
    router.push("/cart");
  };

  return (
    <div className="flex gap-6">
      <button
        className="flex-1 bg-white cursor-pointer brightness-95 hover:brightness-90 py-3 border-1 border-gray-200 rounded-sm"
        onClick={() => addToCart(_id)}
      >
        Add to Cart
      </button>
      <button
        onClick={handleBuyNow}
        className="border-1 flex-1 flex items-center justify-center border-orange-600 text-white font-medium bg-orange-600 rounded-sm cursor-pointer hover:bg-white hover:text-gray-600 duration-150 "
      >
        Buy now
      </button>
    </div>
  );
};

export default AddOrBuy;
