import { getProducts, getProductsByCategory } from "../../asyncMock";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


function ItemListContainer({greeting}) {
    const [products, setProducts] = useState([]);

    const { categoryId } = useParams();
    
    
    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts
        
        asyncFunction(categoryId)
            .then(products => {
                setProducts(products)
                })
            .catch(error => {
                    console.log(error)
                })
    }, [categoryId])

    
    

    return (
        <>
            <h3 className="font-bold text-2xl p-3 text-center text-gray-500 bg-gray-800">{ greeting }</h3>            
            <ItemList products={products}/>
        </>
    )
}

export default ItemListContainer