import React from 'react'
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import './App.css'

const Navegation = () => (
  <nav>
    <NavLink to='/' exact activeClassName='activa'>Home</NavLink>
    <NavLink to='/registro' activeClassName='activa'>Registro</NavLink>
    <NavLink to='/dashboard' activeClassName='activa'>Dashboard</NavLink>
  </nav>
)

const Home = () => (
  <h2>Home</h2>
)

const Registro = () => (
  <h2>Registro</h2>
)

const OpcionDashboard = ({ match }) => (
  <h2>Opcion: { match.params.opcion }</h2>
)

const Dashboard = () => (
  <div>
    <nav>
      <NavLink to='/dashboard/sucursales' activeClassName='activa'>Sucursales</NavLink>
      <NavLink to='/dashboard/empleados' activeClassName='activa'>Empleados</NavLink>
      <NavLink to='/dashboard/huespedes' activeClassName='activa'>Huespedes</NavLink>
    </nav>
    <h2>Dashboard</h2>
    <Route path='/dashboard/:opcion' render={OpcionDashboard} />
  </div>
)

const App = () => (
  <BrowserRouter>
    <>
      <Navegation />
      <Route path='/' exact render={Home} />
      <Route path='/registro' exact component={Registro} />
      <Route path='/dashboard' component={Dashboard} />
    </>
  </BrowserRouter>
)


export default App
