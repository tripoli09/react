import { Navbar, Container, Nav , NavDropdown } from 'react-bootstrap';
import { NavLink} from 'react-router-dom'
import CartWidget from './CartWidget';
import './style/NavBar.css'

const NavBar = () => {
    return (
        <div>
            <Navbar bg="warning" expand="lg" >
                    <Navbar.Brand >Puma</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/" className={({isActive}) => isActive ? 'Activeoption' :'Option'}>Inicio</NavLink>
                            <NavLink to="/envio" className={({isActive}) => isActive ? 'Activeoption' :'Option'}>Envio</NavLink>
                            <NavLink to="/tienda" className={({isActive}) => isActive ? 'Activeoption' :'Option'}>Tienda</NavLink>
                            <NavLink to="/categoria/pantalon" className={({isActive}) => isActive ? 'Activeoption' :'Option'}>Pantalón</NavLink>
                            <NavLink to="/categoria/remera" className={({isActive}) => isActive ? 'Activeoption' :'Option'}>Remera</NavLink>
                            <NavLink to="/categoria/media" className={({isActive}) => isActive ? 'Activeoption' :'Option'}>Media</NavLink>
                                
                        </Nav>
                    </Navbar.Collapse>
                    <CartWidget />
            </Navbar>
            
        </div>
    )
}

export default NavBar;

