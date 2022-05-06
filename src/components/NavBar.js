import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, NavLink} from 'react-router-dom'
import CartWidget from './CartWidget';
import './style/NavBar.css';
import Imagenes from './Imagenes'

const NavBar = () => {
    return (
        <div>
            
            <Navbar className='fondo' expand="lg" >
            <Link to="/"> <img className="imgini" src={Imagenes[23]}/> </Link>
            <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='menu'>
                        <Nav className="me-auto">
                            <NavLink to="/" className={({isActive}) => isActive ? 'Activeoption' :'Option'}>Inicio</NavLink>
                            <NavLink to="/tienda" className={({isActive}) => isActive ? 'Activeoption' :'Option'}>Tienda</NavLink>
                            <NavLink to="/categoria/Impresion" className={({isActive}) => isActive ? 'Activeoption' :'Option'}>Impresion</NavLink>
                            <NavLink to="/categoria/Editorial" className={({isActive}) => isActive ? 'Activeoption' :'Option'}>Editorial</NavLink>
                            <NavLink to="/categoria/Papeleria" className={({isActive}) => isActive ? 'Activeoption' :'Option'}>Papeleria</NavLink> 
                            <NavLink to="/contacto" className={({isActive}) => isActive ? 'Activeoption' :'Option'}>Contactanos</NavLink> 
                                 
                        </Nav>
                    </Navbar.Collapse>
                    <CartWidget />
                    </Container>
            </Navbar>
            
        </div>
    )
}

export default NavBar;

