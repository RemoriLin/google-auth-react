import React from "react";
import "../styles/form.css";
import GoogleButton from "react-google-button";
import axios from "axios";
import { useEffect, useState } from "react";
import Toast from "../components/Toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = event => {
    event.preventDefault();
    const data = {
      username,
      email,
      fullname,
      password,
      confirmPassword,
    };
    axios
      .post("http://localhost:8000/v1/user/register", data)
      .then(response => {
        console.log(response);
        Toast.success("Akun berhasil dibuat. ");
        navigate("/");
      })
      .catch(error => {
        console.error(error.response.data.message);
        Toast.error(error.response.data.message);
      });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <input
          type="text"
          placeholder="fullname"
          value={fullname}
          onChange={event => setFullname(event.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <input
          type="password"
          placeholder="confirm password"
          value={confirmPassword}
          onChange={event => setConfirmPassword(event.target.value)}
        />
        <button type="submit">REGISTER</button>
        <div className="other">
          <hr />
          <p>OR</p>
          <hr />
        </div>
        <GoogleButton style={{ width: "100%" }} />
      </form>
    </div>
  );
};

export default Register;
