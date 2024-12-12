import React from 'react'
import { useState } from 'react'

function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("")
  return (
    <div className='login'>
      <input
        type='email'
        name='email'
        id='email'
        placeholder='Enter Email'
        className='inputBox'
      />
      <input
        type='password'
        name='password'
        id='password'
        placeholder='Enter password'
        className='inputBox'
      />
      <button style={{ alignItems: 'center' }} type='button' className='button'>
        SignUp
      </button>
    </div>
  )
}

export default Login
