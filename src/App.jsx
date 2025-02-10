import React from "react";
import { useState } from "react";
import "./App.css";
import Logout from "./logout";
import Login from "./login";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <div>
      {isAuthenticated ? (
        <Logout onLogout={() => setIsAuthenticated(false)} />
      ) : (
        <Login onLogin={() => setIsAuthenticated(true)} />
      )}
    </div>
  );
}
