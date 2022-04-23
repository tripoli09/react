export const createAdaptedCategory = (doc) => {
    const data = doc.data()

    const formattedCategory = {
        id: doc.id,
        descripcion: data.descripcion,
        order: data.order
    }

    return formattedCategory
}