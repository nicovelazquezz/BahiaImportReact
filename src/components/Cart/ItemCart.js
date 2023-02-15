import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";

function ItemCart({ prod, eliminarProducto }) {
    const { price, name, img, category, quantity, id } = prod;

    const { decrement, increment, setCount, count, setQuantity} = useContext(CartContext);
    
    const decrementQua = () => {
        setQuantity(actual => actual - 1)  
        console.log(quantity)
    }
    
    const incrementQua = () => {
        setQuantity(actual => actual + 1) 
        console.log(quantity) 
    }


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
            <div className="flex flex-col justify-between ml-4 flex-grow">
                <span className="font-bold text-sm">{name}</span>
                <span className="text-indigo-600 text-xs">{category}</span>
                <button
                onClick={() => eliminarProducto(prod.id)}
                className="font-semibold hover:text-red-500 text-gray-500 text-xs text-center border border-red-500 rounded-md border-opacity-50 p-1 w-1/4"
                >
                Eliminar
                </button>
            </div>
            </div>
            <div className="flex justify-center w-1/5">
                <button className="p-4" onClick={incrementQua}>
                    <FontAwesomeIcon icon={faPlusCircle} />
                </button>
                <input value={quantity} onChange={(e) => setQuantity(e.target.value)} className="w-16 h-full text-center outline-none"/>
                <button className="p-4" onClick={decrementQua}>
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
