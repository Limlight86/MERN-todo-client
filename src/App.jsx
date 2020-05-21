import React from 'react';
import { AppContextProvider } from "./context/AppContext";
import Login from "./components/Login"
import Signup from './components/Signup'
import Logout from './components/Logout'
import TasksContainer from './components/TasksContainer'
import TaskForm from './components/TaskForm'
import Navbar from "./components/Navbar"
import DateFilters from './components/DateFilters'
import ResetPassword from "./components/ResetPassword"

const App = () => {
  return (
    <div>
      <AppContextProvider>
        <h1>Mern TODO Front End</h1>
        <Navbar />
        <DateFilters />
        <Login />
        <Signup />
        <Logout />
        <TaskForm />
        <TasksContainer />
        <ResetPassword />
      </AppContextProvider>
    </div>
  );
}

export default App;
