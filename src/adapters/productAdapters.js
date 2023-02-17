export const AdaptedProductFromFirestore = (doc) => {
    const data = doc.data()

    const productAdapted = {
        id: doc.id,
        name: data.name,
        img: data.img,
        full: data.full,
        price: data.price,
        category: data.category,
        description: data.description
    }

    return productAdapted
}

