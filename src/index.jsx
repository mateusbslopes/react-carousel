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
    console.log(localValue.current)
    if(localValue.current !== children.length - 1){
      setValue(localValue.current + 1)
      localValue.current += 1
    } else {
      normalizeIncreaseMovimentation()
    }
  }

  const decreaseValue = () => {
    if (localValue.current !== 0){
      setValue(localValue.current - 1)
      localValue.current -= 1
    } else {
      normalizeIncreaseMovimentation()
    }
  }

  const moveCarousel = (value, duration) => {
    const firstItem = firstItemRef.current;
    firstItem.style.transitionDuration = duration;
    firstItem.style.marginLeft = value;
  }

  const normalizeIncreaseMovimentation = () => {
    console.log(firstItemRef.current);
    moveCarousel(`${100 * value * -1}%`, ".5");
  }

  useEffect(() => {
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
