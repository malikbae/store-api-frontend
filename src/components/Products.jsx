import { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import Filter from "./Filter";
import SortAndLimit from "./SortAndLimit";

function Products() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [rows, setRows] = useState(0);
  const [pages, setPages] = useState(0);
  const [sort, setSort] = useState("");

  const [lowestPrice, setLowestPrice] = useState(0);
  const [highestPrice, setHighestPrice] = useState(0);
  const [lowestRating, setLowestRating] = useState(0);
  const [highestRating, setHighestRating] = useState(0);

  const [name, setName] = useState("");
  const [queryName, setQueryName] = useState("");
  const [company, setCompany] = useState("");
  const [queryCompany, setQueryCompany] = useState("");
  const [price, setPrice] = useState(0);
  const [queryPrice, setQueryPrice] = useState(0);
  const [rating, setRating] = useState(0);
  const [queryRating, setQueryRating] = useState(0);

  const [fields, setFields] = useState(["name", "price", "company", "rating"]);
  const fieldsList = fields.join(",");

  useEffect(() => {
    getAllProducts();
  }, [page, name, company, price, rating, limit, sort, fieldsList]);

  const getAllProducts = async () => {
    const response = await axios.get(`http://localhost:3000/api/v1/products?name=${name}&company=${company}&numericFilters=price>=${price},rating>=${rating}&fields=${fieldsList}&sort=${sort}&page=${page}&limit=${limit}`);
    setProducts(response.data.products);
    setRows(response.data.totalRows);
    setPages(response.data.totalPage);
    setLowestPrice(response.data.lowestPrice);
    setHighestPrice(response.data.highestPrice);
    setLowestRating(response.data.lowestRating);
    setHighestRating(response.data.highestRating);
  };

  const changePage = (newPage) => {
    setPage(newPage);
  };

  const searchData = (e) => {
    e.preventDefault();
    setPage(1);
    setName(queryName);
    setCompany(queryCompany);
    setPrice(queryPrice);
    setRating(queryRating);
  };

  return (
    <>
      <div className="mb-4">
        <Filter
          queryName={queryName}
          setQueryName={setQueryName}
          queryCompany={queryCompany}
          setQueryCompany={setQueryCompany}
          queryPrice={queryPrice}
          setQueryPrice={setQueryPrice}
          lowestPrice={lowestPrice}
          highestPrice={highestPrice}
          queryRating={queryRating}
          setQueryRating={setQueryRating}
          lowestRating={lowestRating}
          highestRating={highestRating}
          searchData={searchData}
        />
      </div>
      <div className="mb-4">
        <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
        <SortAndLimit limit={limit} setLimit={setLimit} sort={sort} setSort={setSort} setFields={setFields} />
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {fields.map((field) => (
                <th key={field} scope="col" className="px-6 py-3">
                  {field}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                {fields.includes("name") ? (
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {product.name}
                  </th>
                ) : (
                  ""
                )}
                {fields.includes("price") ? <td className="px-6 py-4">${product.price}</td> : ""}
                {fields.includes("company") ? <td className="px-6 py-4">{product.company}</td> : ""}
                {fields.includes("rating") ? <td className="px-6 py-4">{product.rating}</td> : ""}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center mt-4 mb-4">
          <Pagination page={page} rows={rows} pages={pages} changePage={changePage} />
        </div>
      </div>
    </>
  );
}

export default Products;
