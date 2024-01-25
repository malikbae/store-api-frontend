import React from "react";
import Products from "../components/Products";
import Pagination from "../components/Pagination";

function Page() {
  return (
    <div className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4"></div>
      <Products />
    </div>
  );
}

export default Page;
