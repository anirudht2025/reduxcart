import React from "react";
import { FaHeartCircleXmark, FaCartPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../redux/slices/wishSlice";
import { addToCart } from "../redux/slices/cartSlice";

function Wishlist() {
  const dispatch = useDispatch();

  const { wishlist } = useSelector((state) => state.wishlistReducer);

  // const handleAddtocart = (product) => {
  //   dispatch(addToCart(product));
  //   dispatch(removeFromWishlist(product));
  // };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Wishlist</h1>

      {wishlist?.length > 0 ? (
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {wishlist.map((item) => (
            <div className="col mb-5" key={item.id}>
              <div className="card h-100 shadow-sm">
                {/* Product Image */}
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
                    {/* Add to Cart */}
                    <button
                      className="btn btn-success"
                      onClick={() => {
                        dispatch(addToCart(item));
                        dispatch(removeFromWishlist(item.id));
                      }}
                      // onClick={() => handleAddtocart(item)}
                    >
                      <FaCartPlus />
                    </button>

                    {/* Remove from Wishlist */}
                    <button
                      className="btn btn-danger"
                      onClick={() => dispatch(removeFromWishlist(item.id))}
                    >
                      <FaHeartCircleXmark />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h4 className="text-center text-secondary mt-5">
          Your wishlist is empty
        </h4>
      )}
    </div>
  );
}

export default Wishlist;
