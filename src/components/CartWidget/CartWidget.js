import { Link } from "react-router-dom"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function CartWidget({totalQuantity}) {

    const { cart } = useContext(CartContext);

    const cartLinkClass = cart.length === 0 ? 'pointer-events-none opacity-30 cursor-not-allowed' : '';

    return (        
        <>
            <Link to='/cart' className={cartLinkClass}>
                <img className="mr-4" src="https://i.ibb.co/JcPsZKQ/cart.png" alt="logo" /> <p className="text-xl">{totalQuantity}</p> 
            </Link>
        </>        
    )
}

export default CartWidget