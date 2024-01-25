import { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import Filter from "./Filter";

function Products() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [rows, setRows] = useState(0);
  const [pages, setPages] = useState(0);

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

  useEffect(() => {
    getAllProducts();
  }, [page, name, company, price, rating]);

  const getAllProducts = async () => {
    const response = await axios.get(`http://localhost:3000/api/v1/products?name=${name}&company=${company}&numericFilters=price>=${price},rating>=${rating}&page=${page}&limit=${limit}`);
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
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product Name
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Company
              </th>
              <th scope="col" className="px-6 py-3">
                Rating
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {product.name}
                </th>
                <td className="px-6 py-4">${product.price}</td>
                <td className="px-6 py-4">{product.company}</td>
                <td className="px-6 py-4">{product.rating}</td>
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
