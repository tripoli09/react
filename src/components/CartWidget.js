import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import logo from './img/carrito3.png';



const CartWidget = () => {
    return (
        <div>
            <img className="Carrito" src={logo} alt="imagen de carrito"/>
        </div>
    )
}
        

export default CartWidget;

