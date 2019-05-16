import React, { Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

const Hola = () => (
  <h1>Hola</h1>
)

const Productos = () => (
  <h1>Productos</h1>
)

const App = () => (
  <BrowserRouter>
     <>
       <Route path='/hola' component={Hola} />
       <Route path='/productos' component={Productos} />
     </>
  </BrowserRouter>
)

export default App

