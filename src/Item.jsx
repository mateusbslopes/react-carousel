import React, { createRef, useEffect, useState } from 'react'

export default ({
  children,
  increaseValue,
  decreaseValue,
  setViewValue
}) => {
  const [x, setX] = useState(0);
  const [viewX, setViewX] = useState(0);

  const ref = createRef();

  const getTouches = (evt) =>
    evt.touches

  const handleDragStart = (evt) => {
    let currentX = Math.trunc(evt.clientX);
    setX(currentX);
    setViewX(currentX);
  }

  const handleTouchStart = (evt) => {
    let currentX = Math.trunc(getTouches(evt)[0].clientX);
    setX(currentX);
    setViewX(currentX);
  }

  const handleDragMove = (evt) => {
    if(evt.clientX !== viewX && evt.clientX) {
      setViewValue(x - evt.clientX);
      setViewX(evt.clientX);
    }
  }

  const handleTouchMove = (evt) => {
    let currentX = Math.trunc(getTouches(evt)[0].clientX)
    if(currentX !== viewX) {
      setViewValue(x - currentX);
      setViewX(currentX);
    }
  }

  const handleDragEnd = (evt) => {
    if(evt.clientX < x)
      increaseValue();
    else
      decreaseValue();
  }

  const handleTouchEnd = () => {
    if(viewX < x)
      increaseValue();
    else
      decreaseValue();
  }

  return (
    <div
      draggable
      class="item-content"
      style={{
        width: "100%"
      }}
      ref={ref}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onDragStart={handleDragStart}
      onDrag={handleDragMove}
      onDragEnd={handleDragEnd}
    >
      {children}
    </div>
  )
}
