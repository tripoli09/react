import ItemList from './ItemList';
import { getProducts, getProductsByCategory } from './Productos';
import { useState, useEffect } from 'react';
import './style/itemListConteiner.css'
import { useParams } from 'react-router-dom';






const ItemListConteiner = () => {
  const [products, setProducts] = useState([])
  const {categoriaId} = useParams()

console.log("hola"+ categoriaId)
  
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


  console.log(products)
  return(
      <div className='itemListConteiner'>
              <ItemList products={products}/>
          
          
      </div>

  )
}

export default ItemListConteiner;