import React from 'react'
import { BrowserRouter, Route, NavLink, withRouter } from 'react-router-dom'
import './App.css'

const Navegation = withRouter((props) => {
  console.log(props)
  return (
    <nav>
      <NavLink to='/' exact activeClassName='activa'>Home</NavLink>
      <NavLink to='/ninja' activeClassName='activa'>Ninja</NavLink>
      <NavLink to='/videos' activeClassName='activa'>Videos</NavLink>
      <button
        onClick={props.history.goBack}
      >
        Back
      </button>
    </nav>
  )
})

const Home = () => (
  <section>
    <h1>Home</h1>
  </section>
)

const Ninja =  () => (
  <section>
    <h1>Ninja</h1>
  </section>
)

const Videos = () => (
  <section>
    <h1>Videos</h1>
  </section>
)


const App = () => (
  <BrowserRouter>
    <>
      <Navegation />
      <Route path='/' exact render={Home} />
      <Route path='/ninja' component={Ninja} />
      <Route path='/videos' render={Videos} />
    </>
  </BrowserRouter>
)

export default App
