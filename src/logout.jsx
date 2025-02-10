import React from "react";
export default function Logout({ onLogout }) {
  return (
    <div>
      <h1>Welcome to home page</h1>
      <button onClick={onLogout} className="button">
        Logout
      </button>
    </div>
  );
}
