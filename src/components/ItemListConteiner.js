
import React from 'react';
import Item from './Item';
import Productos from "./Productos"
import { getProducts } from './Productos';
import { useState, useEffect } from 'react';
import './style/itemListConteiner.css'




const ItemListConteiner = ({ greeting }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
      getProducts().then(response => {
          setProducts(response)
      })
  }, [])

  console.log(products)
  return(
      <div className='itemListConteiner'>
          <h1>{greeting}</h1>
          <ul>
              {products.map(product => <Item id={product.id} titulo={product.titulo} 
              descripcion={product.descripcion} precio={product.precio}
              stock={product.stock}/>)} 
          </ul>
      </div>

  )
}
// falta poner key a <item/> ¿donde ponerla? 

export default ItemListConteiner;