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
      <div>Test</div>
      <div>Test 2</div>
    </ReactCarousel>
  </div>)
}

render(<App />, document.getElementById("root"));
