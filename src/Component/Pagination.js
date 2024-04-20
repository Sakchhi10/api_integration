import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.css'; // Create a CSS file for styling pagination (e.g., Pagination.css)

const ITEMS_PER_PAGE = 10; // Number of items to display per page
const TOTAL_PAGES = 2; // Total number of pages with different data

function Pagination() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState([]);

  useEffect(() => {
    // Function to fetch data based on the current page number
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments?_page=1&_limit=20");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * ITEMS_PER_PAGE;
  const pageCount = TOTAL_PAGES;

  const displayedData = data.slice(offset, offset + ITEMS_PER_PAGE);

  return (
    <div>
      <h1 className='text-center fw-bold p-2'>Paginated Table</h1>
      <table>
        {/* Table headers */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        {/* Table data */}
        <tbody>
          {displayedData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination-container">
        <ReactPaginate
          previousLabel="Previous"
          nextLabel="Next"
          breakLabel="..."
          breakClassName="break-me"
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName="pagination"
          subContainerClassName="pages pagination"
          activeClassName="active"
        />
      </div>

      {/* Display the current page and total number of pages */}
      <p className="page-count">
        Page {currentPage + 1} of {pageCount}
      </p>
    </div>
  );
}

export default Pagination;