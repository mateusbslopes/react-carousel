import React, { createRef, useEffect, useState } from 'react'

export default ({
  children,
  increaseValue,
  decreaseValue,
  setViewValue
}) => {

  // Using reference because onMove was accessing the vars before it was being updated so was giving an error
  // https://stackoverflow.com/questions/56614051/usestate-is-not-updating-state-from-event-handler
  const x = createRef(null);
  const viewX = createRef(null);

  const ref = createRef();

  useEffect(() => {
    ref.current.addEventListener("touchstart", handleTouchStart)
    ref.current.addEventListener("touchmove", handleTouchMove)
    ref.current.addEventListener("touchend", handleTouchEnd)

    ref.current.addEventListener("dragstart", handleDragStart)
    ref.current.addEventListener("drag", handleDragMove)
    ref.current.addEventListener("dragend", handleDragEnd)

    return () => {
      // remover event listener
    }
  }, [])

  const getTouches = (evt) =>
    evt.touches || evt.originalEvent.touches

  const handleDragStart = (evt) => {
    let currentX = Math.trunc(evt.clientX);
    x.current = currentX;
    viewX.current = currentX;
  }

  const handleTouchStart = (evt) => {
    let currentX = Math.trunc(getTouches(evt)[0].clientX);
    x.current = currentX;
    viewX.current = currentX;
  }

  const handleDragMove = (evt) => {
    console.log("move");
    if(evt.clientX !== viewX.current) {
      setViewValue(x.current - evt.clientX);
      viewX.current = evt.clientX;
    }
  }

  const handleTouchMove = (evt) => {
    let currentX = Math.trunc(getTouches(evt)[0].clientX)
    if(currentX !== viewX.current) {
      setViewValue(x.current - currentX);
      viewX.current = currentX;
    }
  }

  const handleDragEnd = (evt) => {
    if(evt.clientX < x.current)
      increaseValue();
    else
      decreaseValue();
  }

  const handleTouchEnd = () => {
    if(viewX.current < x.current)
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
    >
      {children}
    </div>
  )
}
