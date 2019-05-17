import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import './App.css'

const Hola = () => (
  <h2>Hola</h2>
)

const Productos = (props) => {
  debugger
  return (
    <h2>productos</h2>
  )
}

const Home = () => (
  <h2>Home</h2>
)

const navStyles = {
  color: '#FFF',
  display: 'flex',
  justifyContent: 'space-around'
}

const navActive = {
  color: 'orangered'
}

const Navegation = () => (
  <nav style={navStyles}>
    <NavLink
      to='/'
      exact
      activeStyle={navActive}
    >
      Home
    </NavLink>
  
    <NavLink
      to='/hola'
      activeClassName='activa'
    >
      Hola
    </NavLink>
  
    <NavLink
      to='/productos'
      activeStyle={navActive}
      isActive={(match, location) => {
        console.log(match)
        if (!match) return false
        return !match.isExact
      }}
    >
      Productos
    </NavLink>
  </nav>
)

const App = () => (
  <BrowserRouter>
    <>
      <Navegation />
      <Route path='/' exact component={Home} />
      <Route path='/hola/' render={Hola} />
      <Route path='/productos' render={Productos} />
    </>
  </BrowserRouter>
)

export default App

