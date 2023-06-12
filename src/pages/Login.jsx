import React from "react";
import "../styles/form.css";
import GoogleButton from "react-google-button";
import Toast from "../components/Toast";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import google from "../constants/google";
import getGoogleOAuthURL from "../helpers/getGoogleUrl";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = event => {
    event.preventDefault();
    const data = {
      username,
      password,
    };
    axios
      .post("http://localhost:8000/v1/login", data)
      .then(response => {
        console.log(response);
        Toast.success("Login berhasil. ");
        localStorage.setItem("tokenpublic", response.data.token);
        navigate("/home");
      })
      .catch(error => {
        console.error(error);
        Toast.error(error.response.data.Message);
      });
  };
  return (
    <div className="form" onSubmit={handleSubmit}>
      <form action="">
        <input
          type="text"
          placeholder="username / email"
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <button type="submit">LOGIN</button>
        <div className="other">
          <hr />
          <p>OR</p>
          <hr />
        </div>

        <a href={getGoogleOAuthURL("http://localhost:5173/auth/google")}>
          <GoogleButton style={{ width: "100%" }} />
        </a>
      </form>
    </div>
  );
};

export default Login;
