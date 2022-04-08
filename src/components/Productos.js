const products = [
    { 
        id: 1, 
        titulo: 'producto 1', 
        descripcion: "descripcion 1", 
        precio: 58,
        stock: 10,
        categoria: 'pantalon'
        
    },
    { 
        id: 2, 
        titulo: 'producto 2', 
        descripcion: "descripcion 2", 
        precio: 75,
        stock: 30,
        categoria: 'pantalon'
        
    },
    { 
        id: 3, 
        titulo: 'producto 3', 
        descripcion: "descripcion 3", 
        precio: 50,
        stock: 29,
        categoria: 'remera'
        
    },
    { 
        id: 4, 
        titulo: 'producto 5', 
        descripcion: "descripcion 5", 
        precio: 58,
        stock: 10,
        categoria: 'pantalon'
        
    },
    { 
        id: 5, 
        titulo: 'producto 5', 
        descripcion: "descripcion 5", 
        precio: 75,
        stock: 30,
        categoria: 'remera'
        
    },
    { 
        id: 6, 
        titulo: 'producto 6', 
        descripcion: "descripcion 6", 
        precio: 50,
        stock: 29,
        urlimg: './img/img1.jpg',
        categoria: 'media'
        
    },
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })}

    export const getProductsByCategory = (categoriaId) =>{
        return new Promise((resolve)=>{
        setTimeout(() =>{
            categoriaId ? resolve(products.filter(prod => prod.categoria === categoriaId)) : resolve(products)
        },2000)
    })
    }

    export const getProductById = (productoId) =>{
        return new Promise((resolve)=>{
        setTimeout(() =>{
            resolve(products.find(prod => prod.id === parseInt(productoId)))
        },2000)
    })
    }

    