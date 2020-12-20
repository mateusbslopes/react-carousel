export default `
  display: flex;
  overflow: hidden;
  position: relative;

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
`
