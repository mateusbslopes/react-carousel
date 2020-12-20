import React, { useState } from "react";
import { ReactCarousel } from "../src/index.jsx";
import style from "./style";

//import Image from "";

const GIF_URL = "./images/landscape-gif.gif";
const IMAGE_URL = "./images/landscape-image.jpg";
const VIDEO_URL = "./images/landscape-video.mp4";

export default () => {
  const [value, setValue] = useState(0);

  return (
    <div css={style}>
      <ReactCarousel
        value={value}
        setValue={setValue}
        navigation={{
          dots: true,
        }}
      >
        <div className="text-item">
          <div className="text-item-content">Basic html content</div>
        </div>
        <img src={IMAGE_URL} width="100%" />
        <img src={GIF_URL} width="100%" />
        <video width="100%" controls>
          <source src={VIDEO_URL} type="video/mp4" />
          Your browser does not support video.
        </video>
      </ReactCarousel>
    </div>
  );
};
