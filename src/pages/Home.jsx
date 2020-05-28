import React, {useContext} from "react"
import { Link } from "react-router-dom"
import { AppContext } from '../context/AppContext';
import DateFilters from "../components/DateFilters"
import TaskForm from "../components/TaskForm"
import TasksContainer from "../components/TasksContainer"
import Search from "../components/Search"
import ErrorMessage from  "../components/ErrorMessage"

const Home = () => {
  const { loggedIn, errorMessage } = useContext(AppContext)

  return(
    <div>
      { errorMessage ? <ErrorMessage /> : null }
      {
        loggedIn ? ( 
        <div>
          <DateFilters />
          <Search />
          <TasksContainer />
          <TaskForm />
        </div>) 
        :
        <div>
          <h1>Log in to manage your Todos!</h1>
          <div style={{display:"flex", flexDirection:"column"}}>
            <Link to="/signup">Sign Up Now</Link>
            <Link to="/resetpassword">Forgot Password?</Link>
          </div>
        </div>
      }
    </div>
  )
}

export default Home
