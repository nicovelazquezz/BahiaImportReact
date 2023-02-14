import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

function Cart() {

  const { cart, total } = useContext(CartContext)

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