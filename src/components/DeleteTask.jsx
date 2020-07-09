import React, { useContext } from 'react'
import axios from 'axios'
import { AppContext } from "../context/AppContext";


const DeleteTask = props => {
  const { setRefetch, setErrorMessage } = useContext(AppContext)

  const handleDelete = async () =>{
    const token = localStorage.getItem("token")
     if (window.confirm("Delete this task?")){
      await axios({
        method: 'DELETE',
        url: `${process.env.REACT_APP_SERVER_URL}/tasks/${props.id}`,
        headers: {Authorization: `Bearer ${token}`} 
      })
      setRefetch(true)
      setErrorMessage(`Task ${props.id} has been deleted!`)
     }  
  }

return(
  <button className="btn btn-danger btn-sm" onClick={handleDelete}>
    Delete Task
  </button>
)
}

export default DeleteTask