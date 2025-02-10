import React, { useState } from "react";
export default function Login({ onLogin }) {
  const [handle, setHandle] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!handle || !password) {
      setError("X Both fields are required");
      return;
    }
    setError("");
    onLogin();
  }
  return (
    <div>
      <h2 className="login">Log in</h2>
      <p>to start learning</p>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Twitter Handel</label>
          <br></br>
          <input
            type="text"
            value={handle}
            onChange={(e) => setHandle(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <br></br>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="button">
          Login
        </button>
      </form>
    </div>
  );
}
