import "./App.css";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./page/home/Home";
import Single from "./page/single/Single";
import Cart from "./page/Cart/Cart";
import Wishlist from "./page/wishlist/Wishlist";
import Footer from "./components/footer/Footer";
import Contact from "./page/contact/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/product/:id" element={<Single/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path='/wishlist' element={<Wishlist/>} />
      </Routes>
      <Footer/>
      <ToastContainer />
    </>
  );
}

export default App;
