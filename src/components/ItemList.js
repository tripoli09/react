
import React from 'react';
import Item from './Item';
import productos from "./Productos"
import './style/item.css'



        



const ItemList = () => {

    /*const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            const respuesta = 100;
            resolve(console.log(respuesta))
            reject(alert("error"))
            
        }, 2000)
    })

    promesa.then((param) => {
        alert("hola")
    }).catch((error) => {
        console.log("error" + error)
    })*/
  return (
    
    <div >
        <Item id="1" titulo="producto1" descripcion="soy un producto" precio="precio: $58" stock=""/>
        <Item id="2" titulo="producto2" descripcion="soy un producto" precio="precio: $58"/>
        <Item id="3" titulo="producto3" descripcion="soy un producto" precio="precio: $58"/>
        <Item id="4" titulo="producto4" descripcion="soy un producto" precio="precio: $58"/>
    </div>
  );
}

export default ItemList;