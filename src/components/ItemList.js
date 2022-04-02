
import Item from './Item';
import productos from "./Productos"
import { getProducts } from './Productos';
import { useState, useEffect } from 'react';
import './style/item.css'


const ItemList = () => {
    const [products, setProducts] = useState([])

  useEffect(() => {
      getProducts().then(response => {
          setProducts(response)
      })
  }, [])
   
  return (
    
    <div >
          <ul>
             {products.map(product => <Item key={product.id} product={product}/>)} 
          </ul>
      </div>
  );
}

export default ItemList;