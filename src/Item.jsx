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
  const [value, setValue] = useState("");

  useEffect(() => {
    ref.current.addEventListener("touchstart", handleTouchStart)
    ref.current.addEventListener("touchmove", handleTouchMove)
    ref.current.addEventListener("touchend", handleTouchEnd)

    return () => {
      // remover event listener
    }
  }, [])

  const getTouches = (evt) =>
    evt.touches || evt.originalEvent.touches

  const handleDragStart = (evt) => {
    setX(evt.clientX);
    setViewX(evt.clientX);
  }

  const handleTouchStart = (evt) => {
    let currentX = Math.trunc(getTouches(evt)[0].clientX);
    x.current = currentX;
    viewX.current = currentX;
  }

  const handleDragMove = (evt) => {
    if(evt.clientX !== viewX) {
      setViewValue(viewX - evt.clientX);
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
    if(evt.clientX < x)
      increaseValue();
    else
      decreaseValue();
  }

  const handleTouchEnd = (evt) => {
    console.log("end", viewX.current, x.current);
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
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDrag={handleDragMove}
    >
      {children}
      <div style={{fontSize: 200}}>
        {value}
      </div>
    </div>
  )
}
