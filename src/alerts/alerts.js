import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const addNotification = () => toast.success('Agregado al carrito!', {
    style: {
        top: '4em',
        right: '-5.5em'
    },
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });;

const MySwal = withReactContent(Swal);

export const limpiarCarritoAlert = (setCart) =>         
MySwal.fire({
    title: '¿Estás seguro?',
    text: 'Esta acción eliminará todos los productos del carrito.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar',
}).then((result) => {
    if (result.isConfirmed) {
    setCart([])
    MySwal.fire({
        title: 'Carrito vacío.',
        icon: 'success',
    });
    setTimeout(() => {
        window.location.href = '/';                
    }, 2000);
    }
});