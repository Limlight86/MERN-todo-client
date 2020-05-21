import React, {useContext} from "react"
import { AppContext } from '../context/AppContext';
import DateFilters from "../components/DateFilters"
import TaskForm from "../components/TaskForm"
import TasksContainer from "../components/TasksContainer"

const Home = () => {
  const { loggedIn } = useContext(AppContext)

  return(
    <div>
      <DateFilters />
      {
        loggedIn ? ( 
        <div>
          <TaskForm />
          <TasksContainer />
        </div>) 
        :
        <h1>Log in to manage your Todos!</h1>
      }
      
    </div>
  )
}

export default Home
