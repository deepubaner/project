import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Restaurant from "./pages/Restaurant";
import Login from "./pages/Login"; // ✅ new import
import { CartProvider } from "./context/CartContext";
import Contact from "./pages/ContactPage"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<App />} />
          <Route path="/restaurant/:id" element={<Restaurant />} />
                <Route path="/contact" element={<Contact />} /> 
         {/* ✅ added */}
        </Routes>
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);
