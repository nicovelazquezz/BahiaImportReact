import { Link } from "react-router-dom"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function CartWidget({totalQuantity}) {

    const { cart } = useContext(CartContext);

    const cartLinkClass = cart.length === 0 ? 'pointer-events-none opacity-30 cursor-not-allowed' : '';
    const quantityClass = totalQuantity === 0 ? 'hidden' : '';

    return (        
        <>
            <Link to='/cart' className={"w-20 flex " + cartLinkClass}>
                <img className="mr-4" src="https://i.ibb.co/JcPsZKQ/cart.png" alt="logo" /> 
                <p className={"text-2xl text-white "+quantityClass}>{totalQuantity}</p> 
            </Link>
        </>        
    )
}

export default CartWidget