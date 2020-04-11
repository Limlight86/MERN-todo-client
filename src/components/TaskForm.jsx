import React, { useState } from "react";
import axios from 'axios'
import moment from 'moment'

const TaskForm = () => {
  const [taskDescription, setTaskDescription] = useState("")
  const [dueDate, setDueDate] = useState("")

  const addTask = (e) =>{
    e.preventDefault()
    const token = localStorage.getItem("token")
    axios({
      method: 'POST',
      url: `http://localhost:8080/tasks`,
      headers: {Authorization: `Bearer ${token}`}, 
      data: {
        description: taskDescription,
        completed: false,
        dueDate: dueDate
      }
    })
    console.log(taskDescription, dueDate)
    console.log(moment(dueDate).format('MMM Do, YYYY'))
  }

  return(
    <form onSubmit={e => addTask(e)}>
      <input
          type="text"
          name="task-description"
          placeholder="Enter a task"
          value={taskDescription}
          onChange={ e => setTaskDescription(e.target.value) }
          required
        />
        <input
          type="date"
          name="due-date"
          value={dueDate}
          onChange={ e => setDueDate(e.target.value) }
          required
        />
        <input type="submit" value="Add Task"/>
    </form>
  )
}

export default TaskForm