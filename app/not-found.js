"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NotFound({ error, reset }) {
  const [timer, setTimer] = useState(5);
  const router = useRouter();

  useEffect(() => {
    if (timer === 0) {
      router.push("/");
    }
    const timeout = setTimeout(() => setTimer((prev) => prev - 1), 1000);
    return () => clearTimeout(timeout);
  }, [timer]);

  return (
    <div className="flex justify-center items-center flex-grow flex-col">
      <h2 className="text-3xl">You should not be here</h2>
      <p className="text-sm text-gray-800/50">
        Redirecting to {" "}
        <Link href="/" className="underline hover:text-orange-600 transition">
          homepage {" "}
        </Link>
        in <span className="text-orange-600">{timer} </span>
      </p>
    </div>
  );
}
