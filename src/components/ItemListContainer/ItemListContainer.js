// import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { useAsync } from "../../hooks/useAsync";
import { getProducts } from "../../services/firebase/firestore/products";


function ItemListContainer({greeting}) {
    const { categoryId } = useParams();

    const getProductsWithCategory = () => getProducts(categoryId)    

    // Estoy renombrando data como products
    const { data: products, error, loading } = useAsync(getProductsWithCategory, [categoryId])

    if(loading) {
        return <h1>Cargando productos...</h1>
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