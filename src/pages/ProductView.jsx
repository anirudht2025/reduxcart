import React, { useEffect, useState } from "react";
import { FaStar, FaCartPlus } from "react-icons/fa";
import { useParams } from "react-router-dom";

function ProductView() {
  const [detail, setDetail] = useState({});

  const { id } = useParams();

  useEffect(() => {
    getProduct();
  }, [id]);

  const getProduct = () => {
    const storedProducts = sessionStorage.getItem("products");

    if (storedProducts) {
      const productArray = JSON.parse(storedProducts);

      const product = productArray.find((item) => item.id === Number(id));

      setDetail(product);
    }
  };

  console.log(detail);

  return (
    <>
      <div className="container-fluid py-5" style={{ minHeight: "75vh" }}>
        <h2 className="text-center fw-bold mb-5">Product Details</h2>

        <div className="container">
          <div className="row align-items-center shadow rounded p-4">
            {/* Product Image */}
            <div className="col-sm-12 col-md-6 text-center">
              <div className="p-3">
                <img
                  src={detail?.thumbnail}
                  alt={detail?.title}
                  className="img-fluid"
                  style={{
                    height: "400px",
                    width: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="col-sm-12 col-md-6">
              <h2 className="fw-bold mb-3">{detail?.title}</h2>

              <div className="mb-3">
                <span className="badge bg-secondary">{detail?.category}</span>
              </div>

              <h3 className="text-success fw-bold mb-3">${detail?.price}</h3>

              <p
                className="text-secondary"
                style={{
                  textAlign: "justify",
                  lineHeight: "1.8",
                }}
              >
                {detail?.description}
              </p>

              <div className="mb-4">
                <span className="fw-semibold">Rating:</span>{" "}
                <FaStar className="text-warning" />{" "}
                <span>{detail?.rating}</span>
              </div>

              <button className="btn btn-success px-4 py-2">
                <FaCartPlus className="me-2" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductView;
