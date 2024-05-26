import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/js/bootstrap.bundle";
// Import our custom CSS
import "./scss/style.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import { CartProvider } from "./components/context/cart.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
