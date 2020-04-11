import React from 'react';
import { AppContextProvider } from "./context/AppContext";
import Login from "./components/Login"
import Signup from './components/Signup'
import Logout from './components/Logout'
import TasksContainer from './components/TasksContainer'

const App = () => {
  return (
    <div>
      <AppContextProvider>
        <h1>Mern TODO Front End</h1>
        <Login/>
        <Signup/>
        <Logout/>
        <TasksContainer/>
      </AppContextProvider>
    </div>
  );
}

export default App;
