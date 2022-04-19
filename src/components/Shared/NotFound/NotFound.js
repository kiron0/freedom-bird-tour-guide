import React from "react";
import "./NotFound.css";
import notfound from "../../../Assets/Image/404.jpg";
import PageTitle from "../PageTitle/PageTitle";

const NotFound = () => {
  return (
    <div className="not-found">
      <PageTitle title="Not Found"></PageTitle>
      <img src={notfound} alt="" />
    </div>
  );
};

export default NotFound;
