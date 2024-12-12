import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './Components/Signup'
import PrivateComponent from './Components/PrivateComponent'
import Login from './Components/Login'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path='/' element={<h1>Product component</h1>} />
            <Route path='/update' element={<h1>Update Product component</h1>} />
            <Route path='/add' element={<h1>Add Product component</h1>} />
            <Route path='/logout' element={<h1>logout component</h1>} />
            <Route path='/profile' element={<h1>Profile component</h1>} />
          </Route>
          <Route path='signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
