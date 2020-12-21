import React from "react";
import style from "./style";
import Carousel from "./Carousel.jsx";

export default () => {
  return (
    <div css={style}>
      <div className="content">
        <div className="carousel"><Carousel /></div>
        <div className="carousel"><Carousel /></div>
        <div className="carousel"><Carousel /></div>
      </div>
    </div>
  );
};
