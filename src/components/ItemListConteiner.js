import Item from './Item';
import { getProducts } from './Productos';
import { useState, useEffect } from 'react';
import './style/itemListConteiner.css'






const ItemListConteiner = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
      getProducts().then(response => {
          setProducts(response)
      })
  }, [])

  console.log(products)
  return(
      <div className='itemListConteiner'>
              {products.map(product => <ul key={product.id}><Item id={product.id} titulo={product.titulo} 
              descripcion={product.descripcion} precio={product.precio}
              stock={product.stock}  categoria={product.categoria} /> </ul>)} 
          
          
      </div>

  )
}

export default ItemListConteiner;