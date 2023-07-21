import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { BaseUrl } from "../constants/BaseUrl";
import Toast from "../components/Toast";

const FacebookAuthSync = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const access_token = searchParams.get("access_token");
  const tokenpublic = localStorage.getItem("tokenpublic");
  async function getAuth() {
    return await axios.get(
      `${BaseUrl.BASE_API}auth/facebook/sync?sync=true&access_token=${access_token}`,
      {
        headers: { tokenpublic },
      }
    );
  }

  useEffect(() => {
    if (access_token) {
      getAuth()
        .then(v => {
          console.log(v);
          Toast.success(v.data.Message);
          navigate("/");
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, []);
  return <></>;
};

export default FacebookAuthSync;
