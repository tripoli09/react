import { useContext, useState } from "react"
import CartContext from '../context/CartContext'
import { Link } from 'react-router-dom';
import { createOrderAndUpdateStock } from '../services/firestore'
import { writeBatch } from "firebase/firestore";

const Cart = () => {
    const [loading, setLoading] = useState(false)
    const { cart/*carrito*/, removeItem, clearCart} = useContext(CartContext)
    let totalPrice = 0
    const { getQuantity } = useContext(CartContext)
    
    const total = () => {
        for ( let i = 0; i < cart.length; i++){
            totalPrice = totalPrice + cart[i].precio * cart[i].cantidad
            console.log(cart[i])
            
        }
        return totalPrice
    }

    const createOrder = () => {
        setLoading(true)

        const objOrder = {
            buyer: {
                name: 'Juan',
                phone: '123456',
                email: 'juan@gmail.com'
            },
            items: cart,
            total: total()
        }
       
        createOrderAndUpdateStock(cart, objOrder).then(id => {

            clearCart()
            console.log(id)
        }).catch((error) => {
            if(error && error.name === 'outOfStockError' && error.products.length > 0) {
                const stringProducts = error.products.map(prod => prod.dataDoc.name).join(', ')

                console.log(stringProducts)
            } else {
                console.log(error + "error aca")
            }
        }).finally(() => {
            setLoading(false)
        })
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
    
    return (
        <div>
            <ul>
                {cart.map(prod => <li key={prod.id}>{prod.titulo} 
                Precio: {prod.precio} Cantidad: {prod.cantidad}
                <button className="myButton" onClick={() => {removeItem(prod.id)}}> Eliminar</button></li>)} 
            </ul>
           
            <div>Total de productos: {getQuantity()} Precio total: {total()}</div>
            <button onClick={() => clearCart()} className="myButton">Cancelar compra</button>
            <button onClick={createOrder} className="myButton">Confirmar Compra</button>
            <button className="myButton" onClick={clearCart}>Vaciar carrito</button>
        </div>
    )
}

export default Cart
