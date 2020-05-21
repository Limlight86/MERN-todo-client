import React from "react"
import DateFilters from "../components/DateFilters"
import TaskForm from "../components/TaskForm"
import TasksContainer from "../components/TasksContainer"

const Home = () => {

  return(
    <div>
      <DateFilters />
      <TaskForm />
      <TasksContainer />
    </div>
  )
}

export default Home
