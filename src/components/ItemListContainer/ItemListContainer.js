// import { getProducts, getProductsByCategory } from "../../asyncMock";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase/firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";


function ItemListContainer({greeting}) {
    const [products, setProducts] = useState([]);

    const { categoryId } = useParams();
    
    
    useEffect(() => {
        // Para filtrar se utiliza query, indica que tiene condiciones la busqueda, y where establecemos esas condiciones
        const collectionRef = categoryId 
        ? query(collection(db, 'products'), where('category', '==', categoryId))        
        : collection(db, 'products')

        getDocs(collectionRef).then(response => {
            const productsAdapted = response.docs.map( doc => {
                const data = doc.data()
                return { id: doc.id, ...data }
            })

            setProducts(productsAdapted)
        }).catch(
            console.log('no se pudieron cargar los productos')
        )



        // const asyncFunction = categoryId ? getProductsByCategory : getProducts
        
        // asyncFunction(categoryId)
        //     .then(products => {
        //         setProducts(products)
        //         })
        //     .catch(error => {
        //             console.log(error)
        //         })
    }, [categoryId])

    
    

    return (
        <>
            <h3 className="font-bold text-2xl p-3 text-center text-gray-500 bg-gray-800">{ greeting }</h3>            
            <ItemList products={products}/>
        </>
    )
}

export default ItemListContainer