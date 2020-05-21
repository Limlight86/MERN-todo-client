import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext";
import Login from "./components/Login"
import Signup from './components/Signup'
import Logout from './components/Logout'
import Navbar from "./components/Navbar"
import ResetPassword from "./components/ResetPassword"
import Home from "./pages/Home"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AppContextProvider>
          <h1>Mern TODO Front End</h1>
          <Navbar />
          <Route exact path="/" component={Home}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/login" component={Login}/>
          <Route path="/resetpassword" component={ResetPassword}/>
          <Logout />
        </AppContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
