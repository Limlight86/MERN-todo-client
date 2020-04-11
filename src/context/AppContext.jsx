import React, { createContext, useState, useEffect, useCallback } from "react";
import axios from 'axios'

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)
  const [tasks, setTasks] = useState([])

  const token = localStorage.getItem("token")

  const fetchTasks = useCallback(() => {
    axios.get(`http://localhost:8080/tasks`,{headers: {Authorization: `Bearer ${token}`}})
    .then(({ data }) => {
      console.log(data)
      setTasks(data)
    })}, [token])

  useEffect(()=>{
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
    })}}, [token])

    useEffect(()=>{
      if(token){
        fetchTasks()
      }
    }, [loggedIn, fetchTasks, token])

  return (
    <AppContext.Provider value={{user, setUser, loggedIn, setLoggedIn, tasks}}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
