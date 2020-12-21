1. Handle multiple touches
  - Be able to move 2 carousels on a touchable device
2. Make it infinite scroll
3. Add basic arrows when config:
```jsx
<ReactCarousel
  navigation={{
    arrows: true,
  }}
>...</ReactCarousel>
```
4. Permit custom dots:
```jsx
<ReactCarousel
  navigation={{
    dots: {(index) => {
      <div>Go to {index + 1}</div>
    }}
  }}
>...</ReactCarousel>
```
5. Permit custom arrows:
```jsx
<ReactCarousel
  navigation={{
    arrows: {
      left: {<div>Previous</div>},
      right: {<div>Next</div>},
    }
  }}
>...</ReactCarousel>
```
6. Handle keyboard navigation (accessibility purpose)
