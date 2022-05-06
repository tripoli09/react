import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contacto from './components/Contacto'
import Inicio from './components/Inicio';
import {CartContextProvider} from './context/CartContext';
import Cart from './components/Cart'
import { NotificationProvider } from './notification/Notification'
import Footer from './components/Footer';

function App() {
 
 
  return (
    
    <div className="App">
      <NotificationProvider>
        <CartContextProvider>
        <BrowserRouter>
          <header className="App-header">
            <NavBar />
          </header>
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/tienda' element={<ItemListContainer />} />
            <Route path='/tienda/:productoId' element={<ItemDetailContainer />} />
            <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/contacto' element={<Contacto />} />
           
          </Routes>
          <footer>
             <Footer/>
           </footer>
        </BrowserRouter>
        </CartContextProvider>
        </NotificationProvider>
        
    </div>

  );
}

export default App;
