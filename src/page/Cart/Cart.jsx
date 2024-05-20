import React from "react";
import "./Cart.css";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementCartQuantity,
  decrementCartQuantity,
  removeFromCart,
  removeAllItemsFromCart,
} from "../../context/cartSlice";



const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.value);
  console.log(cart);

  let total = cart?.reduce((acc, item) => acc + item.price * item.quantity, 0);

  let card = cart?.map((item) => (
    <div className="card_add" key={item.id}>
      <div className="card_wrapper_add">
        <img src={item.images[0]} alt="" />
        <h4>{item.title}</h4>
        <p>${item.price}</p>
        <div>
          <button
          disabled={item.quantity === 10}
            onClick={() => dispatch(incrementCartQuantity(item))}
            className="add_btn"
          >
            +
          </button>
          <span>{item.quantity}</span>
          <button
            onClick={() => dispatch(decrementCartQuantity(item))}
            className="add_btn"
            disabled={item.quantity === 1}
          >
            -
          </button>
        </div>
        <p className="total_p">${item.price * item.quantity}</p>
        <div>
          <button
            className="remove_btn"
            onClick={() => dispatch(removeFromCart(item))}
          >
            <MdOutlineDeleteOutline />
          </button>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <div className="container">
        <div className="row_title">
          <h2>Products</h2>
        </div>
        <div className="Line"></div>
          <div className="full_flex">
            <div className="card_wrapper_add">
            {card.length === 0 ? <div className="empty_cart_erapper">
            <img src="https://www.ipack.com/media/icons/empty-cart-ipack.png" alt=""className="empty_cart" />
            </div> : card}
            </div>
            
           {
             card.length === 0 ?  <></> :  <div className="tota_cart">
             <h2>Cart totals</h2>
             <div className="Line"></div>
             <div className="coupon_text_one">
               <p>Subtotal</p>
               <b>${total}</b>
             </div>
             <div className="coupon_text_there">
               <p>Shiping</p>
               <b>$16.00</b>
             </div>
             <div className="coupon_text_four_total">
               <b>Total</b>
               <p>${total ?total + 16 : 0}</p>
             </div>
             <button
               onClick={() => dispatch(removeAllItemsFromCart())}
               className="btn_checkout"
             >
               Proceed to checkout
             </button>
           </div>
           }
          </div>  
      </div>
    </>
  );
};

export default Cart;
