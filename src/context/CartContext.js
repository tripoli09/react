import { createContext, useState } from "react";

const Context = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
   

    const addItem = (producto, cantidad) => {
        let inCart = false;
        cart.map((prod) =>{
            if(prod.id === producto.id){
                console.log("el producto ya se encuentra en el carrito");
                inCart=true;
            }
        })
        if (inCart === false && cantidad > 0){
            const objItemCart = {
                ...producto,
                cantidad
            }
            
            setCart([...cart, objItemCart ])
        }    
    }

    const clearCart = () => {
        setCart([])
    }

    const getQuantity = () => {
        let count = 0
        cart.forEach(prod => {
            count = count + prod.cantidad
        })

        return count
    }

    const removeItem = (idDeleteItem) => {
        const productId = idDeleteItem;
        const filter = cart.filter(prod => prod.id !== productId);
        setCart(filter);
    }


    return (
        <Context.Provider value={{ 
            cart, 
            addItem,
            clearCart,
            getQuantity,
            removeItem,
            
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context