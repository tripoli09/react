

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 600)
    })}

    export const getProductsByCategory = (categoriaId) =>{
        return new Promise((resolve)=>{
        setTimeout(() =>{
            categoriaId ? resolve(products.filter(prod => prod.categoria === categoriaId)) : resolve(products)
        },600)
    })
    }

    export const getProductById = (productoId) =>{
        return new Promise((resolve)=>{
        setTimeout(() =>{
            resolve(products.find(prod => prod.id === parseInt(productoId)))
        },600)
    })
    }

    