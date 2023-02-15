import {
  collection,
  query,
  where,
  documentId,
  getDocs,
  writeBatch,
  addDoc,
} from "firebase/firestore";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { db } from "../../services/firebase/firebaseConfig";

function Checkout() {
  const [loading, setLoading] = useState(false);
  const { cart, total, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState("");

  const navigate = useNavigate();

  const createOrder = async (name, phone, email) => {
    setLoading(true);
    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cart,
        total,
      };

      const batch = writeBatch(db);

      const ids = cart.map((prod) => prod.id);

      const productsRef = query(
        collection(db, "products"),
        where(documentId(), "in", ids)
      );

      const productsAddedToCartFromFirestore = await getDocs(productsRef);
      const { docs } = productsAddedToCartFromFirestore;

      const outOfStock = [];

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();
        const orderRef = collection(db, "orders");

        const orderAdded = await addDoc(orderRef, objOrder);

        const { id } = orderAdded;

        setOrderId(id);

        clearCart();

        setTimeout(() => {
          navigate("/");
        }, 5000);
      } else {
        console.log("Hay Productos fuera de stock");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Generando orden</h1>;
  }

  if (orderId) {
    return (
      <div>
        <h1>El id de su compra es {orderId}</h1>
      </div>
    );
  }

  return (
    <>
      <div>
        <div className="min-h-screen p-4 bg-gray-200 leading-loose">
          <div className="flex justify-center">
            <form className="max-w-lg m-6 p-4 bg-white rounded shadow-xl w-1/2">
              <p className="text-gray-800 font-semibold pb-2 text-center">
                Formulario de compra
              </p>
              <div className="">
                <label className="block text-sm text-gray-600 p-1" for="name">
                  Nombre
                </label>
                <input
                  className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                  id="name"
                  name="name"
                  type="text"
                  required=""
                  placeholder="Ingresá tu nombre"
                  aria-label="Name"
                />
              </div>
              <div className="mt-2">
                <label className="block text-sm text-gray-600 p-1" for="email">
                  Email
                </label>
                <input
                  className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                  id="email"
                  name="email"
                  type="text"
                  required=""
                  placeholder="Ingresá tu email"
                  aria-label="Email"
                />
              </div>
              <div className="mt-2">
                <label className=" block text-sm text-gray-600 p-1" for="email">
                  Dirección
                </label>
                <input
                  className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                  id="email"
                  name="email"
                  type="text"
                  required=""
                  placeholder="Direccíon"
                  aria-label="Email"
                />
              </div>
              <div className="mt-2">
                <label className=" text-sm block text-gray-600 p-1" for="email">
                  Ciudad
                </label>
                <input
                  className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                  id="email"
                  name="email"
                  type="text"
                  required=""
                  placeholder="Ciudad"
                  aria-label="Email"
                />
              </div>
              <div className="inline-block mt-2 w-1/2 pr-1">
                <label className=" block text-sm text-gray-600 p-1" for="email">
                  País
                </label>
                <input
                  className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                  id="email"
                  name="email"
                  type="text"
                  required=""
                  placeholder="País"
                  aria-label="Email"
                />
              </div>
              <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                <label className=" block text-sm text-gray-600 p-1" for="email">
                  Código postal
                </label>
                <input
                  className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                  id="email"
                  name="email"
                  type="text"
                  required=""
                  placeholder="Código postal"
                  aria-label="Email"
                />
              </div>
              <p className="mt-4 text-gray-800 font-medium">
                Información de pago
              </p>
              <div>
                <label className="block text-sm text-gray-600 p-1" for="name">
                  Tarjeta
                </label>
                <input
                  className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                  id="name"
                  name="name"
                  type="text"
                  required=""
                  placeholder="Número de tarjeta MM/AA CVC"
                  aria-label="Name"
                />
              </div>
              <div className="mt-4 flex">
                <button
                  className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded uppercase"
                  type="submit"
                >
                  Pagar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
