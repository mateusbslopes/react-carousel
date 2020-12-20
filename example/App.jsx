import React, { useState } from "react";
import { ReactCarousel } from "../src/index.jsx";
import style from "./style";

import IMAGE from "./images/landscape-image.jpg";
import GIF from "./images/landscape-gif.gif";
import VIDEO from "./images/landscape-video.mp4";

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
        <img src={IMAGE} width="100%" />
        <img src={GIF} width="100%" />
        <video width="100%" controls>
          <source src={VIDEO} type="video/mp4" />
          Your browser does not support video.
        </video>
      </ReactCarousel>
    </div>
  );
};
