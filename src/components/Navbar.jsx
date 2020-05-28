import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { AppContext } from '../context/AppContext';
import Login from "../components/Login"
import Logout from "../components/Logout"
import axios from 'axios'

const Navbar = () => {
  
  const { tasks, user, setDisplayedTasks, loggedIn, setCurrentFilter, statusFilter, setStatusFilter } = useContext(AppContext)

  const filterTasks = (boolean) => {
    const token = localStorage.getItem("token")
    axios.get(`${process.env.REACT_APP_SERVER_URL}/tasks?completed=${boolean}`,{headers: {Authorization: `Bearer ${token}`}})
    .then(({ data }) => {
      console.log(data)
      setDisplayedTasks(data)
      setCurrentFilter("")
      setStatusFilter(boolean ? 1 : 2)
    })
  }

  return(
    <nav className="navbar navbar-light bg-light navbar-expand-lg" style={{display:"flex", justifyContent:"space-between"}}>
      <div style={{display:"flex", alignItems:"center"}}>
        <div 
          className="navbar-brand" 
          style={{cursor:"pointer"}} 
          onClick={() => {
            setDisplayedTasks(tasks) 
            setCurrentFilter("")
            setStatusFilter("")
          }}
        >
          Todo App
        </div>
        <ul className="navbar-nav">
          <li 
            style={{cursor:"pointer"}}
            className="nav-item" 
            onClick={() => filterTasks(true)}
          >
            {statusFilter === 1 ? <u>Completed</u> : "Completed" }
          </li>
          <li 
            style={{marginLeft:"8px", cursor:"pointer"}}
            className="nav-item" 
            onClick={() => filterTasks(false)}
          >
            {statusFilter === 2 ? <u>Pending</u> : "Pending" }
          </li>
        </ul>
      </div>
      {
        ( loggedIn ?
          <div style={{display:"flex", alignItems:"center"}}>
           <span style={{marginRight:"8px", fontSize:"32px"}}>{user.name}</span>
           <Logout />
          </div>
          :
          <div style={{display:"flex", alignItems:"center"}}>
            <Login/> 
            <Link to="/signup" style={{marginLeft:"8px"}}>
              Sign Up Now
            </Link>
            <Link to="/resetpassword" style={{marginLeft:"8px"}}>
              Forgot Password?
            </Link>
          </div> 
        )
      }
    </nav>
  )
}

export default Navbar
