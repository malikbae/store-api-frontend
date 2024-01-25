function Pagination({ page, rows, pages, changePage }) {
  const renderPagination = () => {
    const paginationItems = [];
    for (let i = 1; i <= pages; i++) {
      const isCurrentPage = i === page;

      paginationItems.push(
        <li key={i}>
          <a
            onClick={() => {
              changePage(i);
            }}
            className={` 
                  ${
                    isCurrentPage
                      ? "z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white hover:cursor-pointer select-none"
                      : "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white hover:cursor-pointer select-none"
                  }`}
            aria-current={isCurrentPage ? "page" : undefined}
          >
            {i}
          </a>
        </li>
      );
    }
    return paginationItems;
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="flex items-center -space-x-px h-8 text-sm">
        <li>
          <a
            onClick={() => {
              if (page > 1) {
                changePage(page - 1);
              }
            }}
            className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
              page === 1 ? "cursor-not-allowed opacity-50" : "cursor-pointer"
            } select-none`}
          >
            <span className="sr-only">Previous</span>
            <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
            </svg>
          </a>
        </li>
        {renderPagination()}
        <li>
          <a
            onClick={() => {
              if (page < pages) {
                changePage(page + 1);
              }
            }}
            className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
              page === pages ? "cursor-not-allowed opacity-50" : "cursor-pointer"
            } select-none`}
          >
            <span className="sr-only">Next</span>
            <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
