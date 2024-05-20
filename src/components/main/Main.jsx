import React from "react";
import './Main.css'    
import main from '../../assets/Imgs/swaper.png'         

const Main = () => {
  return (
    <>
      <div className="container">
        <div className="wrapper_main">
          <div className="text__content_main">
            <span>Mobile</span>
            <h1>Backcover</h1>
            <h1>Tempered Glass</h1>
            <button>Shop all</button>
          </div>
          <div>
            <img src={main} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
