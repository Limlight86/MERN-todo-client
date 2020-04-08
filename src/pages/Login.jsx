import React, { useState, useEffect } from 'react'

const Login = () => {

  useEffect(()=>{
    const token = localStorage.getItem("token")

    if (token){
      fetch("http://localhost:8080/users/me", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(data => data.json())
      .then(res => {
        console.log(res, "response")
        setUser(res)
        setLoggedIn(true)
    })}}, [])

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)
  
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
      .then(response => response.text())
      .then(res => {
        console.log(res, "response")
        const parsedRes = JSON.parse(res)
        setUser(parsedRes.user)
        setLoggedIn(true)
        setEmail("")
        setPassword("")
        localStorage.setItem("token", parsedRes.token );
      })
      .catch(() => console.log('error'))
  }

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
    })
  }

  return(
    <div>
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
      <button onClick={logOut}>Log Out</button>
      {
        user.name && <h1>{user.name}</h1>
      }
    </div>
  )
  
}

export default Login