import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function attemptLogin(event) {
    event.preventDefault(); // Prevent the form from reloading the page
    alert("hallo: " + email + " " + password);
  }

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={attemptLogin}>
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="text"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        ></input>
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="text"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <br />
        <button type="submit">Login</button>
      </form>
    </>
  );
}
