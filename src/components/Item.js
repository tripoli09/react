import React from 'react';
import { Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style/Item.css'
import Imagenes from './Imagenes'

const Item = ({product}) => {

    const addOn = contador =>{
        console.log(contador)
    }

    return (
        <div className='item'>
            <Card style={{ width: '18rem' }} border="Warning" >
                <Card.Img variant="top" src= {Imagenes[product.img]} alt='productos' />
                <Card.Body>
                    <Card.Title>{product.titulo}</Card.Title>
                    <Card.Text>Precio: {product.precio}</Card.Text>
                </Card.Body>
                <Link to={`/tienda/${product.id}`} className='myButton'>Ver detalle</Link>
            </Card>
        </div>
    )
}

export default Item;

