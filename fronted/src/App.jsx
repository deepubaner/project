import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "./context/CartContext";
import CartSidebar from "./components/CartSidebar";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactPage from "./pages/ContactPage"; // or wherever your home page is

<Router>
  <Routes>
    {/* <Route path="/" element={<HomePage />} /> */}
    <Route path="/contact" element={<ContactPage />} />
  </Routes>
</Router>


function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const { dispatch } = useCart();

  useEffect(() => {
    axios.get("http://localhost:5000/api/restaurants")
      .then((res) => setRestaurants(res.data))
      .catch((err) => console.error("API Error:", err));
  }, []);

  const filteredRestaurants = restaurants.filter((r) => {
    const matchName = r.name.toLowerCase().includes(searchText.toLowerCase());
    const matchType = selectedType === "All" || r.type === selectedType;
    return matchName && matchType;
  });

  const uniqueType = ["All", ...new Set(restaurants.map((r) => r.type))];

  return (
    <div style={{ padding: "2 rem", fontFamily: "sans-serif",}}>
      <div style={{ textAlign: "center", marginBottom: "1rem",display: "flex", flexDirection: "row",  }}>
        <img src="logo.jpg" alt="FoodStack Logo" style={{borderRadius:"50%" ,width: "50px", marginBottom: "1rem", margin:"10px"}} />
      <h1 style={{ marginBottom: "1rem" }}> FoodStack  <Link to="/">
    <button style={{ marginLeft: 20,borderRadius:"50%" ,padding: "6px 12px",background: "#e23744", color: "#fff", cursor:"pointer"}}>Login</button>
  </Link></h1>
  
<Link to="/contact">
  <button
    style={{
   marginLeft: 20 ,padding: "6px 12px",background: "#e23744", color: "#fff", cursor:"pointer",marginTop: "30px", borderRadius: "6px", border: "none", fontSize: "16px"
    }}
  >
    Contact
  </button>
</Link>

  </div>


      <div style={{ marginBottom: "1.5rem", display: "flex", gap: "1rem" }}>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{ padding: "0.5rem", width: "200px" }}
        />
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          style={{ padding: "0.5rem" }}
        >
          {uniqueType.map((type, idx) => (
            <option key={idx} value={type}>{type}</option>
          ))}
        </select>
      </div>
<div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
  {filteredRestaurants.map((r) => (
    <div
      key={r._id}                                       
      style={{
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "1rem",
        width: "250px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
      }}
    >
      
      <Link
        to={`/restaurant/${r._id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <img
          src={r.image}
          alt={r.name}
          style={{
            width: "100%",
            height: "160px",
            objectFit: "cover",
            borderRadius: "10px"
          }}
        />
        <h2 style={{ marginTop: "0.5rem" }}>{r.name}</h2>
      </Link>

      {/* Non‑clickable metadata */}
      <p>⭐ {r.rating}</p>
      <p>{r.description}</p>
      <p>{r.foodTypes?.join(", ")}</p>
      <p>{r.type}</p>
      <p style={{ color: "green", fontWeight: "bold" }}>₹ {r.price}</p>

      {/* Add‑to‑cart button (stays outside the link) */}
      <button
        onClick={() => dispatch({ type: "ADD", item: r })}
        style={{
          background: "#e23744",
          color: "#fff",
          border: "none",
          padding: "10px",
          borderRadius: "6px",
          cursor: "pointer",
          marginTop: "0.5rem",
          width: "100%"
        }}
      >
        Add to Cart
      </button>
    </div>
  ))}
</div>

      <CartSidebar />
    </div>
  );
}

export default App;
