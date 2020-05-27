import React, { useContext } from 'react';
import { AppContext } from "../context/AppContext";

const Logout = () => {
  const { setUser, setLoggedIn, setTasks } = useContext(AppContext);

  const logOut = () => {
    const token = localStorage.getItem("token")
    let myHeaders = {Authorization: `Bearer ${token}`}
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      redirect: 'follow',
    }
    fetch("http://localhost:8080/users/logout", requestOptions)
      .then(data => data.json())
      .then(res => {
        console.log(res, "response")
        localStorage.removeItem("token");
        setUser({})
        setLoggedIn(false)
        setTasks([])
    })
  }

  return(
    <button className="btn btn-danger actions" onClick={logOut}>Log Out</button>
  )
}

export default Logout
