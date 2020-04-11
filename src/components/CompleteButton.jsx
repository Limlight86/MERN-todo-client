import React from 'react'
import axios from 'axios'


const CompleteButton = props => {

  const toggleComplete = () =>{
    const token = localStorage.getItem("token")
    axios({
      method: 'PATCH',
      url: `http://localhost:8080/tasks/${props.id}`,
      headers: {Authorization: `Bearer ${token}`}, 
      data: {
        completed: !props.completed
      }
    })
  }

return(
  <button onClick={toggleComplete}>
    {props.completed ? "Mark Incomplete" : "Mark Complete" }
  </button>
)
}

export default CompleteButton