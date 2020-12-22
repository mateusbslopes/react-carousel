import React, { createRef, useEffect, useState } from "react";
import Item from "./Item.jsx";
import style from "./style";

const Carousel = ({ value = 0, setValue, children, navigation }) => {
  const [viewValue, setViewValue] = useState(0);

  const firstItemRef = createRef();
  const carousel = createRef();

  const increaseValue = () =>
    value !== children.length - 1 && setValue(value + 1);

  const decreaseValue = () => value !== 0 && setValue(value - 1);

  const moveCarousel = (value, duration) => {
    const firstItemStyle = firstItemRef.current.style;
    firstItemStyle.transitionDuration = duration;
    firstItemStyle.marginLeft = value;
  };

  const canMove = () =>
    (viewValue < 0 && value !== 0) ||
    (viewValue > 0 && value !== children.length - 1);

  useEffect(() => {
    if (canMove(viewValue))
      moveCarousel(
        `${(carousel.current.offsetWidth * value + viewValue) * -1}px`,
        "0s"
      );
  }, [viewValue]);

  useEffect(() => {
    moveCarousel(`${100 * value * -1}%`, ".5s");
  }, [value]);

  return (
    <div css={style}>
      <div ref={carousel} className="carousel">
        {children.map((child, index) => (
          <div
            className={`item ${index === 0 ? "first-item" : ""}`}
            ref={index === 0 ? firstItemRef : null}
          >
            <Item
              increaseValue={increaseValue}
              decreaseValue={decreaseValue}
              setViewValue={setViewValue}
            >
              {child}
            </Item>
          </div>
        ))}
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
