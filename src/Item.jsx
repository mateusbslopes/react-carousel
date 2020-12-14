import React, { createRef, useEffect, useState } from 'react'

export default ({
  children,
  increaseValue,
  decreaseValue,
  setViewValue
}) => {
  const [x, setX] = useState(0);
  const [viewX, setViewX] = useState(0);

  const handleDragStart = (evt) => {
    setX(evt.clientX)
    setViewX(evt.clientX)
  }

  const handleDrag = (evt) => {
    if(evt.clientX !== viewX) {
      setViewValue(viewX - evt.clientX)
    }
  }

  const handleDragEnd = (evt) => {
    console.log(evt.clientX, x)
    if(evt.clientX < x)
      increaseValue();
    else
      decreaseValue();
  }

  useEffect(() => {
  }, [])

  return (
    <div
      draggable
      class="item-content"
      style={{
        width: "100%"
      }}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDrag={handleDrag}
    >
      {children}
    </div>
  )
}
