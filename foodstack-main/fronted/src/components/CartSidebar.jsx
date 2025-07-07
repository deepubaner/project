import React, { useState } from "react";
import { useCart } from "../context/CartContext";

export default function CartSidebar() {
  const { cart, dispatch, total } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(prev => !prev);

 const buyNow = async () => {
  if (!cart.length) return alert("Cart is empty!");

  const payload = {
    items: cart.map(({ _id, name, qty, price }) => ({ _id, name, qty, price })),
    total
  };

  try {
    const res = await fetch("http://localhost:5000/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!res.ok) throw new Error("Server error");
    alert("✅ Order placed!");

    dispatch({ type: "CLEAR" });
    setIsOpen(false);
  } catch (e) {
    alert("❌ Order failed: " + e.message);
  }
};


  return (
    <>
      <button onClick={toggleSidebar} style={floatingBtn} title="View Cart">
        🛒 {cart.length}
      </button>

      <aside style={{ ...sidebar, transform: isOpen ? "translateX(0)" : "translateX(100%)" }}>
        <h2 style={{ marginTop: 0 }}>
          Your Cart ({cart.length})
          <button onClick={toggleSidebar} style={closeBtn}>×</button>
        </h2>

        {cart.length === 0 ? (
          <p style={{ textAlign: "center" }}>No items in cart.</p>
        ) : (
          cart.map(item => (
            <div key={item._id} style={itemRow}>
              <span style={{ flex: 1 }}>{item.name}</span>
              <div>
                <button onClick={() => dispatch({ type: "DEC", id: item._id })}>-</button>
                <span style={{ margin: "0 8px" }}>{item.qty}</span>
                <button onClick={() => dispatch({ type: "INC", id: item._id })}>+</button>
              </div>
              <span style={{ width: 60, textAlign: "right" }}>₹{item.price * item.qty}</span>
            </div>
          ))
        )}

        <h3>Total: ₹{total}</h3>
        <button onClick={buyNow} style={buyBtn} disabled={!cart.length}>Buy Now</button>
      </aside>
    </>
  );
}

const floatingBtn = {
  position: "fixed", bottom: 20, right: 20, width: 60, height: 60, borderRadius: "50%",
  background: "#e23744", color: "#fff", border: "none", fontSize: 24, cursor: "pointer",
  boxShadow: "0 2px 6px rgba(0,0,0,0.25)", zIndex: 1001,
};

const sidebar = {
  position: "fixed", top: 0, right: 0, width: 300, height: "100%", background: "#fff",
  padding: 20, borderLeft: "2px solid #eee", boxShadow: "-4px 0 8px rgba(0,0,0,0.1)",
  transition: "transform 0.3s ease-out", zIndex: 1000, overflowY: "auto",
};

const closeBtn = {
  background: "none", border: "none", fontSize: 24, lineHeight: 1,
  cursor: "pointer", float: "right", marginTop: -4,
};

const itemRow = {
  display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10,
};

const buyBtn = {
  width: "100%", padding: 12, background: "#e23744", color: "#fff",
  border: "none", borderRadius: 6, cursor: "pointer", marginTop: 10,
};
