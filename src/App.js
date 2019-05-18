import React from 'react'
import { BrowserRouter, Route, NavLink, Redirect } from 'react-router-dom'
import './App.css'

const Home = (props) => (
  <h2>Home</h2>
)

const Login = ({ location }) => {
  if (location.state) {
    return <h2>{ location.state.message } </h2>
  }

  return (
    <h2>Login</h2>
  )
}

const isAuth = true

const Perfil = () => {
  return isAuth
    ? <h2>Bienvenido a tu Perfil</h2>
    : <Redirect to={{
      pathname: '/login',
      state: {
        message: 'Debes de hacer login para acceder a tu perfil'
      }
    }} />
}

const Navegation = () => (
  <nav>
    <NavLink to='/' exact activeClassName='activa'>Home</NavLink>
    <NavLink to='/perfil' activeClassName='activa'>Perfil</NavLink>
    <NavLink to='/login' activeClassName='activa'>Login</NavLink>
  </nav>
)

const App = () => (
  <BrowserRouter>
    <>
      <Navegation />
      <Route path='/' exact render={Home} />
      <Route path='/perfil' render={Perfil} />
      <Route path='/login' render={Login} />
    </>
  </BrowserRouter>
)

export default App
