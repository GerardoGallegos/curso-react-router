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
      Ordenar por: { match.params.precio } precio <br />
      Producto ID: { match.params.id }
    </h3>
  )
}

const App = () => (
  <BrowserRouter>
    <>
      <Route path='/productos' render={Productos} />
      <Route
        path='/productos/:precio(mayor|menor)/:id(\d{3}-\d{2})?'
        render={ProductosCategoria}
      />
    </>
  </BrowserRouter>
)

export default App

