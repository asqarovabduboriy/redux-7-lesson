import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CiHeart } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";
import { FaHeart } from "react-icons/fa";
import { toogleLike } from "../../context/wishlistSlice";
import "./Wishlist.css";
import empty from '../../assets/Imgs/empty.png'

const Wishlist = () => {
  let wishlist = useSelector((state) => state.wishslice.value);
  console.log(wishlist);

  const dispatch = useDispatch();

  let products = wishlist?.map((el) => (
    <div className="card_product" key={el.id}>
     <Link to={`/product/${el.id}`}><img src={el.images[0]} alt="" /></Link>
      <h2 title={el.title}>{el.title}</h2>
      <p>${el.price}</p>
      <div className="icon__wrapper">
        <button onClick={() => dispatch(toogleLike(el))}>
          {wishlist.some((item) => item.id === el.id) ? (
            <FaHeart style={{ color: "red" }} />
          ) : (
            <CiHeart />
          )}
        </button>
        <TiShoppingCart />
      </div>
    </div>
  ));
  return (
    <>
      <div className="container">
        <div className="wishlist__wrapper">{wishlist.length ? products : <div className="empty"><img src={empty} alt="" /></div>}</div>
      </div>
    </>
  );
};

export default Wishlist;
