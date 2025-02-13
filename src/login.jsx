import React, { useState } from "react";
export default function Login({ onLogin }) {
  const [handle, setHandle] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState("");
  const [checkbox, setCheckbox] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [radio, setRadio] = useState("");
  const [range, setRange] = useState("");
  const [tel, setTel] = useState("");
  const [time, setTime] = useState("");
  const [url, setUrl] = useState("");
  // const [tel, setTel] = useState("");
  //const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    //setError("");
    onLogin();
  }
  return (
    <div>
      <h2 className="login">Log in</h2>
      <p>to start learning</p>
      {/* {error && <p className="error">{error}</p>} */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Twitter Handel</label>
          <br></br>
          <input
            type="text"
            value={handle}
            onChange={(e) => setHandle(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="checkbox"
            value={checkbox}
            onChange={(e) => setCheckbox(e.target.value)}
            required
          />
          <label>Tweet</label>
        </div>
        <div>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <label>Date</label>
        </div>
        <div>
          <label>Choose file</label>
          <br></br>
          <input
            type="file"
            value={file}
            onChange={(e) => setFile(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Enter your example.com email:</label>
          <br></br>
          <input
            type="email"
            //pattern="@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <fieldset
          value={radio}
          onChange={(e) => setRadio(e.target.value)}
          required
        >
          <legend>Select a maintenance drone:</legend>

          <div>
            <input type="radio" id="huey" name="drone" value="huey" />
            <label>Huey</label>
          </div>

          <div>
            <input type="radio" id="dewey" name="drone" value="dewey" />
            <label>Dewey</label>
          </div>

          <div>
            <input type="radio" id="louie" name="drone" value="louie" />
            <label>Louie</label>
          </div>
        </fieldset>
        <div>
          <input
            type="range"
            name="volume"
            min="0"
            max="11"
            value={range}
            onChange={(e) => setRange(e.target.value)}
            required
          />
          <label>Volume</label>
        </div>
        <div>
          <label> Enter your phone number:</label>
          <br></br>
          <input
            type="tel"
            value={tel}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            onChange={(e) => setTel(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Choose a time for your meeting:</label>
          <br></br>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Enter an https:// URL:</label>
          <input
            type="url"
            value={url}
            pattern="https://.*"
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <br></br>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="button">
          Login
        </button>
      </form>
    </div>
  );
}
