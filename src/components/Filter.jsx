import React from "react";

function Filter({ queryName, setQueryName, queryCompany, setQueryCompany, queryPrice, setQueryPrice, lowestPrice, highestPrice, queryRating, setQueryRating, lowestRating, highestRating, searchData }) {
  return (
    <form className="mx-auto flex items-end" onSubmit={searchData}>
      <div className="me-4">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Product Name
        </label>
        <input
          type="text"
          id="email"
          value={queryName}
          onChange={(e) => setQueryName(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="chair"
        />
      </div>
      <div className="me-4">
        <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Select an option
        </label>
        <select
          id="company"
          value={queryCompany}
          onChange={(e) => {
            setQueryCompany(e.target.value);
          }}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="">Choose a company</option>
          <option value="ikea">Ikea</option>
          <option value="liddy">Liddy</option>
          <option value="caressa">Caressa</option>
          <option value="marcos">Marcos</option>
        </select>
      </div>
      <div className="me-4">
        <label for="default-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Price {">"}= {queryPrice}
        </label>
        <input
          id="default-range"
          min={lowestPrice}
          max={highestPrice}
          value={queryPrice}
          onChange={(e) => setQueryPrice(e.target.value)}
          type="range"
          class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
      </div>
      <div className="me-4">
        <label for="default-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Rating {">"}= {queryRating}
        </label>
        <input
          id="default-range"
          min={lowestRating}
          max={highestRating}
          value={queryRating}
          step={0.01}
          onChange={(e) => setQueryRating(e.target.value)}
          type="range"
          class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
      </div>
      <div className="me-4">
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default Filter;
