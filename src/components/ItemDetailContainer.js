
import React from 'react';
import ItemDetail from './ItemDetail';
import { getProductById} from './Productos';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';






    const ItemDetailContainer = () => {
        const [products, setProducts] = useState([])

        const {productoId} = useParams()
       

        useEffect(() => {
            getProductById(productoId).then(prod => {
                setProducts(prod)
            })
        }, [])

     
        
       
        return(
            <div>
                 <ItemDetail  id={products.id} titulo={products.titulo} 
                    descripcion={products.descripcion} precio={products.precio}
                    stock={products.stock}  categoria={products.categoria}/>
            </div>
      
        )
      }

export default ItemDetailContainer;