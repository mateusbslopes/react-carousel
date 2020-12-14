import React from "react";
import { render } from "react-dom";
import { ReactCarousel } from '../src/index.jsx';

let App = () => (
  <div>
    <ReactCarousel teste="teste" >
      <div>Test</div>
      <div>Test 2</div>
    </ReactCarousel>
  </div>
)

render(<App />, document.getElementById("root"));
