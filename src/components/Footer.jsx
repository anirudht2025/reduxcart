import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-light container-fluid py-5">
      <div className="row g-4">
        {/* About */}
        <div className="col-12 col-lg-4">
          <h3 className="fw-bold text-warning">REDUXCART</h3>

          <p className="text-light text-justify mb-0">
            ReduxCart is a modern online shopping platform where you can explore
            a wide range of products, add your favorite items to your cart, and
            manage your wishlist easily.
          </p>
        </div>

        {/* Links */}
        <div className="col-12 col-lg-4">
          <h3 className="fw-bold text-warning">Links</h3>

          <ul className="list-unstyled">
            <li className="mb-2">
              <Link to="/" className="text-light text-decoration-none">
                Home
              </Link>
            </li>

            <li className="mb-2">
              <Link to="/cart" className="text-light text-decoration-none">
                Cart
              </Link>
            </li>

            <li className="mb-2">
              <Link to="/wish" className="text-light text-decoration-none">
                Wishlist
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="col-12 col-lg-4">
          <h3 className="fw-bold text-warning">Contact Us</h3>

          <ul className="list-unstyled">
            <li className="mb-2">
              <strong>Address:</strong> Calicut, Kerala
            </li>

            <li className="mb-2">
              <strong>Phone:</strong> 9876543210
            </li>

            <li className="mb-2">
              <strong>Email:</strong> reduxcart@gmail.com
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-secondary mt-4" />

      <p className="text-center text-light mb-0">
        © 2026 ReduxCart. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
