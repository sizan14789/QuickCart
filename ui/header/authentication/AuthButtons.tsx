import Link from "next/link";

const AuthButtons = () => {
  return (
    <div className="flex gap-2 md:gap-4 items-center">
      <Link href="/signin" className="cursor-pointer border-1 border-gray-300 px-2 p-1 text-sm rounded text-medium duration-150 bg-white hover:brightness-90">
        Sign in
      </Link>
      <Link href="signup" className="cursor-pointer border-1 border-orange-600 px-2 p-1 text-sm rounded duration-150  bg-orange-600 text-white text-medium hover:brightness-85">
        Sign up
      </Link>
    </div>
  );
};

export default AuthButtons;
