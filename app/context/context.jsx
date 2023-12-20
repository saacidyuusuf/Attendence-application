"use client";
import { createContext, useState } from "react";

const intialize = {
  totalclasses: 0
}

export const ContextHaye = createContext(intialize);

const GlobalcontextProvider = ({ children }) => {
  const [dataClass, setDataClass] = useState(null);
  const [isAuthenticated, setAuthenticated] = useState([]);

  return (
  <ContextHaye.Provider
   value={{ 
    dataClass, 
    setDataClass ,
    isAuthenticated,
    setAuthenticated
    }}>
    {children}
  </ContextHaye.Provider>
  )
};


export default GlobalcontextProvider
