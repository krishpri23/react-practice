import { useEffect } from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();

  const getProducts = async () => {
    // Making api call to display only 10 products for each page
    // Having total products in mind, display all pagination buttons before
    // On clikcing each page, api call will be made

    const res = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`
    );
    const products = await res.json();

    if (products && products.products) {
      setProducts(products.products);
      // gives 19.4 so to fix it use ceil- rounds up
      setTotalPages(Math.ceil(products.total / 10));
    }
  };

  useEffect(() => {
    getProducts();
  }, [page]);

  const handlePageHandler = (selectedPage) => {
    if (
      selectedPage !== page &&
      selectedPage <= products.length &&
      selectedPage >= 1
    ) {
      setPage(selectedPage);
    }
  };

  return (
    <main className="root">
      <h1> Pagination </h1>
      {products.length > 0 && (
        <div className="products">
          {/* Frontend driven approach */}
          {/* {products.slice(page * 10 - 10, page * 10)?.map((item) => { */}
          {products?.map((item) => {
            return (
              <div key={item.id} className="product-desc">
                <h2 className="product-title"> {item.title} </h2>
                <img
                  src={item.thumbnail}
                  alt="product image"
                  className="product-thumbnail"
                />
              </div>
            );
          })}
        </div>
      )}

      {products.length > 0 && (
        <div className="pagination">
          <button onClick={() => setPage((prev) => prev - 1)}> Prev </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              className={page === i + 1 ? "selected" : "index"}
              key={i}
              onClick={() => handlePageHandler(i + 1)}
            >
              {" "}
              {i + 1}{" "}
            </button>
          ))}
          <button onClick={() => setPage((prev) => prev + 1)}> Next</button>
        </div>
      )}
    </main>
  );
}

export default App;
