import React, { useContext } from 'react'
import { NavLink } from "react-router-dom"
import { AppContext } from '../context/AppContext';
import Login from "../components/Login"
import Logout from "../components/Logout"
import axios from 'axios'

const Navbar = () => {
  const { tasks, user, setDisplayedTasks, loggedIn } = useContext(AppContext)

  const filterTasks = (boolean) => {
    const token = localStorage.getItem("token")
    axios.get(`http://localhost:8080/tasks?completed=${boolean}`,{headers: {Authorization: `Bearer ${token}`}})
    .then(({ data }) => {
      console.log(data)
      setDisplayedTasks(data)
    })
  }

  return(
    <nav>
      <div  onClick={() => setDisplayedTasks(tasks)}>Todo App</div>
      <div>
        <span  
          onClick={() => filterTasks(true)}
        >
          Completed
        </span>
        <span 
          onClick={() => filterTasks(false)}
        >
          Pending
        </span>
      </div>
      {
        ( loggedIn ? <span>{user.name}<Logout /></span> 
          :
          <div>
            <Login/> 
            <NavLink to="/signup">
              Sign Up Now
            </NavLink>
          </div> 
        )
      }
    </nav>
  )
}

export default Navbar