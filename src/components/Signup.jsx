import React, { useState, useContext } from 'react';
import {Link, useHistory} from "react-router-dom"
import { AppContext } from "../context/AppContext";

const Signup = () => {
  const { setUser, setLoggedIn } = useContext(AppContext);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  const history = useHistory()

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
      history.push("/");
      })
      .catch((e) => console.log(e.message))
  }

  return(
    <div>
      <form onSubmit={e => signUp(email, password, name, e)}>
          <h1>Sign Up Below!</h1>
          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={ e => setEmail(e.target.value) }
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Password: </label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name: </label>
            <input
              type="name"
              name="name"
              id="name"
              placeholder="Enter name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary actions">Sign Up</button>
        </form>
        <Link to="/">
          Return to Home Page
        </Link>
      </div>
  )
}

export default Signup