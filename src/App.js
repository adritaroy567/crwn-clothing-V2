import './App.css'
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import CheckOut from './routes/checkout/checkout.component';
import Shop from './routes/shop/shop.component';
import { Routes, Route } from 'react-router-dom';



const App = () => {
  return(
    <Routes>
        <Route element={<Navigation/>} path='/'>
          <Route element={<Home />} index>
        </Route>
        <Route element={<Shop/>} path='shop/*'></Route>
        <Route element={<Authentication />} path='auth'></Route>
        <Route element={<CheckOut />} path='checkout' ></Route>
      </Route>
    </Routes>
  )
}

export default App;
