import { createContext, useState } from "react";

const Context = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [dataFormName, setDataFormName] = useState("")
    const [dataFormAdress, setDataFormAdress] = useState("")
    const [dataFormPhone, setDataFormPhone] = useState("")
    const [dataFormZip, setDataFormZip] = useState("")
    const [dataFormEmail, setDataFormEmail] = useState("")
    const [buttonState, setButtonState] = useState(true)
    const [dataTextArea, setDataTextArea] = useState("")

    const addDataForm = () =>{

    }

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
     
    const total = () => {
        let totalPrice = 0
        for ( let i = 0; i < cart.length; i++){
            totalPrice = totalPrice + cart[i].precio * cart[i].cantidad
            console.log(cart[i])
            
        }
        return totalPrice
    }

    return (
        <Context.Provider value={{ 
            cart, 
            addItem,
            clearCart,
            getQuantity,
            removeItem,
            total,
            dataFormName, setDataFormName,dataFormAdress, setDataFormAdress,
             dataFormPhone, setDataFormPhone,dataFormEmail, setDataFormEmail,
             dataFormZip, setDataFormZip,buttonState, setButtonState,dataTextArea,
             setDataTextArea
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context