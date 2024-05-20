import React from "react";
import logo from "../../assets/Imgs/logo.footer.png";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="flex_big_footer">
            <div className="one_text_footer">
              <img src={logo} alt="" width={150} />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="two_text_footer">
              <h3>Information</h3>
              <p>About Us</p>
              <p>Delivery Information</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
            <div className="three_text_footer">
              <h3>My Account</h3>
              <p>My Account</p>
              <p>Order History</p>
              <p>Wish List</p>
              <p>Newsletter</p>
            </div>
            <div className="icon_footer">
              <h3>Follow Us</h3>
              <div className="icon">
                  <FaWhatsapp />
                  <p>Whatsapp</p>
              </div>
              <div className="icon">
                <FaFacebook />
                <p>Facebook</p>
              </div>
              <div className="icon">
               <FaInstagram />
               <p>Instagram</p>   
              </div>
              <div className="icon">
                <FaTiktok />
                <p>Tiktok</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );

}

export default Footer;
