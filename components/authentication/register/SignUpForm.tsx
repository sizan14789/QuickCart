"use client";

import { handleSignUp } from "@/app/(Frontend)/(authentication)/authFunctions";
import { useRouter } from "next/navigation";

const SignUpForm = () => {
  const router = useRouter();

  // redirect logic here if signed in
  const isSignedIn = false;
  if (isSignedIn) {
    router.push("/");
    window.location.reload();
  }

  return (
    <form className="flex flex-col gap-2 md:gap-3 justify-center"
    action={(formData:FormData)=>handleSignUp(formData)}
    >
      <label htmlFor="username"></label>
      <input
        type="text"
        name="username"
        placeholder="Enter username"
        required
        className="p-4 outline-0 border-1  border-gray-300 rounded-md focus:border-orange-600 max-w-[36.5rem] bg-white focus:brightness-95 "
      />

      <label htmlFor="email"></label>
      <input
        type="email"
        name="email"
        placeholder="Enter email"
        required
        className="p-4 outline-0 border-1  border-gray-300 rounded-md focus:border-orange-600 max-w-[36.5rem] bg-white focus:brightness-95 "
      />

      <label htmlFor="password1"></label>
      <input
        name="password1"
        required
        placeholder="Enter password"
        className="p-4 outline-0 border-1  border-gray-300 rounded-md focus:border-orange-600 max-w-[36.5rem] bg-white focus:brightness-95"
      />

      <label htmlFor="password2"></label>
      <input
        name="password2"
        required
        placeholder="Re-enter password"
        className="p-4 outline-0 border-1 mb-4  border-gray-300 rounded-md focus:border-orange-600 max-w-[36.5rem] bg-white focus:brightness-95"
      />

      <button className="py-4 outline-0 border-1 font-medium  bg-orange-600 text-white  rounded-md border-orange-600 self-start px-10 cursor-pointer hover:text-gray-800 hover:bg-white duration-150 ">
        Sign up
      </button>
    </form>
  );
};

export default SignUpForm;
