import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function ItemCart({ prod, eliminarProducto }) {
    const { price, name, img, category, quantity, id } = prod;

    const { setQuantity, setCart } = useContext(CartContext);

    console.log(category)

    const handleIncrement = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        setCart(prevCart => {
            const updatedCart = prevCart.map(item => {
                if (item.id === id) {
                    return { ...item, quantity: newQuantity };
                }
                return item;
            });
            return updatedCart;
        });
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            setCart(prevCart => {
                const updatedCart = prevCart.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: newQuantity };
                    }
                    return item;
                });
                return updatedCart;
            });
        }
    };



    return (
        <>
        <div
            className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
            key={id}
        >
            <div className="flex w-2/5">
            <div className="w-24">
                <img className="h-24" src={img} alt="23" />
            </div>
            <div className="flex flex-col justify-between ml-4 flex-grow ">
                
                <span className="font-bold text-sm mt-2">{name}</span>
                <span className="text-indigo-600 text-xs mt-1">{category}</span>
                <button
                onClick={() => eliminarProducto(prod.id)}
                className="font-semibold hover:text-red-500 text-gray-500 text-xs text-center border border-red-500 rounded-md border-opacity-50 p-1 w-1/4 mb-3 mt-2"
                >
                Eliminar
                </button>
            </div>
            </div>
            <div className="flex justify-center w-1/5">
                <button className="p-4" onClick={handleIncrement}>
                    <FontAwesomeIcon icon={faPlusCircle} />
                </button>
                <input value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} className="w-16 h-full text-center outline-none mt-3"/>
                <button className="p-4" onClick={handleDecrement}>
                    <FontAwesomeIcon icon={faMinusCircle} />
                </button>
            </div>
            <span className="text-center w-1/5 font-semibold text-sm">
            ${price}
            </span>
            <span className="text-center w-1/5 font-semibold text-sm">
            ${price * quantity}
            </span>
        </div>
        </>
    );
    }

export default ItemCart;
