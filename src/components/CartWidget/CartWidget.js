function CartWidget({totalQuantity}) {
    return (
        <>
            <img className="mr-4" src="https://i.ibb.co/JcPsZKQ/cart.png" alt="logo" /> <p className="text-xl">{totalQuantity}</p> 
        </>        
    )
}

export default CartWidget