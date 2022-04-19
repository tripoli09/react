import ItemList from './ItemList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './style/ItemListContainer.css';
import {firestoreDb} from './services/firebase';
import {getDocs, collection, query, where, limit} from 'firebase/firestore'


const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const {categoriaId} = useParams()


  useEffect(() => {
    setLoading(true)

  const collectionRef = categoriaId
  ? query(collection(firestoreDb, 'products'), where('categoria', '==', categoriaId), limit(100))
  : collection(firestoreDb, 'products')

  getDocs(collectionRef).then(querySnapshot => {
            console.log(querySnapshot.size)
            const products = querySnapshot.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            setProducts(products)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setProducts([])
        })          
    }, [categoriaId])


 
return (
    <div className="ItemListContainer" >
        {
            loading ? 
                <h1>Cargando...</h1> :  
            products.length > 0 ? 
                <ItemList products={products}/> : 
                <h1>No se encontraron productos!</h1>
        }
    </div>
)    

}

export default ItemListContainer;