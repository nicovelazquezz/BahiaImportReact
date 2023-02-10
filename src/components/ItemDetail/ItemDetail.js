import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import { faArrowLeft, faStar, faStarHalfAlt, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail({product}) {

    const { name, category, price, full, description, stock } = product;

    return (
        <main className='pt-10 pb-12 pl-20'>
            <Link to='/'>
                <button className='pl-56'>
                        <FontAwesomeIcon icon={faArrowLeft} />
                </button>
            </Link>
            <div className='flex'> 
                <div className='flex flex-col w-1/2 items-center'>
                    <div className='max-w-md'>
                        <div className='flex items-center text-sm pt-9'>
                            <span className='text-gray-700'>{category} &nbsp;</span>
                            <span>/ {name}</span>
                        </div>
                        <div className='pt-10'>
                            <h1 className='text-4xl font-bold tracking-wide'>{name}</h1>
                        </div>
                        <div className='flex items-center justify-between pt-4'>
                            <span className='text-3xl'>${price}</span>
                            <div className='flex items-center'>
                                <div className='flex space-x-px'>
                                    <div>
                                        <FontAwesomeIcon icon={faStar}  color="#eaea00"/>
                                        <FontAwesomeIcon icon={faStar}  color="#eaea00"/>
                                        <FontAwesomeIcon icon={faStar}  color="#eaea00"/>
                                        <FontAwesomeIcon icon={faStar}  color="#eaea00"/>
                                        <FontAwesomeIcon icon={faStarHalfAlt}  color="#eaea00"/>
                                    </div>
                                </div>
                                <div className='pl-2 leading-none'>
                                    4.6 / 5.0 <span className='text-gray-800'> (556) </span>
                                </div>
                            </div>
                        </div>
                        <p className='leading-relaxed pt-8'>
                            {description}
                        </p>
                        <div className="flex pt-8 space-x-4">
                            <button
                                className="mt-3 w-5 h-5 rounded-full bg-[#58737d] hover:ring-4 hover:ring-gray-900/20"
                            />
                            <button
                                className="mt-3 w-5 h-5 rounded-full bg-[#58737d] hover:ring-4 hover:ring-gray-900/20"
                            />
                            <button
                                className="mt-3 w-5 h-5 rounded-full bg-[#545454] hover:ring-4 hover:ring-gray-900/20"
                            />
                            <button
                                className="mt-3 w-5 h-5 rounded-full bg-[#CBA5A5] hover:ring-4 hover:ring-gray-900/20"
                            />
                        <div className='flex items-center justify-between pl-10 '>
                            <button className='flex items-center font-bold px-4 py-2 space-x-2'>
                                <FontAwesomeIcon icon={farHeart} className='stroke-current text-red-500 hover:text-red-700'/>
                                <span className='text-gray-800'>Agregar a favoritos</span>
                            </button>
                        </div>
                        </div>
                        {/* CONTADOR */}
                        <ItemCount stock={stock} product={product} />
                        {/* FIN CONTADOR */}
                        <div className='pt-8 text-gray-700'>
                            » Envío entre 2-5 días hábiles • 30 días de garantía! «
                        </div>
                    </div>                    
                </div>
                <div className='flex flex-col w-1/2  mt-6'>
                    <div className='flex pr-20 space-x-2'>
                        <span className='text-3xl font-semibold leading-tight'>01</span>
                        <span className='text-xl'>/ 05</span>
                    </div>
                    <div className='flex pr-10 space-x-16'>
                        <button className='p-3'><FontAwesomeIcon icon={faChevronLeft}/></button>
                        <button className='p-3'><FontAwesomeIcon icon={faChevronRight}/></button>                   
                    </div>
                    <img className='w-1/2' src={full} alt='producto1'/> 
                </div>
            </div>
        </main>
    )
}

export default ItemDetail