/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useState } from "react";
import { render } from "react-dom";
import { ReactCarousel } from "../src/index.jsx";
import style from "./style";

let App = () => {
  const [value, setValue] = useState(0);

  return (
    <div
      css={style}
      style={{
        width: "100%"
      }}
    >
      <ReactCarousel value={value} setValue={setValue}>
        <div
          className="app-item"
          style={{
            backgroundColor: "green",
          }}
        >
          Test
        </div>
        <div
          className="app-item"
          style={{
            backgroundColor: "red",
          }}
        >
          Test 2
        </div>
        <div
          className="app-item"
          style={{
            backgroundColor: "blue",
          }}
        >
          Test 3
        </div>
      </ReactCarousel>
    </div>
  );
};

render(<App />, document.getElementById("root"));
