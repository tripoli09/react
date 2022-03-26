import React from 'react';
import { Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';
import './style/item.css'




const Item = ({id, titulo, descripcion, precio, stock}) => {

    const addOn = contador =>{
        console.log(contador)
    }

    var img = "./img/" + id + ".jpg";
    console.log(img);

    return (
        <div className='item'>
            <Card style={{ width: '18rem' }} border="Warning" >
                <Card.Img variant="top" src={img} alt='productos' />
                <Card.Body>
                    <Card.Title>{titulo}</Card.Title>
                    <Card.Text>{descripcion} {precio}</Card.Text>
                    <ItemCount stock={stock} initial="0" addOn={addOn}/>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item;

