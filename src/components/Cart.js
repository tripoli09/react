import { useContext } from "react"
import CartContext from '../context/CartContext'


const Cart = () => {

    const { cart/*carrito*/, removeItem, clearCart} = useContext(CartContext)
    
  
    
    return (
        <div>
            <ul>
                {cart.map(prod => <li key={prod.id}>{prod.titulo} 
                Precio: {prod.precio} Cantidad: {prod.cantidad}
                <button className="myButton" onClick={() => {removeItem(prod.id)}}> Eliminar</button></li>)} 
            </ul> 
           
            <button className="myButton" onClick={clearCart}>Vaciar carrito</button>
        </div>
    )
}

export default Cart
