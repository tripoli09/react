import logo from './img/carrito3.png';
import './style/CartWidget.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from './../context/CartContext'


const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)

    if(getQuantity() > 0) {

        return(
            <Link to={'/Cart'} className="CartWidget">
                <img src={logo }alt='carrito' className='CartImg' width= "30%"/>
                { getQuantity() }
            </Link>
        );}
            return(
                <div></div>
            )
        
    }



    

export default CartWidget;