import React, { Component } from 'react'
import { BrowserRouter, Route, NavLink, Prompt } from 'react-router-dom'
import './App.css'

const Navegation = () => (
  <nav>
    <NavLink to='/' exact activeClassName='activa'>Home</NavLink>
    <NavLink to='/ninja' activeClassName='activa'>Ninja</NavLink>
    <NavLink to='/contacto' activeClassName='activa'>Contacto</NavLink>
  </nav>
)

const Home = () => (
  <h2>Home</h2>
)

const Ninja = () => (
  <h2>Ninja</h2>
)

class Contacto extends Component {
  state = {
    text: ''
  }

  handleInput = (e) => this.setState({
    text: e.target.value
  })

  render () {
    return (
      <form>
        <input
          name='nombre'
          onChange={this.handleInput}
          value={this.state.text}
        />
        <input type='submit' />
        <h3>{ this.state.text }</h3>
        <Prompt
          when={this.state.text.length}
          message={(location) => `Seguro que quieres ir a ${location.pathname}?`}
        />
      </form>
    )
  }
}

const App = () => (
  <BrowserRouter>
    <>
      <Navegation />
      <Route path='/' exact render={Home} />
      <Route path='/ninja' render={Ninja} />
      <Route path='/contacto' component={Contacto} />
    </>
  </BrowserRouter>
)

export default App