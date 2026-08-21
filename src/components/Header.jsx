import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { FaOpencart, FaShoppingCart, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { searchProduct } from "../redux/slices/productSlice";

function Header() {
  const { cart } = useSelector((state) => state.cartReducer);
  const { wishlist } = useSelector((state) => state.wishlistReducer);
  const dispatch = useDispatch();

  return (
    <Navbar className="bg-body-tertiary shadow-sm py-3">
      <Container className="d-flex flex-column flex-lg-row gap-3">
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="fw-bold mb-0">
          <FaOpencart
            className="text-danger me-2"
            style={{ fontSize: "25px" }}
          />
          REDUXCART
        </Navbar.Brand>

        {/* Search */}
        <input
          type="search"
          placeholder="Enter keyword to search"
          className="form-control w-100"
          style={{ maxWidth: "600px" }}
          onChange={(e) => dispatch(searchProduct(e.target.value))}
        />

        {/* Cart & Wishlist */}
        <div className="d-flex gap-2 justify-content-center flex-shrink-0">
          <Link to="/cart" className="btn btn-outline-dark px-3 py-2">
            <FaShoppingCart className="text-success me-1" />
            Cart <span className="badge bg-success">{cart?.length}</span>
          </Link>

          <Link to="/wish" className="btn btn-outline-dark px-3 py-2">
            <FaHeart className="text-danger me-1" />
            Wishlist <span className="badge bg-danger">{wishlist?.length}</span>
          </Link>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
