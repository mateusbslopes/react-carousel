/** @jsx jsx */
import { jsx } from '@emotion/react'
import { createRef, useEffect } from 'react';
import style from "./style";

export const ReactCarousel = ({
  value = 0,
  setValue,
  children
}) => {
  const firstItemRef = createRef();

  const increaseValue = () =>
    value !== children.length - 1 && setValue(value + 1)
  const decreaseValue = () =>
    value !== 0 && setValue(value - 1)

  useEffect(() => {
    const firstItem = firstItemRef.current;
    firstItem.style.marginLeft = `${100 * value * -1}%`
  }, [value])

  return <div css={style}>
    <button
      className="arrow arrow-left"
      onClick={decreaseValue}
    >
      {"<"}
    </button>
    <button
      className="arrow arrow-right"
      onClick={increaseValue}
    >
      {">"}
    </button>

    {children.map((child, index) => (
      <div
        className={`item ${index === 0 && "first-item"}`}
        ref={index === 0 ? firstItemRef : null}
      >
        {child}
      </div>
    ))}
  </div>
}
