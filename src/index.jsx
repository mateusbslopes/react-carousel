/** @jsx jsx */
import { jsx } from '@emotion/react'
import { createRef, useEffect, useState } from 'react';
import Item from './Item.jsx';
import style from "./style";

export const ReactCarousel = ({
  value = 0,
  setValue,
  children
}) => {
  const [viewValue, setViewValue] = useState(0)
  let localValue = createRef();

  const firstItemRef = createRef();
  const carousel = createRef();


  const increaseValue = () =>{
    if(localValue.current !== children.length - 1){
      setValue(localValue.current + 1)
      localValue.current += 1
    }
  }

  const decreaseValue = () => {
    if (localValue.current !== 0){
      setValue(localValue.current - 1)
      localValue.current -= 1
    }
  }

  const moveCarousel = (value, duration) => {
    const firstItem = firstItemRef.current;
    if (!firstItem) return;
    firstItem.style.transitionDuration = duration;
    firstItem.style.marginLeft = value;
  }

  const nomalizeDecreaseMovimentation = () => {
    moveCarousel(`${100 * value}%`, ".5");
  }

  const normalizeIncreaseMovimentation = () => {
    moveCarousel(`${100 * value * -1}%`, ".5");
  }

  const canMove = () => {
    return (viewValue < 0 && value !== 0) 
            || (viewValue > 0 && value !== children.length - 1);
  }

  useEffect(() => {
    if(canMove(viewValue))
      moveCarousel(`${((carousel.current.offsetWidth * value) + viewValue) * -1}px`, "0s");
  }, [viewValue])

  useEffect(() => {
    moveCarousel(`${100 * value * -1}%`, ".5s");
  }, [value])

  useEffect(() => {
    localValue.current = value;
  }, [])

  return <div css={style} ref={carousel}>
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
}
