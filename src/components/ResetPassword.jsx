import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

const ResetPassword = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmation, setConfirmation] = useState(false)

  const requestPassword = async (e, email, password) =>{
    e.preventDefault()
    try{
      await axios.get(`${process.env.REACT_APP_SERVER_URL}/users/password/forgot?email=${email}&password=${password}`)
    } catch(e){
       console.log(e.toString())
    }
    setConfirmation(true)
    setEmail("")
    setPassword("")
  }

  return(
    <div>
    <form onSubmit={e => requestPassword(e, email, password)}>
        <h1>Reset Password</h1>
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
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">New Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter a new password"
            value={password}
            onChange={ e => setPassword(e.target.value) }
            required
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary actions">Reset Password</button>
      </form>
      <Link to="/">
        Return to Home Page
      </Link>
      {
        confirmation ? (
          <div class="alert alert-primary alert-dismissible fade show" role="alert">
            Email sent. Check your email for a link to reset your password.
            <button 
              type="button" 
              className="close" 
              data-dismiss="alert" 
              aria-label="Close"
              onClick={()=> setConfirmation(false)}
            >
            <span aria-hidden="true">&times;</span>
        </button>
        </div>
        ) : null
      }
    </div>
  )
}

export default ResetPassword
