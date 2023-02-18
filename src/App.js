import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart'
import { CartProvider } from './context/CartContext';
import Checkout from './components/Checkout/Checkout'
import { ToastContainer } from 'react-toastify';

function App() {



  return (
    <>     
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={ <ItemListContainer greeting='Bienvenidos a Bahia Import'/>  } />
            <Route path='/category/:categoryId' element={ <ItemListContainer greeting='Bienvenidos a Bahia Import'/>  } />
            <Route path='/item/:productId' element={ <ItemDetailContainer /> } />
            <Route path='/cart' element={ <Cart /> } />
            <Route path='/checkout' element= { <Checkout /> } />
          </Routes>
        </BrowserRouter>
        </CartProvider>      
        <ToastContainer newestOnTop />
    </>   
    
  );
}

export default App;

