import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  return (
    <div
      style={{
        height: "100vh",
        margin: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f4f4",
        fontFamily: "Verdana, sans-serif",
      }}
    >
      <div
        style={{
          width: "360px",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          padding: "25px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
          borderTop: "6px solid #3f51b5",
        }}
      >
        <h1
          style={{
            margin: 0,
            marginBottom: "20px",
            color: "#333",
            fontSize: "28px",
          }}
        >
          Daily Counter
        </h1>

        {/* Counter Box */}
        <div
          style={{
            backgroundColor: "#eef2ff",
            borderRadius: "10px",
            padding: "20px",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          <h2
            style={{
              fontSize: "55px",
              margin: 0,
              color: count >= 5 ? "#2e7d32" : "#222",
            }}
          >
            {count}
          </h2>

          {count >= 5 && (
            <p
              style={{
                color: "#2e7d32",
                marginTop: "10px",
                fontWeight: "bold",
              }}
            >
              Goal Reached!
            </p>
          )}
        </div>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <button
            onClick={() => setCount(count + 1)}
            style={buttonStyle("#4caf50")}
          >
            Increase
          </button>

          <button
            onClick={() => setCount(count - 1)}
            style={buttonStyle("#e53935")}
          >
            Decrease
          </button>

          <button
            onClick={() => setCount(0)}
            style={buttonStyle("#1e88e5")}
          >
            Reset
          </button>
        </div>

        {/* Input */}
        <label
          style={{
            fontSize: "14px",
            color: "#555",
          }}
        >
          Custom Message
        </label>

        <input
          type="text"
          placeholder="Type here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{
            width: "100%",
            marginTop: "8px",
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "14px",
            boxSizing: "border-box",
          }}
        />

        {/* Live Display */}
        <div
          style={{
            marginTop: "15px",
            backgroundColor: "#fafafa",
            padding: "12px",
            borderRadius: "6px",
            border: "1px solid #ddd",
            minHeight: "20px",
            color: "#444",
          }}
        >
          {message || "Your message will appear here"}
        </div>
      </div>
    </div>
  );
}

const buttonStyle = (color) => ({
  backgroundColor: color,
  color: "white",
  border: "none",
  padding: "10px 12px",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "14px",
})