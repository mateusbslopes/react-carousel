/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useState } from "react";
import { render } from "react-dom";
import { ReactCarousel } from "../src/index.jsx";
import style from "./style";

//import Image from "";

const GIF_URL = "./images/landscape.gif";
const IMAGE_URL = "./images/pexels-paul-ijsendoorn-33041.jpg";
const VIDEO_URL = "file:///C:/Users/mateu/Downloads/The%20Story%20of%20Avatar%20Wan%20%F0%9F%94%A5%20Origins%20of%20the%20First%20Avatar%20_%20LOK.mp4";

let App = () => {
  const [value, setValue] = useState(0);

  return (
    <div css={style}>
      <ReactCarousel
        value={value}
        setValue={setValue}
        navigation={{
          dots: true
        }}
      >
        <div className="text-item">
          <div className="text-item-content">Basic html content</div>
        </div>
        <img src={IMAGE_URL} width="100%" />
        <img src={GIF_URL} width="100%" />
      </ReactCarousel>

      <button onClick={() => setValue(0)}>1</button>
      <button onClick={() => setValue(1)}>2</button>
      <button onClick={() => setValue(2)}>3</button>
      <button onClick={() => setValue(3)}>4</button>
    </div>
  );
};

render(<App />, document.getElementById("root"));
