import React, { useContext } from 'react'
import axios from 'axios'
import { AppContext } from "../context/AppContext";


const DeleteTask = props => {
  const { setRefetch } = useContext(AppContext)

  const handleDelete = async () =>{
    const token = localStorage.getItem("token")
     if (window.confirm("Delete this task?")){
      await axios({
        method: 'DELETE',
        url: `http://localhost:8080/tasks/${props.id}`,
        headers: {Authorization: `Bearer ${token}`} 
      })
      setRefetch(true)
     }  
  }

return(
  <button onClick={handleDelete}>
    Delete Task
  </button>
)
}

export default DeleteTask