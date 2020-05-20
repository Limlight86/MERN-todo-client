import React, { useState } from 'react';
import axios from 'axios'

const ResetPassword = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const requestPassword = async (e, email, password) =>{
    e.preventDefault()
    console.log("am i working?")
    try{
      await axios.get(`http://localhost:8080/users/password/forgot?email=${email}&password=${password}`)
    } catch(e){
       console.log(e.toString())
    }}

  return(
    <form onSubmit={e => requestPassword(e, email, password)}>
        <h1>Reset Email</h1>
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
          onChange={ e => setPassword(e.target.value) }
          required
        />
        <button type="submit">Reset Password</button>
      </form>
  )
}

export default ResetPassword
