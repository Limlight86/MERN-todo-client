import React, { useContext } from 'react'
import { AppContext } from "../context/AppContext";
import dueFilter from '../helpers/DueFilter'

const DateFilters = () => {
  const { tasks, setDisplayedTasks } = useContext(AppContext);

  const filterByDate = query => {
      dueFilter(query, tasks, setDisplayedTasks)
  }

 const filters = ["Due Soon", "Due Later", "Past Due", "Not Due", "Remove" ]
 
  return(
    <div>
      <ul>
        {
          filters.map(filter => (
            <li onClick={()=> filterByDate(filter)}>{filter}</li>
        ))}
      </ul>
    </div>
  )
}

export default DateFilters
