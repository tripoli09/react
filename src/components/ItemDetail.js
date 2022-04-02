import React from 'react';
import { Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';
import imagenes from './Imagenes'




const ItemDetail= ({id, titulo, descripcion, precio, stock, categoria}) => {

    return (
        <div >
            <Card style={{ width: '20rem' }} border="Warning" >
                <Card.Img variant="top" src= {imagenes[id]} alt={id} />
                <Card.Body>
                    <Card.Title>{titulo}</Card.Title>
                    <Card.Text> {descripcion}</Card.Text>
                    <Card.Text>Precio: {precio}</Card.Text>
                    <Card.Text>categoria: {categoria}</Card.Text>
                    <ItemCount stock={stock} initial="0" />
                </Card.Body>
            </Card>
        </div>
    )
}


export default ItemDetail;