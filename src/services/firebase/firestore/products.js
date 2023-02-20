import { getDoc, doc, getDocs, collection, query, where } from "firebase/firestore";
import { AdaptedProductFromFirestore } from "../../../adapters/productAdapters";
import { db } from "../firebaseConfig";

export const getProducts = (categoryId) => {
    return new Promise((resolve, reject)=>{
        // Para filtrar se utiliza query, indica que tiene condiciones la busqueda, y where establecemos esas condiciones
        const collectionRef = categoryId 
        ? query(collection(db, 'products'), where('category', '==', categoryId))        
        : collection(db, 'products')

        getDocs(collectionRef).then(response => {
            const productsAdapted = response.docs.map( doc => {
                return AdaptedProductFromFirestore(doc)
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
            const productsAdapted = AdaptedProductFromFirestore(doc)
                        
            resolve(productsAdapted) 
        }).catch(error => {
            reject(error)
        })
    })
}