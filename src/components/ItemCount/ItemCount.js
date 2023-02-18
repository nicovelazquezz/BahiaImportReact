import { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { useNavigate } from "react-router-dom";
import Counter from './Counter'



function ItemCount({ stock, product }) {  
  
  const [ goToCart, setGoToCart ]= useState(false)
  
  const { setCart, setCount, cart, agregarProductoAlCarrito } = useContext(CartContext);
  
  const navigate = useNavigate();

  const agregarProducto = () => {
    agregarProductoAlCarrito(product, cart, setCart);
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
              <button onClick={ () => {setGoToCart(true); agregarProducto(product, cart, setCart)} } className='py-4 text-sm font-bold text-white uppercase bg-violet-500 rounded-sm px-14 hover:bg-violet-700'>
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