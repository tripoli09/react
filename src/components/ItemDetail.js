import React from 'react';
import { Card } from 'react-bootstrap';
import ItemCount from './ItemCount';
import imagenes from './Imagenes';
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext'

const ItemDetail = ({ id, titulo, descripcion, precio, stock, categoria }) => {
    const [quantity, setQuantity] = useState(0)
    
    const {addItem} = useContext(CartContext)

    const handleOnAdd = (count) => {
        setQuantity(count)
        addItem({id, titulo, precio}, count)
    }

    


    return (
        <div>
            <Card style={{ width: '20rem' }} border="Warning" >
                <Card.Img variant="top" src={imagenes[id]} alt={id} />
                <Card.Body>
                    <Card.Title>{titulo}</Card.Title>
                    <Card.Text> {descripcion}</Card.Text>
                    <Card.Text> Disponible:{stock}</Card.Text>
                    <Card.Text>Precio: {precio}</Card.Text>
                    <Card.Text>categoria: {categoria}</Card.Text>
                    <footer>
                        {quantity === 0 ? <ItemCount onAdd={handleOnAdd} stock={stock} initial="0" /> : <Link to='/cart'><button className="myButton">Ir al carrito</button></Link>}
                    </footer>
                </Card.Body>
            </Card>
        </div>
    )
}


export default ItemDetail;

