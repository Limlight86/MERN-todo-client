import React, {useContext} from "react"
import { Link } from "react-router-dom"
import { AppContext } from '../context/AppContext';
import DateFilters from "../components/DateFilters"
import TaskForm from "../components/TaskForm"
import TasksContainer from "../components/TasksContainer"
import Search from "../components/Search"

const Home = () => {
  const { loggedIn } = useContext(AppContext)

  return(
    <div>
      <DateFilters />
      {
        loggedIn ? ( 
        <div>
          <Search />
          <TasksContainer />
          <TaskForm />
        </div>) 
        :
        <div>
          <h1>Log in to manage your Todos!</h1>
          <Link to="/signup">Sign Up Now</Link>
        </div>
      }
    </div>
  )
}

export default Home
