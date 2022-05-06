import React from 'react';
import { Carousel, Card } from 'react-bootstrap';
import Img23 from './img/23.png';
import Img24 from './img/24.png';
import Img25 from './img/25.png';
import seleccione from './img/seleccione.jpg';
import personalice from './img/personalice.jpg';
import enviado from './img/enviado.jpg';
import './style/Inicio.css';


const Inicio = () => {


  return (
    <div>
          <div>
        <Carousel>
    <Carousel.Item>
      <img src={Img23}alt="imagen1" width= "130%"/>
      <Carousel.Caption>
        <h3>Ofrecemos servicios de impresión rápidos y confiables</h3>
        <p>Calidad de impresión y envío rápido</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img src={Img24}alt="imagen1" width= "130%" />
      <Carousel.Caption>
        <h3>Amplia gama de productos para elegir y diseñar </h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img src={Img25}alt="imagen1" width= "130%"/>
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  <div className='inline'>
  <Card style={{ width: '20rem' }} className='float'>
  <Card.Img src={seleccione}alt="seleccione" width= "1%"/>
  <Card.Body>
    <Card.Title>Seleccione</Card.Title>
    <Card.Text>
    Elige que producto quieres personalizar. Tenemos varias plantillas diseñadas profesionalmente y listas para usar para casi todos los requisitos.
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '20rem' }} className='float'>
<Card.Img src={personalice}alt="seleccione" width= "1%"/>
  <Card.Body>
    <Card.Title>Personalice</Card.Title>
    <Card.Text>
    Cargue su imagen desde su dispositivo o desde su cuenta de red social, ajuste la ubicacion, agregue texto y listo !. Vea como se ve en la vista previa y pidalo.
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '20rem' }}className='float'>
<Card.Img src={enviado}alt="seleccione" width= "1%"/>
  <Card.Body>
    <Card.Title>Enviado</Card.Title>
    <Card.Text>
    cuando se aprueba el pedido, nuestros profesionales lo verifican y lo envian. Utilizamos sistemas avanzados para que los productos se envien rapidamente.
    </Card.Text>
  </Card.Body>
</Card>
</div>
  </div>
  )
}




export default Inicio;

