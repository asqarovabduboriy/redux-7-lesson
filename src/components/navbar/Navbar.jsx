import React, { useState,memo } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Imgs/Logo.png";
import "./Nabar.css";
import { TiShoppingCart } from "react-icons/ti";
import { CiHeart } from "react-icons/ci";
import { IoLogInOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import Search from "../search/Search";
import { useGetsearchproductsQuery } from "../../context/products";


const Navbar = () => {
  const [value, setValue] = useState("");
  let { data } = useGetsearchproductsQuery({q:value});
  console.log(data);
  const wishlist = useSelector((state) => state.wishslice.value);
  const cart = useSelector((state) => state.cart.value);
  return (
    <header>
      <div className="container">
        <div className="wrapper_flex">
          <div>
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
          </div>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>

          <div className="icon__nav">
            <NavLink to={"/cart"}>
              {" "}
              <TiShoppingCart />
            </NavLink>
            <div className="number">{cart.length}</div>
            <NavLink to={"/wishlist"}>
              {" "}
              <CiHeart />
            </NavLink>
            <div className="number_two">{wishlist.length}</div>
          </div>
          <div>
            <form className="form_nav">
              <input 
              value={value}
              onChange={(e) => setValue(e.target.value)}
             
              type="text" placeholder="Search" />
              <button>Search</button>
            </form>
           {value.trim() ? <Search data={data} setValue={setValue}  /> : <></>}
          </div>
        </div>
      </div>
    </header>
  );
};

export default memo(Navbar);
