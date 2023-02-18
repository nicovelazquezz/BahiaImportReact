import ItemList from "../ItemList/ItemList";
import Spinner from "../../alerts/Spinner";
import { useParams } from "react-router-dom";
import { useAsync } from "../../hooks/useAsync";
import { useTitle }  from '../../hooks/useTitle'
import { getProducts } from "../../services/firebase/firestore/products";



function ItemListContainer({greeting}) {
    
    const { categoryId } = useParams();
    
    const getProductsWithCategory = () => getProducts(categoryId)    
    
    // Estoy renombrando data como products
    const { data: products, error, loading } = useAsync(getProductsWithCategory, [categoryId])
    
    const defaultCategoryId = ''; // Valor predeterminado para categoryId si es nulo
    const categoryIdToUse = categoryId ? " - " + categoryId : defaultCategoryId;

    useTitle('Bahia import' + categoryIdToUse, [categoryIdToUse]);

    if(loading) {        
        return <>
            <h3 className="font-bold text-2xl p-3 text-center text-gray-500 bg-gray-800">{ greeting }</h3>            
            <Spinner/>
        </>
    }

    if(error) {
        return <h1>Hubo un error al cargar los productos.</h1>
    }

    return (
        <>
            <h3 className="font-bold text-2xl p-3 text-center text-gray-500 bg-gray-800">{ greeting }</h3>            
            <ItemList products={products}/>
        </>
    )
}

export default ItemListContainer