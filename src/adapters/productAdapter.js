export const createAdaptedProduct = (doc) => {
    const data = doc.data()

    const formattedProduct = {
        id: doc.id,
        titulo: data.titulo,
        categoria: data.categoria,
        img: data.img,
        precio: data.precio,
        stock: data.stock,
        descripcion: data.descripcion
    }

    return formattedProduct
}