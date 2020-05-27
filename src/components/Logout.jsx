import React, { useContext } from 'react';
import { useHistory } from "react-router-dom"
import { AppContext } from "../context/AppContext";
import axios from 'axios'

const Logout = () => {
  const { setUser, setLoggedIn, setTasks } = useContext(AppContext);

  const history = useHistory()

  const logOut = async () => {
    const token = localStorage.getItem("token")
    await axios({
      method: 'POST',
      url: `http://localhost:8080/users/logout`,
      headers: {Authorization: `Bearer ${token}`},
    })
    .then(({ data }) => {
      console.log(data, "response")
      localStorage.removeItem("token");
      setUser({})
      setLoggedIn(false)
      setTasks([])
      history.push("/")
    })
    .catch((e) => console.log(e.message.toString()))
  }

  return(
    <button className="btn btn-danger actions" onClick={logOut}>Log Out</button>
  )
}

export default Logout
