import React, { useState, useContext } from 'react';
import {Link, useHistory} from "react-router-dom"
import { AppContext } from "../context/AppContext";
import axios from "axios"

const Signup = () => {
  const { setUser, setLoggedIn } = useContext(AppContext);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  const history = useHistory()

  const signUp = async (email, password, name, e) => {
    e.preventDefault()
    await axios({
      method: 'POST',
      url: `http://localhost:8080/users`,
      data: {
        email,
        password,
        name
    }})
    .then(({ data }) => {
      console.log(data, "response")
      setUser(data.user)
      setLoggedIn(true)
      setEmail("")
      setPassword("")
      setName("")
      localStorage.setItem("token", data.token );
      history.push("/");
      })
      .catch((e) => console.log(e.message.toString()))
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