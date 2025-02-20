import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const changeHandler = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!formData.username.trim()) {
      setMessage("Username is required");
      return; // ✅ Prevents further execution if empty
    }
    if (!formData.password.trim()) {
      setMessage("Password is required");
      return; // ✅ Prevents further execution if empty
    }

    if (formData.username === "user" && formData.password === "password") {
      setMessage("Welcome, user"); // ✅ Matches Cypress expectation (capitalized "Welcome")
    } else {
      setMessage("Invalid username or password");
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h1>Login Page</h1>

        <label htmlFor="username">Username:</label>
        <input
          required
          type="text"
          name="username"
          id="username"
          value={formData.username}
          onChange={changeHandler}
        />
        <br />

        <label htmlFor="password">Password:</label>
        <input
          required
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={changeHandler}
        />
        <br />

        <button type="submit">Submit</button>
      </form>

      {message && <p role="alert">{message}</p>}
    </div>
  );
};

export default Login;
