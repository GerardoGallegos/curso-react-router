import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

const Hola = () => (
  <h1>Hola</h1>
)

const Productos = () => (
  <h1>Productos</h1>
)

const Home = () => (
  <h1>Productos</h1>
)

const HolaNinja = () => (
  <h1>Hola Ninja</h1>
)

const App = () => (
  <BrowserRouter>
     <>
       <Route path='/' exact component={Home} />
       <Route path='/hola' component={Hola} />
       <Route path='/hola/ninja' exact component={HolaNinja} />
       <Route path='/productos' component={Productos} />
     </>
  </BrowserRouter>
)

export default App

