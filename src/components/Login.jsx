import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom"
import { AppContext } from "../context/AppContext";
import axios from 'axios'

const Login = () => {
  const { setUser, setLoggedIn, setRefetch } = useContext(AppContext);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const history = useHistory()

  const logIn = async (email, password, e) => {
    e.preventDefault()
     const { data } = await axios({
        method: 'POST',
        url: `http://localhost:8080/users/login`,
        data: {
          email,
          password
        }
      }).catch((e) => console.log(e.message.toString()))
      console.log(data, "response")
      setUser(data.user)
      localStorage.setItem("token", data.token );
      setLoggedIn(true)
      setRefetch(true)        
      setEmail("")
      setPassword("")
      history.push("/");
      setRefetch(true)
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