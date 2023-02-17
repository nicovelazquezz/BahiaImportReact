import { getDoc, doc, getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const getProducts = (categoryId) => {
    return new Promise((resolve, reject)=>{
        // Para filtrar se utiliza query, indica que tiene condiciones la busqueda, y where establecemos esas condiciones
        const collectionRef = categoryId 
        ? query(collection(db, 'products'), where('category', '==', categoryId))        
        : collection(db, 'products')

        getDocs(collectionRef).then(response => {
            const productsAdapted = response.docs.map( doc => {
                const data = doc.data()
                return { id: doc.id, ...data }
            })

            resolve(productsAdapted)
        }).catch(error => {
            reject(error)
        })
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve, reject) => {
        const docRef = doc(db, 'products', productId)
        getDoc(docRef).then(doc => {
            const dataProduct = doc.data()
            const productsAdapted = { id: doc.id, ...dataProduct}
            
            resolve(productsAdapted) 
        }).catch(error => {
            reject(error)
        })
    })
}