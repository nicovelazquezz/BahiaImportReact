import CartWidget from "../CartWidget/CartWidget"

function NavBar() {
    return (
        <nav>
            <img src="./images/logo.jpg" alt="bahia import logo"/>
            <h1>BAHIA IMPORT</h1>
            <div>
                <button>Productos</button>
                <button>Contacto</button>
                <button>Nosotros</button>
            </div>
            <CartWidget/>
        </nav>
    )
    }

export default NavBar

