import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Headers/index';
import Footer from './Components/Footer/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductModal from './Components/ProductModal';
import Home from './Pages/Home';
import Listing from './Pages/Listing/index';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import ProductDetails from './Pages/ProductDetails';
import Cart from './Pages/Cart';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';

const MyContext = createContext();

function App() {
  const [countryList, setCounteryList] = useState([]);
  const [selectCountry, setselectCountry] = useState('');
  const [isOpenProductModal, setIsOpenProductModal] = useState(false);
  const [isHeaderFooterShow, setisHeaderFooterShow] = useState(true);
  const [isLogin, setisLogin] = useState(false)

  useEffect(() => {
    getCountery('https://countriesnow.space/api/v0.1/countries/');
  }, []);

  const getCountery = async (url) => {
    const responsive = await axios.get(url).then((res) => {
      setCounteryList(res.data.data);
      console.log(res.data.data[0].country);
    });
  };

  const values = {
    countryList,
    setselectCountry,
    selectCountry,
    isOpenProductModal,
    setIsOpenProductModal,
    isHeaderFooterShow,
    setisHeaderFooterShow,
    isLogin,
    setisLogin,

    
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        {/* Show Header and Footer only when isHeaderFooterShow is true */}
        {isHeaderFooterShow && <Header />}
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/cat/:id" exact={true} element={<Listing />} />
          <Route exact={true} path="/product/:id" element={<ProductDetails />} />
          <Route exact={true} path="/cart" element={<Cart />} />
          <Route exact={true} path="/signIn" element={<SignIn />} />
          <Route exact={true} path="/signUp" element={<SignUp />} />
        </Routes>
        {isHeaderFooterShow && <Footer />}
        <ProductModal open={isOpenProductModal} />
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
