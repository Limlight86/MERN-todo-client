import React, { createContext, useState, useEffect, useCallback } from "react";
import axios from 'axios'

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)
  const [tasks, setTasks] = useState([])
  const [displayedTasks, setDisplayedTasks] = useState([])
  const [statusFilter, setStatusFilter] = useState(0)
  const [currentFilter, setCurrentFilter] = useState("")
  const [refetch, setRefetch] = useState(false);
  const [errorMessage, setErrorMessage] = useState("")

  const token = localStorage.getItem("token")

  const fetchTasks = useCallback(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/tasks?sortBy=dueDate:asc`,{headers: {Authorization: `Bearer ${token}`}})
    .then(({ data }) => {
      console.log(data)
      setTasks(data)
      setDisplayedTasks(data)
      setRefetch(false)
    })
    .catch((e) => console.log(e.message.toString()))
  }, [token])

    useEffect(()=>{
      setRefetch(true)
    }, [])

  useEffect(()=>{
    if (token){
      axios.get(`${process.env.REACT_APP_SERVER_URL}/users/me`, {headers: {Authorization: `Bearer ${token}`}
      })
      .then(({data}) => {
        setUser(data)
        setLoggedIn(true)
      })
      .catch((e) => console.log(e.message.toString()))
    }}, [token])

    useEffect(()=>{
      if(token){
        refetch && fetchTasks()
      }
    }, [loggedIn, fetchTasks, token, refetch])

    const searchTasks = (term) => {
      let searchedTasks = tasks.filter(task => {
        return(
          task.description.includes(term)
        )
      })
      setStatusFilter(0)
      setCurrentFilter("")
      setDisplayedTasks(searchedTasks)
    }

  return (
    <AppContext.Provider value={
      { user, 
        setUser, 
        loggedIn, 
        setLoggedIn, 
        tasks, 
        setTasks, 
        setRefetch, 
        displayedTasks, 
        setDisplayedTasks, 
        currentFilter, 
        setCurrentFilter, 
        statusFilter, 
        setStatusFilter, 
        searchTasks,
        errorMessage, 
        setErrorMessage
      }
    }>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
