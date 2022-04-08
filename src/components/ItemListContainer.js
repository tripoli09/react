import ItemList from './ItemList';
import { getProducts, getProductsByCategory } from './Productos';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './style/ItemListContainer.css'



const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const {categoriaId} = useParams()

  
useEffect(() => {
if(categoriaId){
        getProductsByCategory(categoriaId).then(items => {
            setProducts(items)
        })
}else{
    getProducts().then(response => {
        setProducts(response)
    })
}
return (() => {
    setProducts([])
})          
}, [categoriaId])


 
  return(
      <div className='ItemListContainer'>
              <ItemList products={products}/>
          
          
      </div>

  )
}

export default ItemListContainer;