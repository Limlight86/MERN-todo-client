import React, { useContext } from 'react'
import axios from 'axios'
import { AppContext } from "../context/AppContext";


const CompleteButton = props => {
  const { setRefetch } = useContext(AppContext)

  const toggleComplete = async () =>{
    const token = localStorage.getItem("token")
    await axios({
      method: 'PATCH',
      url: `http://localhost:8080/tasks/${props.id}`,
      headers: {Authorization: `Bearer ${token}`}, 
      data: {
        completed: !props.completed
      }
    })
    setRefetch(true)
  }

return(
  <button onClick={toggleComplete}>
    {props.completed ? "Mark Incomplete" : "Mark Complete" }
  </button>
)
}

export default CompleteButton