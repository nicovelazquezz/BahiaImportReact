import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function Counter(stock) {

    const [count, setCount] = useState(1)

    const decrement = () => {
        setCount(actual => actual - 1)
    }
    
    const increment = () => {
        setCount(actual => actual + 1)  
    }

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

        <input value={count} type="number" onChange={e => setCount(e.target.value)} className="w-16 h-full text-center outline-none"></input>

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