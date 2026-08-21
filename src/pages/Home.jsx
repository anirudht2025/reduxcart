import React, { useEffect } from "react";
import { FaCartPlus, FaHeartCirclePlus } from "react-icons/fa6";
import {
  TbPlayerTrackPrevFilled,
  TbPlayerTrackNextFilled,
} from "react-icons/tb";
import { Link } from "react-router-dom";
import { fetchProducts } from "../redux/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { addToWishlist } from "../redux/slices/wishSlice";
import { nextPage, prevPage } from "../redux/slices/productSlice";

function Home() {
  const dispatch = useDispatch();

  const { products, error, pending, currentPage } = useSelector(
    (state) => state.productReducer,
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const productsPerPage = 10;

  const totalPages = Math.ceil(products.length / productsPerPage);

  const startIndex = (currentPage - 1) * productsPerPage;

  const currentProducts = products.slice(
    startIndex,
    startIndex + productsPerPage,
  );

  const handleNext = () => {
    if (currentPage < totalPages) {
      dispatch(nextPage());
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      dispatch(prevPage());
    }
  };

  return (
    <>
      {/* Hero Section */}
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop in Style</h1>

            <p className="lead fw-normal text-white-50 mb-0">
              With this shop homepage template
            </p>
          </div>
        </div>
      </header>

      {/* Products Section */}
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          {/* Loading */}
          {pending && (
            <div className="container d-flex justify-content-center">
              <img
                src="https://i.pinimg.com/originals/fb/f4/64/fbf4b45b5982c142d6b25d8bf45daa40.gif"
                alt="loading"
                width="50%"
              />
            </div>
          )}

          {/* Error */}
          {error?.length > 0 ? (
            <h3 className="text-center text-danger">{error}</h3>
          ) : (
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              {currentProducts?.map((item) => (
                <div className="col mb-5" key={item.id}>
                  <div className="card h-100 shadow-sm">
                    {/* Product Image */}
                    <Link to={`/product/${item.id}`}>
                      <img
                        className="card-img-top"
                        src={item?.thumbnail}
                        alt={item?.title}
                        style={{
                          height: "250px",
                          objectFit: "contain",
                          padding: "15px",
                        }}
                      />
                    </Link>

                    {/* Product Details */}
                    <div className="card-body p-4">
                      <div className="text-center">
                        <h5 className="fw-bolder">
                          {item?.title?.slice(0, 15)}...
                        </h5>

                        <span>${item?.price}</span>
                      </div>
                    </div>

                    {/* Product Actions */}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="d-flex justify-content-between align-items-center">
                        <button
                          className="btn btn-success"
                          onClick={() => dispatch(addToCart(item))}
                        >
                          <FaCartPlus />
                        </button>

                        <button
                          className="btn btn-danger"
                          onClick={() => dispatch(addToWishlist(item))}
                        >
                          <FaHeartCirclePlus />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Pagination */}
      <div className="d-flex justify-content-center">
        <div className="my-3 d-flex align-items-center gap-3">
          <button
            className="btn btn-outline-dark"
            onClick={handlePrev}
            disabled={currentPage === 1}
          >
            <TbPlayerTrackPrevFilled />
          </button>

          <span className="d-flex align-items-center fw-bold">
            {currentPage} / {totalPages}
          </span>

          <button
            className="btn btn-outline-dark"
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            <TbPlayerTrackNextFilled />
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
