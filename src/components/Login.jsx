import React, { useState, useContext } from 'react';
import { AppContext } from "../context/AppContext";

const Login = () => {
  const { setUser, setLoggedIn, setRefetch } = useContext(AppContext);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const logIn = (email, password, e) => {
    e.preventDefault()
    let myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')

    let raw = JSON.stringify({ email, password })

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    }

    fetch(`http://localhost:8080/users/login`, requestOptions)
      .then(data => data.json())
      .then(res => {
        console.log(res, "response")
        setUser(res.user)
        localStorage.setItem("token", res.token );
        setLoggedIn(true)
        setRefetch(true)        
        setEmail("")
        setPassword("")
      })
      .catch(() => console.log('error'))
  }

  return(
    <form onSubmit={e => logIn(email, password, e)}>
        <h1>Login Below!</h1>
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
        <input type="submit" value="Log In"/>
      </form>

  )
}

export default Login