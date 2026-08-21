import React from "react";
import { FaRegTrashAlt, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "../redux/slices/cartSlice";
import { addToWishlist } from "../redux/slices/wishSlice";

function Cart() {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.cartReducer);

  return (
    <>
      <div className="container-fluid p-2">
        <h2 className="fw-bold mb-4">Cart Summary</h2>

        <div className="row">
          {/* Cart Items */}
          <div className="col-sm-12 col-md-9">
            {cart?.length > 0 ? (
              <div className="table-responsive">
                <table className="table table-bordered table-hover align-middle">
                  <thead className="table-dark">
                    <tr>
                      <th>Sl. No.</th>
                      <th>Title</th>
                      <th>Image</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cart?.map((item, index) => (
                      <tr key={item.id}>
                        <td>{index + 1}</td>

                        <td>{item?.title}</td>

                        <td>
                          <img
                            src={item?.thumbnail}
                            alt={item?.title}
                            height={"120px"}
                            width={"100px"}
                            style={{
                              objectFit: "contain",
                            }}
                          />
                        </td>

                        <td>
                          <span>${item?.price}</span>
                        </td>

                        <td>
                          <div className="d-flex flex-wrap gap-2">
                            <button
                              className="btn btn-outline-success btn-sm"
                              onClick={() =>
                                dispatch(increaseQuantity(item.id))
                              }
                            >
                              +
                            </button>

                            <span className="border px-3 py-1 rounded bg-light">
                              {item?.quantity}
                            </span>

                            <button
                              className="btn btn-outline-danger btn-sm"
                              onClick={() =>
                                dispatch(decreaseQuantity(item.id))
                              }
                            >
                              -
                            </button>
                          </div>
                        </td>

                        <td>
                          <span>
                            ${(item?.price * item?.quantity).toFixed(2)}
                          </span>
                        </td>

                        <td>
                          <div className="d-flex gap-2">
                            {/* Add to Wishlist */}
                            <button
                              className="btn btn-outline-danger"
                              onClick={() => dispatch(addToWishlist(item))}
                            >
                              <FaHeart />
                            </button>

                            {/* Remove from Cart */}
                            <button
                              className="btn btn-outline-danger"
                              onClick={() => dispatch(removeFromCart(item.id))}
                            >
                              <FaRegTrashAlt />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <h4 className="text-center text-secondary mt-5">
                Your cart is empty
              </h4>
            )}
          </div>

          {/* Cart Summary */}
          <div className="col-sm-12 col-md-3">
            <div className="m-2 border border-2 rounded shadow p-3">
              <h4>
                Total Items: <span>{cart?.length}</span>
              </h4>

              <h4>
                Total Amount:{" "}
                <span>
                  $
                  {cart
                    ?.reduce(
                      (total, item) => total + item.price * item.quantity,
                      0,
                    )
                    .toFixed(2)}
                </span>
              </h4>

              <div className="d-grid mt-3">
                <button
                  className="btn btn-success"
                  onClick={() => dispatch(clearCart())}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
