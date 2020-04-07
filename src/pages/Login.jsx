import React, { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useState({})
  
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
        localStorage.setItem("token", parsedRes.token );
      })
      .catch(() => console.log('error'))
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
      {
        user.name ? <h1>{user.name}</h1> : null
      }
    </div>
  )
  
}

export default Login