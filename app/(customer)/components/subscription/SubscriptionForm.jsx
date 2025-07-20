"use client"

import toast from "react-hot-toast";

const SubscriptionForm = () => {

  const handleSubscriptionClick = ()=>{
    toast("Function not implemented yet")
  }

  return (
    <div className="flex w-full justify-center">
      <input
        type="email"
        name="email"
        placeholder="Enter your email id"
        required
        className="outline-0 max-w-2xl border-1 border-stone-300 px-3 rounded-l-md w-full focus:border-orange-600 focus:brightness-95 bg-white"
      />
      <button 
      onClick={handleSubscriptionClick}
      className="bg-orange-600 px-12 py-4 rounded-r-md text-white hover:brightness-90 cursor-pointer">
        Subscribe
      </button>
    </div>
  );
};

export default SubscriptionForm;
