
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Signup from './pages/authentication/signup/Signup'
import Login from './pages/authentication/login/Login'
import Blog from './pages/blog/Blog'
import MyState from './context/MyState'

function App() {
  return (
    <>
      <MyState>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home/>} />
          <Route path='/signup' element={ <Signup/>} />
          <Route path='/login' element={ <Login/>} />
          <Route path='/blog' element={ <Blog/>} />
      </Routes>
        </BrowserRouter>
      </MyState>
    </>
  )
}

export default App
