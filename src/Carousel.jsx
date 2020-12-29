import React, { createRef, useEffect, useState } from "react";
import Item from "./Item.jsx";
import style from "./style";

const Carousel = ({ value = 0, setValue, children, navigation }) => {
  const [viewValue, setViewValue] = useState(0);

  const currentItemRef = createRef();
  const carousel = createRef();

  const increaseValue = () =>
    value !== children.length - 1 ? setValue(value + 1) : setValue(0);

  const decreaseValue = () =>
    value !== 0 ? setValue(value - 1) : setValue(children.length - 1);

  const moveCarousel = (value, duration) => {
    const firstItemStyle = currentItemRef.current.style;
    firstItemStyle.transitionDuration = duration;
    firstItemStyle.marginLeft = value;
  };

  useEffect(() => {
    moveCarousel(`${(carousel.current.offsetWidth + viewValue) * -1}px`, "0s");
  }, [viewValue]);

  useEffect(() => {
    moveCarousel(`-100%`, ".5s");
  }, [value]);

  const getPreviousItem = () => {
    let val = value === 0 ? children.lenght - 1 : value - 1;
    return (
      <div className="item">
        <Item
          increaseValue={increaseValue}
          decreaseValue={decreaseValue}
          setViewValue={setViewValue}
        >
          {children[val]}
        </Item>
      </div>
    );
  };

  const getNextItem = () => {
    let val = value === children.lenght - 1 ? 0 : value + 1;
    return (
      <div className="item">
        <Item
          increaseValue={increaseValue}
          decreaseValue={decreaseValue}
          setViewValue={setViewValue}
        >
          {children[val]}
        </Item>
      </div>
    );
  };

  return (
    <div css={style}>
      <div ref={carousel} className="carousel">
        {getPreviousItem()}
        <div className="item" ref={currentItemRef}>
          <Item
            increaseValue={increaseValue}
            decreaseValue={decreaseValue}
            setViewValue={setViewValue}
          >
            {children[value]}
          </Item>
        </div>
        {getNextItem()}
      </div>
      {navigation?.dots && (
        <div className="dots-area">
          {children.map((_, index) => (
            <button
              onClick={() => setValue(index)}
              className={`dot ${index === value ? "active" : ""}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
