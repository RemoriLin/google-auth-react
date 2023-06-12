import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const tokenpublic = localStorage.getItem("tokenpublic");
  const navigate = useNavigate();

  useEffect(() => {
    if (!tokenpublic) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
