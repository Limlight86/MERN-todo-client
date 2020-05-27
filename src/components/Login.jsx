import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom"
import { AppContext } from "../context/AppContext";
import axios from 'axios'

const Login = () => {
  const { setUser, setLoggedIn, setRefetch, setErrorMessage } = useContext(AppContext);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const history = useHistory()

  const logIn = async (email, password, e) => {
    e.preventDefault()
     await axios({
      method: 'POST',
      url: `${process.env.REACT_APP_SERVER_URL}/users/login`,
      data: {
        email,
        password
      }})
      .then(({data}) =>{
        console.log(data, "response")
        setUser(data.user)
        localStorage.setItem("token", data.token );
        setLoggedIn(true)
        setRefetch(true)        
        setEmail("")
        setPassword("")
        history.push("/");
        setRefetch(true)
      })
      .catch((e) =>{
        console.log(e.message.toString(), "Credentials Error")
        setErrorMessage("Credentials error, try again.")
      }) 
    }

  return(
    <form onSubmit={e => logIn(email, password, e)}>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={ e => setEmail(e.target.value) }
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn-sm btn-primary actions">Log In</button>
      </form>

  )
}

export default Login