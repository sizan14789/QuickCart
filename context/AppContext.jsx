"use client";

import { useAuth, useUser } from "@clerk/nextjs";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const { user } = useUser();
  const { getToken } = useAuth();
  const [userData, setUserData] = useState();
  const [isSeller, setIsSeller] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const addToCart = async (itemId) => {
    if (!user) {
      toast.error("Please log in");
      return;
    }
    let cartData = { ...cartItems };
    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }
    setCartItems(cartData);
    try {
      if (user) {
        await fetch(`/api/cart/update`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cartData),
        });
        toast.success("Item added to cart");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const clearCart = async ()=>{
    setCartItems({});
    try {
      if (user) {
        await fetch(`/api/cart/update`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        });
        toast.success("Cart Cleared");
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  const fetchUserData = () => {
    try {
      if (user?.publicMetadata.role === "seller") {
        setIsSeller(true);
      }
      if (user) {
        const getUserData = async () => {
          const res1 = await fetch(`/api/users/${user.id}`);
          const res2 = await res1.json();
          setUserData(res2);
          setCartItems(res2.cartItems);
        };
        getUserData();
      }
    } catch (error) {
      throw new Error(error);
    }
  };
  
  useEffect(() => {
    fetchUserData();
  }, [user]);

  const value = {
    user,
    userData,
    isSeller,
    getToken,
    cartItems,
    clearCart,
    addToCart,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
