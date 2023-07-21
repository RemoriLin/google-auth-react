import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { BaseUrl } from "../constants/BaseUrl";

const FacebookAuthRegister = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const access_token = searchParams.get("access_token");
  async function getAuth() {
    return await axios.get(
      `${BaseUrl.BASE_API}/auth/facebook/?register=true&access_token=${access_token}`
    );
  }
  useEffect(() => {
    if (access_token) {
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

export default FacebookAuthRegister;
