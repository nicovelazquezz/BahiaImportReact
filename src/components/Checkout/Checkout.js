import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from 'firebase/firestore'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { db } from '../../services/firebase/firebaseConfig'

function Checkout() {

  const [loading, setLoading] = useState(false)
  const { cart, total, clearCart } = useContext(CartContext)
  const [orderId, setOrderId] = useState('')

  const createOrder = async () => {
    setLoading(true)  
    try {
      const objOrder = {
        buyer: {
          name: 'Nicolas Velazquez',
          phone: '2914231087',
          mail: 'nv_velazquez@hotmail.com'
        },
        items: cart,
        total
      }
  
      const batch = writeBatch(db)
  
      const ids = cart.map( prod => prod.id)
      console.log(ids)
  
      const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids)) 
  
      const productsAddedToCartFromFirestore = await getDocs(productsRef)
      const { docs } = productsAddedToCartFromFirestore
  
      const outOfStock = []
  
      docs.forEach(doc => {
        const dataDoc = doc.data()
        const stockDb = dataDoc.stock
  
        const productAddedToCart = cart.find(prod => prod.id === doc.id)
        const prodQuantity = productAddedToCart.quantity
  
        if(stockDb >= prodQuantity){
          batch.update(doc.ref, { stock: stockDb - prodQuantity })
        } else {
            outOfStock.push({id: doc.id, ...dataDoc})
        }
      })
  
      if(outOfStock.length === 0){
        await batch.commit()
        const orderRef = collection(db, 'orders')
        
        const orderAdded = await addDoc(orderRef, objOrder)
  
        const { id } = orderAdded
        setOrderId(id)
        clearCart()
        console.log(id)

      } else {
        console.log('Hay Productos fuera de stock')
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    } 
  }
  
  if (loading) {
    return <h1>Generando orden</h1>
  }

  if (orderId) {
    return (
      <div>
        <h1>El id de su compra es {orderId}</h1>
      </div>)
  }

  return (  
  <>
    <div>
      <button onClick={createOrder}>Finalizar compra </button>
    </div>
  </>


  )
}

export default Checkout