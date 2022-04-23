import { Navbar, Container, Nav , NavDropdown } from 'react-bootstrap';
import { Link, NavLink} from 'react-router-dom'
import CartWidget from './CartWidget';
import './style/NavBar.css';
import Imagenes from './Imagenes'

const NavBar = () => {
    return (
        <div>
            <Navbar bg="primary" expand="lg" >
                   <Link to="/"> <img src={Imagenes[23]} width="20%"/> </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/" className={({isActive}) => isActive ? 'Activeoption' :'Option'}>Inicio</NavLink>
                            <NavLink to="/envio" className={({isActive}) => isActive ? 'Activeoption' :'Option'}>Envio</NavLink>
                            <NavLink to="/tienda" className={({isActive}) => isActive ? 'Activeoption' :'Option'}>Tienda</NavLink>
                            <NavLink to="/categoria/Impresion" className={({isActive}) => isActive ? 'Activeoption' :'Option'}>Impresion</NavLink>
                            <NavLink to="/categoria/Editorial" className={({isActive}) => isActive ? 'Activeoption' :'Option'}>Editorial</NavLink>
                            <NavLink to="/categoria/Papeleria" className={({isActive}) => isActive ? 'Activeoption' :'Option'}>Papeleria</NavLink> 
                            <NavLink to="/cart" className={({isActive}) => isActive ? 'Activeoption' :'Option'}>Carrito</NavLink>   
                        </Nav>
                    </Navbar.Collapse>
                    <CartWidget />
            </Navbar>
            
        </div>
    )
}

export default NavBar;

