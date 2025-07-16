"use client";

import { useAppContext } from "@/context/AppContext";
import Loader from "@/ui/loader/Loader";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Checkout = () => {
  const [cartProductsDetails, setCartProductsDetails] = useState([]);
  const { cartItems, userData, clearCart } = useAppContext();
  const keysArray = Object.keys(cartItems) || {};

  const [total, setTotal] = useState(0);

  const router = useRouter();

  useEffect(() => {
    const getCartData = async () => {
      if (keysArray.length == 0) {
        // router.push('/cart');
        return;
      }
      setCartProductsDetails([]);
      const productList = await Promise.all(
        keysArray.map(async (elem) => {
          const res = await fetch(`/api/products/${elem}`);
          let data = await res.json();
          return {
            ...data,
            quantity: cartItems[elem],
          };
        })
      );
      let sum = 0;
      productList.forEach(({ offerPrice, quantity }) => {
        sum += quantity * offerPrice;
      });
      setTotal(sum);
      setCartProductsDetails(productList);
    };
    getCartData();
  }, [cartItems]);

  const synchUserOrder = async ()=>{
    await fetch(`/api/users/${userData._id}`, {
      method: "POST",
      body: JSON.stringify(cartItems)
    });
  }

  const handleCheckout = async (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    // add to user database functionality

    const username = formdata.get("name");
    const address = formdata.get("address");
    const phone = formdata.get("phone");

    await Promise.all(
      keysArray.map(async (elem) => {
        const newData = new FormData();
        newData.append("username", username);
        newData.append("phone", phone);
        newData.append("address", address);
        newData.append("productId", elem);
        newData.append("quantity", cartItems[elem]);
        newData.append("userId", userData._id);

        await fetch(`/api/orders`, {
          method: "POST",
          body: newData,
        });
      })
    );
    await synchUserOrder();
    clearCart();
    toast.success("Order Placed");
    router.push('/cart/checkout/thankyou');
  };

  return (
    <div className="box flex  flex-col md:flex-row justify-center gap-10 md:gap-24">
      <div className="flex flex-col">
        <h2 className="text-4xl mb-6">Info</h2>

        <form onSubmit={handleCheckout} className="flex flex-col gap-3">
          <label htmlFor="name">Name</label>
          <input
            className="sm:min-w-96 brightness-95 border-1 border-gray-300 rounded-md px-2 bg-white py-4"
            type="text"
            required
            placeholder="Abdul Karim"
            name="name"
          />

          <label htmlFor="phone">Phone</label>
          <input
            className="sm:min-w-96 brightness-95 border-1 border-gray-300 rounded-md px-2 bg-white py-4"
            type="text"
            required
            placeholder="+8801********"
            name="phone"
          />

          <label htmlFor="name">Address</label>
          <input
            className="sm:min-w-96 brightness-95 border-1 border-gray-300 rounded-md px-2 bg-white py-4"
            type="text"
            required
            placeholder="house no, street name, upzilla, zilla"
            name="address"
          />

          <button className="cursor-pointer border-1 mt-6 self-center mb-2 border-orange-600 px-10 py-4 text-sm rounded duration-150  bg-orange-600 text-white text-medium hover:brightness-85">
            Checkout
          </button>
        </form>
      </div>

      <div className="flex flex-col border-2 border-orange-600 rounded-md md:min-w-72 lg:min-w-96">
        <h2 className="text-4xl py-4 text-center border-b-2 border-b-orange-600 ">
          Checkout
        </h2>

        <div className="flex items-center">
          <h2 className="flex-1 text-xl text-orange-600 p-2 text-center">
            Name
          </h2>
          <p className="flex-1 text-xl text-orange-600 p-2 text-center">
            Price
          </p>
        </div>

        {cartProductsDetails.length == 0 ? (
          <Loader />
        ) : (
          cartProductsDetails.map(({ name, _id, quantity, offerPrice }) => {
            return (
              <div className="flex items-center text-gray-700" key={_id}>
                <h2 className="flex-1 md:w-36 p-2">{name}</h2>
                <p className="flex-1 p-2 text-center">
                  {quantity}x{offerPrice}={quantity * offerPrice}
                </p>
              </div>
            );
          })
        )}

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
