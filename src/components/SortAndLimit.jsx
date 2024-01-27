function SortAndLimit({ limit, setLimit, sort, setSort, setFields }) {
  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    const fieldOrder = ["name", "price", "company", "rating"];

    setFields((prevFields) => {
      let updatedFields;
      if (isChecked) {
        if (!prevFields.includes(value)) {
          updatedFields = [...prevFields, value];
        }
      } else {
        updatedFields = prevFields.filter((field) => field !== value);
      }

      updatedFields.sort((a, b) => fieldOrder.indexOf(a) - fieldOrder.indexOf(b));
      return updatedFields;
    });
  };
  return (
    <form className="mx-auto flex">
      <div className="flex items-end w-1/2 justify-start">
        <div className="me-4">
          <label htmlFor="limit" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Entries Per Page
          </label>
          <select
            id="limit"
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">Choose an option</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
        <div className="me-4">
          <button
            id="dropdownSearchButton"
            data-dropdown-toggle="dropdownSearch"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            Select Fields{" "}
            <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>
          <div id="dropdownSearch" className="z-10 hidden bg-white rounded-lg shadow w-60 dark:bg-gray-700">
            <ul className="px-3 py-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSearchButton">
              <li>
                <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <input
                    id="red-checkbox"
                    type="checkbox"
                    value="name"
                    onChange={handleCheckboxChange}
                    defaultChecked
                    className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="red-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Product Name
                  </label>
                </div>
              </li>
              <li>
                <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <input
                    id="green-checkbox"
                    type="checkbox"
                    value="price"
                    onChange={handleCheckboxChange}
                    defaultChecked
                    className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="green-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Price
                  </label>
                </div>
              </li>
              <li>
                <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <input
                    id="purple-checkbox"
                    type="checkbox"
                    value="company"
                    onChange={handleCheckboxChange}
                    defaultChecked
                    className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="purple-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Company
                  </label>
                </div>
              </li>
              <li>
                <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <input
                    id="yellow-checkbox"
                    type="checkbox"
                    value="rating"
                    onChange={handleCheckboxChange}
                    defaultChecked
                    className="w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 rounded focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="yellow-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Rating
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-end w-1/2 justify-end">
        <div className="me-4">
          <label htmlFor="sort" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Sort by
          </label>
          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">Choose an option</option>
            <option value="name">Name (A-Z)</option>
            <option value="-name">Name (Z-A)</option>
            <option value="price">Price (Low-High)</option>
            <option value="-price">Price (High-Low)</option>
            <option value="rating">Rating (Low-High)</option>
            <option value="-rating">Rating (High-Low)</option>
          </select>
        </div>
      </div>
    </form>
  );
}

export default SortAndLimit;
