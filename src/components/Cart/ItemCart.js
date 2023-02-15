import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function ItemCart({ prod, eliminarProducto }) {
    const { price, name, img, category, quantity, id } = prod;
    const { total } = useContext(CartContext);

    return (
        <>
        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5" key={id}>
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
            <input
                className="mx-2 border text-center w-8"
                type="text"
                value={quantity}
            />
            </div>
            <span className="text-center w-1/5 font-semibold text-sm">
            ${price}
            </span>
            <span className="text-center w-1/5 font-semibold text-sm">
            ${total}
            </span>
        </div>
        </>
    );
}

export default ItemCart;
