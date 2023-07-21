import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { BaseUrl } from "../constants/BaseUrl";
import Toast from "../components/Toast";

const GoogleAuthLogin = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const code = searchParams.get("code");
  async function getAuth() {
    return await axios.get(`${BaseUrl.BASE_API}auth/google/?code=${code}`);
  }
  useEffect(() => {
    if (code) {
      getAuth()
        .then(v => {
          if (v.data.token) {
            Toast.success("Login berhasil. ");
            localStorage.setItem("tokenpublic", v.data.token);
            navigate("/");
          }
        })
        .catch(error => {
          Toast.error(error.response.data.message);
          navigate("/login");
        });
    }
  }, []);
  return <></>;
};

export default GoogleAuthLogin;
