import React, { useContext } from 'react'
import { AppContext } from "../context/AppContext";
import dueFilter from '../helpers/DueFilter'

const DateFilters = () => {
  const { tasks, setDisplayedTasks } = useContext(AppContext);

  const filterByDate = query => {
      dueFilter(query, tasks, setDisplayedTasks)
  }

  return(
    <div>
      <ul>
        <li onClick={()=> filterByDate("Due Soon")}>Due Soon</li>
        <li onClick={()=> filterByDate("Due Later")}>Due Later</li>
        <li onClick={()=> filterByDate("Past Due")}>Past Due</li>
        <li onClick={()=> filterByDate("Not Due")}>Not Due</li>
        <li onClick={()=> filterByDate("Remove")}>Remove Filters</li>
      </ul>
    </div>
  )
}

export default DateFilters