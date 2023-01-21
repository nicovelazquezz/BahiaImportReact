import { useState } from 'react'
import { Link } from 'react-router-dom'
import Counter from './Counter'


function ItemCount({stock}) {

  const [goToCart, setGoToCart ]= useState(false)

  return (
    <>
      <div className='flex space-x-6 pt-9'>
        { !goToCart 
          ? 
            <>
              <Counter 
                stock={stock}        
              />
              <button onClick={ () => setGoToCart(true) } className='py-4 text-sm font-bold text-white uppercase bg-violet-500 rounded-sm px-14 hover:bg-violet-700'>
                  Agregar al carrito
              </button>    
            </>
          : 
          <div className='w-full'>
            <Link to='/cart'>
              <button className='py-4 w-full text-m font-bold text-white uppercase bg-green-500 rounded-sm px-14 hover:bg-green-700'>
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