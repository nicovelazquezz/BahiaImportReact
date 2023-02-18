    import { useContext, useState } from "react";
    import CartWidget from "../CartWidget/CartWidget";
    import { Link } from "react-router-dom";
    import { CartContext } from "../../context/CartContext";

    function CartDropdown() {
    const { cart } = useContext(CartContext);

    return (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
        <div className="py-1">
            {cart.map((product) => (
            <div key={product.id} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <img classname="w-1/2" src={product.img} alt="product-img"/>{product.name} x {product.quantity}
            </div>
            ))}
        </div>
        </div>
    );
    }

    function NavBar() {
        const { totalQuantity } = useContext(CartContext);
        const [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-6">
        <div className="flex items-center flex-shrink-0 text-gray-500 ">
            <Link to="/">
            <span className="font-semibold text-3xl tracking-tight">Bahia Import</span>
            </Link>
        </div>
        <div id="menu" className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow flex justify-center">
            <Link
                to="/category/Cellphone"
                className="block leading-none border rounded px-4 py-2 text-xl mt-4 lg:inline-block mr-4 lg:mt-0 text-gray-500 hover:text-gray-400 hover:bg-gray-600"
            >
                Celulares
            </Link>
            <Link
                to="/category/Watch"
                className="block leading-none border rounded px-4 py-2 text-xl mt-4 lg:inline-block mr-4 lg:mt-0 text-gray-500 hover:text-gray-400 hover:bg-gray-600"
            >
                Smartwatchs
            </Link>
            <Link
                to="/category/Camera"
                className="block leading-none border rounded px-4 py-2 text-xl mt-4 lg:inline-block mr-4 lg:mt-0 text-gray-500 hover:text-gray-400 hover:bg-gray-600"
            >
                Cámaras
            </Link>
            <Link
                to="/category/Earphones"
                className="block leading-none border rounded px-4 py-2 text-xl mt-4 lg:inline-block mr-4 lg:mt-0 text-gray-500 hover:text-gray-400 hover:bg-gray-600"
            >
                Auriculares
            </Link>
            </div>
        </div>
        <div
            className="relative"
            onMouseEnter={() => setIsCartOpen(true)}
            onMouseLeave={() => setIsCartOpen(false)}
        >
            <CartWidget totalQuantity={totalQuantity} />
            {isCartOpen && <CartDropdown />}
        </div>
        </nav>
    );
    }

    export default NavBar

