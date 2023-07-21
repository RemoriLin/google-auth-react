import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { BaseUrl } from "../constants/BaseUrl";
import Toast from "../components/Toast";

const GoogleAuthRegister = () => {
  const searchParams = new URLSearchParams(document.location.search);
  const navigate = useNavigate();
  const code = searchParams.get("code");
  const authGoogle = async () => {
    try {
      const { data } = await axios.get(
        `${BaseUrl.BASE_API}auth/google?register=true&code=${code}`
      );
      if (data.token) {
        localStorage.setItem("tokenpublic", data.token);
        Toast.success("Login berhasil. ");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      Toast.error(error.response.data.message);
      navigate("/login");
    }
  };
  useEffect(() => {
    authGoogle();
  }, []);
  return <></>;
};

export default GoogleAuthRegister;
