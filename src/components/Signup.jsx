import React, { useState, useContext } from 'react';
import { AppContext } from "../context/AppContext";

const Signup = () => {
  const { user, setUser, setLoggedIn, history } = useContext(AppContext);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  const signUp = (email, password, name, e) => {
    e.preventDefault()
    let myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')

    let raw = JSON.stringify({ email, password, name })

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    }

    fetch(`http://localhost:8080/users`, requestOptions)
    .then(data => data.json())
    .then(res => {
      console.log(res, "response")
      setUser(res.user)
      setLoggedIn(true)
      setEmail("")
      setPassword("")
      setName("")
      localStorage.setItem("token", res.token );
      history.push("/home");
      })
      .catch(() => console.log('error'))
  }

  return(
    <form onSubmit={e => signUp(email, password, name, e)}>
        <h1>Sign Up Below!</h1>
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
        <input
          type="name"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <input type="submit" value="Sign Up"/>
        {
        user.name && <h1>{user.name}</h1>
      }
      </form>
  )
}

export default Signup