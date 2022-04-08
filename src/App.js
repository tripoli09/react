import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './components/Inicio';
import Envio from './components/Envio';
import {CartContextProvider} from './context/CartContext';
import Cart from './components/Cart'


function App() {
 
 
  return (
    
    <div className="App">
        <CartContextProvider>
        <BrowserRouter>
          <header className="App-header">
            <NavBar />
          </header>
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/envio' element={<Envio />} />
            <Route path='/tienda' element={<ItemListContainer />} />
            <Route path='/tienda/:productoId' element={<ItemDetailContainer />} />
            <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
            <Route path='/cart' element={<Cart />} />
          

          </Routes>
        </BrowserRouter>
        </CartContextProvider>
    </div>
  );
}

export default App;
