"use client";

import { useAuth, useUser } from "@clerk/nextjs";
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

  const { user } = useUser();
  const { getToken } = useAuth();

  const [ userData, setUserData ] = useState();
  const [ isSeller, setIsSeller ] = useState(false);
  const [ cartItems, setCartItems ] = useState();

  const fetchUserData = ()=>{
    try {
      if (user?.publicMetadata.role === 'seller'){
        setIsSeller(true);
      }
      if(user){
        const getUserData = async ()=>{
          const res1 = await fetch(`/api/users/${user.id}`);
          const res2 = await res1.json();
          setUserData(res2);
          setCartItems(res2.cartItems);
        }
        getUserData();
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  useEffect(()=>{
    fetchUserData();
  }, [user])

  const value = {
    userData,
    isSeller,
    getToken,
    cartItems
  }


  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
