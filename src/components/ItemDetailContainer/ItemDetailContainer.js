import ItemDetail from "../ItemDetail/ItemDetail"
import { useState, useEffect } from "react";
// import { getProductById } from "../../asyncMock";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase/firebaseConfig";
import { getDoc, doc } from "firebase/firestore";


function ItemDetailContainer() {
  const [product, setProduct] = useState()
  const [loading, setLoading] = useState(true)

  const { productId } = useParams()
  

  useEffect(() => {
    const docRef = doc(db, 'products', productId)
    getDoc(docRef).then(doc => {
      const dataProduct = doc.data()
      const productsAdapted = { id: doc.id, ...dataProduct}
      setProduct(productsAdapted) 
    })
    .catch(error => {
      console.log(error)
    })
    .finally(() => {
          setLoading(false)
      })
  }, [productId])





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