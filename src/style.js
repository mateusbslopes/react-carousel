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

  .arrow {
    background: rgba(176, 176, 176, 0.3);
    border: none;
    font-style: bold;
  }

  .arrow-left {
    position: absolute;
    left: 0px;
  }

  .arrow-right {
    position: absolute;
    right: 0px;
  }

`
