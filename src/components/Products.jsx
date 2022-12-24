import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { fetchProducts, STATUSES } from "../store/productsSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
    console.log("hello");
  }, [dispatch]);

  const handleAddCart = (product) => {
    dispatch(add(product));
  };

  if (status === STATUSES.LOADING)
    return (
      <h2
        style={{
          width: "100%",
          minHeight: "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Loading...
      </h2>
    );
  if (status === STATUSES.ERROR) return <h2>Something went wrong !</h2>;

  return (
    <div className="product-wrapper">
      {products.map((product) => {
        return (
          <div className="card" key={product.id}>
            <img src={product.image} alt="" />
            <h4>{product.title}</h4>
            <h5>Rs. {product.price}</h5>
            <button
              className="add-cart-btn"
              onClick={() => handleAddCart(product)}
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
