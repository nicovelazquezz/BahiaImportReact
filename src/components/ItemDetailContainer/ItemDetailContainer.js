import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";
import { getProductsById } from "../../services/firebase/firestore/products";
import { useTitle }  from '../../hooks/useTitle'
import { useAsync } from "../../hooks/useAsync";
import Spinner from "../../alerts/Spinner";


function ItemDetailContainer() {

  const { productId } = useParams()
  const getProductsWithId = () => getProductsById(productId)    
  const { data: product, error, loading } = useAsync(getProductsWithId, [productId])
  
  useTitle('Bahia import', [productId]);

  if(error) {
      return <h1>Hubo un error al cargar los productos.</h1>
    }

  if (loading) {
    return <Spinner/>
  }

  return (
    <ItemDetail 
      product={product}    
    />
  )
}

export default ItemDetailContainer