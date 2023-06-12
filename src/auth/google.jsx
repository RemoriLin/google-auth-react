import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const GoogleAuthLogin = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const code = searchParams.get("code");
  async function getAuth() {
    return await axios.get(
      `http://localhost:8000/v1/auth/google/?code=${code}`
    );
  }
  useEffect(() => {
    if (code) {
      getAuth()
        .then(v => {
          if (v.data.token) {
            localStorage.setItem("tokenpublic", v.data.token);
            navigate("/");
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, []);
  return <></>;
};

export default GoogleAuthLogin;
