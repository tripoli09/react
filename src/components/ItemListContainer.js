import React from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const ItemListContainer = () => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" alt='productos' />
                <Card.Body>
                    <Card.Title>Catálogo</Card.Title>
                    <Card.Text>
                        Nuestros productos.
                    </Card.Text>
                    <Button variant="primary">Comprar</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemListContainer;

