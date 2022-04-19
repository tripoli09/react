
import React from 'react';
import ItemDetail from './ItemDetail';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './style/ItemDetailContainer.css';
import { firestoreDb } from './services/firebase';
import { getDoc, doc } from 'firebase/firestore';



const ItemDetailContainer = ({addToCart, cart}) => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productoId } = useParams()

    useEffect(() => {
        setLoading(true)


        const docRef = doc(firestoreDb, 'products', productoId)

        getDoc(docRef).then(querySnapshot => {
            const product = { id: querySnapshot.id, ...querySnapshot.data() }
            setProduct(product)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

    }, [productoId])
    

    if(loading) {
        return <h1>Cargando...</h1>
    }

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...product} addToCart={addToCart} cart={cart}/>
            
        </div>
    )
}

export default ItemDetailContainer;