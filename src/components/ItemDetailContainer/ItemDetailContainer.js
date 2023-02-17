import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";
import { getProductsById } from "../../services/firebase/firestore/products";
import { useTitle }  from '../../hooks/useTitle'
import { useAsync } from "../../hooks/useAsync";


function ItemDetailContainer() {

  const { productId } = useParams()
  const getProductsWithId = () => getProductsById(productId)    
  const { data: product, error, loading } = useAsync(getProductsWithId, [productId])
  
  useTitle('Bahia import', [productId]);

  if(error) {
      return <h1>Hubo un error al cargar los productos.</h1>
    }

  if (loading) {
    return <div className="block rounded bg-green-500 text-center text-3xl mx-3 mt-2 pt-1 pb-2 text-gray-200">Cargando...</div>
  }

  return (
    <ItemDetail 
      product={product}    
    />
  )
}

export default ItemDetailContainer