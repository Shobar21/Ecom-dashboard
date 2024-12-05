import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './Components/Signup'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<h1>Product component</h1>} />
          <Route path='/update' element={<h1>Update Product component</h1>} />
          <Route path='/add' element={<h1>Add Product component</h1>} />
          <Route path='/logout' element={<h1>logout component</h1>} />
          <Route path='/profile' element={<h1>Profile component</h1>} />
          <Route path='signup' element={<Signup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
