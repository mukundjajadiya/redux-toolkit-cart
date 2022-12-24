import React from "react";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <h1
        style={{
          marginTop: "20px",
        }}
      >
        Welcome to my store
      </h1>
      <Products />
    </div>
  );
};

export default Home;
