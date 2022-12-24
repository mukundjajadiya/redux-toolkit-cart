import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div className="nav-wrapper">
      <span>Store</span>
      <div className="nav-link">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </div>
      <span className="cart-item">Cart Item: {items.length}</span>
    </div>
  );
};

export default Navbar;
