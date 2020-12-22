export default `
  width: 100%;
  margin: auto;
  touch-action: pan-x pan-y;

  .content {
    width: clamp(200px, 100%, 1000px);
    background-color: white;
    margin: auto;
  }

  .carousel {
    margin-top: 10px;
  }

  .text-item {
    display: flex;
    align-items: center;
    height: 100%;
    background-color: black;
  }

  .text-item-content {
    font-size: 50px;
    margin: auto;
    text-align: center;
    color: white;
    width: 50%;
  }
`;
