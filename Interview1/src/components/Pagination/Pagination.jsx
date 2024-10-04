import { useState } from "react";

const Pagination = () => {
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [pageNo, setPageNo] = useState();

  return (
    <div>
      <h2> Pagination</h2>
      <button> Prev </button>
      {pages.map((page, i) => (
        <button key={i}>{page}</button>
      ))}
      <button>Next</button>
    </div>
  );
};

export default Pagination;
