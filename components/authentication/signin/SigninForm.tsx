"use client";

import { useRouter } from "next/navigation";
import { handleSignIn } from "../../../app/(Frontend)/(authentication)/authFunctions";

const SigninForm = () => {
  const router = useRouter();

  // redirect logic here if signed in
  const isSignedIn = false;
  if (isSignedIn) {
    router.push("/");
    window.location.reload();
  }

  return (
    <form
      className="flex flex-col gap-2 md:gap-3 justify-center"
      action={(formData: FormData) => handleSignIn(formData)}
    >
      <label htmlFor="email"></label>
      <input
        type="email"
        placeholder="Email"
        name="email"
        required
        className="p-4 outline-0 border-1  border-gray-300 rounded-md focus:border-orange-600 max-w-[36.5rem] bg-white focus:brightness-95 "
      />

      <label htmlFor="password"></label>
      <input
        name="password"
        type="password"
        required
        placeholder="Password"
        className="p-4 outline-0 border-1 mb-3 border-gray-300 rounded-md focus:border-orange-600 max-w-[36.5rem] bg-white focus:brightness-95"
      />

      <button className="py-4 outline-0 border-1 font-medium  bg-orange-600 text-white  rounded-md border-orange-600 self-start px-10 cursor-pointer hover:text-gray-800 hover:bg-white duration-150 ">
        Sign in
      </button>
    </form>
  );
};

export default SigninForm;
