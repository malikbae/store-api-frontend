import React from "react";
import Products from "../components/Products";

function Page() {
  return (
    <div className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4"></div>
      <Products />
    </div>
  );
}

export default Page;
