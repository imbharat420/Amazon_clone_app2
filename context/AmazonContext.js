const { createContext } = require("react");
import * as React from "react";
import { createUser } from "../lib/User.sanity";

export const AmazonContext = createContext();

export const AmazonProvider = ({ children }) => {
  const [AccessToken, setAccessToken] = React.useState(null);

  const [userInfo, setUserInfo] = React.useState(null);

  React.useEffect(() => {
    const getUserData = async () => {
      let useInfo = await fetch("https://www.googleapis.com/userinfo/v2/me", {
        headers: { Authorization: `Bearer ${AccessToken}` },
      });

      const userData = await useInfo.json();
      setUserInfo(userData);

      createUser({
        name: userData.name,
        email: userData.email,
      });
    };
    getUserData();
  }, [AccessToken]);

  const value = {
    AccessToken,
    setAccessToken,
    userInfo,
  };

  return (
    <AmazonContext.Provider value={value}>{children}</AmazonContext.Provider>
  );
};
