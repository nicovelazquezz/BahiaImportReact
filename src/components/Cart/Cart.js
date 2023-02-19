import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCart from "./ItemCart";

function Cart() {
  const { setCart, cart, clearCart, total } = useContext(CartContext);
  const [envio, setEnvio] = useState(0);

  const handlerEnvio = (e) => {
    setEnvio(Number(e.target.value));
  };

  const eliminarProducto = (idProductoAEliminar) => {
    const newCart = cart.filter((prod) => prod.id !== idProductoAEliminar);
    setCart(newCart);
  };
  
  if(cart.length === 0){
    setTimeout(() => {
      window.location.href = '/';                
  }, 1000);
  }

  return (
    <>
      <div className="container mx-auto mt-10">
        <div className="flex shadow-md my-10">
          <div className="w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Carrito de Compras</h1>
              <h2 className="font-semibold text-2xl">
                {cart.length === 1 ? "Un producto" : cart.length + " Productos"}
              </h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Detalles del Producto
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                Cantidad
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                Precio
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                Total
              </h3>
            </div>

            {cart.map((prod) => (
              <ItemCart
                prod={prod}
                key={prod.id}
                eliminarProducto={eliminarProducto}
              />
            ))}

            <div className="mt-5 flex justify-between">
              <Link
                to="/"
                className="flex p-1 font-semibold border border-indigo-500 rounded-md border-opacity-50 text-indigo-500 text-sm mt-7 hover:text-indigo-600"
              >
                Continuar Comprando
              </Link>
              <button
                onClick={clearCart}
                className="bg-red-500 hover:bg-red-600 px-4 text-sm text-white uppercase"
              >
                Limpiar Carrito
              </button>
            </div>
          </div>

          <div id="summary" className="w-1/4 px-8 py-10">
            <h1 className="font-semibold text-2xl border-b pb-8">
              Resumen del pedido
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">
                Items {cart.length}
              </span>
              
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">
                Forma de envio
              </label>
              <select
                onChange={handlerEnvio}
                className="block p-2 text-gray-600 w-full text-sm"
              >
                <option value={0}>Retiro en tienda - Gratis</option>
                <option value={10}>Envío Estándar - $10.00</option>
                <option value={25}>Envío Prioritario - $25.00</option>
              </select>
            </div>

            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Costo Total</span>
                <span>${total + envio}</span>
              </div>
              <Link to="/checkout">
                <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                  COMPRAR
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
