import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import React from "react";
import logo from './img/carrito3.jpg';



const CartWidget = () => {
    return (
        <div>
            <img src={logo} alt="imagen de carrito"/>
            
        </div>
    )
}
        

export default CartWidget;




/*<picture>
            <Card>
                <Card.Img variant="top" src={logo} alt='carrito'/>
            </Card>
        </picture>
    )
}*/