"use client";

import { useAuth, useUser } from "@clerk/nextjs";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const { user } = useUser();
  const [userData, setUserData] = useState();
  const [isSeller, setIsSeller] = useState(false);

  const addToCart = async (id) => {
    if (user) {
      await fetch(`/api/cart/update/add`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      toast.success("Item added to cart");
    } else {
      toast.error("Not logged in");
    }
  };

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
    addToCart,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
