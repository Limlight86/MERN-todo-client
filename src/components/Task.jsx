import React, {useContext, useEffect} from 'react'
import {AppContext} from "../context/AppContext"
import moment from 'moment'
import CompleteButton from '../components/CompleteButton'
import DeleteTask from '../components/DeleteTask'

const Task = props => {
  const {loggedIn} = useContext(AppContext)

  useEffect(()=>{
    console.log(`Task ${props.id} has mounted!`)
    return(()=>{
      if(loggedIn){
        console.log(`Task ${props.id} has un-mounted!`)        
      }
      
    })
  },[loggedIn, props.id])

  return(
  <tr>
    <td style={{wordBreak:"break-word"}}>
      {
        props.completed ? <strike>{props.description}</strike> : props.description
      }
    </td>
    <td>
      <span>{ props.dueDate ? moment(props.dueDate).format('MMM Do, YYYY') : "Not Due"}</span>
    </td>
    <td className="btn-group-sm mb-2">
      <CompleteButton completed={props.completed} id={props.id} />
      <DeleteTask id={props.id} />
    </td>
  </tr>
  )
}

export default Task
