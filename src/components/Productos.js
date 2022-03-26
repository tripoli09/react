const products = [
    { 
        id: 1, 
        titulo: 'producto 1', 
        descripcion: "descripcion 1", 
        precio: 58,
        stock: 10
        
    },
    { 
        id: 2, 
        titulo: 'producto 2', 
        descripcion: "descripcion 2", 
        precio: 75,
        stock: 30
        
    },
    { 
        id: 3, 
        titulo: 'producto 3', 
        descripcion: "descripcion 3", 
        precio: 50,
        stock: 29
        
    },
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}