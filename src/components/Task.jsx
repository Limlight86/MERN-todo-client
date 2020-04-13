import React from 'react'
import CompleteButton from '../components/CompleteButton'
import DeleteTask from '../components/DeleteTask'

const Task = props => (
  <div>
    <span>
      {
        props.completed ? <strike>{props.description}</strike> : props.description
      }
      <CompleteButton completed={props.completed} id={props.id} />
      <DeleteTask id={props.id} />
    </span>
  </div>
)

export default Task
