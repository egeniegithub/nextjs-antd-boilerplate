import React, { useEffect, useState } from "react";
import Link from "next/link";
import { withAuthSync, getUserData } from "../utils/auth";
import { logout } from "../utils/auth";
import axios from "axios";

import { Button, Menu, Dropdown } from "antd";

const ProfilePage = () => {
  const [getUser, setGetUser] = useState({});
  const handleLogout = (event) => {
    axios.delete("/api/session").then(({ data }) => {
      console.log("data for logout :", data);
      if (data.status === "ok") {
        logout();
      }
    });
  };

  useEffect(() => {
    setGetUser(getUserData());
  }, []);

  return (
    <>
      <Button type="primary" onClick={handleLogout}>
        logout
      </Button>
      <h1>Profile</h1>
      <div>
        <p>Name: {getUser.name}</p>
        <p>Email: {getUser.email}</p>
      </div>
    </>
  );
};

export default withAuthSync(ProfilePage);
