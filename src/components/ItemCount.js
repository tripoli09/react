import { useState, useEffect } from 'react'
import './style/ItemCount.css'

const ItemCount = ({initial=0 , stock , addOn}) => {
    
    const [count, setCount] = useState(initial)
    
    useEffect(() => {
        return(() => {
            setCount()
        })
    }, [])
    


    const increment = () => {
        if(count<stock){
            setCount(parseInt(count + 1))//sin el parseInt concatena el +1 (01 011)
        }
        
    }

    const decrement = () => {
        if(count>0){
            setCount(count - 1)
        }
        
    }


    return(
        <div >
            <div className='itemCount'>
                <button className="botonChico myButton" onClick={decrement}>-</button>
                <p className="contador" >{count}</p>
                <button className="botonChico myButton" onClick={increment}>+</button>
            </div>
            
            <button onClick={() => addOn(count)} href="#" variant="primary" className='myButton'>Añadir al carrito</button>
        </div>
    )
}

export default ItemCount