import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'

const Home = () => (
  <section>
    <h1>Home</h1>
  </section>
)

const User =  () => (
  <section>
    <h1>Ruta de perfil de usuario 👱🏽</h1>
  </section>
)

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact render={Home} />
      <Route
        path={[ '/usuarios/:id', '/perfil/:id' ]}
        render={User}
      />
    </Switch>
  </BrowserRouter>
)

export default App
