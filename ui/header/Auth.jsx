import { BagIcon, CartIcon } from "@/assets/assets";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const Auth = () => {
  const router = useRouter();

  return (
    <div className="flex gap-2">
      <SignedOut>
        <SignInButton mode="modal">
          <button className="cursor-pointer border-1 border-gray-300 px-2 p-1 text-sm rounded text-medium duration-150 bg-white hover:brightness-90">
            Sign in
          </button>
        </SignInButton>
        <SignUpButton mode="modal">
          <button className="cursor-pointer border-1 border-orange-600 px-2 p-1 text-sm rounded duration-150  bg-orange-600 text-white text-medium hover:brightness-85">
            Sign up
          </button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <UserButton>
          <UserButton.MenuItems>
            <UserButton.Action
              label="Cart"
              labelIcon={<CartIcon />}
              onClick={() => router.push("/cart")}
            />
          </UserButton.MenuItems>
          <UserButton.MenuItems>
            <UserButton.Action
              label="My Order"
              labelIcon={<BagIcon />}
              onClick={() => router.push("/myOrders")}
            />
          </UserButton.MenuItems>
        </UserButton>
      </SignedIn>
    </div>
  );
};

export default Auth;
