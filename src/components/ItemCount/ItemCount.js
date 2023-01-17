import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

function ItemCount({stock}) {

  const [count, setCount] = useState(1)

  const decrement = () => {
    setCount(actual => actual - 1)
  }

  const increment = () => {
    setCount(actual => actual + 1)  
  }


  return (
    <>
      <div className='flex space-x-6 pt-9'>
        <div className="flex items-center border rounded-sm border-gray-900/30">

          { count <= 1 ? 
            <button disabled className='p-4 opacity-25'>
                <FontAwesomeIcon icon={faMinusCircle}/>
            </button> 
              : 
            <button className='p-4' onClick={decrement}>
                <FontAwesomeIcon icon={faMinusCircle}/>
            </button>      
          }
          
            <input value={count} type="text" className="w-16 h-full text-center outline-none"></input>

            
          { count >= stock ? 
            <button disabled className='p-4 opacity-25'>
                <FontAwesomeIcon icon={faMinusCircle}/>
            </button> 
              : 
            <button className='p-4' onClick={increment}>
                <FontAwesomeIcon icon={faPlusCircle}/>
            </button>
          }

        </div>
        <button className='py-4 text-sm font-bold text-white uppercase bg-violet-500 rounded-sm px-14 hover:bg-violet-700'>
            Agregar al carrito
        </button>
      </div>
    </>
  )
}

export default ItemCount