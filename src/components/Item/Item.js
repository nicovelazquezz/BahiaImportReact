import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import { faBinoculars, faCartPlus, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

function Item({prod}) {

    const {name, category, price, img, id} = prod 

    const { agregarProductoAlCarrito } = useContext(CartContext);

    
    return (
        <>
            <div className='product-item mx-auto'>
                <div className="product-img">
                    <img className='block max-w-full h-auto mx-auto' src={img} alt="producto"/>                    
                    <span className = "heart-icon"><FontAwesomeIcon icon={farHeart}></FontAwesomeIcon></span>
					<div className = "btns w-full mx-auto text-center">
                    <button onClick={() => agregarProductoAlCarrito(prod)} type="button" className = "w-2/4 py-2 agregar-carrito">
                        <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon> Agregar al Carrito
                    </button>
                    <Link to={`/item/${id}`}>
                        <button type="button" className = "w-2/4 py-2">
                            <FontAwesomeIcon icon={faBinoculars}></FontAwesomeIcon> Ver detalles
                        </button>              
                    </Link>                    
				</div>
                </div>
                <div className="product-info p-3">
                    <span className="product-type">{category}</span>
                    <p className='d-block text-dark text-decoration-none py-2 font-medium product-name'>{name}</p>
                    <span className="product-price">${price}</span>
                    <div className='flex space-x-px'>
                        <div>
                            <FontAwesomeIcon icon={faStar} color="#eaea00"/>
                            <FontAwesomeIcon icon={faStar} color="#eaea00"/>
                            <FontAwesomeIcon icon={faStar} color="#eaea00"/>
                            <FontAwesomeIcon icon={faStar} color="#eaea00"/>
                            <FontAwesomeIcon icon={faStarHalfAlt} color="#eaea00"/>
                        </div>
                        <div className='pl-2 leading-none'>
                            4.6 / 5.0 <span className='text-gray-800'> (556) </span>
                        </div>
                    </div>
                </div>
            </div>
            

        </>
    )
}

export default Item