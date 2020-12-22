export default `
  .carousel {
    display: flex;
    overflow: hidden;
    position: relative;
  }

  .item {
    display: flex;
    width: 100%;
    flex-shrink: 0;
    overflow: hidden;
  }

  .first-item {
    transition: margin-left .5s linear;
  }

  .item-content {
    flex: 1;
  }

  .dots-area {
    margin: auto;
    width: fit-content;
    margin-top: 10px;
  }

  .dot {
    width: 20px;
    height: 20px;
    background-color: gray;
    border-radius: 100%;
    display: inline-block;
    margin: 0 5px;

    outline: none;
    border: none;
  }

  .dot.active {
    background-color: blue;
  }

`;
