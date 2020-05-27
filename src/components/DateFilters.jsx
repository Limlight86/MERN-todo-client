import React, { useContext } from 'react'
import { AppContext } from "../context/AppContext";
import dueFilter from '../helpers/DueFilter'
import "../App.css"

const DateFilters = () => {
  const { tasks, setDisplayedTasks, currentFilter, setCurrentFilter, setStatusFilter } = useContext(AppContext);

  const filterByDate = query => {
      dueFilter(query, tasks, setDisplayedTasks)
      setCurrentFilter(query)
      setStatusFilter(0)
  }

 const filters = ["Due Soon", "Due Later", "Past Due", "Not Due", "Remove" ]

 const filterClass = (filter) => {
   let className=""
    switch(filter) {
      case "Due Soon":
          className = `badge badge-warning ${currentFilter === "Due Soon" ? 'badge-lg' : 'badge-sm'}`
        break;
      case "Due Later":
        className = `badge badge-success ${currentFilter === "Due Later" ? 'badge-lg' : 'badge-sm'}`
        break;
      case "Past Due":
        className = `badge badge-danger ${currentFilter === "Past Due" ? 'badge-lg' : 'badge-sm'}`
        break;
      case "Not Due":
        className = `badge badge-secondary ${currentFilter === "Not Due" ? 'badge-lg' : 'badge-sm'}`
        break;
      case "Remove":
        className = `badge badge-dark badge-sm`
        break;
      default: className = "badge"
    }
    return className
  }
 
  return(
    <div>
      <ul>
        {
          filters.map((filter, i) => (
            <li 
              key={i} 
              className={filterClass(filter)} 
              onClick={()=> filterByDate(filter)}
            >
              {filter}
            </li>
        ))}
      </ul>
    </div>
  )
}

export default DateFilters
