"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function OrderProcucts() {
  const router = useRouter();

  const handleOrder = () => {
    console.log("Placed order");
    router.push("/");
  };

  return (
    <>
      <h1>Order</h1>
      <button onClick={handleOrder}>Place order</button>
    </>
  );
}
