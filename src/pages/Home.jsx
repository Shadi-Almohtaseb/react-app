import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const Home = ({ cart, deleteFromCart, addToCart, productCards }) => {
  return (
    <div className="min-h-screen h-full bg-[#020711f9] mt-5 pt-20">
      <div className="flex items-center justify-center flex-wrap gap-5">
        {productCards.map((product) => {
          return (
            <Card
              key={product.name}
              product={product}
              addToCart={addToCart}
              deleteFromCart={deleteFromCart}
              cart={cart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
