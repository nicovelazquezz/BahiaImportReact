import { createContext } from "react"
import { useState, useEffect } from "react"

export const CartContext = createContext()

export function CartProvider({children}) {

    const [quantity, setQuantity] = useState(0)

    // Setea el producto para utilizar en cart
    const [cart, setCart] = useState([])

    // Contador
    const [count, setCount] = useState(1)

    const decrement = () => {
        setCount(actual => actual - 1)
    }
    
    const increment = () => {
        setCount(actual => actual + 1)  
    }

    useEffect(() => {
        setQuantity(count)
    }, [count])
    
    
    const getTotalQuantity = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.quantity
        })

        return accu
    }

    const totalQuantity = getTotalQuantity()


    return (
        <CartContext.Provider value={{quantity, setQuantity, count, setCount, decrement, increment, setCart, cart, totalQuantity}}>
            {children}
        </CartContext.Provider>
        
    )
}



