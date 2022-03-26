import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListConteiner';
import CartWidget from './components/CartWidget';



function App() {


  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <ItemListContainer />
    </div>
  );
}

export default App;
