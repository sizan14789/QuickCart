"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ThankYou = () => {
  const [timer, setTimer] = useState(5);
  const router = useRouter();

  useEffect(() => {
    if(timer===0){
      router.push('/')
    }
    const timeout = setTimeout( ()=> setTimer(prev => prev-1), 1000)
    return () => clearTimeout(timeout);
  }, [timer]);

  return (
    <div className="box flex-grow flex justify-center flex-col md:items-center gap-4">
      <h2 className="text-4xl text-gray-700">Thank you for your purchase</h2>
      <p className="text-sm text-gray-800/50">
        We received your order and someone from us will reach to you soon for
        confirmation
      </p>
      <p className="text-sm text-gray-800/50">
        Redirecting to{" "}
        <Link href="/" className="underline hover:text-orange-600 transition">
          homepage
        </Link>{" "}
        in <span className="text-orange-600">{timer} </span>
      </p>
    </div>
  );
};

export default ThankYou;
