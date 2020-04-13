import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import axios from 'axios'

const Navbar = () => {
  const { tasks, setDisplayedTasks } = useContext(AppContext)

  const filterTasks = (boolean) => {
    const token = localStorage.getItem("token")
    axios.get(`http://localhost:8080/tasks?completed=${boolean}`,{headers: {Authorization: `Bearer ${token}`}})
    .then(({ data }) => {
      console.log(data)
      setDisplayedTasks(data)
    })
  }

  return(
    <nav >
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
    </nav>
  )
}

export default Navbar