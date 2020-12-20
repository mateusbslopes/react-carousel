export default `
  display: flex;
  overflow: hidden;
  position: relative;

  .item {
    display: flex;
    color: red;
    width: 100%;
    flex-shrink: 0;
    overflow: hidden;
  }

  .first-item {
    transition: margin-left .5s linear;
  }

  .arrow-area {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    height: 100%;
  }

  .default-arrow {
    margin: 0;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  .left-arrow-area {
    position: absolute;
    left: 0px;
  }

  .right-arrow-area {
    position: absolute;
    right: 0px;
  }

  .item-content {
    flex: 1;
  }
`
