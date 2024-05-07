
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Signup from './pages/authentication/signup/Signup'
import Login from './pages/authentication/login/Login'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home/>} />
          <Route path='/signup' element={ <Signup/>} />
          <Route path='/login' element={ <Login/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
