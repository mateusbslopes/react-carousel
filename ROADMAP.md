1. Make it infinite scroll
2. Create tests for project
3. Improve example lighthouse overall score:
4. Add basic arrows when config:
```jsx
<ReactCarousel
  navigation={{
    arrows: true,
  }}
>...</ReactCarousel>
```
5. Permit custom dots:
```jsx
<ReactCarousel
  navigation={{
    dots: {(index) => {
      <div>Go to {index + 1}</div>
    }}
  }}
>...</ReactCarousel>
```
6. Permit custom arrows:
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
7. Handle keyboard navigation (accessibility purpose)
