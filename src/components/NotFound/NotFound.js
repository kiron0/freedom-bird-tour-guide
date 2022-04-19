import React from "react";
import "./NotFound.css";
import notfound from "../../Assets/Image/404.jpg";

const NotFound = () => {
  return (
    <div className="not-found">
      <img src={notfound} alt="" />
    </div>
  );
};

export default NotFound;
