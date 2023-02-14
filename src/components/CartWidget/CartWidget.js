import { Link } from "react-router-dom"

function CartWidget({totalQuantity}) {
    return (
        <>
            <Link to='/cart'>
                <img className="mr-4" src="https://i.ibb.co/JcPsZKQ/cart.png" alt="logo" /> <p className="text-xl">{totalQuantity}</p> 
            </Link>
        </>        
    )
}

export default CartWidget