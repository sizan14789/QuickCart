import CartTable from "./components/CartTable";
import { auth } from "@clerk/nextjs/server";
import PlaceOrder from "./components/PlaceOrder";

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
  const cartData = await getCartData(userId);
  let productDetails = await getProductDetails(cartData);

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
          <CartTable
            userId={userId}
            cartData={cartData}
            productDetails={productDetails}
          />
        </div>

        <PlaceOrder cartItemsQuantity={productDetails.length} />
      </div>
    </div>
  );
};

export default Cart;
