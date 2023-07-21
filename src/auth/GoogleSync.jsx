import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { BaseUrl } from "../constants/BaseUrl";
import Toast from "../components/Toast";

const GoogleAuthSync = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const code = searchParams.get("code");
  const tokenpublic = localStorage.getItem("tokenpublic");
  async function getAuth() {
    return await axios.get(`${BaseUrl.BASE_API}auth/google/sync?sync=true&code=${code}`, {
      headers: { tokenpublic },
    });
  }
  useEffect(() => {
    if (code) {
      getAuth()
        .then(v => {
          Toast.success("Menghubungkan akun berhasil");
          navigate("/");
          console.log(v);
        })
        .catch(error => {
          Toast.error(error.response.data.message);
          navigate("/");
        });
    }
  }, []);
  return <></>;
};

export default GoogleAuthSync;
