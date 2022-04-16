import { useContext } from "react"
import CartContext from '../context/CartContext'
import { Link } from 'react-router-dom';


const Cart = () => {

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
            <button className="myButton" onClick={clearCart}>Completar compra</button>
            <button className="myButton" onClick={clearCart}>Vaciar carrito</button>
        </div>
    )
}

export default Cart
