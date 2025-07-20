import CartTable from "./components/CartTable";
import { auth, currentUser } from "@clerk/nextjs/server";
import PlaceOrder from "./components/PlaceOrder";
import Link from "next/link";

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

const Cart = async () => {
  const { userId } = await auth();

  if (userId == null)
    return (
      <div className="flex flex-col gap-2 flex-grow box justify-center items-center">
        <h2 className="text-[6vw] md:text-4xl">Not logged in</h2>
        <p className="text-gray-800/50 text-sm mx-[2rem] text-center">
          Log in or sign up from the top right corner to add items to the cart.
        </p>
      </div>
    );

  const cartData = await getCartData(userId);
  const productDetails = await getProductDetails(cartData);

  return (
    <div className="box flex-1">
      <div className="flex flex-col ">
        <div className="flex md:flex-2 flex-col text-gray-700">
          <div className="flex justify-between ">
            <h2 className="relative mb-6 self-start text-4xl font-medium ">
              Your <span className="text-orange-600">Cart</span>
            </h2>
          </div>
          <hr className="text-gray-400 mb-4" />
          {productDetails.length === 0 ? (
            <h2 className="text-center text-gray-800/50 mt-3 mb-5">
              Your cart is empty. Visit <Link href="/shop" className="text-orange-600" >shop</Link>{" "}
            </h2>
          ) : (
            <CartTable
              userId={userId}
              cartData={cartData}
              productDetails={productDetails}
            />
          )}
        </div>

        <PlaceOrder cartItemsQuantity={productDetails.length} />
      </div>
    </div>
  );
};

export default Cart;
