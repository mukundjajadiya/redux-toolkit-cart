import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const handleRemoveProduct = (id) => {
    dispatch(remove(id));
  };

  if (products.length === 0)
    return (
      <h2
        style={{
          width: "100%",
          minHeight: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Cart is Empty.
      </h2>
    );
  return (
    <div className="cart-products-wrapper">
      {products.map((product) => {
        return (
          <div className="cart-product" key={product.id}>
            <img src={product.image} alt="" />
            <h5>{product.title}</h5>
            <h5>{product.price}</h5>
            <button
              className="remove-item-btn"
              onClick={() => handleRemoveProduct(product.id)}
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
