import React from 'react'
import './Sign.css'

const SignUp = () => {
  return (
    <form className="form">
      <label for="username">Username</label>
      <input type="text" placeholder="Username" id="username" />
      <label for="password">Password</label>
      <input type="Password" placeholder="Password" id="password" />
      <label for="password">Confirm Password</label>
      <input type="Password" placeholder="Confirm Password" id="password" />
      <button type="submit">Register</button>
    </form>
  )
}

export default SignUp