import React from 'react';
import { Card, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import './style/Item.css'
import imagenes from './Imagenes'




const Item = ({product}) => {

    const addOn = contador =>{
        console.log(contador)
    }

   

    return (
        <div className='item'>
            <Card style={{ width: '18rem' }} border="Warning" >
                <Card.Img variant="top" src= {imagenes[product.id]} alt='productos' />
                <Card.Body>
                    <Card.Title>{product.titulo}</Card.Title>
                    <Card.Text>Precio: {product.precio}</Card.Text>
                    <ItemCount stock={product.stock} initial="0" addOn={addOn}/>
                </Card.Body>
                <Link to={`/tienda/${product.id}`} className='myButton'>Ver detalle</Link>
            </Card>
        </div>
    )
}

export default Item;

