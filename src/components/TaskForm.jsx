import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import axios from 'axios'
import moment from 'moment'

const TaskForm = () => {
  const { setRefetch } = useContext(AppContext)
  
  const [taskDescription, setTaskDescription] = useState("")
  const [dueDate, setDueDate] = useState("")

  const addTask = async (e) =>{
    e.preventDefault()
    const token = localStorage.getItem("token")
    await axios({
      method: 'POST',
      url: `http://localhost:8080/tasks`,
      headers: {Authorization: `Bearer ${token}`}, 
      data: {
        description: taskDescription,
        completed: false,
        dueDate: `${dueDate} `
      }
    })
    setRefetch(true)
    console.log(taskDescription, dueDate)
    console.log(moment(dueDate).format('MMM Do, YYYY'))
  }

  return(
      <form style={{marginBottom:"16px"}} onSubmit={e => addTask(e)}>
        <div className="form-group">
          <label htmlFor="task-description">Description</label>
          <input
              className="form-control col-md-8"
              type="text"
              id="task-description"
              name="task-description"
              placeholder="Enter a task"
              value={taskDescription}
              onChange={ e => setTaskDescription(e.target.value) }
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="due-date">Due date</label>
            <input
              className="form-control col-md-4"
              type="date"
              id="due-date"
              name="due-date"
              value={dueDate}
              onChange={ e => setDueDate(e.target.value) }
            />
          </div>
          <button className="btn btn-primary actions" type="submit">Add Task</button>
      </form>
  )
}

export default TaskForm