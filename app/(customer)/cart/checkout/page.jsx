import { auth } from "@clerk/nextjs/server";
import CheckoutForm from "./components/CheckoutForm";
import { redirect } from "next/navigation";

const getCartData = async (id) => {
  const res = await fetch(`${process.env.BASE_URL}/api/users/${id}`);
  const user = await res.json();
  return user.cartItems;
};

const getProductDetails = async (cartData) => {
  const entries = Object.entries(cartData);
  const productsDetails = await Promise.all(
    entries.map(async (entry) => {
      const res = await fetch(
        `${process.env.BASE_URL}/api/products/${entry[0]}`
      );
      const data = await res.json();
      return {
        ...data,
        quantity: entry[1],
      };
    })
  );
  return productsDetails;
};

const Checkout = async () => {
  const { userId } = await auth();
  
  if (userId==null){
    redirect('/', 'replace');
  }

  const cartData = await getCartData(userId);
  const productDetails = await getProductDetails(cartData);

  if (productDetails.length===0){
    redirect('/', 'replace');
  }

  const getTotal = ()=>{
    let total=0;
    productDetails.forEach(({offerPrice, quantity}) => {
      total+=offerPrice*quantity
    })
    return total;
  }

  const total = getTotal();

  return (
    <div className="box flex flex-col-reverse md:flex-row justify-center gap-10 md:gap-24">
      <div className="flex flex-col">
        <h2 className="text-4xl mb-6">Your Information</h2>

        <CheckoutForm cartData={cartData} userId={userId} />

      </div>

      <div className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] flex flex-col border-1 border-gray-300 rounded-md md:min-w-72 lg:min-w-96">
        <h2 className="text-4xl py-4 text-center border-b-1 border-b-gray-300 text-orange-600">
          Checkout
        </h2>

        <div className="flex items-center">
          <h2 className="flex-1 text-xl text-black-900 p-2 text-center">
            Name
          </h2>
          <p className="flex-1 text-xl text-black-900 p-2 text-center">
            Price
          </p>
        </div>

        {productDetails.map(({ name, _id, quantity, offerPrice }) => {
          return (
            <div className="flex items-center text-gray-700" key={_id}>
              <h2 className="flex-1 md:w-36 p-2">{name}</h2>
              <p className="flex-1 p-2 text-center">
                {quantity}x{offerPrice}={quantity * offerPrice}
              </p>
            </div>
          );
        })}

        <div className="flex mt-auto items-center">
          <h2 className="flex-1 md:w-36 text-xl p-2">Total :</h2>
          <p className="flex-1 p-2 text-center text-2xl font-semibold">
            <span className="text-orange-600">$</span> {total}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
