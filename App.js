
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import CarRental from './Pages/CarRental';
import Drivers from'./Pages/Drivers';
import Product from'./Pages/Product';
import Cart from'./Pages/Cart';
import LoginSignup from'./Pages/LoginSignup';
import Footer from './Components/Footer/Footer';



function App() {
  return (
    <div>
      <BrowserRouter>
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/rental' element={<CarRental category="rentals"/>}/>
        <Route path='/driver' element={<Drivers/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
