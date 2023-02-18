import { createContext } from "react"
import { useState, useEffect } from "react"
import { limpiarCarritoAlert } from "../alerts/alerts"
import { addNotification } from "../alerts/alerts"

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

    const getTotal = () => {
        let total = 0;
        
        cart.forEach(prod => 
            total += prod.quantity * prod.price )
        return total;
    }

    const totalQuantity = getTotalQuantity()
    const total = getTotal()

    const clearCart = () => {    
        limpiarCarritoAlert(setCart);
    };

        
    const agregarProductoAlCarrito = (product) => {
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
        setCart(prev => [...prev, { ...product, quantity: count }])    
        setCount(1)  
    }
    }
        


    return (
        <CartContext.Provider value={{quantity, setQuantity, count, setCount, decrement, increment, setCart, cart, totalQuantity, total, clearCart, agregarProductoAlCarrito}}>
            {children}
        </CartContext.Provider>
        
    )
}



