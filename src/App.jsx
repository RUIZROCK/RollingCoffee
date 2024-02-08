import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import './App.css'
import Footer from './components/common/Footer'
import Menu from './components/common/Menu'
import Inicio from './components/pages/Inicio'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Administracion from './components/pages/Administracion'
import Error404 from './components/pages/Error404'
import NuevoProducto from './components/pages/NuevoProducto'
import DetalleProducto from './components/pages/DetalleProducto'
function App() {
  return (
    <BrowserRouter>
    <Menu></Menu>
    <Routes>
      <Route exact path='/' element={<Inicio></Inicio>}></Route>
      <Route exact path='/Administracion' element={<Administracion></Administracion>}></Route>
      <Route exact path='/NuevoProducto' element={<NuevoProducto></NuevoProducto>}></Route>
      <Route exact path='/DetalleProducto' element={<DetalleProducto></DetalleProducto>}></Route>
      <Route path='*' element={<Error404></Error404>}></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
  