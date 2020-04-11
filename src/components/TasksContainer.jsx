import React, { useContext } from 'react';
import { AppContext } from "../context/AppContext";
import Task from './Task'

const TasksContainer = () => {
  const { tasks, user } = useContext(AppContext);

  return(
    <div>
      <h1>{user.name}'s Tasks</h1>
      {
        tasks.map(task => {
          return(
            <Task
              key={task._id}
              description={task.description}
              completed={task.completed}
            />
          )
        })
      }
    </div>
  )
}

export default TasksContainer