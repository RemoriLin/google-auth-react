import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import "../styles/home.css";
import { BaseUrl } from "../constants/BaseUrl";
import getGoogleOAuthURL from "../helpers/getGoogleUrl";
import getFacebookOAuthURL from "../helpers/getFacebookUrl";

const Home = () => {
  const tokenpublic = localStorage.getItem("tokenpublic");
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [myLinkedAccount, setMyLinkedAccount] = useState([]);
  const getUserbyToken = async () => {
    const data = await axios.get(`${BaseUrl.BASE_API}user/me`, {
      headers: { tokenpublic },
    });
    setUser(data.data.data)
  };
  const getMyLinkedAccount = async () => {
    const { data } = await axios.get(`${BaseUrl.BASE_API}my-linked/accounts`, {
      headers: { tokenpublic },
    });
   setMyLinkedAccount(data.data)
  };
  useEffect(() => {
    if (!tokenpublic) {
      navigate("/login");
    }
    getUserbyToken();
    getMyLinkedAccount();
  }, []);

  return (
    <div className="home">

      <div className="card">
        <div className="mainProfile">
          <div className="photo">
            <img
              src={
                user.image
                  ? user.image
                  : "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
              }
            />
          </div>
          <div className="profile">
            <h3>Username : {user.username ? user.username : "no username"}</h3>
            <h3>Email : {user.email}</h3>
            <h3>Full Name : {user.fullname}</h3>
          </div>
        </div>
        <a href={getGoogleOAuthURL(BaseUrl.SYNC_REDIRECT)}>
          sambungkan dengan google
        </a>
        <br />
        <a href={getFacebookOAuthURL(BaseUrl.FACEBOOK_SYNC_REDIRECT)}>
          sambungkan dengan facebook
        </a>
        <div className="connected">
          {myLinkedAccount.length === 0 ? (
            <div></div>
          ) : (
            <>
              <div>
                <h1>Akun yang terhubung</h1>
                <div className="cardContainer">
                  {myLinkedAccount.map(e => {
                    return (
                      <div className="smallCard" key={e.id}>
                        <h3>{e.type}</h3>
                        <div className="mainInfo">
                          <div className="imgCard">
                            <img src={e.image} />
                          </div>
                          <div className="bitInfo">
                            <h3>{e.fullname}</h3>
                            <h3>{e.email}</h3>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
