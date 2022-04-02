import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListConteiner';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Inicio from './components/Inicio';
import Envio from './components/Envio';





function App() {


  return (
    <div className="App">
      
      <BrowserRouter>
      <header className="App-header">
        <NavBar />
      </header>
        <Routes>
            <Route path='/' element={<Inicio />}/>
            <Route path='/envio' element={<Envio />}/>
            <Route path='/tienda' element={<ItemListContainer />}/>
            <Route path='/tienda/:productoId' element={<ItemDetailContainer/>}/>
            <Route path='/tienda/:categoriaId' element={<ItemListContainer />}/>
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
