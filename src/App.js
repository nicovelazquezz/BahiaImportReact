import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={ <ItemListContainer greeting='Bienvenidos al himalaya'/>  } />
            <Route path='/detail/:productId' element={ <ItemDetailContainer /> } />
          </Routes>
        </BrowserRouter>

      
    </div>
  );
}

export default App;
