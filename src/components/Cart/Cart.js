import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

function Cart() {

  const { cart, total } = useContext(CartContext)

  if(cart.length === 0)
  {
    return (
      <h1>No hay productos en el carrito</h1>
    )
  }

  return (
    <>
        { cart.map( prod => (
          <div key={prod.id}>
            <table className="u-full-width">
                <thead>
                  <tr>                
                    <th>{prod.name}</th>
                    <th>{prod.price}</th>
                    <th>{total}</th>
                    <th></th>
                  </tr>
                </thead>
            
            </table>
          </div>
        ))
        }

        <Link to='/checkout'>Checkout</Link>
    </>
  )
}

export default Cart