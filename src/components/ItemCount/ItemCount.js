import { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { useNavigate } from "react-router-dom";
import Counter from './Counter'
import { addNotification } from '../../alerts/alerts';


function ItemCount({ stock, product }) {
  
  const { name, price, id, img, category} = product
  
  const [ goToCart, setGoToCart ]= useState(false)
  
  const { quantity, setCart, setCount, cart, count } = useContext(CartContext);
  
  const navigate = useNavigate();

  
  const agregarProductoAlCarrito = (product, cart, setCart) => {
    // Verificar si el producto ya existe en el carrito
    const productoExistente = cart.find((prod) => prod.id === product.id);

    addNotification()
  
    if (productoExistente) {
      // Si el producto ya está en el carrito, actualizar su cantidad
      const newCart = cart.map((prod) => {
        if (prod.id === product.id) {
          return { ...prod, quantity: prod.quantity + count };
        } else {
          return prod;
        }
      });  
      setCart(newCart);      
    } else {
      // Si el producto no está en el carrito, agregarlo
      setCart(prev => [...prev, {name, price, id, quantity, img, category}])    
      setCount(1)  
    }
  }

  
  const handleFinish = () => {
    console.log('si')
  }

  useEffect(() => {
    setCount(1);
  }, [navigate]); // eslint-disable-line

  return (
    <>
      <div className='flex space-x-6 pt-9'>
        { !goToCart 
          ? 
            <>
              <Counter 
                stock={stock}        
              />
              <button onClick={ () => {setGoToCart(true); agregarProductoAlCarrito(product, cart, setCart)} } className='py-4 text-sm font-bold text-white uppercase bg-violet-500 rounded-sm px-14 hover:bg-violet-700'>
                  Agregar al carrito
              </button>    
            </>
          : 
          <div className='w-full'>
            <Link to='/cart'>
              <button onClick={handleFinish} className='py-4 w-full text-m font-bold text-white uppercase bg-green-500 rounded-sm px-14 hover:bg-green-700'>
                  Finalizar Compra
              </button>          
            </Link>
            <Link to='/'>
              <button className="uppercase border-widh w-full mt-4 rounded-sm border border-gray-800 py-4 px-14 text-sm font-bold text-gray-800 hover:bg-gray-800 hover:text-white">
                Continuar Comprando
              </button>          
            </Link>
          </div>
        }    
      </div>  
      
    </>
  )
}

export default ItemCount