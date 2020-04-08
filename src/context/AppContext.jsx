import React, { createContext, useState, useEffect } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(()=>{
    const token = localStorage.getItem("token")

    if (token){
      fetch("http://localhost:8080/users/me", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(data => data.json())
      .then(res => {
        setUser(res)
        setLoggedIn(true)
    })}}, [])

  return (
    <AppContext.Provider value={{user, setUser, loggedIn, setLoggedIn}}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
