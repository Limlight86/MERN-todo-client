import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext";
import Login from "./components/Login"
import Signup from './components/Signup'
import Navbar from "./components/Navbar"
import ResetPassword from "./components/ResetPassword"
import Home from "./pages/Home"

const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <h1>Mern TODO Front End</h1>
          <Route exact path="/" component={Home}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/login" component={Login}/>
          <Route path="/resetpassword" component={ResetPassword}/>
        </div>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
