"use client";
import { createContext, useState } from "react";

const intialize = {
  totalclasses: 0
}

export const ContextHaye = createContext(intialize);

const GlobalcontextProvider = ({ children }) => {
  const [dataClass, setDataClass] = useState(null);

  return (
  <ContextHaye.Provider
   value={{ 
    dataClass, 
    setDataClass 
    }}>
    {children}
  </ContextHaye.Provider>
  )
};


export default GlobalcontextProvider
