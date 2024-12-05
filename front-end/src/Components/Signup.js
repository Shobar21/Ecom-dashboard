import React, { useState } from 'react'

function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState(0)

  const collectData = () => {
    console.log(name, email, password)
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>register</h1>
      <form className='RegisterForm'>
        <input
          type='text'
          id='name'
          placeholder='Enter Name'
          className='inputBox'
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
        <input
          type='email'
          name='email'
          id='email'
          placeholder='Enter Email'
          className='inputBox'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
        <input
          type='password'
          name='password'
          id='password'
          placeholder='Enter password'
          className='inputBox'
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
        <button type='button' className='button' onClick={collectData}>
          SignUp
        </button>
      </form>
    </div>
  )
}

export default Signup
