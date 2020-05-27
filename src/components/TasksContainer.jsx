import React, { useContext } from 'react';
import { AppContext } from "../context/AppContext";
import Task from './Task'

const TasksContainer = () => {
  const { displayedTasks } = useContext(AppContext);
  return(
    <>
      <table className='table'>
        <thead>
          <tr>
            <th style={{width: "60%"}}>Description</th>
            <th style={{width: "15%"}}>Due</th>
            <th style={{width: "25%"}}></th>
          </tr>
        </thead>
        <tbody>
        {
          displayedTasks.map(task => {
            return(
              <Task
                key={task._id}
                id={task._id}
                description={task.description}
                completed={task.completed}
                dueDate={task.dueDate}
              />
            )
          })
        }
        </tbody>
      </table>
      <hr />
    </>
  )
}

export default TasksContainer