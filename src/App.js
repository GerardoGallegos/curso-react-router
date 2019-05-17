import { BrowserRouter, Route } from 'react-router-dom'

const Productos = (props) => {
  return (
    <h2>productos</h2>
  )
}

const ProductosCategoria = ({ match }) => {
  console.log(match)
  return (
    <h3>
      Categoria: { match.params.categoria } <br />
      ID: { match.params.id }
    </h3>
  )
}

const App = () => (
  <BrowserRouter>
    <>
      <Route path='/productos' render={Productos} />
      <Route
        path='/productos/:categoria/:id?'
        render={ProductosCategoria}
      />
    </>
  </BrowserRouter>
)

export default App

