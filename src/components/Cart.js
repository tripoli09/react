import { useContext, useState } from "react"
import CartContext from '../context/CartContext'
import { Link } from 'react-router-dom';
import { createOrderAndUpdateStock } from '../services/firestore'
import Formulario from './Formulario'
import { useNotification } from '../notification/Notification'
import '../index.css';



const Cart = () => {
    const { setNotification } = useNotification()
    const [loading, setLoading] = useState(false)
    const {getQuantity, cart, removeItem, clearCart, total,dataFormName,
        dataFormAdress, dataFormPhone, dataFormEmail,dataFormZip, buttonState, setButtonState} = useContext(CartContext)
    
    const createOrder = () => {
        setLoading(true)

         const objOrder = {
            buyer: {
                name: dataFormName,
                phone: dataFormAdress,
                adress: dataFormPhone,
                zipcode: dataFormZip,
                email: dataFormEmail,
            },
            items: cart,
            total: total()
        }
       console.log(dataFormName)
        createOrderAndUpdateStock(cart, objOrder).then(id => {
            setNotification('success', "Orden de compra completada")
            clearCart()
        }).catch((error) => {
            if(error && error.name === 'outOfStockError' && error.products.length > 0) {
                const stringProducts = error.products.map(prod => prod.dataDoc.name).join(', ')

                setNotification('Error', stringProducts)
            } else {
                setNotification('Error', error)
            }
        }).finally(() => {
            setLoading(false)
        })
        setButtonState(true)
    }
    

    if(loading) {
        return <h1>Se esta procesando la orden</h1>
    }



    if(getQuantity() === 0){
        return(<div>
            <h4>No hay productos en el carrito</h4>
            <Link to="/tienda" ><button className="myButton"> Volver a la tienda</button></Link>
            </div>)
    }

    const isDisamble = () =>{
        if (buttonState == true){
            return("myButtondDisabled")
        }else{
            return("myButton")
        }
    }

    
    return (
        <div Classname="div">
            <ul className="carrito">
                {cart.map(prod => <li key={prod.id}>{prod.titulo} 
                Precio: {prod.precio} Cantidad: {prod.cantidad}
                <button className="myButton" onClick={() => {removeItem(prod.id)}}>X</button></li>)} 
            </ul>
           
            <div className="total">Total de productos: {getQuantity()} Precio total: {total()}</div>
            <Formulario />
            <button onClick={() => clearCart()} className="myButton">Cancelar compra</button>
            <button onClick={createOrder} className={isDisamble()} disabled={buttonState} >Confirmar Compra</button>
            <button className="myButton" onClick={clearCart}>Vaciar carrito</button>
            
        </div>
    )
}

export default Cart
