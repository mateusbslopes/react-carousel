/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import style from "./style";

export const ReactCarousel = ({
  value,
  setValue,
  children
}) => {
  return <div css={style}>
    {children.map(child => (
      <div>
        {child}
      </div>
    ))}
  </div>
}
