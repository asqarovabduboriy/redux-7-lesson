import React from "react";
import "./Loader.css";

const Loader = ({ count }) => {
  let loading = [];
  for (let i = 0; i < count; i++) {
    loading.push(<div key={i} className="loader"></div>);
  }
  return (
    <>
      <div className="loading__container">{loading}</div>
    </>
  );
};

export default Loader;
