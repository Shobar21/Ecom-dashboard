import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {
  useEffect(() => {
    const auth = localStorage.getItem('user')
    if (auth) {
      navigate('/')
    }
  })
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState(0)
  const navigate = useNavigate()

  const collectData = async () => {
    console.log(name, email, password)
    const data = await fetch('http://localhost:5000/register', {
      method: 'post',
      body: JSON.stringify({ name, email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    let result = await data.json()
    localStorage.setItem('user', JSON.stringify(result))
    console.log(result)
    if (result) {
      navigate('/')
    }
  }

  return (
    <div>
      <h1 style={{ paddingLeft: '20rem' }}>register</h1>
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
