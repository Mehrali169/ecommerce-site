import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ApiContext = createContext();
export const Store = ({ children }) => {
  // im writing ....
  const [cart, setCart] = useState([]);
  const [info, setInfo] = useState([]);
  const [userDetails, setUserDetails] = useState({
    email: "",
    mobile: "",
    province: "",
    city: "",
    address: "",
  });
  console.log(userDetails);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        // console.log(data);
        setInfo(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <ApiContext.Provider
      value={{ info, setInfo, cart, setCart, userDetails, setUserDetails }}
    >
      {children}
    </ApiContext.Provider>
  );
};
