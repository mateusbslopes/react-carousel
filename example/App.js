/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useState } from "react";
import { render } from "react-dom";
import { ReactCarousel } from "../src/index.jsx";
import style from "./style";

let App = () => {
  const [value, setValue] = useState(0);

  return (
    <div css={style}>
      <ReactCarousel value={value} setValue={setValue}>
        <div className="app-item">Test</div>
        <img src="https://static.wikia.nocookie.net/avatar/images/a/ae/Aang_at_Jasmine_Dragon.png/revision/latest?cb=20130612174003"/>
        <img src="https://media1.giphy.com/media/10fS0TJxfFRDLW/giphy.gif" style={{height: "100px"}}/>
        <video width="320" height="240" controls>
          <source src="file:///C:/Users/mateu/Downloads/The%20Story%20of%20Avatar%20Wan%20%F0%9F%94%A5%20Origins%20of%20the%20First%20Avatar%20_%20LOK.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </ReactCarousel>
      <button onClick={() => setValue(0)}>1</button>
      <button onClick={() => setValue(1)}>2</button>
      <button onClick={() => setValue(2)}>3</button>
      <button onClick={() => setValue(3)}>4</button>
    </div>
  );
};

render(<App />, document.getElementById("root"));
