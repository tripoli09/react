import React from 'react';
import { Card } from 'react-bootstrap';
import ItemCount from './ItemCount';
import imagenes from './Imagenes';
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext'
import { useNotification } from '../notification/Notification'
import './style/ItemDetail.css';

const ItemDetail = ({ id, titulo, descripcion, precio, stock, categoria, img}) => {
    const [quantity, setQuantity] = useState(0)

    const { addItem } = useContext(CartContext)
    const { setNotification } = useNotification()

    const handleOnAdd = (count) => {
        setQuantity(count)
        addItem({ id, titulo, precio}, count)
        setNotification('success', 'Se agregaron los productos al carrito')
    }
        

    return (
        <div className="itemdetail">
            <img  className="imagen" src= {imagenes[img]} alt='productos' />
            <Card style={{ width: '27rem' }} border="Warning" >
                <Card.Body>
                    <Card.Title>{titulo}</Card.Title>
                    <Card.Text> Descripcion {descripcion}</Card.Text>
                    <Card.Text> Disponible:{stock}</Card.Text>
                    <Card.Text>Precio: {precio}</Card.Text>
                    <Card.Text>categoria: {categoria}</Card.Text>
                    <div>
                        {quantity === 0 ? <ItemCount onAdd={handleOnAdd} stock={stock} initial="0" /> : <Link to='/cart'><button className="myButton">Completar compra</button></Link>}
                    </div>
                </Card.Body>
            </Card>
        </div>
        
    )
}

export default ItemDetail;

