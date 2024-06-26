import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import Cart from "./pages/Cart";

function App() {
  const [userIn, setUserIn] = useState(localStorage.getItem("userIn") || false);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("userIn", false);
  }, []);

  useEffect(() => {
    const user = localStorage.getItem("userIn");
    if (!user) {
      navigate("/login");
    }
  }, []);

  // logic for the cart:
  const [cart, setCart] = useState(
    () => JSON.parse(localStorage.getItem("cart")) || []
  );

  const addToCart = (product) => {
    if (cart.some((item) => item.name === product.name)) {
      return;
    }
    setCart([...cart, product]);
  };

  const deleteFromCart = (product) => {
    const newCart = cart.filter((item) => item.name !== product.name);
    setCart(newCart);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const productCards = [
    {
      name: "Wireless Headphones",
      price: 99.99,
      description:
        "High-quality wireless headphones with noise-cancellation feature and long-lasting battery life.",
      imageUrl:
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2lyZWxlc3MlMjBIZWFkcGhvbmVzfGVufDB8fDB8fHww",
    },
    {
      name: "Smart Watch",
      price: 199.99,
      description:
        "Advanced smart watch with heart rate monitor, GPS, and customizable watch faces.",
      imageUrl: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f",
    },
    {
      name: "Bluetooth Speaker",
      price: 49.99,
      description:
        "Portable Bluetooth speaker with powerful sound and water-resistant design.",
      imageUrl:
        "https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZXRvb3RoJTIwc3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Laptop Stand",
      price: 29.99,
      description:
        "Ergonomic laptop stand with adjustable height and sturdy construction.",
      imageUrl: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9",
    },
    {
      name: "USB-C Hub",
      price: 39.99,
      description:
        "Multi-port USB-C hub with HDMI, USB 3.0, and SD card reader for versatile connectivity.",
      imageUrl:
        "https://media.istockphoto.com/id/184841045/photo/memory-stick.webp?b=1&s=170667a&w=0&k=20&c=2Nau1PzmF6ss9shD0GVte30zUTsmREXTnQ1vdCKRuww=",
    },
  ];

  return (
    <div>
      {userIn && <Navbar setUserIn={setUserIn} />}

      <Routes>
        <Route
          path="/"
          element={
            <Home
              addToCart={addToCart}
              deleteFromCart={deleteFromCart}
              cart={cart}
              productCards={productCards}
            />
          }
        />
        <Route path="/login" element={<Login setUserIn={setUserIn} />} />
        <Route
          path="/cart"
          element={
            <Cart
              addToCart={addToCart}
              deleteFromCart={deleteFromCart}
              cart={cart}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
