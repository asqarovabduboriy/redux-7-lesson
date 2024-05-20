import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";
import { CiHeart } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../context/cartSlice";
import { toogleLike } from "../../context/wishlistSlice";
import { useGetProductsQuery } from "../../context/products";
import Loader from "../Loader/Loader";

const Product = () => {
  let { data,isLoading} = useGetProductsQuery();
  const dispatch = useDispatch();
  let wishlist = useSelector((state) => state.wishslice.value);

  let cards = data?.products?.map((el) => (
    <div className="card_product" key={el.id}>
    <Link to={`/product/${el.id}`}><img src={el.images[0]} /></Link>
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
        <button onClick={() => dispatch(addToCart(el))}>
          <TiShoppingCart />
        </button>
      </div>
    </div>
  ));
  return (
    <>
     <div className="container">
     <div className="card_wrapper">
      { isLoading ? <Loader count={8}/> : cards}
      
      </div>
     </div>
    </>
  );
};

export default Product;
