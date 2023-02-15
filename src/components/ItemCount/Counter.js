import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

function Counter(stock) {

    const { count, setCount, decrement, increment } = useContext(CartContext)

    return (
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

        <input value={count} onChange={e => setCount(e.target.value)} className="w-16 h-full text-center outline-none"></input>

        { count >= stock.stock ? 
        <button disabled className='p-4 opacity-25'>
            <FontAwesomeIcon icon={faMinusCircle}/>
        </button> 
            : 
        <button className='p-4' onClick={increment}>
            <FontAwesomeIcon icon={faPlusCircle}/>
        </button>
        }
    </div> 
    )
    }

export default Counter