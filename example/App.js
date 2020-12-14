import React, { useState } from "react";
import { render } from "react-dom";
import { ReactCarousel } from '../src/index.jsx';

let App = () => {
  const [value, setValue] = useState(0)

  return (<div>
    <ReactCarousel
      value={value}
      setValue={setValue}
    >
      <div
        style={{
          backgroundColor: "green"
        }}
      >
        Test
      </div>
      <div
        style={{
          backgroundColor: "red"
        }}
      >
        Test 2
      </div>
      <div
        style={{
          backgroundColor: "blue"
        }}
      >
        Test 3
      </div>
    </ReactCarousel>
  </div>)
}

render(<App />, document.getElementById("root"));
