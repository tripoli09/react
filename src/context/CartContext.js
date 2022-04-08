import { createContext, useState } from "react";

const Context = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (producto, cantidad) => {
        const objItemCart = {
            ...producto,
            cantidad
        }
        
        setCart([...cart, objItemCart ])
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

    return (
        <Context.Provider value={{ 
            cart, 
            addItem,
            clearCart,
            getQuantity
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context
/*import {createContext, useState} from "react";

     const Context = createContext();

    export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (producto, cantidad)=> {
        const objItemCart = {
            ...producto,
            cantidad
        }
        setCart([...cart, objItemCart]);
        console.log(cart)
    }

    const clearCart = () => {
        setCart([]);
    }

    const getQuantity = () => {
        let count = 0
        cart.forEach(prod => {
            count = parseInt(count + prod.c)
        })

        return count
    }

    return (
        <Context.Provider value={{ 
            cart, 
            addItem,
            clearCart,
            getQuantity
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context;*/